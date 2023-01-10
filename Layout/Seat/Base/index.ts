import { Passenger } from "../../../Passenger"
import { Price } from "../../../Price"
import { Class } from "../Class"
import { Position } from "../Position"
import { Column } from "../Position/Column"
import { Status } from "../Status"

export interface Base {
	reference: string
	status: Status
	class: Class
	position: Position
	price?: Price
	wide?: boolean
	legroom?: boolean
	wing?: boolean
	limitedRecline?: boolean
	noRecline?: boolean
	window?: boolean
	description?: string
	exit?: boolean
	category?: string
	toilet?: boolean
}

export namespace Base {
	export function is(value: Base | any): value is Base {
		return (
			typeof value == "object" &&
			value &&
			typeof value.reference == "string" &&
			Status.is(value.status) &&
			Class.is(value.class) &&
			Position.is(value.position) &&
			(value.price == undefined || Price.is(value.price)) &&
			(value.wide == undefined || typeof value.wide == "boolean") &&
			(value.legroom == undefined || typeof value.legroom == "boolean") &&
			(value.wing == undefined || typeof value.wing == "boolean") &&
			(value.limitedRecline == undefined || typeof value.limitedRecline == "boolean") &&
			(value.noRecline == undefined || typeof value.noRecline == "boolean") &&
			(value.window == undefined || typeof value.window == "boolean") &&
			(value.exit == undefined || typeof value.exit == "boolean") &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.category == undefined || typeof value.category == "string") &&
			(value.toilet == undefined || typeof value.toilet == "boolean")
		)
	}
	export function selectable(seat: Base, passenger: Passenger): boolean {
		return seat.position.row ? seat.status == "available" && (passenger.ageGroup == "adult" || !seat.exit) : false
	}
	export function get(seat: Base): [number, Column] {
		return [seat.position.row, seat.position.column]
	}
	export function chosen(seat: Base, leg: Passenger.Itinerary.Leg): boolean {
		const seatNumber = get(seat)
		const seatPassenger = leg.seat ? get(leg.seat) : undefined
		return seatPassenger ? seatNumber?.[0] == seatPassenger[0] && seatNumber?.[1] == seatPassenger[1] : false
	}
}
