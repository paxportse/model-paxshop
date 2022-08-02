import { Alternative } from "../../Flight/Meal/Alternative"
import { Seat } from "../../Flight/Seat"

export interface Item {
	seat: Seat.Positioned
	meal?: Alternative | Alternative[]
}

export namespace Item {
	export function is(value: Item | any): value is Item {
		return (
			typeof value == "object" &&
			Seat.Positioned.is(value.seat) &&
			(value.meal == undefined || Alternative.is(value.meal))
		)
	}
}
