import { Booking } from "../Booking"
import { BookingOptions } from "../BookingOptions"
import { Passenger } from "../Passenger"
import { Price } from "../Price"
import { Layout } from "./../Layout"
import { Item as OrderItem } from "./Item"

export interface Order {
	reference?: string
	readonly booking: Booking
	payment?: string
	readonly total: Price
}
export namespace Order {
	export function is(value: Order | any): value is Order {
		return (
			typeof value == "object" &&
			(value.reference == undefined || typeof value.reference == "string") &&
			Booking.is(value.booking) &&
			(value.payment == undefined || typeof value.payment == "string") &&
			Price.is(value.total)
		)
	}
	export function create(booking: Booking): Order | undefined {
		return { booking, total: getTotal(booking) ?? { amount: 0, currency: "XXX" } }
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
							name: Layout.Seat.Positioned.get(flight.seat).join(""),
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
	function getTotal(booking: Booking): Price | undefined {
		return Price.total(
			booking.passengers
				.map(passenger => [
					...[...(passenger.departure ?? []), ...(passenger.return ?? [])].map<(Price | undefined)[]>(flight => [
						flight.seat?.price,
						...(flight.meal ?? []).map<Price | undefined>(meal => meal.alternatives[0].price),
					]),
					...(passenger.luggage ?? []).map<Price | undefined>(luggage => luggage.price),
				])
				.flat(2)
		)
	}
	export const Item = OrderItem
	export type Item = OrderItem
}
