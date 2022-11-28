// import { Base as Seat } from "../Seat/Base"
import { Group } from "../Group"

export interface Base {
	groups?: (Group | undefined)[]
	exit?: boolean
	wing?: boolean
	toilet?: boolean
}
export namespace Base {
	export function is(value: Base | any): value is Base {
		return (
			typeof value == "object" &&
			(value.groups == undefined ||
				(Array.isArray(value.groups) && value.groups.every((group: any) => Group.is(group)))) &&
			(value.exit == undefined || typeof value.exit == "boolean") &&
			(value.wing == undefined || typeof value.wing == "boolean") &&
			(value.toilet == undefined || typeof value.toilet == "boolean")
		)
	}
}
