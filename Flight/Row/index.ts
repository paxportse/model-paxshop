import { Base } from "./Base"
import { Layout as RowConfiguration } from "./Layout"
import { Positioned as RowPositioned } from "./Positioned"

export type Row = Base

export namespace Row {
	export const is = Base.is
	export type Configuration = RowConfiguration
	export const Configuration = RowConfiguration
	export type Positioned = RowPositioned
	export const Positioned = RowPositioned
}
