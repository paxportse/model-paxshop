import { Price } from "../../Price"

export interface Alternative {
	name?: string
	price?: Price
	default?: boolean
	description?: string
}

export namespace Alternative {
	export function is(value: Alternative): value is Alternative {
		return (
			typeof value == "object" &&
			(value.name == undefined || typeof value.name == "string") &&
			(value.price == undefined || Price.is(value.price)) &&
			(value.default == undefined || typeof value.default == "boolean") &&
			(value.description == undefined || typeof value.description == "string")
		)
	}
}
