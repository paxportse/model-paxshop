import { Base } from "./Base"

export interface Toilet extends Base {
	toilet: boolean
}

export namespace Toilet {
	export function is(value: Toilet | any): value is Toilet {
		return typeof value == "object" && value && typeof value.toilet == "boolean" && Base.is(value)
	}
}
