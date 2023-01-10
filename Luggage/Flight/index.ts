import { Price } from "../../Price"

export interface Flight {
	reference: string
	capacity?: number
	price?: Price
}

export namespace Flight {
	export function is(value: Flight | any): value is Flight {
		return (
			typeof value == "object" &&
			value &&
			typeof value.reference == "string" &&
			(value.capacity == undefined || typeof value.capacity == "number") &&
			(value.price == undefined || Price.is(value.price))
		)
	}
}
