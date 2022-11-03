import * as model from "../index"

describe("model.Flight.Meal", () => {
	const meal: model.Meal = {
		name: "dinner",
		reference: "ref-034",
		optional: true,
		alternatives: [
			{ name: "chicken", price: { amount: 10, currency: "DKK" } },
			{ name: "meat", price: { amount: 12, currency: "DKK" } },
		],
	}
	const meal2: model.Meal = {
		name: "Dinner",
		reference: "D-13",
		optional: true,
		alternatives: [{ name: "chicken", price: { amount: 100, currency: "SEK" } }],
	}
	const alternative: model.Meal.Alternative = { name: "chicken", price: { amount: 100, currency: "SEK" } }

	const leg: model.Passenger.Itinerary.Leg = {
		reference: "leg-02",
		seat: {
			row: { number: 1 },
			position: "A",
			status: "available",
			class: "first-class",
			price: { amount: 200, currency: "SEK" },
		},
	}

	const leg2: model.Passenger.Itinerary.Leg = { ...leg, reference: "leg-1337", meal: [meal2] }
	it("is", () => {
		expect(model.Meal.is(meal)).toEqual(true)
	})
	it("is not optional", () => {
		expect(model.Meal.is({ ...meal, optional: undefined })).toEqual(true)
	})
	it("is reference", () => {
		expect(model.Meal.is({ ...meal, reference: "ref-001" })).toEqual(true)
	})

	it("update passenger meal", () => {
		expect(model.Meal.updatePassengerMeal(meal2, alternative, [leg, leg2], 0)).toEqual([meal2])
	})
	it("update passenger meal - deselect", () => {
		expect(model.Meal.updatePassengerMeal({ ...meal2 }, alternative, [leg, leg2], 1)).toEqual([undefined])
	})
})
