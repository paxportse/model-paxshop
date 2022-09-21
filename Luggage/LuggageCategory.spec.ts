import { LuggageCategory } from "./LuggageCategory"

describe("model.Flight.Meal.LuggageCategory", () => {
	const luggageCategory: LuggageCategory = {
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
	it("is", () => {
		expect(LuggageCategory.is(luggageCategory)).toEqual(true)
	})
	it("undefined weight", () => {
		expect(LuggageCategory.is({ ...luggageCategory, weight: undefined })).toEqual(true)
	})
	it("undefined description", () => {
		expect(LuggageCategory.is({ ...luggageCategory, description: undefined })).toEqual(true)
	})
	it("undefined options", () => {
		expect(LuggageCategory.is({ ...luggageCategory, options: undefined })).toEqual(true)
	})
	it("undefined open", () => {
		expect(LuggageCategory.is({ ...luggageCategory, open: undefined })).toEqual(true)
	})
	it("undefined name", () => {
		expect(LuggageCategory.is({ ...luggageCategory, name: undefined })).toEqual(false)
	})
})
