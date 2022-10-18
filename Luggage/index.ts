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
	export type Category = LuggageCategory
	export const Category = LuggageCategory
}
