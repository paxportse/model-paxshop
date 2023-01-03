import * as model from "../index"

describe("model.Flight.Luggage", () => {
	const booking: model.BookingOptions = {
		departure: [
			{
				reference: "FL-054",
				number: "PAX054",
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
							{ name: "chicken", price: { amount: 10, currency: "DKK" }, reference: "345" },
							{ name: "meat", price: { amount: 12, currency: "DKK" }, reference: "345" },
						],
					},
				],
				seating: [
					{
						groups: [
							{
								seats: [
									{
										status: "available",
										class: "first-class",
										row: { number: 1 },
										position: "A",
										price: { amount: 400, currency: "SEK" },
										reference: "123",
									},
									{
										status: "available",
										class: "first-class",
										row: { number: 1 },
										position: "B",
										price: { amount: 400, currency: "SEK" },
										wide: true,
										reference: "123",
									},
								],
							},
						],
					},
				],
			},
		],
		return: [
			{
				reference: "UDE-342",
				number: "PAX342",
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
							{ name: "chicken", price: { amount: 10, currency: "DKK" }, reference: "345" },
							{ name: "meat", price: { amount: 12, currency: "DKK" }, reference: "345" },
						],
					},
				],
				seating: [
					{
						groups: [
							{
								seats: [
									{
										status: "available",
										class: "first-class",
										row: { number: 1 },
										position: "A",
										price: { amount: 400, currency: "SEK", offer: 200 },
										reference: "123",
									},
									{
										status: "available",
										class: "first-class",
										row: { number: 1 },
										position: "B",
										price: { amount: 400, currency: "SEK" },
										wide: true,
										reference: "123",
									},
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
				flights: [
					{ reference: "FL-054", capacity: 2 },
					{ reference: "UDE-342", capacity: 5 },
				],
			},
			{
				reference: "lug-006",
				name: "Extra Bag",
				weight: 20,
				direction: "roundtrip",
				price: { amount: 300, currency: "SEK" },
				description: "Extra bag with the maximum weight of 20kg",
				flights: [
					{ reference: "FL-054", capacity: 2 },
					{ reference: "UDE-342", capacity: 5 },
				],
			},
			{
				reference: "lug-001",
				name: "Extra weight",
				weight: 20,
				direction: "roundtrip",
				price: { amount: 100, currency: "SEK" },
				description: "Added weight when a piece of luggage exceeds weight limit",
				flights: [{ reference: "FL-054", capacity: 2 }],
			},
			{
				reference: "lug-008",
				name: "Extra weight",
				weight: 20,
				direction: "roundtrip",
				price: { amount: 100, currency: "SEK" },
				description: "Added weight when a piece of luggage exceeds weight limit",
				flights: [
					{ reference: "FL-054", capacity: 2 },
					{ reference: "MEH001", capacity: 2 },
				],
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
		description: "Some text",
		flights: [
			{ reference: "FL-054", capacity: 2 },
			{ reference: "UDE-342", capacity: 5 },
		],
	}
	const luggageArray: model.Luggage[] = [luggage, luggage]

	const category: model.Luggage.Category = {
		name: "sport",
		description: "Some description",
		options: [
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "departure",
				price: { amount: 100, currency: "AFN" },
				description: "Some text",
			},
			{
				reference: "l02",
				name: "Golf Bag",
				weight: 20,
				direction: "departure",
				price: { amount: 100, currency: "AFN" },
				description: "Some text",
			},
		],
		open: true,
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
					reference: "123",
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
	it("is - category fail", () => {
		expect(model.Luggage.is(category)).toEqual(false)
	})
	it("isArrayOfLuggage", () => {
		expect(model.Luggage.isArrayOfLuggage(luggageArray)).toEqual(true)
	})
	it("update luggage add", () => {
		expect(model.Luggage.update({ ...luggage, quantity: undefined }, passenger, "add")).toEqual([
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "departure",
				quantity: 2,
				price: { amount: 100, currency: "AFN" },
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2 },
					{ reference: "UDE-342", capacity: 5 },
				],
			},
		])
	})
	it("update luggage remove", () => {
		expect(model.Luggage.update(luggage, passenger, "remove")).toEqual([
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "departure",
				quantity: 0,
				price: { amount: 100, currency: "AFN" },
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2 },
					{ reference: "UDE-342", capacity: 5 },
				],
			},
		])
	})
	it("update luggage add same reference different direction", () => {
		expect(model.Luggage.update({ ...luggage, direction: "return" }, passenger, "add")).toEqual([
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
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "return",
				quantity: 1,
				price: { amount: 100, currency: "AFN" },
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2 },
					{ reference: "UDE-342", capacity: 5 },
				],
			},
		])
	})
	it("update luggage remove same reference different direction", () => {
		expect(
			model.Luggage.update(
				{ ...luggage, direction: "return" },
				{ ...passenger, luggage: [luggage, { ...luggage, direction: "return" }] },
				"remove"
			)
		).toEqual([
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
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "return",
				quantity: 0,
				price: { amount: 100, currency: "AFN" },
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2 },
					{ reference: "UDE-342", capacity: 5 },
				],
			},
		])
	})
	it("update luggage", () => {
		expect(
			model.Luggage.update({ ...luggage, reference: "l02", name: "Golf bag", quantity: undefined }, passenger, "add")
		).toEqual([
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
				reference: "l02",
				name: "Golf bag",
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
		])
	})
	it("update luggage, new luggage", () => {
		expect(
			model.Luggage.update(
				{ ...luggage, reference: "l02", name: "Golf bag", quantity: undefined },
				{ ...passenger, luggage: undefined },
				"add"
			)
		).toEqual([
			{
				reference: "l02",
				name: "Golf bag",
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
		])
	})
	it("change quantity", () => {
		expect(model.Luggage.changeQuantity({ ...luggage, quantity: 4 }, "add")).toEqual(5)
	})
	it("filter luggage", () => {
		expect(
			model.Luggage.filter(booking, {
				...passenger,
				departure: [
					{
						reference: "UDE-342",
						seat: {
							row: { number: 1 },
							position: "A",
							status: "occupied",
							class: "first-class",
							price: { amount: 400, currency: "SEK" },
							reference: "123",
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
				flights: [
					{ reference: "FL-054", capacity: 2 },
					{ reference: "UDE-342", capacity: 5 },
				],
			},
			{
				reference: "lug-006",
				name: "Extra Bag",
				weight: 20,
				direction: "roundtrip",
				price: { amount: 300, currency: "SEK" },
				description: "Extra bag with the maximum weight of 20kg",
				flights: [
					{ reference: "FL-054", capacity: 2 },
					{ reference: "UDE-342", capacity: 5 },
				],
			},
		])
	})
	it("filter luggage", () => {
		expect(
			model.Luggage.filter(booking, {
				...passenger,
				departure: [
					{
						reference: "UDE-342",
						seat: {
							row: { number: 1 },
							position: "A",
							status: "occupied",
							class: "first-class",
							price: { amount: 400, currency: "SEK" },
							reference: "123",
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
				flights: [
					{ reference: "FL-054", capacity: 2 },
					{ reference: "UDE-342", capacity: 5 },
				],
			},
			{
				reference: "lug-006",
				name: "Extra Bag",
				weight: 20,
				direction: "roundtrip",
				price: { amount: 300, currency: "SEK" },
				description: "Extra bag with the maximum weight of 20kg",
				flights: [
					{ reference: "FL-054", capacity: 2 },
					{ reference: "UDE-342", capacity: 5 },
				],
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
							reference: "123",
						},
					},
				],
			})
		).toEqual([])
	})

	it("undo advanced selection", () => {
		expect(
			model.Luggage.undoAdvancedSelection(
				{
					...passenger,
					luggage: [
						luggage,
						{ ...luggage, direction: "roundtrip" },
						{ ...luggage, reference: "l03", direction: "return" },
					],
				},
				luggage
			)
		).toEqual([
			{ ...luggage, direction: "roundtrip" },
			{ ...luggage, reference: "l03", direction: "return" },
		])
	})
	it("undo advanced selection", () => {
		expect(
			model.Luggage.undoAdvancedSelection(
				{
					...passenger,
					luggage: [
						{ ...luggage, direction: "return" },
						{ ...luggage, direction: "roundtrip" },
						{ ...luggage, reference: "l03", direction: "return" },
					],
				},
				luggage
			)
		).toEqual([
			{ ...luggage, direction: "roundtrip" },
			{ ...luggage, reference: "l03", direction: "return" },
		])
	})
	it("get quantity", () => {
		expect(model.Luggage.getQuantity(luggage, "departure", passenger)).toEqual(1)
	})
})
