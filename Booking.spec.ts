import * as model from "./Booking"

describe("model.Name", () => {
	const booking: model.Booking = {
		reference: "ABC123",
		passengers: [
			{name: {first: "Olle", last: "Olsson"}, ageGroup: "adult", departure: {seat: {status: "occupied", class: "economy", price: {amount: 100, currency: "SEK"}, row: {number: 1}, position: "B"}, return: {seat: {status: "occupied", class: "economy", price: {amount: 100, currency: "SEK"}}, }},
		],

	}
	it("is", () => {
		expect(model.Booking.is(booking)).toEqual(true)
	})
})
