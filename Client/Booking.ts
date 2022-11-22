import * as gracely from "gracely"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { Booking as modelBooking } from "../Booking"
import { BookingOptions } from "../BookingOptions"
import { BookingSpecifier } from "../BookingSpecifier"
import { Order } from "./../Order"
export class Booking extends rest.Collection<gracely.Error> {
	fetch(
		specifier: BookingSpecifier,
		language?: string[]
	): Promise<Readonly<modelBooking & { options: BookingOptions }> | gracely.Error> {
		return this.client.get<modelBooking & { options: BookingOptions }>(`booking/${specifier.reference}`, {
			authorization: BookingSpecifier.toAuthorization(specifier),
			acceptLanguage: language ?? ["sv-SE", "en-US"],
		})
	}
	update(body: Order, specifier: BookingSpecifier): Promise<http.Response.Like | any> {
		return this.client.put<Order>(`booking/${specifier.reference}`, body, {
			authorization: BookingSpecifier.toAuthorization(specifier),
			contentType: "application/json",
		})
	}
}
