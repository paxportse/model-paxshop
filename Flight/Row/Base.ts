import { Base as Seat } from "../Seat/Base"
import { Group } from "./Group"

export interface Base {
	groups?: (Group | undefined)[]
	exit?: boolean
	wing?: boolean
	toilet?: boolean
}
export namespace Base {
	export function is(value: Base | any): value is Base {
		return (
			typeof value == "object" &&
			Array.isArray(value.groups) &&
			value.groups.every(value.seats.every(Seat.is)) &&
			(value.exit == "undefined" || typeof value.exit == "boolean")
		)
	}
}
