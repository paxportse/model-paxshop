import { Netaxept as PaymentNetaxept } from "./Netaxept"
import { Session as PaymentSession } from "./Session"

export type Payment = Payment.Netaxept

export namespace Payment {
	export const is = PaymentNetaxept.is
	export type Session = PaymentSession
	export const Session = PaymentSession
	export type Netaxept = PaymentNetaxept
	export namespace Netaxept {
		export const is = PaymentNetaxept.is
		export type Session = PaymentNetaxept.Session
		export namespace Session {
			export const is = PaymentNetaxept.Session.is
		}
	}
}
