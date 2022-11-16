import { Row as LayoutRow } from "./Row"
import { Seat as LayoutSeat } from "./Seat"

export type Layout = Layout.Row[]
export namespace Layout {
	export function is(value: Layout | any): value is Layout {
		return Array.isArray(value) && value.every(Row.is)
	}
	export function reserve(layout: Readonly<Layout>, seat: Seat.Positioned): Layout {
		const row = layout[seat.row.number - 1].groups ? seat.row.number - 1 : seat.row.number
		const result: Layout = [...layout]
		result[row] = Row.reserve(result[row], seat.position)
		return result
	}
	export function isAvailable(layout: Readonly<Layout>, seat: Seat.Positioned): boolean {
		const row = layout[seat.row.number - 1].groups ? layout[seat.row.number - 1] : layout[seat.row.number]
		return Row.isAvailable(row, seat.position)
	}
	export function setSeatStatus(seats: Layout.Seat.Positioned[], layout: Layout): Layout {
		const result = [...layout]
		seats.forEach(s => {
			const row = result[s.row.number - 1].groups ? s.row.number - 1 : s.row.number
			result[row] = Row.setSeatStatus(s, result[s.row.number - 1])
		})
		return result
	}
	export type Row = LayoutRow
	export const Row = LayoutRow
	export type Seat = LayoutSeat
	export const Seat = LayoutSeat
	export namespace Seat {
		export type Position = LayoutSeat.Position
		export type Positioned = LayoutSeat.Positioned
		export type Status = LayoutSeat.Status
		export type Class = LayoutSeat.Class
	}
}
