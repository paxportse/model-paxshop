import { Group as LayoutGroup } from "./Group"
import { Row as LayoutRow } from "./Row"
import { Seat as LayoutSeat } from "./Seat"

export type Layout = Layout.Row[]
export namespace Layout {
	export function is(value: Layout | any): value is Layout {
		return Array.isArray(value) && value.every(Row.is)
	}
	export function reserve(layout: Readonly<Layout>, seat: Seat.Positioned): Layout {
		const row = getRowIndex([...layout], seat.row.number)
		const result: Layout = [...layout]
		result[row] = Row.reserve(result[row], seat.position)
		return result
	}
	export function isAvailable(layout: Readonly<Layout>, seat: Seat.Positioned): boolean {
		return Row.isAvailable(layout[getRowIndex([...layout], seat.row.number)], seat.position)
	}
	export function setSeats(layout: Readonly<Layout>, ...seats: Layout.Seat.Positioned[]): Layout {
		const seatsByRow: Record<number, Seat.Positioned[] | undefined> = {}
		seats
			.map(s => [getRowIndex(layout, s.row.number), s] as const)
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
		export type Positioned = LayoutSeat.Positioned
		export type Status = LayoutSeat.Status
		export type Class = LayoutSeat.Class
	}
}
