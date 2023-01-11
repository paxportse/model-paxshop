import * as isoly from "isoly"
import { Passenger } from "../Passenger"
import { Options as BookingOptions } from "./Options"
import { Specifier as BookingSpecifier } from "./Specifier"

export interface Booking {
	reference: string
	departure: isoly.Date
	passengers: Passenger[]
}

export namespace Booking {
	export function is(value: Booking | any): value is Booking {
		return (
			typeof value == "object" &&
			value &&
			typeof value.reference == "string" &&
			isoly.Date.is(value.departure) &&
			value.passengers.every(Passenger.is)
		)
	}
	export function getPassengersWithLuggage(booking: Booking): Passenger[] {
		return booking.passengers.filter(passenger => passenger.luggage)
	}
	export function capitalize(word: string): string {
		return word.charAt(0).toUpperCase() + word.slice(1)
	}
	export type Options = BookingOptions
	export const Options = BookingOptions
	export type Specifier = BookingSpecifier
	export namespace Specifier {
		export const is = BookingSpecifier.is
		export const fromAuthorization = BookingSpecifier.fromAuthorization
		export const toAuthorization = BookingSpecifier.toAuthorization
	}
}
