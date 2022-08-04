import * as gracely from "gracely"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { Booking } from "./Booking"

export class Client extends rest.Client<gracely.Error> {
	readonly booking = new Booking(this.client)
	static create<T extends Record<string, any> = Record<string, never>>(
		server: string,
		referer: string,
		load?: (client: http.Client) => T
	): Client & T {
		const client = new Backend(server, referer)
		const result = new Client(client)
		if (load)
			Object.assign(result, load(client))
		return result as Client & T
	}
}

class Backend extends http.Client<gracely.Error> {
	constructor(server: string, readonly referer: string) {
		super(server)
	}
	protected async preProcess(request: http.Request): Promise<http.Request> {
		return { ...request, header: { referer: this.referer, ...request.header } }
	}
}
