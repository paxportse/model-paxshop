import { Luggage } from "."
import { FlightReference } from "./FlightReference"

export interface Category {
	name: string
	description?: string
	options?: Luggage[]
	open?: boolean
	flights?: FlightReference[]
}
export namespace Category {
	export function is(value: Category | any): value is Category {
		return (
			typeof value == "object" &&
			typeof value.name == "string" &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.options == undefined ||
				(Array.isArray(value.options) && value.options.every((o: Luggage) => Luggage.is(o)))) &&
			(value.open == undefined || typeof value.open == "boolean") &&
			(value.reference ? false : true) &&
			(value.flights == undefined || value.flights.every((f: any) => FlightReference.is(f) as boolean))
		)
	}
}