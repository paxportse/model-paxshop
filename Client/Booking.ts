import * as gracely from "gracely"
import { Locale } from "isoly"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { Booking as modelBooking } from "../Booking"
import { Order } from "./../Order"
export class Booking extends rest.Collection<gracely.Error> {
	fetch(
		specifier: modelBooking.Specifier,
		language?: Readonly<Locale>[]
	): Promise<Readonly<modelBooking & { options: modelBooking.Options; order: string }> | gracely.Error> {
		return this.client.get<modelBooking & { options: modelBooking.Options; order: string }>(
			`booking/${specifier.reference}`,
			{
				authorization: modelBooking.Specifier.toAuthorization(specifier),
				acceptLanguage: language ?? ["sv-SE", "en-US"],
			}
		)
	}
	update(body: Order, specifier: modelBooking.Specifier): Promise<http.Response.Like | any> {
		return this.client.put<Order>(`booking/${specifier.reference}`, body, {
			authorization: modelBooking.Specifier.toAuthorization(specifier),
			contentType: "application/json",
		})
	}
}
