import { Price } from "../Price"

export interface Luggage {
	reference: string
	quantity?: number
	name: string
	weight: number
	price?: Price
	description?: string
}

export namespace Luggage {
	export function is(value: Luggage): value is Luggage {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			(value.quantity == undefined || (typeof value.quantity == "number" && value.quantity > 0)) &&
			typeof value.name == "string" &&
			typeof value.weight == "number" &&
			(value.price == undefined || Price.is(value.price)) &&
			(value.description == undefined || typeof value.description == "string")
		)
	}
	export function price(...luggage: Luggage[]): Price | undefined {
		return Price.total(
			(luggage.filter(l => l.price) as { quantity?: number; price: Price }[]).map(l =>
				Price.multiply(l.price, l.quantity)
			)
		)
	}
}
