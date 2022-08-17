import { Flight } from "./Flight"
import { Layout } from "./Layout"
import { Luggage } from "./Luggage"
import { Meal } from "./Meal"
import { Passenger } from "./Passenger"

export interface FlightOptions extends Flight {
	seating: Layout
	meals?: Meal[]
}
export namespace FlightOptions {
	export function is(value: Flight | any): value is Flight {
		return (
			typeof value == "object" &&
			Layout.is(value.seating) &&
			(value.luggage == undefined || Luggage.isArrayOfLuggage(value.luggage)) &&
			(value.meal == undefined || Meal.is(value.meal))
		)
	}
	export function reserve(flight: Readonly<FlightOptions>, leg: Passenger.Itinerary.Leg | undefined): FlightOptions {
		const seat = leg?.seat
		let layout: Layout
		if (seat) {
			layout = Layout.reserve(flight.seating, seat)
		} else {
			layout = flight.seating
		}
		return { ...flight, seating: layout }
	}
	export function isAvailable(flight: Readonly<FlightOptions>, leg: Readonly<Passenger.Itinerary.Leg>): boolean {
		const seat = leg.seat
		return !seat ? false : Layout.isAvailable(flight.seating, seat)
	}
}
