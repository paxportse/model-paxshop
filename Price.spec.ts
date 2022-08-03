import { Price } from "./Price"

describe("model.Flight.Seat", () => {
	const price: Price = { amount: 200, currency: "SEK" }
	it("is", () => {
		expect(Price.is(price)).toEqual(true)
	})
})
