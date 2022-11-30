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
		return { ...flight, seating: leg?.seat ? Layout.reserve(flight.seating, leg.seat) : flight.seating }
	}
	export function isAvailable(flight: Readonly<FlightOptions>, leg: Readonly<Passenger.Itinerary.Leg>): boolean {
		const seat = leg.seat
		return !seat ? false : Layout.isAvailable(flight.seating, seat)
	}
	export function getAvailableFlights( // Return flights that match with passenger itinerary reference.
		passenger: Passenger,
		flights: FlightOptions[],
		direction: "return" | "departure"
	): FlightOptions[] {
		return flights.filter(f => passenger[direction]?.find(i => f.reference == i.reference))
	}
	export function setSeats(flightOptions: FlightOptions, ...seats: Layout.Seat[]): FlightOptions {
		return { ...flightOptions, seating: Layout.setSeats(flightOptions.seating, ...seats) }
	}
}
