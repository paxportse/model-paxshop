import * as model from "./Leg"

describe("model.Leg", () => {
	const leg: model.Leg = {
		reference: "leg01",
		seat: {
			row: { number: 1 },
			position: "A",
			status: "occupied",
			class: "first-class",
			price: { amount: 200, currency: "SEK" },
		},
	}
	it("is", () => {
		expect(model.Leg.is(leg)).toEqual(true)
	})
})
