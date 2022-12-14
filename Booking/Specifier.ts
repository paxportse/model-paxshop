import * as cryptly from "cryptly"
import * as isoly from "isoly"
import { Passenger } from "../Passenger"

export interface Specifier {
	reference: string
	departure: isoly.Date
	name?: Passenger.Name
}

export namespace Specifier {
	export function is(value: Specifier | any): value is Specifier {
		return (
			typeof value == "object" &&
			value &&
			typeof value.reference == "string" &&
			isoly.Date.is(value.departure) &&
			(value.name == undefined || Passenger.Name.is(value.name))
		)
	}
	export function fromAuthorization(
		authorization: string | undefined,
		reference: string | undefined
	): Specifier | undefined {
		let result: Specifier | undefined
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
	export function toAuthorization(specifier: Specifier): string {
		return `Basic ${cryptly.Base64.encode(
			new cryptly.TextEncoder().encode(specifier.departure + ":" + (specifier.name?.last ?? "")),
			"standard",
			"="
		)}`
	}
}
