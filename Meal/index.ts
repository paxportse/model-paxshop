import { Alternative as MealAlternative } from "./Alternative"
// import { Option } from "./Option"

export interface Meal {
	reference: string
	name: string
	optional?: boolean
	alternatives: Meal.Alternative[]
	//options?: Option[] // Vad används denna till?
}

export namespace Meal {
	export function is(value: Meal): value is Meal {
		return (
			typeof value == "object" &&
			(value.reference == undefined || typeof value.reference == "string") && // Is this wrong? Reference should not be undefined.
			typeof value.name == "string" &&
			(value.optional == undefined || typeof value.optional == "boolean") &&
			Array.isArray(value.alternatives) &&
			value.alternatives.every(Alternative.is)
		)
	}
	export type Alternative = MealAlternative
	export const Alternative = MealAlternative
}
