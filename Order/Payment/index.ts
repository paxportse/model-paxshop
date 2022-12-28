import { Netaxept as PaymentNetaxept } from "./Netaxept"
import { Session as PaymentSession } from "./Session"

export type Payment = Payment.Netaxept

export namespace Payment {
	export const is = PaymentNetaxept.is
	export type Session = PaymentSession
	export const Session = PaymentSession
	export type Netaxept = PaymentNetaxept
	export const Netaxept = PaymentNetaxept
}
