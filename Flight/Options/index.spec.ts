import * as model from "../../index"

describe("model.Flight.Options", () => {
	const layout: model.Flight.Options = {
		reference: "AA",
		number: "PAX001",
		from: { code: "ARN", name: "Arlanda Airport" },
		to: { code: "LHR", name: "Heathrow Airport" },
		departure: "2022-09-28T07:22:00.000Z",
		arrival: "2022-09-28T10:02:00.000Z",
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
								wide: true,
								reference: "123",
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "B",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
								reference: "123",
							},
						],
					},
					{
						seats: [
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "C",
								price: { amount: 100, currency: "SEK" },
								reference: "123",
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "D",
								price: { amount: 150, currency: "SEK" },
								reference: "123",
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "E",
								price: { amount: 250, currency: "SEK" },
								reference: "123",
							},
						],
					},
					{
						seats: [
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "F",
								price: { amount: 350, currency: "SEK" },
								reference: "123",
								legroom: true,
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "G",
								price: { amount: 1250, currency: "SEK" },
								reference: "123",
								legroom: true,
							},
						],
					},
				],
				exit: false,
			},
			{
				groups: [
					{
						seats: [
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "A",
								price: { amount: 400, currency: "SEK" },
								wide: true,
								reference: "123",
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "B",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
								reference: "123",
							},
						],
					},
					{
						seats: [
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "C",
								price: { amount: 100, currency: "SEK" },
								reference: "123",
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "D",
								price: { amount: 150, currency: "SEK" },
								reference: "123",
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "E",
								price: { amount: 250, currency: "SEK" },
								reference: "123",
							},
						],
					},
					{
						seats: [
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "F",
								price: { amount: 350, currency: "SEK" },
								legroom: true,
								reference: "123",
							},
							{
								status: "unavailable",
								class: "first-class",
								row: { number: 2 },
								position: "G",
								price: { amount: 1250, currency: "SEK" },
								legroom: true,
								reference: "123",
							},
						],
					},
				],
				exit: false,
			},
		],
		meals: [
			{
				reference: "ref-234",
				name: "Breakfast",
				alternative: { name: "Fancy", reference: "345" },
			},
			{
				reference: "ref-754",
				name: "Dinner",
				alternative: { name: "Chicken", reference: "345" },
			},
		],
	}
	const updatedLayout: model.Flight.Options = {
		reference: "AA",
		number: "PAX001",
		from: { code: "ARN", name: "Arlanda Airport" },
		to: { code: "LHR", name: "Heathrow Airport" },
		departure: "2022-09-28T07:22:00.000Z",
		arrival: "2022-09-28T10:02:00.000Z",
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
								wide: true,
								reference: "123",
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "B",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
								reference: "123",
							},
						],
					},
					{
						seats: [
							{
								status: "unavailable",
								class: "first-class",
								row: { number: 1 },
								position: "C",
								price: { amount: 100, currency: "SEK" },
								reference: "123",
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "D",
								price: { amount: 150, currency: "SEK" },
								reference: "123",
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "E",
								price: { amount: 250, currency: "SEK" },
								reference: "123",
							},
						],
					},
					{
						seats: [
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "F",
								price: { amount: 350, currency: "SEK" },
								legroom: true,
								reference: "123",
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "G",
								price: { amount: 1250, currency: "SEK" },
								legroom: true,
								reference: "123",
							},
						],
					},
				],
				exit: false,
			},
			{
				groups: [
					{
						seats: [
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "A",
								price: { amount: 400, currency: "SEK" },
								wide: true,
								reference: "123",
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "B",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
								reference: "123",
							},
						],
					},
					{
						seats: [
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "C",
								price: { amount: 100, currency: "SEK" },
								reference: "123",
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "D",
								price: { amount: 150, currency: "SEK" },
								reference: "123",
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "E",
								price: { amount: 250, currency: "SEK" },
								reference: "123",
							},
						],
					},
					{
						seats: [
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "F",
								price: { amount: 350, currency: "SEK" },
								reference: "123",
								legroom: true,
							},
							{
								status: "unavailable",
								class: "first-class",
								row: { number: 2 },
								position: "G",
								price: { amount: 1250, currency: "SEK" },
								reference: "123",
								legroom: true,
							},
						],
					},
				],
				exit: false,
			},
		],
		meals: [
			{
				reference: "ref-234",
				name: "Breakfast",
				alternative: { name: "Fancy", reference: "345" },
			},
			{
				reference: "ref-754",
				name: "Dinner",
				alternative: { name: "Chicken", reference: "345" },
			},
		],
	}
	const occupiedLayout: model.Flight.Options = {
		reference: "AA",
		number: "PAX001",
		from: { code: "ARN", name: "Arlanda Airport" },
		to: { code: "LHR", name: "Heathrow Airport" },
		departure: "2022-09-28T07:22:00.000Z",
		arrival: "2022-09-28T10:02:00.000Z",
		seating: [
			{
				groups: [
					{
						seats: [
							{
								status: "occupied",
								class: "first-class",
								row: { number: 1 },
								position: "A",
								price: { amount: 400, currency: "SEK" },
								wide: true,
								reference: "123",
							},
							{
								status: "occupied",
								class: "first-class",
								row: { number: 1 },
								position: "B",
								price: { amount: 400, currency: "SEK" },
								wide: true,
								reference: "123",
							},
						],
					},
					{
						seats: [
							{
								status: "occupied",
								class: "first-class",
								row: { number: 1 },
								position: "C",
								price: { amount: 400, currency: "SEK" },
								reference: "123",
							},
							{
								status: "occupied",
								class: "first-class",
								row: { number: 1 },
								position: "D",
								price: { amount: 400, currency: "SEK" },
								reference: "123",
							},
							{
								status: "occupied",
								class: "first-class",
								row: { number: 1 },
								position: "E",
								price: { amount: 400, currency: "SEK" },
								reference: "123",
							},
						],
					},
					{
						seats: [
							{
								status: "occupied",
								class: "first-class",
								row: { number: 1 },
								position: "F",
								price: { amount: 400, currency: "SEK" },
								legroom: true,
								reference: "123",
							},
							{
								status: "occupied",
								class: "first-class",
								row: { number: 1 },
								position: "G",
								price: { amount: 400, currency: "SEK" },
								legroom: true,
								reference: "123",
							},
						],
					},
				],
				exit: false,
			},
			{
				groups: [
					{
						seats: [
							{
								status: "occupied",
								class: "first-class",
								row: { number: 2 },
								position: "A",
								price: { amount: 400, currency: "SEK" },
								wide: true,
								reference: "123",
							},
							{
								status: "occupied",
								class: "first-class",
								row: { number: 2 },
								position: "B",
								price: { amount: 400, currency: "SEK" },
								wide: true,
								reference: "123",
							},
						],
					},
					{
						seats: [
							{
								status: "occupied",
								class: "first-class",
								row: { number: 2 },
								position: "C",
								price: { amount: 400, currency: "SEK" },
								reference: "123",
							},
							{
								status: "occupied",
								class: "first-class",
								row: { number: 2 },
								position: "D",
								price: { amount: 400, currency: "SEK" },
								reference: "123",
							},
							{
								status: "occupied",
								class: "first-class",
								row: { number: 2 },
								position: "E",
								price: { amount: 400, currency: "SEK" },
								reference: "123",
							},
						],
					},
					{
						seats: [
							{
								status: "occupied",
								class: "first-class",
								row: { number: 2 },
								position: "F",
								price: { amount: 400, currency: "SEK" },
								legroom: true,
								reference: "123",
							},
							{
								status: "occupied",
								class: "first-class",
								row: { number: 2 },
								position: "G",
								price: { amount: 400, currency: "SEK" },
								legroom: true,
								reference: "123",
							},
						],
					},
				],
				exit: false,
			},
		],
		meals: [
			{
				reference: "ref-234",
				name: "Breakfast",
				alternative: { name: "Fancy", reference: "345" },
			},
			{
				reference: "ref-754",
				name: "Dinner",
				alternative: { name: "Chicken", reference: "345" },
			},
		],
	}
	const flights: model.Flight.Options[] = [
		{
			reference: "FL-001",
			number: "PAX001",
			from: { code: "ARN", name: "Arlanda Airport" },
			to: { code: "LHR", name: "Heathrow Airport" },
			departure: "2022-09-28T07:22:00.000Z",
			arrival: "2022-09-28T10:02:00.000Z",
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
									wide: true,
									reference: "123",
								},
							],
						},
						{
							seats: [
								{
									status: "available",
									class: "first-class",
									row: { number: 1 },
									position: "B",
									price: { amount: 100, currency: "SEK" },
									reference: "123",
								},
							],
						},
					],
				},
				{
					groups: [
						{
							seats: [
								{
									status: "available",
									class: "first-class",
									row: { number: 2 },
									position: "A",
									price: { amount: 400, currency: "SEK" },
									wide: true,
									reference: "123",
								},
							],
						},
						{
							seats: [
								{
									status: "available",
									class: "first-class",
									row: { number: 2 },
									position: "B",
									price: { amount: 100, currency: "SEK" },
									reference: "123",
								},
							],
						},
					],
				},
			],
			meals: [
				{
					reference: "ref-234",
					name: "Breakfast",
					alternative: { name: "Fancy", reference: "345" },
				},
			],
		},
		{
			reference: "FL-002",
			number: "PAX002",
			from: { code: "ARN", name: "Arlanda Airport" },
			to: { code: "LHR", name: "Heathrow Airport" },
			departure: "2022-09-28T07:22:00.000Z",
			arrival: "2022-09-28T10:02:00.000Z",
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
									wide: true,
									reference: "123",
								},
							],
						},
						{
							seats: [
								{
									status: "available",
									class: "first-class",
									row: { number: 1 },
									position: "B",
									price: { amount: 100, currency: "SEK" },
									reference: "123",
								},
							],
						},
					],
				},
				{
					groups: [
						{
							seats: [
								{
									status: "available",
									class: "first-class",
									row: { number: 2 },
									position: "A",
									price: { amount: 400, currency: "SEK" },
									wide: true,
									reference: "123",
								},
							],
						},
						{
							seats: [
								{
									status: "available",
									class: "first-class",
									row: { number: 2 },
									position: "B",
									price: { amount: 100, currency: "SEK" },
									reference: "123",
								},
							],
						},
					],
				},
			],
			meals: [
				{
					reference: "ref-234",
					name: "Breakfast",
					alternative: { name: "Fancy", reference: "345" },
				},
			],
		},
		{
			reference: "FL-003",
			number: "PAX003",
			from: { code: "ARN", name: "Arlanda Airport" },
			to: { code: "LHR", name: "Heathrow Airport" },
			departure: "2022-09-28T07:22:00.000Z",
			arrival: "2022-09-28T10:02:00.000Z",
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
									wide: true,
									reference: "123",
								},
							],
						},
						{
							seats: [
								{
									status: "available",
									class: "first-class",
									row: { number: 1 },
									position: "B",
									price: { amount: 100, currency: "SEK" },
									reference: "123",
								},
							],
						},
					],
				},
				{
					groups: [
						{
							seats: [
								{
									status: "available",
									class: "first-class",
									row: { number: 2 },
									position: "A",
									price: { amount: 400, currency: "SEK" },
									wide: true,
									reference: "123",
								},
							],
						},
						{
							seats: [
								{
									status: "available",
									class: "first-class",
									row: { number: 2 },
									position: "B",
									price: { amount: 100, currency: "SEK" },
									reference: "123",
								},
							],
						},
					],
				},
			],
			meals: [
				{
					reference: "ref-234",
					name: "Breakfast",
					alternative: { name: "Fancy", reference: "345" },
				},
			],
		},
		{
			reference: "FL-004",
			number: "PAX003",
			from: { code: "ARN", name: "Arlanda Airport" },
			to: { code: "LHR", name: "Heathrow Airport" },
			departure: "2022-09-28T07:22:00.000Z",
			arrival: "2022-09-28T10:02:00.000Z",
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
									wide: true,
									reference: "123",
								},
							],
						},
						{
							seats: [
								{
									status: "available",
									class: "first-class",
									row: { number: 1 },
									position: "B",
									price: { amount: 100, currency: "SEK" },
									reference: "123",
								},
							],
						},
					],
				},
				{
					groups: [
						{
							seats: [
								{
									status: "available",
									class: "first-class",
									row: { number: 2 },
									position: "A",
									price: { amount: 400, currency: "SEK" },
									wide: true,
									reference: "123",
								},
							],
						},
						{
							seats: [
								{
									status: "available",
									class: "first-class",
									row: { number: 2 },
									position: "B",
									price: { amount: 100, currency: "SEK" },
									reference: "123",
								},
							],
						},
					],
				},
			],
			meals: [
				{
					reference: "ref-234",
					name: "Breakfast",
					alternative: { name: "Fancy", reference: "345" },
				},
			],
		},
	]
	const leg: model.Passenger.Itinerary.Leg = {
		reference: "FL-011",
		seat: {
			row: { number: 1 },
			position: "C",
			status: "available",
			class: "business",
			price: { amount: 100, currency: "DKK" },
			reference: "123",
		},
	}
	const passenger: model.Passenger = {
		reference: "p01",
		name: { first: "Pelle", last: "Karlsson" },
		ageGroup: "child",
		departure: [
			{
				reference: "FL-001",
			},
		],
		return: [
			{
				reference: "FL-002",
			},
			{
				reference: "FL-003",
			},
		],
	}
	const passenger2: model.Passenger = {
		reference: "p02",
		name: { first: "Olle", last: "Karlsson" },
		ageGroup: "child",
		departure: [
			{
				reference: "FL-005",
			},
		],
		return: [
			{
				reference: "FL-007",
			},
			{
				reference: "FL-007",
			},
		],
	}
	const seat: model.Layout.Seat = {
		row: { number: 1 },
		position: "A",
		status: "occupied",
		class: "business",
		price: { amount: 400, currency: "SEK" },
		reference: "123",
	}
	const seats: model.Layout.Seat[] = [
		{ ...seat },
		{ ...seat, position: "B" },
		{ ...seat, position: "C" },
		{ ...seat, position: "D" },
		{ ...seat, position: "E" },
		{ ...seat, position: "F" },
		{ ...seat, position: "G" },
		{ ...seat, row: { number: 2 } },
		{ ...seat, row: { number: 2 }, position: "B" },
		{ ...seat, row: { number: 2 }, position: "C" },
		{ ...seat, row: { number: 2 }, position: "D" },
		{ ...seat, row: { number: 2 }, position: "E" },
		{ ...seat, row: { number: 2 }, position: "F" },
		{ ...seat, row: { number: 2 }, position: "G" },
	]
	it("is", () => {
		expect(model.Flight.Options.is(layout)).toEqual(true)
	})
	it("reserve", () => {
		expect(model.Flight.Options.reserve(layout, leg)).toEqual(updatedLayout)
	})
	it("isAvailable", () => {
		expect(model.Flight.Options.isAvailable(layout, leg)).toEqual(true)
	})
	it("isAvailable, false", () => {
		expect(
			model.Flight.Options.isAvailable(layout, {
				...leg,
				seat: {
					row: { number: 2 },
					position: "G",
					status: "available",
					class: "business",
					price: { amount: 1250, currency: "SEK" },
					reference: "123",
				},
			})
		).toEqual(false)
	})
	it("Get available flights departure", () => {
		expect(model.Flight.Options.getAvailableFlights(passenger, flights, "departure")).toEqual([flights[0]])
	})
	it("Get available flights return", () => {
		expect(model.Flight.Options.getAvailableFlights(passenger, flights, "return")).toEqual([flights[1], flights[2]])
	})
	it("Get available flights, no matching flights", () => {
		expect(model.Flight.Options.getAvailableFlights(passenger2, flights, "return")).toEqual([])
	})
	it("setSeatStatus", () => {
		expect(model.Flight.Options.setSeats(layout, ...seats)).toEqual(occupiedLayout)
	})
})
