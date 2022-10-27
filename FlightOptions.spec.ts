import * as model from "./index"
import * as passenger from "./Passenger/Itinerary/"

describe("model.FlightOptions", () => {
	const layout: model.FlightOptions = {
		reference: "AA",
		from: { code: "ARN", name: "Arlanda Airport" },
		to: { code: "LHR", name: "Heathrow Airport" },

		departure: "2022-09-28T07:22:00.000Z",
		arrival: "2022-09-28T10:02:00.000Z",
		seating: [
			{
				groups: [
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							{
								status: "available",
								class: "first-class",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
							},
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 150, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 250, currency: "SEK" } },
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 350, currency: "SEK" }, legroom: true },
							{ status: "available", class: "first-class", price: { amount: 1250, currency: "SEK" }, legroom: true },
						],
					},
				],
				exit: false,
			},
			{
				groups: [
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							{
								status: "available",
								class: "first-class",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
							},
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 150, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 250, currency: "SEK" } },
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 350, currency: "SEK" }, legroom: true },
							{ status: "unavailable", class: "first-class", price: { amount: 1250, currency: "SEK" }, legroom: true },
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
				alternatives: [{ name: "Fancy" }, { name: "Basic" }],
			},
			{
				reference: "ref-754",
				name: "Dinner",
				alternatives: [{ name: "Chicken" }, { name: "Fish" }],
			},
		],
	}
	const updatedLayout: model.FlightOptions = {
		reference: "AA",
		from: { code: "ARN", name: "Arlanda Airport" },
		to: { code: "LHR", name: "Heathrow Airport" },
		departure: "2022-09-28T07:22:00.000Z",
		arrival: "2022-09-28T10:02:00.000Z",
		seating: [
			{
				groups: [
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							{
								status: "available",
								class: "first-class",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
							},
						],
					},
					{
						seats: [
							{ status: "unavailable", class: "first-class", price: { amount: 100, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 150, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 250, currency: "SEK" } },
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 350, currency: "SEK" }, legroom: true },
							{ status: "available", class: "first-class", price: { amount: 1250, currency: "SEK" }, legroom: true },
						],
					},
				],
				exit: false,
			},
			{
				groups: [
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							{
								status: "available",
								class: "first-class",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
							},
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 150, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 250, currency: "SEK" } },
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 350, currency: "SEK" }, legroom: true },
							{ status: "unavailable", class: "first-class", price: { amount: 1250, currency: "SEK" }, legroom: true },
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
				alternatives: [{ name: "Fancy" }, { name: "Basic" }],
			},
			{
				reference: "ref-754",
				name: "Dinner",
				alternatives: [{ name: "Chicken" }, { name: "Fish" }],
			},
		],
	}
	const occupiedLayout: model.FlightOptions = {
		reference: "AA",
		from: { code: "ARN", name: "Arlanda Airport" },
		to: { code: "LHR", name: "Heathrow Airport" },
		departure: "2022-09-28T07:22:00.000Z",
		arrival: "2022-09-28T10:02:00.000Z",
		seating: [
			{
				groups: [
					{
						seats: [
							{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							{
								status: "occupied",
								class: "first-class",
								price: { amount: 400, currency: "SEK" },
								wide: true,
							},
						],
					},
					{
						seats: [
							{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" } },
							{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" } },
							{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" } },
						],
					},
					{
						seats: [
							{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
							{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
						],
					},
				],
				exit: false,
			},
			{
				groups: [
					{
						seats: [
							{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							{
								status: "occupied",
								class: "first-class",
								price: { amount: 400, currency: "SEK" },
								wide: true,
							},
						],
					},
					{
						seats: [
							{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" } },
							{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" } },
							{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" } },
						],
					},
					{
						seats: [
							{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
							{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
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
				alternatives: [{ name: "Fancy" }, { name: "Basic" }],
			},
			{
				reference: "ref-754",
				name: "Dinner",
				alternatives: [{ name: "Chicken" }, { name: "Fish" }],
			},
		],
	}
	const flights: model.FlightOptions[] = [
		{
			reference: "FL-001",
			from: { code: "ARN", name: "Arlanda Airport" },
			to: { code: "LHR", name: "Heathrow Airport" },
			departure: "2022-09-28T07:22:00.000Z",
			arrival: "2022-09-28T10:02:00.000Z",
			seating: [
				{
					groups: [
						{
							seats: [
								{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							],
						},
						{
							seats: [{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } }],
						},
					],
				},
				{
					groups: [
						{
							seats: [
								{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							],
						},
						{
							seats: [{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } }],
						},
					],
				},
			],
			meals: [
				{
					reference: "ref-234",
					name: "Breakfast",
					alternatives: [{ name: "Fancy" }, { name: "Basic" }],
				},
			],
		},
		{
			reference: "FL-002",
			from: { code: "ARN", name: "Arlanda Airport" },
			to: { code: "LHR", name: "Heathrow Airport" },
			departure: "2022-09-28T07:22:00.000Z",
			arrival: "2022-09-28T10:02:00.000Z",
			seating: [
				{
					groups: [
						{
							seats: [
								{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							],
						},
						{
							seats: [{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } }],
						},
					],
				},
				{
					groups: [
						{
							seats: [
								{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							],
						},
						{
							seats: [{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } }],
						},
					],
				},
			],
			meals: [
				{
					reference: "ref-234",
					name: "Breakfast",
					alternatives: [{ name: "Fancy" }, { name: "Basic" }],
				},
			],
		},
		{
			reference: "FL-003",
			from: { code: "ARN", name: "Arlanda Airport" },
			to: { code: "LHR", name: "Heathrow Airport" },
			departure: "2022-09-28T07:22:00.000Z",
			arrival: "2022-09-28T10:02:00.000Z",
			seating: [
				{
					groups: [
						{
							seats: [
								{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							],
						},
						{
							seats: [{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } }],
						},
					],
				},
				{
					groups: [
						{
							seats: [
								{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							],
						},
						{
							seats: [{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } }],
						},
					],
				},
			],
			meals: [
				{
					reference: "ref-234",
					name: "Breakfast",
					alternatives: [{ name: "Fancy" }, { name: "Basic" }],
				},
			],
		},
		{
			reference: "FL-004",
			from: { code: "ARN", name: "Arlanda Airport" },
			to: { code: "LHR", name: "Heathrow Airport" },
			departure: "2022-09-28T07:22:00.000Z",
			arrival: "2022-09-28T10:02:00.000Z",
			seating: [
				{
					groups: [
						{
							seats: [
								{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							],
						},
						{
							seats: [{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } }],
						},
					],
				},
				{
					groups: [
						{
							seats: [
								{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							],
						},
						{
							seats: [{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } }],
						},
					],
				},
			],
			meals: [
				{
					reference: "ref-234",
					name: "Breakfast",
					alternatives: [{ name: "Fancy" }, { name: "Basic" }],
				},
			],
		},
	]
	const leg: passenger.Itinerary.Leg = {
		reference: "FL-011",
		seat: {
			row: { number: 1 },
			position: "C",
			status: "available",
			class: "business",
			price: { amount: 100, currency: "DKK" },
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
	const seat: model.Layout.Seat.Positioned = {
		row: { number: 1 },
		position: "A",
		status: "occupied",
		class: "business",
		price: { amount: 400, currency: "SEK" },
	}
	const seats: model.Layout.Seat.Positioned[] = [
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
		expect(model.FlightOptions.is(layout)).toEqual(true)
	})
	it("reserve", () => {
		expect(model.FlightOptions.reserve(layout, leg)).toEqual(updatedLayout)
	})
	it("isAvailable", () => {
		expect(model.FlightOptions.isAvailable(layout, leg)).toEqual(true)
	})
	it("isAvailable, false", () => {
		expect(
			model.FlightOptions.isAvailable(layout, {
				...leg,
				seat: {
					row: { number: 2 },
					position: "G",
					status: "available",
					class: "business",
					price: { amount: 1250, currency: "SEK" },
				},
			})
		).toEqual(false)
	})
	it("Get available flights departure", () => {
		expect(model.FlightOptions.getAvailableFlights(passenger, flights, "departure")).toEqual([flights[0]])
	})
	it("Get available flights return", () => {
		expect(model.FlightOptions.getAvailableFlights(passenger, flights, "return")).toEqual([flights[1], flights[2]])
	})
	it("Get available flights, no matching flights", () => {
		expect(model.FlightOptions.getAvailableFlights(passenger2, flights, "return")).toEqual([])
	})
	it("setSeatStatus", () => {
		expect(model.FlightOptions.setSeatStatus(seats, layout)).toEqual(occupiedLayout)
	})
})
