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
			// Class.is(value.class) &&
			Price.is(value.price) &&
			(value.wide == undefined || typeof value.wide == "boolean") &&
			(value.legroom == undefined || typeof value.legroom == "boolean") &&
			(value.wing == undefined || typeof value.wing == "boolean") &&
			(value.limitedRecline == undefined || typeof value.limitedRecline == "boolean")
		)
	}
}
