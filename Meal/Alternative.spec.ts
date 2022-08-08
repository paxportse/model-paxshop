import { Alternative } from "./Alternative"

describe("model.Flight.Meal.Alternative", () => {
	const alternative: Alternative = {
		name: "chicken",
		price: { amount: 100, currency: "SEK" },
		default: false,
		description: "Lite text",
	}
	it("is", () => {
		expect(Alternative.is(alternative)).toEqual(true)
	})
	it("is undefined", () => {
		expect(Alternative.is({ ...alternative, name: undefined })).toEqual(true)
	})
	it("is undefined", () => {
		expect(Alternative.is({ ...alternative, price: undefined })).toEqual(true)
	})
	it("is undefined", () => {
		expect(Alternative.is({ ...alternative, default: undefined })).toEqual(true)
	})
	it("is undefined", () => {
		expect(Alternative.is({ ...alternative, description: undefined })).toEqual(true)
	})
})
