import { Luggage } from "."

export interface LuggageCategory {
	name: string
	description?: string
	options?: Luggage[]
	open?: boolean
}
export namespace LuggageCategory {
	export function is(value: LuggageCategory | any): value is LuggageCategory {
		return (
			typeof value == "object" &&
			typeof value.name == "string" &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.options == undefined ||
				(Array.isArray(value.options) && value.options.every((o: Luggage) => Luggage.is(o)))) &&
			(value.open == undefined || typeof value.open == "boolean")
		)
	}
}
