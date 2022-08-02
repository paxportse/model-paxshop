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
			typeof value.name == "string" &&
			Price.is(value.price) &&
			typeof value.default == "boolean" &&
			typeof value.description == "string"
		)
	}
}
