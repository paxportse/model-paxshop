import * as model from "../index"

describe("model.Passenger", () => {
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
		return: [
			{
				reference: "d03",
				seat: {
					row: { number: 1 },
					position: "B",
					status: "occupied",
					class: "first-class",
					price: { amount: 200, currency: "SEK" },
				},
			},
		],
	}
	const passenger2: model.Passenger = {
		reference: "p01",
		name: { first: "Stig", last: "Karlsson" },
		ageGroup: "child",
		departure: [
			{
				reference: "1337",
				seat: {
					row: { number: 1 },
					position: "A",
					status: "occupied",
					class: "first-class",
					price: { amount: 400, currency: "SEK" },
				},
			},
		],
		return: [
			{
				reference: "d03",
				seat: {
					row: { number: 1 },
					position: "B",
					status: "occupied",
					class: "first-class",
					price: { amount: 200, currency: "SEK" },
				},
			},
		],
	}
	const passengerUnseated: model.Passenger = {
		reference: "p01",
		name: { first: "Bo", last: "Karlsson" },
		ageGroup: "child",
		departure: [
			{
				reference: "BB",
			},
		],
		return: [
			{
				reference: "AA",
			},
		],
	}
	const passengerUnseated2: model.Passenger = {
		reference: "p01",
		name: { first: "Bo", last: "Karlsson" },
		ageGroup: "child",
		departure: [
			{
				reference: "AA",
			},
		],
		return: [
			{
				reference: "AA",
			},
		],
	}
	const passengerNoItinerary: model.Passenger = {
		reference: "p05",
		name: { first: "Hasse", last: "Burrito" },
		ageGroup: "child",
	}
	const flight: model.FlightOptions = {
		reference: "AA",
		number: "PAXAA",
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
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "B",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
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
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "C",
								price: { amount: 150, currency: "SEK" },
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "D",
								price: { amount: 250, currency: "SEK" },
							},
						],
					},
					{
						seats: [
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "E",
								price: { amount: 350, currency: "SEK" },
								legroom: true,
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "F",
								price: { amount: 1250, currency: "SEK" },
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
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "B",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
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
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "D",
								price: { amount: 150, currency: "SEK" },
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "E",
								price: { amount: 250, currency: "SEK" },
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
							},
							{
								status: "unavailable",
								class: "first-class",
								row: { number: 2 },
								position: "G",
								price: { amount: 1250, currency: "SEK" },
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
				alternatives: [{ name: "Fancy" }, { name: "Basic" }],
			},
			{
				reference: "ref-754",
				name: "Dinner",
				alternatives: [{ name: "Chicken" }, { name: "Fish" }],
			},
		],
	}
	const flight2: model.FlightOptions = {
		reference: "1337",
		number: "PAX1337",
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
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "B",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
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
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "D",
								price: { amount: 150, currency: "SEK" },
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "E",
								price: { amount: 250, currency: "SEK" },
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
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 1 },
								position: "G",
								price: { amount: 1250, currency: "SEK" },
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
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "B",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
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
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "D",
								price: { amount: 150, currency: "SEK" },
							},
							{
								status: "available",
								class: "first-class",
								row: { number: 2 },
								position: "E",
								price: { amount: 250, currency: "SEK" },
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
							},
							{
								status: "unavailable",
								class: "first-class",
								row: { number: 2 },
								position: "G",
								price: { amount: 1250, currency: "SEK" },
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
			number: "PAX001",
			from: { name: "Arlanda", code: "ARN" },
			to: { name: "Heathrow", code: "LHR" },
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
					alternatives: [{ name: "Fancy" }, { name: "Basic" }],
				},
				{
					reference: "ref-754",
					name: "Dinner",
					alternatives: [{ name: "Chicken" }, { name: "Fish" }],
				},
			],
		},
		{
			reference: "FL-002",
			number: "PAX002",
			from: { name: "Heathrow", code: "LHR" },
			to: { name: "Arlanda", code: "ARN" },
			departure: "2022-10-15T08:00:00.000Z",
			arrival: "2022-10-15T10:00:00.000Z",
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
					alternatives: [{ name: "Fancy" }, { name: "Basic" }],
				},
				{
					reference: "ref-754",
					name: "Dinner",
					alternatives: [{ name: "Chicken" }, { name: "Fish" }],
				},
			],
		},
	]
	it("is", () => {
		expect(model.Passenger.is(passenger)).toEqual(true)
	})
	it("seated 1 + 1", () => {
		expect(model.Passenger.seated(passenger)).toEqual(true)
	})
	it("seated 1 + undefined", () => {
		expect(model.Passenger.seated({ ...passenger, return: undefined })).toEqual(true)
	})
	it("seated undefined + undefined", () => {
		expect(model.Passenger.seated({ ...passenger, departure: undefined, return: undefined })).toEqual(false)
	})
	it("seated 1 + [undefined]", () => {
		expect(model.Passenger.seated({ ...passenger, return: [{ reference: "BB" }] })).toEqual(false)
	})
	it("update luggage", () => {
		const luggage: model.Luggage[] = [
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				price: { amount: 100, currency: "AFN" },
				description: "A description.",
			},
		]
		expect(model.Passenger.update(passenger, { luggage })).toEqual({ ...passenger, luggage })
	})
	it("update meal", () => {
		const meal: model.Meal[] = [
			{
				name: "Dinner",
				reference: "ref-34",
				optional: true,
				alternatives: [
					{
						name: "chicken",
						price: { amount: 100, currency: "SEK" },
						default: false,
						description: "Some text",
					},
				],
			},
		]
		expect(model.Passenger.update(passenger, { departure: [{ reference: "AA", meal }] })).toEqual({
			...passenger,
			departure: [{ ...passenger.departure?.[0], meal }],
		})
	})
	it("update seat", () => {
		const seat: model.Layout.Seat = {
			row: { number: 1 },
			position: "H",
			status: "occupied",
			class: "first-class",
			price: { amount: 200, currency: "SEK" },
		}
		expect(model.Passenger.update(passenger, { departure: [{ reference: "AA", seat }] })).toEqual({
			...passenger,
			departure: [{ ...passenger.departure?.[0], seat }],
		})
	})
	it("create itinerary return", () => {
		expect(model.Passenger.createItinerary(passengerNoItinerary, "return", ["AA", "1337"])).toEqual({
			...passengerNoItinerary,
			return: [{ reference: flight.reference }, { reference: flight2.reference }],
		})
	})
	it("create itinerary departure", () => {
		expect(model.Passenger.createItinerary(passengerNoItinerary, "departure", ["FL-001", "FL-002"])).toEqual({
			...passengerNoItinerary,
			departure: [{ reference: flights[0].reference }, { reference: flights[1].reference }],
		})
	})
	it("seated on flight -passenger not seated", () => {
		expect(model.Passenger.seatedOnFlight(passengerUnseated, "return", flight)).toEqual(false)
	})
	it("seated on flight", () => {
		expect(model.Passenger.seatedOnFlight(passenger, "departure", flight)).toEqual(true)
	})
	it("next unseated", () => {
		expect(model.Passenger.selectNext([passenger2, passenger2, passengerUnseated2], "departure", flight)).toEqual(
			passengerUnseated2
		)
	})
	it("next unseated -first passenger is seated and is not allowed to sit on flight", () => {
		expect(model.Passenger.selectNext([passenger, passengerUnseated], "return", flight)).toEqual(passengerUnseated)
	})
	it("next unseated -no unseated passenger", () => {
		expect(model.Passenger.selectNext([passenger, passenger, passenger, passenger], "departure", flight)).toEqual(false)
	})
	it("next unseated -passengers not allowed to sit on flight", () => {
		expect(model.Passenger.selectNext([passengerUnseated, passengerUnseated], "departure", flight)).toEqual(false)
	})
	it("next unseated -first passenger is seated and next is not allowed to sit on flight", () => {
		expect(model.Passenger.selectNext([passenger, passengerUnseated], "departure", flight)).toEqual(false)
	})
	it("next unseated -first passenger is seated and next is not seated, both allowed", () => {
		expect(model.Passenger.selectNext([passenger, passengerUnseated2], "departure", flight)).toEqual(passengerUnseated2)
	})
	it("next unseated -passengers not allowed to sit on flight and no unseated passengers", () => {
		expect(
			model.Passenger.selectNext([passengerUnseated, passengerUnseated, passenger2, passenger2], "departure", flight)
		).toEqual(false)
	})
	it("is allowed on flight", () => {
		expect(model.Passenger.isOnFlight(passenger, "departure", flight)).toEqual(true)
	})
	it("is not allowed on flight", () => {
		expect(model.Passenger.isOnFlight(passenger, "return", flight)).toEqual(false)
	})
})
