import * as model from "../index"

describe("model.Flight.Luggage", () => {
	const booking: model.Booking.Options = {
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
										position: { row: 1, column: "A" },
										price: { amount: 400, currency: "SEK" },
										reference: "123",
									},
									{
										status: "available",
										class: "first-class",
										position: { row: 1, column: "B" },
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
										position: { row: 1, column: "A" },
										price: { amount: 400, currency: "SEK", offer: 200 },
										reference: "123",
									},
									{
										status: "available",
										class: "first-class",
										position: { row: 1, column: "B" },
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
				description: "Sports equipment",
				options: [
					{
						reference: "lug-009",
						name: "Bicycle",
						weight: 20,
						description: "Adult sized bike",
						flights: [
							{ reference: "FL-054", capacity: 2, price: { amount: 300, currency: "SEK" } },
							{ reference: "UDE-342", capacity: 5, price: { amount: 300, currency: "SEK" } },
						],
					},
				],
				open: true,
				flights: [{ reference: "FL-054" }, { reference: "UDE-342" }],
			},
			{
				reference: "lug-006",
				name: "Extra Bag",
				weight: 20,
				description: "Extra bag with the maximum weight of 20kg",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 300, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 300, currency: "SEK" } },
				],
			},
			{
				reference: "lug-001",
				name: "Extra weight",
				weight: 20,
				description: "Added weight when a piece of luggage exceeds weight limit",
				flights: [{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } }],
			},
			{
				reference: "lug-008",
				name: "Extra weight",
				weight: 20,
				description: "Added weight when a piece of luggage exceeds weight limit",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } },
					{ reference: "MEH001", capacity: 2, price: { amount: 100, currency: "SEK" } },
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
		description: "Some text",
		flights: [
			{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } },
			{ reference: "UDE-342", capacity: 5, price: { amount: 100, currency: "SEK" } },
		],
	}
	const category: model.Luggage.Options.Category = {
		name: "sport",
		description: "Sports equipment",
		options: [
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "departure",
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 100, currency: "SEK" } },
				],
			},
			{
				reference: "l02",
				name: "Golf Bag",
				weight: 20,
				direction: "departure",
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 100, currency: "SEK" } },
				],
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
					position: { row: 1, column: "A" },
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
	it("update luggage add", () => {
		expect(model.Luggage.update({ ...luggage, quantity: undefined }, passenger, "add")).toEqual([
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "departure",
				quantity: 2,
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 100, currency: "SEK" } },
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
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 100, currency: "SEK" } },
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
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 100, currency: "SEK" } },
				],
			},
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "return",
				quantity: 1,
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 100, currency: "SEK" } },
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
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 100, currency: "SEK" } },
				],
			},
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				direction: "return",
				quantity: 0,
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 100, currency: "SEK" } },
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
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 100, currency: "SEK" } },
				],
			},
			{
				reference: "l02",
				name: "Golf bag",
				weight: 20,
				direction: "departure",
				quantity: 1,
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 100, currency: "SEK" } },
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
				description: "Some text",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 100, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 100, currency: "SEK" } },
				],
			},
		])
	})
	it("change quantity", () => {
		expect(model.Luggage.changeQuantity({ ...luggage, quantity: 4 }, "add")).toEqual(5)
	})
	it("filter luggage", () => {
		expect(
			model.Luggage.Options.filter(booking, {
				...passenger,
				departure: [
					{
						reference: "UDE-342",
						seat: {
							position: { row: 1, column: "A" },
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
				description: "Sports equipment",
				options: [
					{
						reference: "lug-009",
						name: "Bicycle",
						weight: 20,
						description: "Adult sized bike",
						flights: [
							{ reference: "FL-054", capacity: 2, price: { amount: 300, currency: "SEK" } },
							{ reference: "UDE-342", capacity: 5, price: { amount: 300, currency: "SEK" } },
						],
					},
				],
				open: true,
				flights: [{ reference: "FL-054" }, { reference: "UDE-342" }],
			},
			{
				reference: "lug-006",
				name: "Extra Bag",
				weight: 20,
				description: "Extra bag with the maximum weight of 20kg",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 300, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 300, currency: "SEK" } },
				],
			},
		])
	})
	it("filter luggage", () => {
		expect(
			model.Luggage.Options.filter(booking, {
				...passenger,
				departure: [
					{
						reference: "UDE-342",
						seat: {
							position: { row: 1, column: "A" },
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
				description: "Sports equipment",
				options: [
					{
						reference: "lug-009",
						name: "Bicycle",
						weight: 20,
						description: "Adult sized bike",
						flights: [
							{ reference: "FL-054", capacity: 2, price: { amount: 300, currency: "SEK" } },
							{ reference: "UDE-342", capacity: 5, price: { amount: 300, currency: "SEK" } },
						],
					},
				],
				open: true,
				flights: [{ reference: "FL-054" }, { reference: "UDE-342" }],
			},
			{
				reference: "lug-006",
				name: "Extra Bag",
				weight: 20,
				description: "Extra bag with the maximum weight of 20kg",
				flights: [
					{ reference: "FL-054", capacity: 2, price: { amount: 300, currency: "SEK" } },
					{ reference: "UDE-342", capacity: 5, price: { amount: 300, currency: "SEK" } },
				],
			},
		])
	})
	it("filter luggage, no luggage", () => {
		expect(
			model.Luggage.Options.filter(booking, {
				...passenger,
				departure: [
					{
						reference: "ABC",
						seat: {
							position: { row: 1, column: "A" },
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
	it("get price", () => {
		expect(
			model.Luggage.getPrice(
				{ ...luggage, flights: [{ reference: "AA", capacity: 5, price: { amount: 100, currency: "SEK" } }] },
				passenger
			)
		).toEqual({ amount: 100, currency: "SEK", description: "" })
	})
})
