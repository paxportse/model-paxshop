import { Category } from "./Category"

describe("Category", () => {
	const category: Category = {
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
		expect(Category.is(category)).toEqual(true)
	})
	it("undefined weight", () => {
		expect(Category.is({ ...category, weight: undefined })).toEqual(true)
	})
	it("undefined description", () => {
		expect(Category.is({ ...category, description: undefined })).toEqual(true)
	})
	it("undefined options", () => {
		expect(Category.is({ ...category, options: undefined })).toEqual(true)
	})
	it("undefined open", () => {
		expect(Category.is({ ...category, open: undefined })).toEqual(true)
	})
	it("undefined name", () => {
		expect(Category.is({ ...category, name: undefined })).toEqual(false)
	})
})
