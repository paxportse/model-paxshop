import { Base } from "./Base"
import { Positioned as RowPositioned } from "./Positioned"

export type Row = Base

export namespace Row {
	export const is = Base.is
	export type Positioned = RowPositioned
	export const Positioned = RowPositioned
}
