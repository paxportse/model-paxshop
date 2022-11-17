import * as model from "../index"

describe("model.Flight.Luggage", () => {
	const booking: model.BookingOptions = {
		departure: [
			{
				reference: "BLX504",
				from: { code: "ARN", name: "Arlanda Airport" },
				to: { code: "LHR", name: "Heathrow Airport" },
				departure: "2022-09-28T10:02:00.000Z",
				arrival: "2022-09-28T12:22:00.000Z",
				meals: [
					{
						reference: "ref-454",
						name: "Dinner",
						optional: true,
						alternatives: [
							{ name: "chicken", price: { amount: 10, currency: "DKK" } },
							{ name: "meat", price: { amount: 12, currency: "DKK" } },
						],
					},
				],
				seating: [
					{
						groups: [
							{
								seats: [
									{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
									{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
								],
							},
						],
					},
				],
			},
		],
		return: [
			{
				reference: "UDE342",
				from: { code: "LHR", name: "Heathrow Airport" },
				to: { code: "ARN", name: "Arlanda Airport" },
				departure: "2022-10-18T10:10:00.000Z",
				arrival: "2022-10-18T22:22:00.000Z",
				meals: [
					{
						reference: "ref-5464",
						name: "Dinner",
						optional: true,
						alternatives: [
							{ name: "chicken", price: { amount: 10, currency: "DKK" } },
							{ name: "meat", price: { amount: 12, currency: "DKK" } },
						],
					},
				],
				seating: [
					{
						groups: [
							{
								seats: [
									{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK", offer: 200 } },
									{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
								],
							},
						],
					},
				],
			},
		],
		luggage: [
			{
				name: "Sport",
				description: "Some description",
				options: [
					{
						reference: "lug-009",
						name: "Bicycle",
						weight: 20,
						direction: "roundtrip",
						price: { amount: 300, currency: "SEK" },
						description: "Adult sized bike",
					},
				],
				open: true,
				flights: ["BLX504", "UDE342"],
			},
			{
				reference: "lug-006",
				name: "Extra Bag",
				weight: 20,
				direction: "roundtrip",
				price: { amount: 300, currency: "SEK" },
				description: "Extra bag with the maximum weight of 20kg",
				flights: ["BLX504", "UDE342"],
			},
			{
				reference: "lug-001",
				name: "Extra weight",
				weight: 20,
				direction: "roundtrip",
				price: { amount: 100, currency: "SEK" },
				description: "Added weight when a piece of luggage exceeds weight limit",
				flights: ["BLX504"],
			},
			{
				reference: "lug-008",
				name: "Extra weight",
				weight: 20,
				direction: "roundtrip",
				price: { amount: 100, currency: "SEK" },
				description: "Added weight when a piece of luggage exceeds weight limit",
				flights: ["BLX504", "MEH001"],
			},
		],
	}
	const luggage: model.Luggage = {
		reference: "l01",
		name: "Extra weight",
		weight: 20,
		direction: "departure",
		quantity: 1,
		price: { amount: 100, currency: "AFN" },
		description: "Lite text",
		flights: ["BLX504", "UDE342"],
	}
	const luggageArray: model.Luggage[] = [luggage, luggage]

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
		expect(model.Luggage.update(luggage, passenger, "add")).toEqual([
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "departure",
				quantity: 2,
				price: { amount: 100, currency: "AFN" },
				description: "Lite text",
				flights: ["BLX504", "UDE342"],
			},
		])
	})
	it("update luggage", () => {
		expect(model.Luggage.update(luggage, passenger, "remove")).toEqual([
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "departure",
				quantity: 0,
				price: { amount: 100, currency: "AFN" },
				description: "Lite text",
				flights: ["BLX504", "UDE342"],
			},
		])
	})
	it("filter luggage", () => {
		expect(
			model.Luggage.filter(booking, {
				...passenger,
				departure: [
					{
						reference: "UDE342",
						seat: {
							row: { number: 1 },
							position: "A",
							status: "occupied",
							class: "first-class",
							price: { amount: 400, currency: "SEK" },
						},
					},
				],
			})
		).toEqual([
			{
				name: "Sport",
				description: "Some description",
				options: [
					{
						reference: "lug-009",
						name: "Bicycle",
						weight: 20,
						direction: "roundtrip",
						price: { amount: 300, currency: "SEK" },
						description: "Adult sized bike",
					},
				],
				open: true,
				flights: ["BLX504", "UDE342"],
			},
			{
				reference: "lug-006",
				name: "Extra Bag",
				weight: 20,
				direction: "roundtrip",
				price: { amount: 300, currency: "SEK" },
				description: "Extra bag with the maximum weight of 20kg",
				flights: ["BLX504", "UDE342"],
			},
		])
	})
	it("filter luggage", () => {
		expect(
			model.Luggage.filter(booking, {
				...passenger,
				departure: [
					{
						reference: "UDE342",
						seat: {
							row: { number: 1 },
							position: "A",
							status: "occupied",
							class: "first-class",
							price: { amount: 400, currency: "SEK" },
						},
					},
				],
			})
		).toEqual([
			{
				name: "Sport",
				description: "Some description",
				options: [
					{
						reference: "lug-009",
						name: "Bicycle",
						weight: 20,
						direction: "roundtrip",
						price: { amount: 300, currency: "SEK" },
						description: "Adult sized bike",
					},
				],
				open: true,
				flights: ["BLX504", "UDE342"],
			},
			{
				reference: "lug-006",
				name: "Extra Bag",
				weight: 20,
				direction: "roundtrip",
				price: { amount: 300, currency: "SEK" },
				description: "Extra bag with the maximum weight of 20kg",
				flights: ["BLX504", "UDE342"],
			},
		])
	})
	it("filter luggage, no luggage", () => {
		expect(
			model.Luggage.filter(booking, {
				...passenger,
				departure: [
					{
						reference: "ABC",
						seat: {
							row: { number: 1 },
							position: "A",
							status: "occupied",
							class: "first-class",
							price: { amount: 400, currency: "SEK" },
						},
					},
				],
			})
		).toEqual([])
	})
})
