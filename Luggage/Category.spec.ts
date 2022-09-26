import * as model from "../index"

describe("Category", () => {
	const category: model.Luggage.Category = {
		name: "sport",
		description: "Some description",
		options: [
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "departure",
				price: { amount: 100, currency: "AFN" },
				description: "Lite text",
			},
			{
				reference: "l02",
				name: "Golf Bag",
				weight: 20,
				direction: "departure",
				price: { amount: 100, currency: "AFN" },
				description: "Lite text",
			},
		],
		open: true,
	}
	const luggage = {
		reference: "l01",
		name: "Extra weight",
		weight: 20,
		direction: "departure",
		price: { amount: 100, currency: "AFN" },
		description: "Lite text",
	}
	it("is", () => {
		expect(model.Luggage.Category.is(category)).toEqual(true)
	})
	it("undefined weight", () => {
		expect(model.Luggage.Category.is({ ...category, weight: undefined })).toEqual(true)
	})
	it("undefined description", () => {
		expect(model.Luggage.Category.is({ ...category, description: undefined })).toEqual(true)
	})
	it("undefined options", () => {
		expect(model.Luggage.Category.is({ ...category, options: undefined })).toEqual(true)
	})
	it("undefined open", () => {
		expect(model.Luggage.Category.is({ ...category, open: undefined })).toEqual(true)
	})
	it("undefined name", () => {
		expect(model.Luggage.Category.is({ ...category, name: undefined })).toEqual(false)
	})
	it("luggage type is not category", () => {
		expect(model.Luggage.Category.is(luggage)).toEqual(false)
	})
})
