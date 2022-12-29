import * as cryptly from "cryptly"
import { Booking } from "../Booking"
import { BookingOptions } from "../BookingOptions"
import { Passenger } from "../Passenger"
import { Price } from "../Price"
import { Layout } from "./../Layout"
import { Contact as OrderContact } from "./Contact"
import { Item as OrderItem } from "./Item"
import { Payment as OrderPayment } from "./Payment"

export interface Order {
	id: cryptly.Identifier
	readonly booking: Booking
	payment?: Order.Payment | Order.Payment.Session
	readonly total?: Price
	contact?: Order.Contact
}
export namespace Order {
	export function is(value: Order | any): value is Order {
		return (
			typeof value == "object" &&
			value &&
			cryptly.Identifier.is(value.id) &&
			Booking.is(value.booking) &&
			(value.payment == undefined || Payment.is(value.payment) || Payment.Session.is(value.payment)) &&
			(value.total == undefined || Price.is(value.total)) &&
			(value.contact == undefined || Contact.is(value.contact))
		)
	}
	export function create(booking: Booking): Order {
		return { id: cryptly.Identifier.generate(16), booking, total: getTotal(booking) }
	}
	export function getItems(order: Order, bookingOptions: BookingOptions): Item[] | undefined {
		return order.booking.passengers
			.map(passenger => [
				...[...(passenger.departure ?? []), ...(passenger.return ?? [])].map<(Item | undefined)[]>(flight => {
					const flightDetails = BookingOptions.getFlight(bookingOptions, flight.reference)
					const flightName = flightDetails ? `${flightDetails.from.code} - ${flightDetails.to.code}` : ""
					return [
						flight.seat && {
							reference: "pm-seat-ref",
							passenger: Passenger.Name.format(passenger.name),
							flight: flightName,
							name: Layout.Seat.get(flight.seat).join(""),
							price: flight.seat?.price,
						},
						...(flight.meal ?? []).map<Item | undefined>(meal => ({
							reference: "pm-meal-alternative-ref",
							passenger: Passenger.Name.format(passenger.name),
							flight: flightName,
							name: meal.alternatives[0].name ? [meal.name, meal.alternatives[0].name] : meal.name,
							price: meal.alternatives[0].price,
						})),
					]
				}),
				...(passenger.luggage ?? []).map<Item>(luggage => ({
					reference: luggage.reference,
					passenger: Passenger.Name.format(passenger.name),
					flight: luggage.direction,
					name: luggage.name,
					quantity: luggage.quantity,
					price: luggage.price,
				})),
			])
			.flat(2)
			.filter(item => item) as Item[]
	}
	export function getTotal(booking: Booking): Price | undefined {
		const prices: (Price | undefined)[] = booking.passengers
			.map(passenger => [
				...[...(passenger.departure ?? []), ...(passenger.return ?? [])].map<(Price | undefined)[]>(flight => [
					flight.seat?.price,
					...(flight.meal ?? []).map<Price | undefined>(meal => meal.alternatives[0].price),
				]),
				...(passenger.luggage ?? []).map<Price | undefined>(luggage =>
					// Multiply luggage price with 2 to add price per direction. REMOVE WHEN LUGGAGE IS ADDED TO FLIGHTS
					luggage.price ? { ...luggage.price, amount: luggage.price.amount * 2 } : undefined
				),
			])
			.flat(2)
		return prices.length > 0 ? Price.total(prices) : undefined
	}
	export const Item = OrderItem
	export type Item = OrderItem
	export type Payment = OrderPayment
	export namespace Payment {
		export const is = OrderPayment.is
		export type Session = OrderPayment.Session
		export const Session = OrderPayment.Session
		export type Netaxept = OrderPayment.Netaxept
		// export const Netaxept = OrderPayment.Netaxept
		export namespace Netaxept {
			export const is = OrderPayment.Netaxept.is
			export type Session = OrderPayment.Netaxept.Session
			export const Session = OrderPayment.Netaxept.Session
		}
	}
	export type Contact = OrderContact
	export const Contact = OrderContact
}
