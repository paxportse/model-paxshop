import { FlightOptions } from "./FlightOptions"
import { Luggage } from "./Luggage"

export interface BookingOptions {
	departure: FlightOptions[]
	return?: FlightOptions[]
	luggage: Luggage[]
}

export namespace BookingOptions {
	export function is(value: BookingOptions | any): value is BookingOptions {
		return (
			typeof value == "object" &&
			value.departure.every(FlightOptions.is) &&
			(value.return == undefined || value.return.every(FlightOptions.is)) &&
			value.luggage.every(Luggage.is)
		)
	}
}
