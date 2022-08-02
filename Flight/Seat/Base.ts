import { Price } from "../../Price"
import { Class } from "./Class"
import { Status } from "./Status"

export interface Base {
	status: Status
	class: Class
	price: Price
	wide?: boolean
	legroom?: boolean
	wing?: boolean
	limitedRecline?: boolean
}

export namespace Base {
	export function is(value: Base | any): value is Base {
		return (
			typeof value == "object" &&
			Status.is(value.status) &&
			Class.is(value.class) &&
			Price.is(value.price) &&
			(value.wide == undefined || typeof value.wide == "boolean") &&
			typeof value.legroom == "boolean" &&
			typeof value.wing == "boolean" &&
			typeof value.limitedRecline == "boolean"
		)
	}
}
