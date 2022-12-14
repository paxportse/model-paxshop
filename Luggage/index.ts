import { Direction } from "../Direction"
import { Passenger } from "../Passenger"
import { Price } from "../Price"
import { Flight as LuggageFlight } from "./Flight"
import { Options as LuggageOptions } from "./Options"
export interface Luggage {
	reference: string
	quantity?: number
	name: string
	weight: number
	direction?: Direction
	description?: string
	flights?: Luggage.Flight[]
}
export namespace Luggage {
	export function is(value: Luggage | any): value is Luggage {
		return (
			typeof value == "object" &&
			value &&
			typeof value.reference == "string" &&
			(value.quantity == undefined || (typeof value.quantity == "number" && value.quantity > 0)) &&
			typeof value.name == "string" &&
			typeof value.weight == "number" &&
			(value.direction == undefined || Direction.is(value.direction)) &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.flights == undefined ||
				(Array.isArray(value.flights) && value.flights.every((f: any) => Luggage.Flight.is(f))))
		)
	}
	export function getPrice(luggage: Luggage, passenger: Passenger): Price | undefined {
		const flights = luggage.direction && Passenger.getFlights(passenger, luggage.direction)
		const result: (Price | undefined)[] = []
		flights?.forEach(f => result.push(luggage.flights?.find(l => f == l.reference)?.price))
		return Price.total(result)
	}
	export const priceTotal = LuggageOptions.priceTotal
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
	export type Options = LuggageOptions
	export namespace Options {
		export type Category = LuggageOptions.Category
		export const Category = LuggageOptions.Category
		export const filter = LuggageOptions.filter
		export const is = LuggageOptions.is
		export const priceTotal = LuggageOptions.priceTotal
	}
	export type Flight = LuggageFlight
	export const Flight = LuggageFlight
}
