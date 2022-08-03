import { Price } from "../Price"

export interface Luggage {
	name: string
	weight: number
	price?: Price
	luggageTotal?: Price
	description?: string
}

export namespace Luggage {
	export function is(value: Luggage): value is Luggage {
		return (
			typeof value == "object" &&
			typeof value.name == "string" &&
			typeof value.weight == "number" &&
			(value.price == undefined || Price.is(value.price)) &&
			(value.luggageTotal == undefined || Price.is(value.luggageTotal)) &&
			(value.description == undefined || typeof value.description == "string")
		)
	}
	// export function total(departVal: number, returnVal: number, currency: isoly.Currency): void {
	// 	this.luggageTotal = {
	// 		...this.luggageTotal,
	// 		amount: departVal + returnVal,
	// 		currency: currency,
	// 	}
	// }
}
