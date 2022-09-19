import { Passenger } from "../../Passenger"
import { Row } from "../Row"
import { Base } from "./Base"
import { Position } from "./Position"

export interface Positioned extends Base {
	row: Row.Positioned
	position: Position
}
export namespace Positioned {
	export function is(value: Positioned | any): value is Positioned {
		return typeof value == "object" && value.row.number > 0 && Base.is(value)
	}
	export function selectable(seat: Positioned, passenger: Passenger): boolean {
		return seat.status == "available" && (passenger.ageGroup == "adult" || !seat.row.exit)
	}
	export function get(seat: Positioned): any {
		return [seat.row.number, seat.position]
	}
	export function occupied(seat: Positioned, leg: Passenger.Itinerary.Leg): boolean {
		const seatNumber = get(seat)
		const seatPassenger = leg.seat ? get(leg.seat) : undefined
		return seatPassenger ? seatNumber[0] == seatPassenger[0] && seatNumber[1] == seatPassenger[1] : false
	}
}
