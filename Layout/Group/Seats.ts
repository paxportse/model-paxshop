import { Seat } from "../Seat"
import { Base } from "./Base"

export interface Seats extends Base {
	seats: (Seat | undefined)[]
}
export namespace Seats {
	export function is(value: Seats | any): value is Seats {
		return (
			typeof value == "object" &&
			value &&
			Array.isArray(value.seats) &&
			value.seats.every((seat: any) => seat == undefined || Seat.is(seat)) &&
			Base.is(value)
		)
	}
}
