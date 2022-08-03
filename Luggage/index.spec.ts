import * as model from "./index"

describe("model.Flight.Luggage", () => {
	const luggage: model.Luggage = {
		name: "Extra weight",
		weight: 20,
		price: { amount: 100, currency: "AFN" },
		luggageTotal: { amount: 3000, currency: "AFN" },
		description: "Lite text",
	}
	it("is", () => {
		expect(model.Luggage.is(luggage)).toEqual(true)
	})
})
