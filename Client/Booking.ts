import * as gracely from "gracely"
import { Locale } from "isoly"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { Booking as ModelBooking } from "../Booking"
import { Order } from "./../Order"
export class Booking extends rest.Collection<gracely.Error> {
	fetch(
		specifier: ModelBooking.Specifier,
		language?: Readonly<Locale>[]
	): Promise<Readonly<ModelBooking & { options: ModelBooking.Options; order: string }> | gracely.Error> {
		return this.client.get<ModelBooking & { options: ModelBooking.Options; order: string }>(
			`booking/${specifier.reference}`,
			{
				authorization: ModelBooking.Specifier.toAuthorization(specifier),
				acceptLanguage: language ?? ["sv-SE", "en-US"],
			}
		)
	}
	update(body: Order, specifier: ModelBooking.Specifier): Promise<http.Response.Like | any> {
		return this.client.put<Order>(`booking/${specifier.reference}`, body, {
			authorization: ModelBooking.Specifier.toAuthorization(specifier),
			contentType: "application/json",
		})
	}
}
