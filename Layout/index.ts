import { Row as LayoutRow } from "./Row"
import { Seat as LayoutSeat } from "./Seat"

export type Layout = Layout.Row[]
export namespace Layout {
	export function is(value: Layout | any): value is Layout {
		return Array.isArray(value) && value.every(Row.is)
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
