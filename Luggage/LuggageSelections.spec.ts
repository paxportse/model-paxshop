import * as model from "../index"
describe("model.Luggage.LuggageSelections", () => {
	const luggage: (model.Luggage | model.Luggage.Category)[] = [
		{
			reference: "l01",
			name: "Extra weight",
			weight: 20,
			direction: "departure",
			quantity: 1,
			price: { amount: 100, currency: "AFN" },
			description: "Some text",
			flights: [
				{ reference: "FL-054", capacity: 2 },
				{ reference: "UDE-342", capacity: 5 },
			],
		},
		{
			name: "sport",
			description: "Some description",
			options: [
				{
					reference: "l02",
					name: "Hangglider",
					weight: 20,
					direction: "departure",
					price: { amount: 100, currency: "AFN" },
					description: "Some text",
				},
				{
					reference: "l03",
					name: "Golf Bag",
					weight: 20,
					direction: "departure",
					price: { amount: 100, currency: "AFN" },
					description: "Some text",
				},
			],
			flights: [
				{ reference: "FL-001", capacity: 2 },
				{ reference: "FL-003", capacity: 2 },
			],
		},
	]
	it("is", () => {
		expect(model.Luggage.LuggageSelections.is({ reference: "L-1234", selections: 0 })).toEqual(true)
	})
	it("create", () => {
		expect(model.Luggage.LuggageSelections.create(luggage)).toEqual([
			{ reference: "l01", selections: 0 },
			{ reference: "l02", selections: 0 },
			{ reference: "l03", selections: 0 },
		])
	})
})
