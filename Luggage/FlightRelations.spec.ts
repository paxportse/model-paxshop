import * as model from "../index"

describe("model.Luggage.FlightRelations", () => {
	it("is", () => {
		expect(model.Luggage.FlightRelations.is({ reference: "FL-001", capacity: 2 })).toEqual(true)
	})
	it("is not", () => {
		expect(model.Luggage.FlightRelations.is({ reference: "FL-001", capacity: "2" })).toEqual(false)
	})
	it("is not", () => {
		expect(model.Luggage.FlightRelations.is({ reference: 1, capacity: 2 })).toEqual(false)
	})
})
