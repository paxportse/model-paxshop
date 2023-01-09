import * as isoly from "isoly"
import { Airport } from "../Airport"
import { Options as FlightOptions } from "./Options"

export interface Flight {
	reference: string
	number: string
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
			typeof value.number == "string" &&
			Airport.is(value.to) &&
			Airport.is(value.to) &&
			isoly.DateTime.is(value.departure) &&
			isoly.DateTime.is(value.arrival)
		)
	}
	export type Options = FlightOptions
	export const Options = FlightOptions
}
