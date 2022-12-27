export interface Contact {
	phone: string
	email: string
}
export namespace Contact {
	export function is(value: any | Contact): value is Contact {
		return false
	}
}
