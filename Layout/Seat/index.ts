import { Base } from "./Base"
import { Class as SeatClass } from "./Class"
import { Position as SeatPosition } from "./Position/"
import { Status as SeatStatus } from "./Status"

export type Seat = Base

export namespace Seat {
	export const is = Base.is
	export const get = Base.get
	export const selectable = Base.selectable
	export const chosen = Base.chosen
	export type Position = SeatPosition
	export const Position = SeatPosition
	export type Status = SeatStatus
	export const Status = SeatStatus
	export type Class = SeatClass
	export const Class = SeatClass
}

// DeMorgans Theorem
// !A && !B == !(A || B)
// !A || !B == !(A && B)
