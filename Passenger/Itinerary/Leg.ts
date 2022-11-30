import { Layout } from "../../Layout"
import { Meal } from "../../Meal"

export interface Leg {
	reference: string
	seat?: Layout.Seat
	meal?: Meal[]
}

export namespace Leg {
	export function is(value: Leg | any): value is Leg {
		let meal: any
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			(value.seat == undefined || Layout.Seat.is(value.seat)) &&
			((meal = value.meal) == undefined || Meal.is(meal) || (Array.isArray(meal) && meal.every(Meal.Alternative.is)))
		)
	}
}
