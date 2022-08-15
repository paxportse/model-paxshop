import { Seat } from "../Seat"
import { Base } from "./Base"
import { Group } from "./Group"
import { Positioned as RowPositioned } from "./Positioned"

export type Row = Base

export namespace Row {
	export const is = Base.is
	export type Positioned = RowPositioned
	export const Positioned = RowPositioned

	export function reserve(row: Row, position: Seat.Position): Row {
		const groups = row?.groups
		return !groups ? row : { ...row, groups: Group.reserve(groups, position) }
	}
	
}
