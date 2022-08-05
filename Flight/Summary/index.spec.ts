import * as model from "./index"

describe("model.Flight.Summary", () => {
	const summary: model.Summary = {
		seat: { status: "available", class: "business", price: { amount: 100, currency: "AED" } },
		luggage: { reference: "l01", name: "Extra weight", weight: 20 },
		price: { amount: 2000, currency: "AED" },
	}
	it("is", () => {
		expect(model.Summary.is(summary)).toEqual(true)
	})
})
