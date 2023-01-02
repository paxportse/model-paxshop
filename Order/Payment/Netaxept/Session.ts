export interface Session {
	shop: number
	target?: string
}
export namespace Session {
	export function is(value: any | Session): value is Session {
		return (
			typeof value == "object" &&
			value &&
			typeof value.shop == "number" &&
			(typeof value.target == "undefined" || typeof value.target == "string")
		)
	}
}
