import { Netaxept } from "./Netaxept"
export type Session = Netaxept.Session
export namespace Session {
	export function is(value: any | Session): value is Session {
		return false
	}
}
