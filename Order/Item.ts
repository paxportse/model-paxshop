import { Price } from "../Price"

export interface Item {
	reference: string
	passenger: string
	flight?: string
	name: string | [string, string]
	quantity?: number
	price?: Price
}

export namespace Item {
	export function is(value: Item | any): value is Item {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			(value.passenger == undefined || typeof value.passenger == "string") &&
			(value.flight == undefined || typeof value.flight == "string") &&
			(typeof value.name == "string" ||
				(Array.isArray(value.name) &&
					value.name.length == 2 &&
					value.name.every((n: string) => typeof n == "string"))) &&
			(value.quantity == undefined || typeof value.quantity == "number") &&
			Price.is(value.price)
		)
	}
}
