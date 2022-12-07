import * as model from "../index"

describe("model.Luggage.FlightCapacity", () => {
	it("is", () => {
		expect(model.Luggage.FlightCapacity.is({ reference: "FL-001", capacity: 2 })).toEqual(true)
	})
	it("is not", () => {
		expect(model.Luggage.FlightCapacity.is({ reference: "FL-001", capacity: "2" })).toEqual(false)
	})
	it("is not", () => {
		expect(model.Luggage.FlightCapacity.is({ reference: 1, capacity: 2 })).toEqual(false)
	})
})
