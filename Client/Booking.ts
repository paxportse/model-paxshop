import * as gracely from "gracely"
import * as rest from "cloudly-rest"
import { Booking as modelBooking } from "../Booking"
import { BookingOptions } from "../BookingOptions"
import { BookingSpecifier } from "../BookingSpecifier"

export class Booking extends rest.Collection<gracely.Error> {
	test(): boolean {
		return true
	}
	fetch(specifier: BookingSpecifier): Promise<(modelBooking & { options: BookingOptions }) | gracely.Error> {
		return this.client.get<modelBooking & { options: BookingOptions }>(`booking/${specifier.reference}`)
	}
}
