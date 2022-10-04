import * as model from "../index"

describe("model.Flight.Luggage", () => {
	const luggage: model.Luggage = {
		reference: "l01",
		name: "Extra weight",
		weight: 20,
		direction: "departure",
		quantity: 1,
		price: { amount: 100, currency: "AFN" },
		description: "Lite text",
	}
	const luggageArray: model.Luggage[] = [luggage, luggage]

	const addedLuggage: model.Luggage = {
		reference: "l01",
		name: "Extra weight",
		weight: 20,
		direction: "departure",
		quantity: 1,
		price: { amount: 100, currency: "AFN" },
		description: "Lite text",
	}
	const addedLuggageMore: model.Luggage = {
		reference: "l01",
		name: "Extra weight",
		weight: 20,
		direction: "departure",
		quantity: 5,
		price: { amount: 100, currency: "AFN" },
		description: "Lite text",
	}

	const passenger: model.Passenger = {
		reference: "p01",
		name: { first: "Pelle", last: "Karlsson" },
		ageGroup: "child",
		departure: [
			{
				reference: "AA",
				seat: {
					row: { number: 1 },
					position: "A",
					status: "occupied",
					class: "first-class",
					price: { amount: 400, currency: "SEK" },
				},
			},
		],
		luggage: [luggage],
	}
	it("is", () => {
		expect(model.Luggage.is(luggage)).toEqual(true)
	})
	it("is", () => {
		expect(model.Luggage.is({ ...luggage, direction: "roundtrip" })).toEqual(true)
	})
	it("isArrayOfLuggage", () => {
		expect(model.Luggage.isArrayOfLuggage(luggageArray)).toEqual(true)
	})
	it("update luggage", () => {
		expect(model.Luggage.update(luggage, addedLuggage, passenger)).toEqual([
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "departure",
				quantity: 2,
				price: { amount: 100, currency: "AFN" },
				description: "Lite text",
			},
		])
	})
	it("update luggage", () => {
		expect(model.Luggage.update(luggage, addedLuggageMore, passenger)).toEqual([
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "departure",
				quantity: 6,
				price: { amount: 100, currency: "AFN" },
				description: "Lite text",
			},
		])
	})
})
