import { Flight } from "./Flight"
import { Luggage } from "./Luggage"

export interface BookingOptions {
	departure: Flight[]
	return?: Flight[]
	luggage: Luggage[]
}

export namespace BookingOptions {
	export function is(value: BookingOptions | any): value is BookingOptions {
		return typeof value == "object"
	}
}
