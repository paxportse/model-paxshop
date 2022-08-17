import * as model from "./index"

describe("model.Name", () => {
	const bookingOptions: model.BookingOptions = {
		departure: [
			{
				reference: "FL-001",
				from: "ARN",
				to: "LHR",
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
									{
										status: "available",
										class: "first-class",
										price: { amount: 400, currency: "SEK" },
										wide: true,
									},
									{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
								],
							},
						],
						exit: false,
						wing: true,
						toilet: true,
					},
					{
						groups: [
							{
								seats: [
									{
										status: "available",
										class: "first-class",
										price: { amount: 400, currency: "SEK", offer: 200 },
										wide: true,
									},
									{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
								],
							},
						],
						exit: false,
						wing: true,
						toilet: true,
					},
				],
			},
		],
		return: [
			{
				reference: "FL-002",
				from: "LHR",
				to: "ARN",
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
									{
										status: "available",
										class: "first-class",
										price: { amount: 400, currency: "SEK", offer: 200 },
										wide: true,
									},
									{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
								],
							},
						],
						exit: false,
						wing: true,
						toilet: true,
					},
					{
						groups: [
							{
								seats: [
									{
										status: "occupied",
										class: "first-class",
										price: { amount: 400, currency: "SEK", offer: 200 },
										wide: true,
									},
									{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
								],
							},
						],
						exit: false,
						wing: true,
						toilet: true,
					},
				],
			},
		],
		luggage: [
			{
				reference: "lug-006",
				name: "Extra Bag",
				weight: 20,
				price: { amount: 300, currency: "SEK" },
				description: "Extra bag with the maximum weight of 20kg",
			},
			{
				reference: "lug-001",
				name: "Extra weight",
				weight: 20,
				price: { amount: 100, currency: "SEK" },
				description: "Added weight when a piece of luggage exceeds weight limit",
			},
		],
	}
	const updatedBookingOptions: model.BookingOptions = {
		departure: [
			{
				reference: "FL-001",
				from: "ARN",
				to: "LHR",
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
									{
										status: "unavailable",
										class: "first-class",
										price: { amount: 400, currency: "SEK" },
										wide: true,
									},
									{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
								],
							},
						],
						exit: false,
						wing: true,
						toilet: true,
					},
					{
						groups: [
							{
								seats: [
									{
										status: "available",
										class: "first-class",
										price: { amount: 400, currency: "SEK", offer: 200 },
										wide: true,
									},
									{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
								],
							},
						],
						exit: false,
						wing: true,
						toilet: true,
					},
				],
			},
		],
		return: [
			{
				reference: "FL-002",
				from: "LHR",
				to: "ARN",
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
									{
										status: "unavailable",
										class: "first-class",
										price: { amount: 400, currency: "SEK", offer: 200 },
										wide: true,
									},
									{ status: "unavailable", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
								],
							},
						],
						exit: false,
						wing: true,
						toilet: true,
					},
					{
						groups: [
							{
								seats: [
									{
										status: "occupied",
										class: "first-class",
										price: { amount: 400, currency: "SEK", offer: 200 },
										wide: true,
									},
									{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
								],
							},
						],
						exit: false,
						wing: true,
						toilet: true,
					},
				],
			},
		],
		luggage: [
			{
				reference: "lug-006",
				name: "Extra Bag",
				weight: 20,
				price: { amount: 300, currency: "SEK" },
				description: "Extra bag with the maximum weight of 20kg",
			},
			{
				reference: "lug-001",
				name: "Extra weight",
				weight: 20,
				price: { amount: 100, currency: "SEK" },
				description: "Added weight when a piece of luggage exceeds weight limit",
			},
		],
	}
	const booking: model.Booking = {
		reference: "AABA12",
		passengers: [
			{
				reference: "p-00B",
				name: { first: "Pecka", last: "Karlsson" },
				ageGroup: "adult",
				departure: [
					{
						reference: "FL-001",
						seat: {
							row: { number: 1 },
							position: "A",
							status: "available",
							class: "business",
							price: { amount: 100, currency: "DKK" },
						},
					},
				],
				luggage: [
					{
						reference: "lug-006",
						name: "Extra Bag",
						weight: 20,
						price: { amount: 300, currency: "SEK" },
						description: "Extra bag with the maximum weight of 20kg",
					},
				],
			},
			{
				reference: "p-00C",
				name: { first: "Alissa", last: "Karlsson" },
				ageGroup: "adult",
				return: [
					{
						reference: "FL-002",
						seat: {
							row: { number: 1 },
							position: "B",
							status: "available",
							class: "business",
							price: { amount: 100, currency: "DKK" },
						},
					},
				],
			},
			{
				reference: "p-00D",
				name: { first: "Pelle", last: "Karlsson" },
				ageGroup: "adult",
				return: [
					{
						reference: "FL-002",
						seat: {
							row: { number: 1 },
							position: "A",
							status: "available",
							class: "business",
							price: { amount: 100, currency: "DKK" },
						},
					},
				],
			},
		],
		departure: [
			{
				reference: "FL-001",
				from: "ARN",
				to: "LHR",
				departure: "2022-08-20T13:37:00.000Z",
				arrival: "2022-08-20T16:34:00.000Z",
			},
		],
		return: [
			{
				reference: "FL-002",
				from: "LHR",
				to: "ARN",
				departure: "2022-10-18T10:10:00.000Z",
				arrival: "2022-10-18T22:22:00.000Z",
			},
		],
	}
	it("is", () => {
		expect(model.BookingOptions.is(bookingOptions)).toEqual(true)
	})
	it("reserve", () => {
		expect(model.BookingOptions.reserve(bookingOptions, booking)).toEqual(updatedBookingOptions)
	})
	it("isAvailable", () => {
		expect(model.BookingOptions.isAvailable(bookingOptions, booking)).toEqual(true)
	})
	it("isAvailable, false", () => {
		expect(model.BookingOptions.isAvailable(updatedBookingOptions, booking)).toEqual(false)
	})
	it("isArrayOfLuggage", () => {
		expect(model.Luggage.isArrayOfLuggage(bookingOptions.luggage)).toEqual(true)
	})
})
