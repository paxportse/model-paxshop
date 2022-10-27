import { Row as LayoutRow } from "./Row"
import { Seat as LayoutSeat } from "./Seat"

export type Layout = Layout.Row[]
export namespace Layout {
	export function is(value: Layout | any): value is Layout {
		return Array.isArray(value) && value.every(Row.is)
	}
	export function reserve(layout: Readonly<Layout>, seat: Seat.Positioned): Layout {
		const result: Layout = [...layout]
		result[seat.row.number - 1] = Row.reserve(result[seat.row.number - 1], seat.position)
		return result
	}
	export function isAvailable(layout: Readonly<Layout>, seat: Seat.Positioned): boolean {
		return Row.isAvailable(layout[seat.row.number - 1], seat.position)
	}
	export function setSeatStatus(seats: Layout.Seat.Positioned[], seating: Layout): Layout {
		const result = [...seating]
		seats.forEach(s => (result[s.row.number - 1] = Row.setSeatStatus(s, result[s.row.number - 1])))
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
