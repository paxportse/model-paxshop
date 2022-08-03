import * as model from "./index"

describe("model.Flight.Meal", () => {
	const meal: model.Meal = {
		name: "Dinner",
		optional: true,
		alternatives: [
			{ name: "chicken", price: { amount: 10, currency: "DKK" } },
			{ name: "meat", price: { amount: 12, currency: "DKK" } },
		],
	}
	it("is", () => {
		expect(model.Meal.is(meal)).toEqual(true)
	})
	it("is", () => {
		expect(model.Meal.is({ ...meal, optional: undefined })).toEqual(true)
	})
})
