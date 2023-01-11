export interface Deck {
	floor: string
}
export namespace Deck {
	export function is(value: Deck | any): value is Deck {
		return typeof value == "object" && value && typeof value.floor == "string"
	}
}
