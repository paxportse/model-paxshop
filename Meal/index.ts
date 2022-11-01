import { Alternative as MealAlternative } from "./Alternative"

export interface Meal {
	reference: string
	name: string
	optional?: boolean
	alternatives: Meal.Alternative[]
}

export namespace Meal {
	export function is(value: Meal | any): value is Meal {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			typeof value.name == "string" &&
			(value.optional == undefined || typeof value.optional == "boolean") &&
			Array.isArray(value.alternatives) &&
			value.alternatives.every(Alternative.is)
		)
	}
	export type Alternative = MealAlternative
	export const Alternative = MealAlternative
}
