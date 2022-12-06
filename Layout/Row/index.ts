import { Group } from "../Group"
import { Seat } from "../Seat"
import { Base } from "./Base"
import { Positioned as RowPositioned } from "./Positioned"

export type Row = Base

export namespace Row {
	export type Positioned = RowPositioned
	export const Positioned = RowPositioned

	export function is(value: Row | any): value is Row {
		return Base.is(value)
	}
	export function reserve(row: Row, position: Seat.Position): Row {
		const index = row.groups?.findIndex(g => Group.Seats.is(g) && g.seats.find(s => s?.position == position))
		return index != undefined && row.groups
			? {
					...row,
					groups: [
						...row.groups.slice(0, index),
						Group.reserve(row.groups?.[index], position),
						...row.groups.slice(index + 1),
					],
			  }
			: row
	}

	export function isAvailable(row: Row, position: Seat.Position): boolean {
		return !row.groups ? false : Group.isAvailable(row.groups, position)
	}
	export function setSeats(row: Row, ...seats: Seat[]): Row {
		if (row.groups) {
			let groups = row.groups
			seats.forEach(seat => (groups = Group.setSeats(groups, seat)))
			row = { ...row, groups }
		}
		return row
	}
}
