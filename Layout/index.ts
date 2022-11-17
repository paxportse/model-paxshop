import { Row as LayoutRow } from "./Row"
import { Seat as LayoutSeat } from "./Seat"

export type Layout = Layout.Row[]
export namespace Layout {
	export function is(value: Layout | any): value is Layout {
		return Array.isArray(value) && value.every(Row.is)
	}
	export function reserve(layout: Readonly<Layout>, seat: Seat.Positioned): Layout {
		const row = getRowNumber([...layout], seat.row.number)
		const result: Layout = [...layout]
		result[row] = Row.reserve(result[row], seat.position)
		return result
	}
	export function isAvailable(layout: Readonly<Layout>, seat: Seat.Positioned): boolean {
		return Row.isAvailable(layout[getRowNumber([...layout], seat.row.number)], seat.position)
	}
	export function setSeatStatus(seats: Layout.Seat.Positioned[], layout: Layout): Layout {
		const result = [...layout]
		seats.forEach(s => {
			const row = getRowNumber(result, s.row.number)
			result[row] = Row.setSeatStatus(s, result[row])
		})
		return result
	}
	export function getRowNumber(layout: Layout, row: number): number {
		let rowFound = false
		let result = 0
		let index = 0
		while (!rowFound) {
			layout[result].groups != undefined ? (index == row - 1 ? (rowFound = true) : (result++, index++)) : result++
		}
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
