export interface Name {
	title?: "Mr" | "Mrs" | "Ms" | "Dr"
	first: string
	last: string
}

export namespace Name {
	export const types = ["Mr", "Mrs", "Ms", "Dr"] as const
	export function is(value: Name | any): value is Name {
		return (
			typeof value == "object" &&
			typeof value.first == "string" &&
			typeof value.last == "string" &&
			(value.title == undefined || (typeof value.title == "string" && types.some(v => v == value.title)))
		)
	}
	export function format(name: Name): string {
		return `${name.first} ${name.last}`
	}
	export function initials(name: Name): string {
		return `${name.first[0]}${name.last[0]}`
	}
}
