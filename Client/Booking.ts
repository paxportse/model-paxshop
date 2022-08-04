import * as gracely from "gracely"
import * as rest from "cloudly-rest"
import { Booking as modelBooking } from "../Booking"
import { BookingSpecifier } from "../BookingSpecifier"

export class Booking extends rest.Collection<gracely.Error> {
	test(): boolean {
		return true
	}
	fetch(specifier: BookingSpecifier): Promise<modelBooking | gracely.Error> {
		return this.client.get<modelBooking>(`booking/${specifier.reference}`)
	}
}
