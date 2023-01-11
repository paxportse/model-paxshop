import { Group } from "../../Group"

export type Column = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I"

export namespace Column {
	export const types = ["A", "B", "C", "D", "E", "F", "G", "H", "I"] as const
	export function is(value: Column | any): value is Column {
		return typeof value == "string" && value.length == 1 && value >= "A" && value <= "I"
	}
	export function index(column: Column, groups: (Group | undefined)[]): number {
		const columns: Column[] = []
		groups?.forEach(
			g => Group.Seats.is(g) && g.seats.forEach(s => s?.position.column && columns.push(s?.position.column))
		)
		const result = columns.indexOf(column)
		return result < 0 ? -1 : result
	}
}
