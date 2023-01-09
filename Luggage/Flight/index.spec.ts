import * as model from "../../index"

describe("model.Luggage.FlightReference", () => {
	it("is", () => {
		expect(model.Luggage.FlightReference.is({ reference: "FL-001", capacity: 2 })).toEqual(true)
	})
	it("is", () => {
		expect(
			model.Luggage.FlightReference.is({ reference: "FL-001", capacity: 2, price: { amount: 200, currency: "SEK" } })
		).toEqual(true)
	})
	it("is not", () => {
		expect(model.Luggage.FlightReference.is({ reference: "FL-001", capacity: "2" })).toEqual(false)
	})
	it("is not", () => {
		expect(model.Luggage.FlightReference.is({ reference: 1, capacity: 2 })).toEqual(false)
	})
})
