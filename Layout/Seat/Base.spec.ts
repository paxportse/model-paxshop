import { Base as Seat } from "./Base"

describe("model.Flight.Seat", () => {
	const seat: Seat = {
		status: "occupied",
		class: "first-class",
		price: { amount: 200, currency: "SEK" },
		category: "green",
	}
	const pricelessSeat: Seat = {
		status: "occupied",
		class: "first-class",
		category: "green",
	}
	it("is", () => {
		expect(Seat.is(seat)).toEqual(true)
	})
	it("is - priceless", () => {
		expect(Seat.is(pricelessSeat)).toEqual(true)
	})
	it("is not", () => {
		expect(Seat.is({ ...seat, category: 2 })).toEqual(false)
	})
})
