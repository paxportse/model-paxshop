import * as isoly from "isoly"
import { Airport } from "./Airport"

export interface Flight {
	reference: string
	from: Airport
	to: Airport
	departure: isoly.DateTime
	arrival: isoly.DateTime
}
export namespace Flight {
	export function is(value: Flight | any): value is Flight {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			Airport.is(value.to) &&
			Airport.is(value.to) &&
			isoly.DateTime.is(value.departure) &&
			isoly.DateTime.is(value.arrival)
		)
	}
}
