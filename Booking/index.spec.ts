import * as model from "."

describe("model.Booking", () => {
	const booking: model.Booking = {
		reference: "ABC123",
		departure: "2024-07-26",
		passengers: [
			{
				reference: "p01",
				name: { first: "Olle", last: "Olsson" },
				ageGroup: "adult",
				departure: [
					{
						reference: "AAAsd2",
						seat: {
							status: "occupied",
							class: "economy",
							price: { amount: 100, currency: "SEK" },
							position: { row: 1, column: "B" },
							reference: "123",
						},
					},
				],
				return: [
					{
						reference: "AAAsd2",
						seat: {
							status: "occupied",
							class: "economy",
							price: { amount: 100, currency: "SEK" },
							position: { row: 1, column: "A" },
							reference: "123",
						},
					},
				],
				luggage: [
					{
						reference: "lug-006",
						name: "Extra Bag",
						weight: 20,

						description: "Extra bag with the maximum weight of 20kg",
						flights: [{ reference: "AAAsd2", capacity: 5, price: { amount: 300, currency: "SEK" } }],
					},
				],
			},
		],
	}
	const passengerWithLuggage = [
		{
			reference: "p01",
			name: { first: "Olle", last: "Olsson" },
			ageGroup: "adult",
			departure: [
				{
					reference: "AAAsd2",
					seat: {
						status: "occupied",
						class: "economy",
						price: { amount: 100, currency: "SEK" },
						position: { row: 1, column: "B" },
						reference: "123",
					},
				},
			],
			return: [
				{
					reference: "AAAsd2",
					seat: {
						status: "occupied",
						class: "economy",
						price: { amount: 100, currency: "SEK" },
						position: { row: 1, column: "A" },
						reference: "123",
					},
				},
			],
			luggage: [
				{
					reference: "lug-006",
					name: "Extra Bag",
					weight: 20,
					description: "Extra bag with the maximum weight of 20kg",
					flights: [{ reference: "AAAsd2", capacity: 5, price: { amount: 300, currency: "SEK" } }],
				},
			],
		},
	]
	it("is", () => {
		expect(model.Booking.is(booking)).toEqual(true)
	})
	it("reference is not number", () => {
		expect(model.Booking.is({ ...booking, reference: 12 })).toEqual(false)
	})
	it("return is undefined", () => {
		expect(model.Booking.is({ ...booking, return: undefined })).toEqual(true)
	})
	it("getPassengersWithLuggage", () => {
		expect(model.Booking.getPassengersWithLuggage({ ...booking })).toEqual(passengerWithLuggage)
	})
	it("capitalize", () => {
		expect(model.Booking.capitalize("word")).toEqual("Word")
	})
	it("capitalize", () => {
		expect(model.Booking.capitalize("a sentence")).toEqual("A sentence")
	})
})
