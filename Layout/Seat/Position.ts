import { Group } from "../Group"

export type Position = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I"

export namespace Position {
	export const types = ["A", "B", "C", "D", "E", "F", "G", "H", "I"] as const
	export function is(value: Position | any): value is Position {
		return typeof value == "string" && value.length == 1 && value >= "A" && value <= "I"
	}
	export function index(position: Position, groups: (Group | undefined)[]): number {
		const Positions: Position[] = []
		groups?.forEach(g => Group.Seats.is(g) && g.seats.forEach(s => s?.position && Positions.push(s?.position)))
		const result = Positions.indexOf(position)
		return result < 0 ? -1 : result
	}
}
