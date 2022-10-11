import { Flight } from "./Flight"
import { Passenger } from "./Passenger"

export interface Booking {
	reference: string
	passengers: Passenger[]
}

export namespace Booking {
	export function is(value: Booking | any): value is Booking {
		return typeof value == "object" && typeof value.reference == "string" && value.passengers.every(Passenger.is)
	}
	export function getPassengersWithLuggage(booking: Booking): Passenger[] {
		return booking.passengers.filter(passenger => passenger.luggage)
	}
}
