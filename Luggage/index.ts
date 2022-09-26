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
				(value.description == undefined || typeof value.description == "string"))
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
	export type Category = LuggageCategory
	export const Category = LuggageCategory
}
