import * as isoly from "isoly"
import { Price } from "../Price"
import { Meal } from "./Meal"
import { Row } from "./Row"

export interface Flight {
	from: string
	to: string
	departure: isoly.DateTime
	arrival: isoly.DateTime
	meals?: Meal[]
	rows: Row[]
}
export namespace Flight {
	export function prices(flight: Flight): number[] {
		return [
			...new Set(
				flight.rows.reduce<number[]>(
					(r, row) =>
						row.groups?.reduce<number[]>(
							(r, group) =>
								group?.seats?.reduce<number[]>((r, seat) => (seat ? [...r, Price.amount(seat.price)] : r), r) ?? r,
							r
						) ?? r,
					[]
				)
			),
		].sort((left, right) => left - right)
	}
}
