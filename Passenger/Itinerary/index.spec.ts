import { Meal } from "../../Meal"
import * as model from "../index"

describe("model.Itinerary", () => {
	const itinerary: model.Passenger.Itinerary = [
		{
			reference: "leg02",
			seat: {
				row: { number: 1 },
				position: "A",
				status: "occupied",
				class: "first-class",
				price: { amount: 200, currency: "SEK" },
			},
		},
	]
	it("is", () => {
		expect(model.Passenger.Itinerary.is(itinerary)).toEqual(true)
	})
	it("update", () => {
		const meal: Meal.Alternative[] = [
			{
				name: "chicken",
				price: { amount: 100, currency: "SEK" },
				default: false,
				description: "Lite text",
			},
		]

		expect(model.Passenger.Itinerary.update(itinerary, [{ meal }])).toEqual([{ ...itinerary[0], meal }])
		const before = [...itinerary, ...itinerary]
		const updated = model.Passenger.Itinerary.update(before, [undefined, { meal }])
		expect(updated).toEqual([before[0], { ...before[1], meal }])
	})
})
