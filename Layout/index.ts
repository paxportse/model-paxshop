import { Group as LayoutGroup } from "./Group"
import { Row as LayoutRow } from "./Row"
import { Seat as LayoutSeat } from "./Seat"

export type Layout = Layout.Row[]
export namespace Layout {
	export function is(value: Layout | any): value is Layout {
		return Array.isArray(value) && value.every(Row.is)
	}
	export function reserve(layout: Readonly<Layout>, seat: Seat): Layout {
		// NEED TO GET THE ROW, NOT ROW NUMBER. MAYBE CAN DO IT DIFFERENT BECAUSE NUMBER IS ON ROW NOW
		const row = seat.position.row && getRowIndex([...layout], seat.position.row)
		const result: Layout = [...layout]
		row && (result[row] = Row.reserve(result[row], seat.position.column))
		return result
	}
	export function isAvailable(layout: Readonly<Layout>, seat: Seat): boolean {
		return seat.position.row
			? Row.isAvailable(layout[getRowIndex([...layout], seat.position.row)], seat.position.column)
			: false
	}
	export function setSeats(layout: Readonly<Layout>, ...seats: Layout.Seat[]): Layout {
		const seatsByRow: Record<number, Seat[] | undefined> = {}
		seats
			.map(s => [getRowIndex(layout, s.position.row), s] as const)
			.forEach(([index, s]) => (seatsByRow[index] = [...(seatsByRow[index] ?? []), s]))
		return layout
			.map((row, index) => [row, seatsByRow[index] ?? []] as const)
			.map(([row, seats]) => Row.setSeats(row, ...seats))
	}
	export function getRowIndex(layout: Readonly<Layout>, row: number): number {
		return layout.findIndex(r => r.groups && --row == 0)
	}

	export type Row = LayoutRow
	export const Row = LayoutRow
	export type Seat = LayoutSeat
	export const Seat = LayoutSeat
	export type Group = LayoutGroup
	export const Group = LayoutGroup
	export namespace Seat {
		export type Position = LayoutSeat.Position
		export type Status = LayoutSeat.Status
		export type Class = LayoutSeat.Class
	}
}
