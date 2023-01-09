import { Options as BookingOptions } from "../../Booking/Options"
import { Passenger } from "../../Passenger"
// import { Price } from "../../Price"
import { Flight } from "../Flight"
import { Category as LuggageCategory } from "./Category"
export interface Options {
	reference: string
	name: string
	weight: number
	description?: string
	flights?: Flight[]
}
export namespace Options {
	export function is(value: Options | any): value is Options {
		return (
			typeof value == "object" &&
			value &&
			typeof value.reference == "string" &&
			typeof value.name == "string" &&
			typeof value.weight == "number" &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.flights == undefined || (Array.isArray(value.flights) && value.flights.every((f: any) => Flight.is(f))))
		)
	}
	// Needs updating. Take flights aswell. Price is under flights
	// export function price(...luggage: Options[]): Price | undefined {
	// 	return Price.total(
	// 		(luggage.filter(l => l.price) as { quantity?: number; price: Price }[]).map(l =>
	// 			Price.multiply(l.price, l.quantity)
	// 		)
	// 	)
	// }

	export function filter(booking: BookingOptions, passenger: Passenger): (Options | Category)[] {
		// Return luggage that has the same flights as the passenger is flying with
		const passengerDeparture = passenger.departure ? passenger.departure.map(f => f.reference) : undefined
		const passengerReturn = passenger.return ? passenger.return.map(f => f.reference) : undefined
		const passengerFlights =
			passengerDeparture && passengerReturn
				? passengerDeparture.concat(passengerReturn)
				: passengerDeparture ?? passengerReturn ?? undefined

		const departures = booking.departure.map(d => d.reference)
		const returns = booking.return ? booking.return.map(r => r.reference) : undefined
		const flights = returns ? departures.concat(returns) : departures

		return booking.luggage.filter(l =>
			flights.find(f => passengerFlights?.find(pf => l.flights?.find((r: Flight) => f == r.reference && f == pf)) && l)
		)
	}
	export type Category = LuggageCategory
	export const Category = LuggageCategory
}
