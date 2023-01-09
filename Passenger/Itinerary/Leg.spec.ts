import * as model from "./Leg"

describe("model.Leg", () => {
	const leg: model.Leg = {
		reference: "leg01",
		seat: {
			position: { row: 1, column: "A" },
			status: "occupied",
			class: "first-class",
			price: { amount: 200, currency: "SEK" },
			reference: "123",
		},
	}
	it("is", () => {
		expect(model.Leg.is(leg)).toEqual(true)
	})
	it("is not", () => {
		expect(model.Leg.is({ ...leg, reference: undefined })).toEqual(false)
	})
})
