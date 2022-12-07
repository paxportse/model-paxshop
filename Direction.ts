export type Direction = "departure" | "return" | "roundtrip"

export namespace Direction {
	export const types = ["departure", "return", "roundtrip"] as const
	export function is(value: Direction | any): value is Direction {
		return typeof value == "string" && types.some(type => type == value)
	}
}
