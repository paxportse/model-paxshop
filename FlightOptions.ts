import { Flight } from "./Flight"
import { Layout } from "./Layout"
import { Meal } from "./Meal"

export interface FlightOptions extends Flight {
	seating: Layout
	meals?: Meal[]
}
export namespace FlightOptions {
	export function is(value: Flight | any): value is Flight {
		return typeof value == "object" && Layout.is(value.seating) && (value.meal == undefined || Meal.is(value.meal))
	}
}
