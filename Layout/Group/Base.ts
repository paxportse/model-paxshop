export interface Base {
	offset?: [number, number]
}
export namespace Base {
	export function is(value: Base | any): value is Base {
		return (
			typeof value == "object" &&
			(value.offset == undefined ||
				(Array.isArray(value.offset) &&
					value.offset.length == 2 &&
					value.offset.every((v: any) => typeof v == "number")))
		)
	}
}
