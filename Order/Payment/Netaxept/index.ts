import { Price } from "../../../Price"
import { Session as NetaxeptSession } from "./Session"

export interface Netaxept extends Netaxept.Session {
	reference: string
	price: Price
}

export namespace Netaxept {
	export function is(value: any | Netaxept): value is Netaxept {
		return typeof value == "object" && value && Price.is(value.price) && Netaxept.Session.is(value)
	}
	export type Session = NetaxeptSession
	export const Session = NetaxeptSession
}
