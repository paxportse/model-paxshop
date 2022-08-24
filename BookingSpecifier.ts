import * as cryptly from "cryptly"
import * as isoly from "isoly"
import { Passenger } from "./Passenger"

export interface BookingSpecifier {
	reference: string
	departure: isoly.Date
	name?: Partial<Passenger.Name>
}

export namespace BookingSpecifier {
	export function fromAuthorization(
		authorization: string | undefined,
		reference: string | undefined
	): BookingSpecifier | undefined {
		let result: BookingSpecifier | undefined
		if (reference && authorization && authorization.substring(0, 6).toLowerCase() == "basic ") {
			const [departure, name] = new cryptly.TextDecoder()
				.decode(cryptly.Base64.decode(authorization.substring(6), "standard"))
				.split(":")
			result = isoly.Date.is(departure) ? { reference, departure } : undefined
			if (name && result)
				result.name = { last: name }
		}
		return result
	}
	export function toAuthorization(specifier: BookingSpecifier): string {
		return `Basic ${cryptly.Base64.encode(
			new cryptly.TextEncoder().encode(specifier.departure + ":" + specifier.name ?? ""),
			"standard",
			"="
		)}`
	}
}
