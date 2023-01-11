import { Base } from "./Base"
import { Class as SeatClass } from "./Class"
import { Position as SeatPosition } from "./Position"
import { Column as PositionColumn } from "./Position/Column"
import { Deck as PositionDeck } from "./Position/Deck"
import { Status as SeatStatus } from "./Status"

export type Seat = Base
export namespace Seat {
	export const is = Base.is
	export const get = Base.get
	export const selectable = Base.selectable
	export const chosen = Base.chosen
	export type Position = SeatPosition
	export namespace Position {
		export const is = SeatPosition.is
		export type Column = PositionColumn
		export const Column = PositionColumn
		export type Deck = PositionDeck
		export const Deck = PositionDeck
	}
	export type Status = SeatStatus
	export const Status = SeatStatus
	export type Class = SeatClass
	export const Class = SeatClass
}
