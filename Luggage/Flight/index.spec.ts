import * as model from "../../index"

describe("model.Luggage.Flights", () => {
	it("is", () => {
		expect(model.Luggage.Flight.is({ reference: "FL-001", capacity: 2 })).toEqual(true)
	})
	it("is", () => {
		expect(
			model.Luggage.Flight.is({ reference: "FL-001", capacity: 2, price: { amount: 200, currency: "SEK" } })
		).toEqual(true)
	})
	it("is not", () => {
		expect(model.Luggage.Flight.is({ reference: "FL-001", capacity: "2" })).toEqual(false)
	})
	it("is not", () => {
		expect(model.Luggage.Flight.is({ reference: 1, capacity: 2 })).toEqual(false)
	})
})
