import { Price } from "../../Price"

export interface Flights {
	reference: string
	capacity?: number
	price?: Price
}

export namespace Flights {
	export function is(value: Flights | any): value is Flights {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			(value.capacity == undefined || typeof value.capacity == "number") &&
			(value.price == undefined || Price.is(value.price))
		)
	}
}
