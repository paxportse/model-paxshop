export type Layout = [1, 1] | [1, 2] | [2, 2] | [3, 3] | [2, 3, 2] | [3, 3, 3]
export namespace Layout {
	export function is(value: Layout | any): value is Layout {
		return Array.isArray(value) && value.every(v => typeof v == "number")
	}
}
