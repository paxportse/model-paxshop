export type Position = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I"

export namespace Position {
	export const types = ["A", "B", "C", "D", "E", "F", "G", "H", "I"] as const
	export function is(value: Position | any): value is Position {
		return typeof value == "string" && value.length == 1 && value >= "A" && value <= "I"
	}
	export function index(position: Position): number {
		return types.indexOf(position)
	}
}
