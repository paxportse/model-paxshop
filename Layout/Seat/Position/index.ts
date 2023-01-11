import { Column as PositionColumn } from "./Column"
import { Deck as PositionDeck } from "./Deck"
export interface Position {
	row: number
	column: Position.Column
	deck?: Position.Deck
}

export namespace Position {
	export function is(value: Position | any): value is Position {
		return (
			typeof value == "object" &&
			value &&
			typeof value.row == "number" &&
			Column.is(value.column) &&
			(value.deck == undefined || Deck.is(value.deck))
		)
	}
	export type Column = PositionColumn
	export const Column = PositionColumn
	export type Deck = PositionDeck
	export const Deck = PositionDeck
}
