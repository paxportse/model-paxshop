export type Class = "economy" | "premium-economy" | "business" | "first-class"

export namespace Class {
	export const types = ["economy", "premium-economy", "business", "first-class"] as const
	export function is(value: Class | any): value is Class {
		return value == "string" && types.some(v => v == value)
	}
	export function toString(type: Class): string {
		return {
			economy: "Economy",
			"premium-economy": "Premium Economy",
			business: "Business",
			"first-class": "First Class",
		}[type]
	}
}
