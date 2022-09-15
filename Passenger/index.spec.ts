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
	const passengerNoItinerary: model.Passenger = {
		reference: "p01",
		name: { first: "Naomi", last: "Nagasaki" },
		ageGroup: "adult",
	}
	const flight: model.FlightOptions = {
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
							{
								status: "unavailable",
								class: "first-class",
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
							{
								status: "unavailable",
								class: "first-class",
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
		expect(model.Passenger.seated({ ...passenger, return: [undefined] })).toEqual(false)
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
						description: "Lite text",
					},
				],
			},
		]
		expect(model.Passenger.update(passenger, { departure: [{ meal }] })).toEqual({
			...passenger,
			departure: [{ ...passenger.departure?.[0], meal }],
		})
	})
	it("update seat", () => {
		const seat: model.Layout.Seat.Positioned = {
			row: { number: 1 },
			position: "H",
			status: "occupied",
			class: "first-class",
			price: { amount: 200, currency: "SEK" },
		}
		expect(model.Passenger.update(passenger, { departure: [{ seat }] })).toEqual({
			...passenger,
			departure: [{ ...passenger.departure?.[0], seat }],
		})
	})
	it("create itinerary", () => {
		expect(model.Passenger.createItinerary(passengerNoItinerary, "return", [flight, flight2])).toEqual({
			...passengerNoItinerary,
			return: [{ reference: flight.reference }, { reference: flight2.reference }],
		})
	})
	it("seated on flight -fail", () => {
		expect(model.Passenger.seatedOnFlight(passengerNoItinerary, "return", flight)).toEqual(false)
	})
	it("seated on flight", () => {
		expect(model.Passenger.seatedOnFlight(passenger, "departure", flight)).toEqual(true)
	})
	it("next unseated", () => {
		expect(
			model.Passenger.nextUnseated(
				[
					passenger,
					passenger,
					passengerNoItinerary,
					{ ...passengerNoItinerary, name: { first: "Bernie", last: "Sanders" } },
					passenger,
				],
				"departure",
				flight
			)
		).toEqual(passengerNoItinerary)
	})
	it("next unseated -fail", () => {
		expect(model.Passenger.nextUnseated([passenger, passenger, passenger, passenger], "departure", flight)).toEqual(
			false
		)
	})
	it("select -no itinerary", () => {
		expect(
			model.Passenger.select(
				passenger,
				[
					{ ...passenger, reference: "1231" },
					{ ...passenger, reference: "1232" },
					passengerNoItinerary,
					{ ...passenger, reference: "1234" },
				],
				"departure",
				flight
			)
		).toEqual(passengerNoItinerary)
	})
	it("select", () => {
		expect(
			model.Passenger.select(
				{ ...passenger, reference: "1232" },
				[
					{ ...passenger, reference: "1231" },
					{ ...passenger, reference: "1232" },
					{ ...passenger, reference: "1233" },
					{ ...passenger, reference: "1234" },
				],
				"departure",
				flight
			)
		).toEqual({ ...passenger, reference: "1233" })
	})
	it("select", () => {
		expect(
			model.Passenger.select(
				{ ...passenger, reference: "1234" },
				[
					{ ...passenger, reference: "1231" },
					{ ...passenger, reference: "1232" },
					{ ...passenger, reference: "1233" },
					{ ...passenger, reference: "1234" },
				],
				"departure",
				flight
			)
		).toEqual({ ...passenger, reference: "1231" })
	})
})
