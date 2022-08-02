export type AgeGroup = "adult" | "child" | "infant"

export namespace AgeGroup {
	export const types = ["adult", "child", "infant"] as const
	export function is(value: AgeGroup | any): value is AgeGroup {
		return value == "string" && types.some(v => v == value)
	}
}
