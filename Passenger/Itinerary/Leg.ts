import { Layout } from "../../Layout"
import { Meal } from "../../Meal"

export interface Leg {
	reference?: string
	seat?: Layout.Seat.Positioned
	meal?: Meal.Alternative[]
}

export namespace Leg {
	export function is(value: Leg | any): value is Leg {
		let meal: any
		return (
			typeof value == "object" &&
			(value.reference == undefined || typeof value.reference == "string") &&
			(value.seat == undefined || Layout.Seat.Positioned.is(value.seat)) &&
			((meal = value.meal) == undefined ||
				Meal.Alternative.is(meal) ||
				(Array.isArray(meal) && meal.every(Meal.Alternative.is)))
		)
	}
}
