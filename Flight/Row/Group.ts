import { Seat } from "../Seat"

export interface Group {
	seats?: (Seat | undefined)[]
	toilet?: boolean
}

export namespace Group {
	export const types = [Seat] as const
	export function is(value: Group | any): value is Group {
		return (
			value.seats.every((seat: any) => Seat.is(seat)) && (value.toilet == undefined || typeof value.toilet == "boolean")
		)
	}
}
