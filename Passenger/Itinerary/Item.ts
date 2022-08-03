import { Alternative } from "../../Flight/Meal/Alternative"
import { Seat } from "../../Flight/Seat"

export interface Item {
	seat: Seat.Positioned
	meal?: Alternative | Alternative[]
}

export namespace Item {
	export function is(value: Item | any): value is Item {
		let meal: any
		return (
			typeof value == "object" &&
			Seat.Positioned.is(value.seat) &&
			((meal = value.meal) == undefined || Alternative.is(meal) || (Array.isArray(meal) && meal.every(Alternative.is)))
		)
	}
}
