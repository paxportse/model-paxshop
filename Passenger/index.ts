import { FlightOptions } from "../FlightOptions"
import { Luggage } from "../Luggage"
import { AgeGroup as PassengerAgeGroup } from "./AgeGroup"
import { Itinerary as PassengerItinerary } from "./Itinerary"
import { Leg } from "./Itinerary/Leg"
import { Name as PassengerName } from "./Name"

export interface Passenger {
	reference: string
	name: Passenger.Name
	ageGroup: Passenger.AgeGroup
	departure?: Passenger.Itinerary
	return?: Passenger.Itinerary
	luggage?: Luggage[]
}

export namespace Passenger {
	export function is(value: Passenger | any): value is Passenger {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			Passenger.Name.is(value.name) &&
			AgeGroup.is(value.ageGroup) &&
			Itinerary.is(value.departure) &&
			(value.return == undefined || Itinerary.is(value.return))
		)
	}
	export function seated(passenger: Readonly<Passenger> | Readonly<Passenger>[]): boolean {
		return Array.isArray(passenger)
			? passenger.every(seated)
			: !!passenger.departure?.every((item: PassengerItinerary.Leg | undefined) => !!item?.seat) &&
					(passenger.return?.every((item: PassengerItinerary.Leg | undefined) => !!item?.seat) ?? true)
	}
	export function hasLuggage(passenger: Readonly<Passenger> | Readonly<Passenger>[]): boolean {
		return Array.isArray(passenger) ? passenger.every(hasLuggage) : !!passenger.luggage
	}
	export function update(passenger: Readonly<Passenger>, changes: Partial<Passenger>): Passenger {
		return {
			...passenger,
			...changes,
			departure: !passenger.departure
				? changes.departure
				: Passenger.Itinerary.update(passenger.departure, changes.departure),
			return: !passenger.return ? changes.return : Passenger.Itinerary.update(passenger.return, changes.return),
		}
	}
	export function createItinerary(
		passenger: Passenger,
		direction: "departure" | "return",
		flights: FlightOptions[]
	): Passenger {
		const itinerary: Leg[] = []
		flights.forEach(f => {
			itinerary.push({ reference: f.reference })
		})
		const result =
			direction == "departure"
				? { ...passenger, departure: itinerary }
				: direction == "return"
				? { ...passenger, return: itinerary }
				: {}

		return update(passenger, result)
	}
	export const AgeGroup = PassengerAgeGroup
	export type AgeGroup = PassengerAgeGroup
	export const Itinerary = PassengerItinerary
	export type Itinerary = PassengerItinerary
	export namespace Itinerary {
		export type Leg = PassengerItinerary.Leg
	}
	export const Name = PassengerName
	export type Name = PassengerName
}
