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
		const groups = row.groups
		return !groups ? row : { ...row, groups: Group.reserve(groups, position) }
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

	export function getRowNumber(row: Row | undefined): number | undefined {
		const group = row?.groups?.find(v => v)
		const seat = Group.Seats.is(group) ? group.seats.find(s => s) : undefined
		return seat ? seat.row.number : undefined
	}
}
