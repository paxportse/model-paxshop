import { Alternative } from "../Flight/Meal/Alternative"
import { Seat } from "../Flight/Seat"
import { Luggage } from "../Luggage"
import { AgeGroup as PassengerAgeGroup } from "./AgeGroup"
import { Name as PassengerName } from "./Name"

export interface Passenger {
	name: PassengerName
	ageGroup: PassengerAgeGroup
	seat?: Seat.Positioned
	meal?: Alternative | Alternative[]

	departure?: {
		seat: Seat.Positioned
		meal?: Alternative | Alternative[]
	}[]
	return?: {
		seat: Seat.Positioned
		meal?: Alternative | Alternative[]
	}[]

	luggage?: Luggage
	total?: number
}

export namespace Passenger {
	export function is(value: Passenger | any): value is Passenger {
		return (
			typeof value == "object" &&
			PassengerName.is(value.name) &&
			AgeGroup.is(value.ageGroup) &&
			(value.seat == undefined || Seat.Positioned.is(value.seat))
		)
	}
	export function seated(passenger: Passenger | Passenger[]): boolean {
		return Array.isArray(passenger) ? passenger.every(seated) : !!passenger.seat // Ändra detta..
	}
	export function addedLuggage(passenger: Passenger | Passenger[]): boolean {
		return Array.isArray(passenger) ? passenger.every(addedLuggage) : !!passenger.luggage
	}
	export const AgeGroup = PassengerAgeGroup
	export type AgeGroup = PassengerAgeGroup
	export const Name = PassengerName
	export type Name = PassengerName
}
