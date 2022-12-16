import { Category } from "./Category"
import { Luggage } from "./index"

export interface LuggageSelections {
	reference: string
	selections: number
}
export namespace LuggageSelections {
	export function is(value: LuggageSelections | any): value is LuggageSelections {
		return typeof value == "object" && typeof value.reference == "string" && typeof value.selections == "number"
	}
	export function create(luggage: (Luggage | Category)[]): LuggageSelections[] | undefined {
		const result: LuggageSelections[] = []
		luggage.forEach(l => {
			Category.is(l)
				? l.options?.forEach(o => Luggage.is(o) && result.push({ reference: o.reference, selections: 0 }))
				: Luggage.is(l) && result.push({ reference: l.reference, selections: 0 })
		})
		return result // check length or undefined
	}
}
