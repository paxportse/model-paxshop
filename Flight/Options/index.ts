import { Layout } from "../../Layout"
import { Meal } from "../../Meal"
import { Passenger } from "../../Passenger"
import type { Flight } from ".."

export interface Options extends Flight {
	seating: Layout
	meals?: Meal.Options[]
}
export namespace Options {
	export function is(value: Flight | any): value is Flight {
		return typeof value == "object" && Layout.is(value.seating) && (value.meal == undefined || Meal.is(value.meal))
	}
	export function reserve(flight: Readonly<Options>, leg: Passenger.Itinerary.Leg | undefined): Options {
		return { ...flight, seating: leg?.seat ? Layout.reserve(flight.seating, leg.seat) : flight.seating }
	}
	export function isAvailable(flight: Readonly<Options>, leg: Readonly<Passenger.Itinerary.Leg>): boolean {
		const seat = leg.seat
		return !seat ? false : Layout.isAvailable(flight.seating, seat)
	}
	export function getAvailableFlights( // Return flights that match with passenger itinerary reference.
		passenger: Passenger,
		flights: Options[],
		direction: "return" | "departure"
	): Options[] {
		return flights.filter(f => passenger[direction]?.find(i => f.reference == i.reference))
	}
	export function setSeats(flightOptions: Options, ...seats: Layout.Seat[]): Options {
		return { ...flightOptions, seating: Layout.setSeats(flightOptions.seating, ...seats) }
	}
}
