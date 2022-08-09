import "isomorphic-fetch"
import * as dotenv from "dotenv"
import * as model from "../index"

dotenv.config()

describe("model.Client", () => {
	it("booking.fetch", async () => {
		const client = model.Client.create(
			process.env.apiUrl || "https://api.shop.paxport.group",
			"https://app.dummytravel.com/test"
		)
		expect(await client.booking.fetch({ reference: "AAAA12" })).toMatchSnapshot("booking-AAAA12")
	})
})
