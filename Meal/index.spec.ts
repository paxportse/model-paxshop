import * as model from "../index"

describe("model.Flight.Meal", () => {
	const meal: model.Meal = {
		name: "dinner",
		reference: "ref-034",
		alternative: { name: "chicken", price: { amount: 10, currency: "DKK" }, reference: "345" },
	}
	const meal2: model.Meal = {
		name: "dinner",
		reference: "D-13",
		alternative: { name: "chicken", price: { amount: 100, currency: "SEK" }, reference: "345" },
	}
	const alternative: model.Meal.Alternative = {
		name: "chicken",
		price: { amount: 100, currency: "SEK" },
		reference: "345",
	}

	const leg: model.Passenger.Itinerary.Leg = {
		reference: "leg-02",
		seat: {
			row: { number: 1 },
			position: "A",
			status: "available",
			class: "first-class",
			price: { amount: 200, currency: "SEK" },
			reference: "123",
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
		expect(model.Meal.updatePassengerMeal(meal2, alternative, "dinner", [leg, leg2], 0)).toEqual([meal2])
	})
	it("update passenger meal, deselect", () => {
		expect(model.Meal.updatePassengerMeal(undefined, undefined, "dinner", [leg, leg2], 1)).toEqual([])
	})
})
