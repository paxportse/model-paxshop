import { Flight } from "./Flight"
import { Layout } from "./Layout"
import { Meal } from "./Meal"
import { Passenger } from "./Passenger"

export interface FlightOptions extends Flight {
	seating: Layout
	meals?: Meal[]
}
export namespace FlightOptions {
	export function is(value: Flight | any): value is Flight {
		return typeof value == "object" && Layout.is(value.seating) && (value.meal == undefined || Meal.is(value.meal))
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
}
