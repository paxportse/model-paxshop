import { Passenger } from "../../Passenger"
import { Booking } from "../index"

export interface Changes {
	added: Partial<Booking>
	removed: Partial<Booking>
}

export namespace Changes {
	export function is(value: Booking | any) {
		typeof value == "object" && value
	}
	export function get(booking: Booking, previous: Booking): Changes[] {
		return booking.passengers.map(p =>
			Passenger.changes(
				p,
				previous.passengers.find(v => v.reference == p.reference)
			)
		)
	}
}
