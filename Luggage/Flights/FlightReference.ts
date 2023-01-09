import { Price } from "../Price"

export interface FlightReference {
	reference: string
	capacity?: number
	price?: Price
}

export namespace FlightReference {
	export function is(value: FlightReference | any): value is FlightReference {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			(value.capacity == undefined || typeof value.capacity == "number") &&
			(value.price == undefined || Price.is(value.price))
		)
	}
}
