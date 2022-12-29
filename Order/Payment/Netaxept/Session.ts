export interface Session {
	provider: "netaxept"
	shop: number
	target?: string
}
export namespace Session {
	export function is(value: any | Session): value is Session {
		return (
			typeof value == "object" &&
			value &&
			value.provider == "netaxept" &&
			typeof value.shop == "number" &&
			(typeof value.target == "undefined" || typeof value.target == "string")
		)
	}
}
