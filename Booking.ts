import { Flight } from "./Flight"
import { Passenger } from "./Passenger"

export interface Booking {
	reference: string
	passengers: Passenger[]
	departure: Flight[]
	return?: Flight[]
}

export namespace Booking {
	export function is(value: Booking | any): value is Booking {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			value.passengers.every(Passenger.is) &&
			Array.isArray(value.departure) &&
			value.departure.every((leg: any) => Flight.is(leg)) &&
			Array.isArray(value.return) &&
			value.return.every((leg: any) => Flight.is(leg))
		)
	}
}
