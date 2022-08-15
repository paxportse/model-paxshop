import { Booking } from "./Booking"
import { Flight } from "./Flight"
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
	export function reserve(bookingOptions: Readonly<BookingOptions>, booking: Readonly<Booking>): BookingOptions {
		const result: BookingOptions = { ...bookingOptions }
		const passengers = booking.passengers
		passengers.forEach(passenger => {
			result.departure.forEach((dep, index) => {
				dep = !passenger.departure ? dep : FlightOptions.reserve(dep, passenger.departure[index])
				result.departure[index] = dep
			})
		})
		!result.return
			? result
			: passengers.forEach(passenger => {
					result.return?.forEach((ret, index) => {
						ret = !passenger.return ? ret : FlightOptions.reserve(ret, passenger.return[index])
						if (result.return?.length) {
							result.return[index] = ret
						}
					})
			  })
		return result
	}
}
