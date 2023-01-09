import { Alternative } from "../Alternative"

export interface Options {
	reference: string
	name: string
	optional?: boolean
	alternatives: Alternative[]
}

export namespace Options {
	export function is(value: Options | any): value is Options {
		return (
			typeof value == "object" &&
			value &&
			typeof value.reference == "string" &&
			typeof value.name == "string" &&
			(value.optional == undefined || typeof value.optional == "boolean") &&
			Array.isArray(value.alternatives) &&
			value.alternatives.every(Alternative.is)
		)
	}
}
