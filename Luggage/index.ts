import { BookingOptions } from "../BookingOptions"
import { Passenger } from "../Passenger"
import { Price } from "../Price"
import { Category as LuggageCategory } from "./Category"

export interface Luggage {
	reference: string
	quantity?: number
	name: string
	weight: number
	direction?: "departure" | "return" | "roundtrip" //{ departureQuantity?: number; returnQuantity?: number } Is this the approach we want?
	price?: Price
	description?: string
	flights?: string[]
}
export namespace Luggage {
	export function is(value: Luggage | any): value is Luggage {
		return (
			(typeof value == "object" &&
				typeof value.reference == "string" &&
				(value.quantity == undefined || (typeof value.quantity == "number" && value.quantity > 0)) &&
				typeof value.name == "string" &&
				typeof value.weight == "number" &&
				typeof value.direction == undefined) ||
			(("departure" || "return" || "roundtrip") &&
				(value.price == undefined || Price.is(value.price)) &&
				(value.description == undefined || typeof value.description == "string") &&
				(value.flights == undefined ||
					(Array.isArray(value.flights) && value.flights.every((f: any) => typeof f == "string"))))
		)
	}
	export function isArrayOfLuggage(value: (Luggage | any)[]): value is Luggage[] {
		return Array.isArray(value) && value.every(luggage => luggage == undefined || Luggage.is(luggage))
	}
	export function price(...luggage: Luggage[]): Price | undefined {
		return Price.total(
			(luggage.filter(l => l.price) as { quantity?: number; price: Price }[]).map(l =>
				Price.multiply(l.price, l.quantity)
			)
		)
	}
	export function update(existingLuggage: Luggage, addedLuggage: Luggage, passenger: Passenger): Luggage[] | undefined {
		const newQuantity =
			existingLuggage.quantity && addedLuggage && addedLuggage.quantity
				? existingLuggage.quantity + addedLuggage.quantity ?? 0
				: undefined

		const updatedLuggage = existingLuggage ? { ...existingLuggage, quantity: newQuantity } : undefined
		let passengerLuggage: Luggage[] | undefined = undefined

		// Find the existing luggage on passenger and replace with updated luggage
		if (passenger && passenger.luggage && updatedLuggage)
			passengerLuggage = passenger.luggage?.map(l =>
				l.reference == updatedLuggage.reference && l.direction == updatedLuggage.direction ? (l = updatedLuggage) : l
			)
		return passengerLuggage
	}
	export function filter(booking: BookingOptions, passenger: Passenger): (Luggage | LuggageCategory)[] {
		// Sort luggage that is on all flights
		// const luggage: (Luggage | LuggageCategory)[] = booking.luggage.filter(l =>
		// 	l.flights?.filter(f => booking.departure.find(d => d.reference == f))
		// )

		// Return luggage that has the same flights as passenger is flying with
		const passengerDeparture = passenger.departure ? passenger.departure.map(f => f.reference) : undefined
		const passengerReturn = passenger.return ? passenger.return.map(f => f.reference) : undefined
		const passengerFlights =
			passengerDeparture && passengerReturn
				? passengerDeparture.concat(passengerReturn)
				: passengerDeparture ?? passengerReturn ?? undefined

		const departures = booking.departure.map(d => d.reference)
		const returns = booking.return ? booking.return.map(r => r.reference) : undefined
		const flights = returns ? departures.concat(returns) : departures

		// const luggage = passengerFlights?.map(f => booking.luggage.filter(l => l.flights?.filter(r => r == f)))
		const luggage = booking.luggage.filter(l => l.flights?.filter(r => flights.filter(d => d == r)))

		// Return luggage for this passenger
		// return luggage.filter(l => l.flights?.filter(f => passenger.luggage?.filter(pl => pl.reference == f)))
		return luggage
	}
	export type Category = LuggageCategory
	export const Category = LuggageCategory
}
