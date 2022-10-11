import { Meal } from "../../Meal"
import * as model from "../index"

describe("model.Itinerary", () => {
	const itinerary: model.Passenger.Itinerary = [
		{
			reference: "leg02",
			seat: {
				row: { number: 1 },
				position: "A",
				status: "available",
				class: "first-class",
				price: { amount: 200, currency: "SEK" },
			},
		},
	]
	it("is", () => {
		expect(model.Passenger.Itinerary.is(itinerary)).toEqual(true)
	})
	it("update", () => {
		const meal: Meal[] = [
			{
				name: "Dinner",
				reference: "ref-34",
				optional: true,
				alternatives: [
					{
						name: "chicken",
						price: { amount: 100, currency: "SEK" },
						default: false,
						description: "Lite text",
					},
				],
			},
		]

		// Update Itinerary at a certain index.
		expect(model.Passenger.Itinerary.update(itinerary, [{ reference: "leg02", meal }])).toEqual([
			{ ...itinerary[0], meal },
		])
		const before = [itinerary[0], { ...itinerary[0], reference: "leg03" }]
		expect(model.Passenger.Itinerary.update(before, [{ reference: "leg03", meal }])).toEqual([
			before[0],
			{ ...before[1], meal },
		])

		expect(
			model.Passenger.Itinerary.update(itinerary, [
				{ reference: "leg02", meal },
				{ reference: "leg03", meal },
			])
		).toEqual([{ ...itinerary[0], meal }])
	})
})
