import { Base } from "./Base"

export interface Positioned extends Base {
	number?: number
}
export namespace Positioned {
	export function is(value: Positioned | any): value is Positioned {
		return (
			typeof value == "object" &&
			(value.number == undefined || (typeof value.number == "number" && value.number > 0)) &&
			Base.is(value)
		)
	}
}
