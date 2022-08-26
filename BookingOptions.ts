import { Booking } from "./Booking"
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
			result.departure = result.departure.map(flightOptions =>
				!passenger.departure
					? flightOptions
					: FlightOptions.reserve(
							flightOptions,
							passenger.departure.find(dep => dep?.reference?.valueOf == flightOptions.reference.valueOf)
					  )
			)
			result.return = result.return?.map(flightOptions =>
				!passenger.return
					? flightOptions
					: FlightOptions.reserve(
							flightOptions,
							passenger.return.find(ret => ret?.reference?.valueOf == flightOptions.reference.valueOf)
					  )
			)
		})
		return result
	}
	export function isAvailable(options: Readonly<BookingOptions>, booking: Booking): boolean {
		const available: boolean[] = []
		let result = true
		const departureFlights = options.departure
		const returnFlights = options.return
		const passengers = booking.passengers
		passengers.forEach(passenger => {
			passenger.departure?.forEach((leg, index) => {
				!leg?.seat ? available.push(true) : available.push(FlightOptions.isAvailable(options.departure[index], leg))
			})
			passenger.return?.forEach((leg, index) => {
				!leg?.seat
					? available.push(true)
					: options.return?.length
					? available.push(FlightOptions.isAvailable(options.return[index], leg))
					: available.push(true)
			})
		})
		available.forEach(b => {
			if (!b) {
				result = false
			}
		})
		return result
	}
}
