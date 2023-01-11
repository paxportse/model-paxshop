import { Group } from "../Group"

export interface Base {
	groups?: (Group | undefined)[]
	number?: number
	exit?: boolean
	wing?: boolean
	toilet?: boolean
}
export namespace Base {
	export function is(value: Base | any): value is Base {
		return (
			typeof value == "object" &&
			value &&
			(value.groups == undefined ||
				(Array.isArray(value.groups) && value.groups.every((group: any) => group == undefined || Group.is(group)))) &&
			(value.number == undefined || typeof value.number == "number") &&
			(value.exit == undefined || typeof value.exit == "boolean") &&
			(value.wing == undefined || typeof value.wing == "boolean") &&
			(value.toilet == undefined || typeof value.toilet == "boolean")
		)
	}
}
