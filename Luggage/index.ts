import { BookingOptions } from "../BookingOptions"
import { Direction } from "../Direction"
import { Passenger } from "../Passenger"
import { Price } from "../Price"
import { Category as LuggageCategory } from "./Category"
import { FlightReference as LuggageFlightReference } from "./FlightReference"

export interface Luggage {
	reference: string
	quantity?: number
	name: string
	weight: number
	direction?: Direction //{ departureQuantity?: number; returnQuantity?: number } Is this the approach we want?
	price?: Price
	description?: string
	flights?: LuggageFlightReference[]
}
export namespace Luggage {
	export function is(value: Luggage | any): value is Luggage {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			(value.quantity == undefined || (typeof value.quantity == "number" && value.quantity > 0)) &&
			typeof value.name == "string" &&
			typeof value.weight == "number" &&
			(value.direction == undefined || Direction.is(value.direction)) &&
			(value.price == undefined || Price.is(value.price)) &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.flights == undefined ||
				(Array.isArray(value.flights) && value.flights.every((f: any) => LuggageFlightReference.is(f))))
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
	export function update(luggage: Luggage, passenger: Passenger, action: string): Luggage[] | undefined {
		const existingLuggage =
			passenger.luggage &&
			passenger.luggage.find(l => l.reference == luggage.reference && l.direction == luggage.direction)
		const quantity = existingLuggage ? changeQuantity(existingLuggage, action) : 1
		const updatedLuggage = { ...luggage, quantity: quantity } ?? undefined
		let result: Luggage[] | undefined
		!existingLuggage
			? updatedLuggage && (result = passenger.luggage ? [...passenger.luggage, updatedLuggage] : [updatedLuggage])
			: // If luggage already exist in passenger
			  passenger.luggage &&
			  updatedLuggage &&
			  (result = passenger.luggage.map(l =>
					l.reference == existingLuggage?.reference && l.direction == existingLuggage.direction
						? (l = updatedLuggage)
						: l
			  ))
		return result
	}
	export function changeQuantity(luggage: Luggage, action: string): number | undefined {
		let result = luggage.quantity
		if (action == "remove") {
			result = luggage.quantity ? luggage.quantity - 1 : 0
		} else if (action == "add") {
			result = luggage.quantity ? luggage.quantity + 1 : 1
		}
		return result
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
			flights.find(f => passengerFlights?.find(pf => l.flights?.find(r => f == r.reference && f == pf)) && l)
		)
	}
	export function undoAdvancedSelection(passenger: Passenger, luggage: Luggage): Luggage[] | undefined {
		// Remove all luggage selections that has direction "departure" or "return" with this luggage reference.
		const passengerLuggage = passenger.luggage ? [...passenger.luggage] : []
		return passengerLuggage && Array.isArray(passengerLuggage)
			? passengerLuggage.filter(
					l => !(l.reference == luggage.reference && (l.direction == "departure" || l.direction == "return"))
			  )
			: undefined
	}

	export function getQuantity(luggage: Luggage, direction: Direction, passenger: Passenger): number | undefined {
		return passenger.luggage
			? passenger.luggage.find(l => luggage.reference == l.reference && l.direction == direction)?.quantity
			: undefined
	}
	export type Category = LuggageCategory
	export const Category = LuggageCategory
	export type FlightReference = LuggageFlightReference
	export const FlightReference = LuggageFlightReference
}
