import * as model from "./BookingOptions"

describe("model.Name", () => {
	const bookingOptions: model.BookingOptions = {
		departure: [
			{
				from: "ARN",
				to: "LHR",
				departure: "2022-09-28T10:02:00.000Z",
				arrival: "2022-09-28T12:22:00.000Z",
				meals: [
					{
						name: "Dinner",
						optional: true,
						alternatives: [
							{ name: "chicken", price: { amount: 10, currency: "DKK" } },
							{ name: "meat", price: { amount: 12, currency: "DKK" } },
						],
					},
				],
				rows: [
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
		return: [
			{
				from: "LHR",
				to: "ARN",
				departure: "2022-10-18T10:10:00.000Z",
				arrival: "2022-10-18T22:22:00.000Z",
				meals: [
					{
						name: "Dinner",
						optional: true,
						alternatives: [
							{ name: "chicken", price: { amount: 10, currency: "DKK" } },
							{ name: "meat", price: { amount: 12, currency: "DKK" } },
						],
					},
				],
				rows: [
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
				name: "Extra weight",
				weight: 20,
				price: { amount: 100, currency: "SEK" },
				luggageTotal: { amount: 3000, currency: "SEK" },
				description: "Lite text",
			},
			{
				name: "Extra weight",
				weight: 30,
				price: { amount: 200, currency: "SEK" },
				luggageTotal: { amount: 4000, currency: "SEK" },
				description: "Lite text",
			},
		],
	}
	it("is", () => {
		expect(model.BookingOptions.is(bookingOptions)).toEqual(true)
	})
	it("is return undefined", () => {
		expect(model.BookingOptions.is({ ...bookingOptions, return: undefined })).toEqual(true)
	})
	// it("is luggage not undefined", () => {  // Varför fungerar inte denna som jag tänker?
	// 	expect(model.BookingOptions.is({ ...bookingOptions, luggage: undefined })).toEqual(false)
	// })
})