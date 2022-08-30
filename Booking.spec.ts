import * as model from "./Booking"

describe("model.Booking", () => {
	const booking: model.Booking = {
		reference: "ABC123",
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
							row: { number: 1 },
							position: "B",
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
							row: { number: 1 },
							position: "A",
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
		],
		departure: [
			{
				reference: "AA",
				from: { code: "ARN", name: "Arlanda Airport" },
				to: { code: "LHR", name: "Heathrow Airport" },
				departure: "2022-09-28T07:22:00.000Z",
				arrival: "2022-09-28T10:02:00.000Z",
			},
		],
		return: [
			{
				reference: "AA",
				from: { code: "LHR", name: "Heathrow Airport" },
				to: { code: "ARN", name: "Arlanda Airport" },
				departure: "2022-09-28T07:22:00.000Z",
				arrival: "2022-09-28T10:02:00.000Z",
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
						row: { number: 1 },
						position: "B",
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
						row: { number: 1 },
						position: "A",
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
})
