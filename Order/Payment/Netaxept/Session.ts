export interface Session {
	provider: "netaxept" | "netaxept-staging"
	target?: string
}
export namespace Session {
	export function is(value: any | Session): value is Session {
		return false
	}
}
