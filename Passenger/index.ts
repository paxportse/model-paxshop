import { Luggage } from "../Luggage"
import { AgeGroup as PassengerAgeGroup } from "./AgeGroup"
import { Itinerary as PassengerItinerary } from "./Itinerary"
import { Name as PassengerName } from "./Name"

export interface Passenger {
	name: Passenger.Name
	ageGroup: Passenger.AgeGroup
	departure: Passenger.Itinerary
	return?: Passenger.Itinerary
	luggage?: Luggage
	total?: number
}

export namespace Passenger {
	export function is(value: Passenger | any): value is Passenger {
		return (
			typeof value == "object" &&
			Passenger.Name.is(value.name) &&
			AgeGroup.is(value.ageGroup) &&
			Itinerary.is(value.departure) &&
			(value.return == undefined || Itinerary.is(value.return))
		)
	}
	export function seated(passenger: Passenger | Passenger[]): boolean {
		return Array.isArray(passenger) ? passenger.every(seated) : Array.isArray(passenger.departure) ? passenger.departure.every((flight: any) => !!flight.seat) : !!passenger.departure
		//!!passenger.seat // Ändra detta..
	}
	export function addedLuggage(passenger: Passenger | Passenger[]): boolean {
		return Array.isArray(passenger) ? passenger.every(addedLuggage) : !!passenger.luggage
	}
	export const AgeGroup = PassengerAgeGroup
	export type AgeGroup = PassengerAgeGroup
	export const Itinerary = PassengerItinerary
	export type Itinerary = PassengerItinerary
	export const Name = PassengerName
	export type Name = PassengerName
}
