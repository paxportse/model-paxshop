import * as model from "./Item"

describe("model.Item", () => {
	const item: model.Item = {
		seat: {
			row: { number: 1 },
			position: "A",
			status: "occupied",
			class: "first-class",
			price: { amount: 200, currency: "SEK" },
		},
	}
	it("is", () => {
		expect(model.Item.is(item)).toEqual(true)
	})
})
