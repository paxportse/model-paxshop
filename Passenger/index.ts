import { Luggage } from "../Luggage"
import { AgeGroup as PassengerAgeGroup } from "./AgeGroup"
import { Itinerary } from "./Itinerary"
import { Name as PassengerName } from "./Name"

export interface Passenger {
	name: PassengerName
	ageGroup: PassengerAgeGroup
	departure?: Itinerary
	return?: Itinerary
	luggage?: Luggage
	total?: number
}

export namespace Passenger {
	export function is(value: Passenger | any): value is Passenger {
		return (
			typeof value == "object" &&
			PassengerName.is(value.name) &&
			AgeGroup.is(value.ageGroup) &&
			(value.departure == undefined || Itinerary.is(value.departure)) &&
			(value.return == undefined || Itinerary.is(value.return))
		)
	}
	// export function seated(passenger: Passenger | Passenger[]): boolean {
	// 	return Array.isArray(passenger) ? passenger.every(seated) : !!passenger.seat // Ändra detta..
	// }
	export function addedLuggage(passenger: Passenger | Passenger[]): boolean {
		return Array.isArray(passenger) ? passenger.every(addedLuggage) : !!passenger.luggage
	}
	export const AgeGroup = PassengerAgeGroup
	export type AgeGroup = PassengerAgeGroup
	export const Name = PassengerName
	export type Name = PassengerName
}
