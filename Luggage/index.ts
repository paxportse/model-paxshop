import { BookingOptions } from "../BookingOptions"
import { Direction } from "../Direction"
import { Passenger } from "../Passenger"
import { Price } from "../Price"
import { Category as LuggageCategory } from "./Category"

export interface Luggage {
	reference: string
	quantity?: number
	name: string
	weight: number
	direction?: Direction //{ departureQuantity?: number; returnQuantity?: number } Is this the approach we want?
	price?: Price
	description?: string
	flights?: string[]
}
export namespace Luggage {
	export function is(value: Luggage | any): value is Luggage {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			(value.quantity == undefined || (typeof value.quantity == "number" && value.quantity > 0)) &&
			typeof value.name == "string" &&
			typeof value.weight == "number" &&
			(typeof value.direction == undefined || Direction.is(value.direction)) &&
			(value.price == undefined || Price.is(value.price)) &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.flights == undefined ||
				(Array.isArray(value.flights) && value.flights.every((f: any) => typeof f == "string")))
		)
	}
	export function isArrayOfLuggage(value: (Luggage | any)[]): value is Luggage[] {
		return (
			Array.isArray(value) &&
			value.every(luggage => luggage == undefined || Luggage.is(luggage) || Luggage.Category.is(luggage))
		)
	}
	export function price(...luggage: Luggage[]): Price | undefined {
		return Price.total(
			(luggage.filter(l => l.price) as { quantity?: number; price: Price }[]).map(l =>
				Price.multiply(l.price, l.quantity)
			)
		)
	}
	export function update(existingLuggage: Luggage, passenger: Passenger, action: string): Luggage[] | undefined {
		let quantity = existingLuggage ? existingLuggage.quantity : 0
		if (action == "remove") {
			quantity = existingLuggage && existingLuggage.quantity ? existingLuggage.quantity - 1 : 0
		} else if (action == "add") {
			quantity = existingLuggage && existingLuggage.quantity ? existingLuggage.quantity + 1 : 1
		}
		const updatedLuggage = existingLuggage ? { ...existingLuggage, quantity: quantity } : undefined
		let passengerLuggage: Luggage[] | undefined = undefined

		// Find the existing luggage on passenger and replace with updated luggage
		if (passenger && passenger.luggage && updatedLuggage)
			passengerLuggage = passenger.luggage?.map(l =>
				l.reference == updatedLuggage.reference && l.direction == updatedLuggage.direction ? (l = updatedLuggage) : l
			)
		return passengerLuggage
	}
	export function filter(booking: BookingOptions, passenger: Passenger): (Luggage | LuggageCategory)[] {
		// Return luggage that has the same flights as the passenger is flying with
		const passengerDeparture = passenger.departure ? passenger.departure.map(f => f.reference) : undefined
		const passengerReturn = passenger.return ? passenger.return.map(f => f.reference) : undefined
		const passengerFlights =
			passengerDeparture && passengerReturn
				? passengerDeparture.concat(passengerReturn)
				: passengerDeparture ?? passengerReturn ?? undefined

		const departures = booking.departure.map(d => d.reference)
		const returns = booking.return ? booking.return.map(r => r.reference) : undefined
		const flights = returns ? departures.concat(returns) : departures

		return booking.luggage.filter(l =>
			flights.find(f => passengerFlights?.find(pf => l.flights?.find(r => f == r && f == pf)) && l)
		)
	}
	export type Category = LuggageCategory
	export const Category = LuggageCategory
}
