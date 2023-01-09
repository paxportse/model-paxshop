import { Price } from "../../Price"

export interface Alternative {
	reference: string
	name?: string
	price?: Price
	default?: boolean
	description?: string
}

export namespace Alternative {
	export function is(value: Alternative): value is Alternative {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			(value.name == undefined || typeof value.name == "string") &&
			(value.price == undefined || Price.is(value.price)) &&
			(value.default == undefined || typeof value.default == "boolean") &&
			(value.description == undefined || typeof value.description == "string")
		)
	}
}
