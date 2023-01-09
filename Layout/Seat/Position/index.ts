import { Row } from "../../Row"
import { Column } from "./Column"
import { Deck } from "./Deck"
export interface Position {
	row: Row
	column: Column
	deck?: Deck
}

export namespace Position {
	export function is(value: Position | any): value is Position {
		return (
			typeof value == "object" &&
			value &&
			Row.is(value.row) &&
			Column.is(value.column) &&
			(value.deck == undefined || Deck.is(value.deck))
		)
	}
}
export type Row
