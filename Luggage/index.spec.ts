import * as model from "./index"

describe("model.Flight.Luggage", () => {
	const luggage: model.Luggage = {
		reference: "l01",
		name: "Extra weight",
		weight: 20,
		price: { amount: 100, currency: "AFN" },
		description: "Lite text",
	}
	const luggageArray: model.Luggage[] = [luggage, luggage]
	it("is", () => {
		expect(model.Luggage.is(luggage)).toEqual(true)
	})
	it("isArrayOfLuggage", () => {
		expect(model.Luggage.isArrayOfLuggage(luggageArray)).toEqual(true)
	})
})
