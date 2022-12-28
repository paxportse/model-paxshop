import * as isoly from "isoly"
import { Session as NetaxeptSession } from "./Session"

export interface Netaxept extends Netaxept.Session {
	reference: string
	amount: number
	currency: isoly.Currency
}

export namespace Netaxept {
	export function is(value: any | Netaxept): value is Netaxept {
		return (
			typeof value == "object" &&
			value &&
			typeof value.reference == "string" &&
			typeof value.amount == "number" &&
			isoly.Currency.is(value.currency) &&
			Netaxept.Session.is(value)
		)
	}
	export type Session = NetaxeptSession
	export const Session = NetaxeptSession
}
