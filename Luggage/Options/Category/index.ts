import { Flight } from "../../Flight"
import { Luggage } from "../../index"

export interface Category {
	name: string
	description?: string
	options?: Luggage[]
	open?: boolean
	flights?: Flight[]
}
export namespace Category {
	export function is(value: Category | any): value is Category {
		return (
			typeof value == "object" &&
			value &&
			typeof value.name == "string" &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.options == undefined ||
				(Array.isArray(value.options) && value.options.every((o: unknown) => Luggage.is(o)))) &&
			(value.open == undefined || typeof value.open == "boolean") &&
			(value.reference ? false : true) &&
			(value.flights == undefined || value.flights.every((f: any) => Flight.is(f) as boolean))
		)
	}
}
