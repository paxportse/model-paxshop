import { Seat } from "../Seat"

export interface Group {
	seats?: (Seat | undefined)[]
	toilet?: boolean
}

export namespace Group {
	export const types = [Seat] as const
	export function is(value: Group | any): value is Group {
		return value.seats.every(Seat.is) && typeof value.toilet == "boolean"
	}
}
