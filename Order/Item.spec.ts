import * as model from "./Item"

describe("model.Item", () => {
	const item: model.Item = {
		reference: "123-4C",
		passenger: "p-001",
		flight: "FL-001",
		name: ["breakfast", "full english"],
		quantity: 2,
		price: { amount: 100, currency: "SEK" },
	}
	it("is", () => {
		expect(model.Item.is(item)).toEqual(true)
	})
	it("is not", () => {
		expect(model.Item.is({ ...item, reference: undefined })).toEqual(false)
	})
})
