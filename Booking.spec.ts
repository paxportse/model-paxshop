import * as model from "./Booking"

describe("model.Name", () => {
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
			},
		],
		departure: [
			{
				reference: "AA",
				from: "ARN",
				to: "LHR",
				departure: "2022-09-28T07:22:00.000Z",
				arrival: "2022-09-28T10:02:00.000Z",
			},
		],
		return: [
			{
				reference: "AA",
				from: "ARN",
				to: "LHR",
				departure: "2022-09-28T07:22:00.000Z",
				arrival: "2022-09-28T10:02:00.000Z",
			},
		],
	}
	it("is", () => {
		expect(model.Booking.is(booking)).toEqual(true)
	})
	
})
