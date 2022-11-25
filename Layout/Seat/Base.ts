import { Price } from "../../Price"
import { Class } from "./Class"
import { Status } from "./Status"

export interface Base {
	status: Status
	class: Class
	price?: Price
	wide?: boolean
	legroom?: boolean
	wing?: boolean
	limitedRecline?: boolean
	noRecline?: boolean
	window?: boolean
	description?: string
	exit?: boolean
	category?: string
}

export namespace Base {
	export function is(value: Base | any): value is Base {
		return (
			typeof value == "object" &&
			Status.is(value.status) &&
			Class.is(value.class) &&
			(value.price == undefined || Price.is(value.price)) &&
			(value.wide == undefined || typeof value.wide == "boolean") &&
			(value.legroom == undefined || typeof value.legroom == "boolean") &&
			(value.wing == undefined || typeof value.wing == "boolean") &&
			(value.limitedRecline == undefined || typeof value.limitedRecline == "boolean") &&
			(value.noRecline == undefined || typeof value.noRecline == "boolean") &&
			(value.window == undefined || typeof value.window == "boolean") &&
			(value.exit == undefined || typeof value.exit == "boolean") &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.category == undefined || typeof value.category == "string")
		)
	}
}
