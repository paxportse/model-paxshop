export interface Contact {
	phone: string
	email: string
}
export namespace Contact {
	export function is(value: any | Contact): value is Contact {
		return typeof value == "object" && value && typeof value.phone == "string" && typeof value.email == "string"
	}
}
