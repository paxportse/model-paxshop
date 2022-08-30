export interface Airport {
	code: string
	name: string
}
export namespace Airport {
	export function is(value: Airport | any): value is Airport {
		return typeof value == "object" && typeof value.code == "string" && typeof value.name == "string"
	}
}
