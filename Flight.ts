import * as isoly from "isoly"

export interface Flight {
	reference: string
	from: string
	to: string
	departure: isoly.DateTime
	arrival: isoly.DateTime
}
export namespace Flight {
	export function is(value: Flight | any): value is Flight {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			typeof value.from == "string" &&
			typeof value.to == "string" &&
			isoly.DateTime.is(value.departure) &&
			isoly.DateTime.is(value.arrival)
		)
	}
}
