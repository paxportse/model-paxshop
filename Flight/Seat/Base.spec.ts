import { Base as Seat } from "./Base"

describe("model.Flight.Seat", () => {
	const seat: Seat = {
		status: "occupied",
		class: "first-class",
		price: { amount: 200, currency: "SEK" },
	}
	it("is", () => {
		expect(Seat.is(seat)).toEqual(true)
	})
})
