import { Luggage } from "../../Luggage"
import { Price } from "../../Price"
import { Meal } from "../Meal"
import { Seat } from "../Seat"

export interface Summary {
	seat: Seat
	luggage?: Luggage
	meal?: Meal
	price: Price
}

export namespace Summary {
	export function is(value: Summary): value is Summary {
		return (
			typeof value == "object" &&
			Seat.is(value.seat) &&
			(value.luggage == undefined || Luggage.is(value.luggage)) &&
			(value.meal == undefined || Meal.is(value.meal)) &&
			Price.is(value.price)
		)
	}
}
