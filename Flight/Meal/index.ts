import { Alternative } from "./Alternative"
import { Option } from "./Option"

export interface Meal {
	name: string
	optional?: boolean
	alternatives: Alternative[]
	options?: Option[] // Vad används denna till?
}

export namespace Meal {
	export function is(value: Meal): value is Meal {
		return typeof value == "object" && typeof value.name == "string" && typeof value.optional == "boolean"
	}
}
