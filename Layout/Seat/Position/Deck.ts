export interface Deck {
	number: string
}
export namespace Deck {
	export function is(value: Deck | any): value is Deck {
		return typeof value == "object" && value && typeof value.number == "string"
	}
}
