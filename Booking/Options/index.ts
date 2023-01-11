import { Options as FlightOptions } from "../../Flight/Options"
import { Luggage } from "../../Luggage"
import { Booking } from ".."

export interface Options {
	departure: FlightOptions[]
	return?: FlightOptions[]
	luggage: (Luggage.Options | Luggage.Options.Category)[]
}

export namespace Options {
	export function is(value: Options | any): value is Options {
		return (
			typeof value == "object" &&
			value &&
			value.departure.every(FlightOptions.is) &&
			(value.return == undefined || value.return.every(FlightOptions.is)) &&
			value.luggage.every((l: unknown) => Luggage.Options.is(l) || Luggage.Options.Category.is(l))
		)
	}
	export function reserve(bookingOptions: Readonly<Options>, booking: Readonly<Booking>): Options {
		const result: Options = { ...bookingOptions }
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
	export function isAvailable(options: Readonly<Options>, booking: Booking): boolean {
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
	export function getFlight(options: Options, reference: string): FlightOptions | undefined {
		return [...(options.departure ?? []), ...(options.return ?? [])].find(f => f.reference == reference)
	}
}
