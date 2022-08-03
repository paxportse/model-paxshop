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
	export function is(value: Flight | any): value is Flight {
		return (
			typeof value == "object" &&
			typeof value.from == "string" &&
			typeof value.to == "string" &&
			isoly.DateTime.is(value.departure) &&
			isoly.DateTime.is(value.arrival) &&
			(value.meal == undefined || Meal.is(value.meal)) &&
			value.rows.every(Row.is)
		)
	}
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
