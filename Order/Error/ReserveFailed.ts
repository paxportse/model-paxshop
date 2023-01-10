import * as gracely from "gracely"
import { Booking } from "../../Booking"

export interface ReserveFailed extends gracely.Error {
	status: 400
	type: "reserve failed"
	content: { description: string | string[]; reserved: Booking }
}

export function reserveFailed(reserved: Booking, ...description: string[]) {
	return {
		status: 400,
		type: "reserve failed",
		content: { description: description.length == 1 ? description[0] : description, reserved },
	}
}

export namespace ReserveFailed {
	export function is(value: ReserveFailed | any): value is ReserveFailed {
		return true
	}
}
