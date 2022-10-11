import { Flight } from "./Flight"
import { Passenger } from "./Passenger"

export interface Booking {
	reference: string
	passengers: Passenger[]
	departure: Flight[] // Delete, this (should) be in passenger.departure. The actual flight information is in booking options
	return?: Flight[] // Delete, this (should) be in passenger.return
}

export namespace Booking {
	export function is(value: Booking | any): value is Booking {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			value.passengers.every(Passenger.is) &&
			Array.isArray(value.departure) &&
			value.departure.every((leg: any) => Flight.is(leg)) &&
			(value.return == undefined || (Array.isArray(value.return) && value.return.every((leg: any) => Flight.is(leg))))
		)
	}
	export function getPassengersWithLuggage(booking: Booking): Passenger[] {
		return booking.passengers.filter(passenger => passenger.luggage)
	}
}
