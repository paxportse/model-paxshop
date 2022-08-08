export type Status = "occupied" | "available" | "selected" | "unavailable"

export namespace Status {
	export const types = ["occupied", "available", "selected", "unavailable"] as const
	export function is(value: Status | any): value is Status {
		return typeof value == "string" && types.some(v => v == value)
	}
}
