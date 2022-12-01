import * as model from "../../index"

describe("model.Flight.Seat", () => {
	const seat: model.Layout.Seat = {
		status: "occupied",
		class: "first-class",
		position: "D",
		row: { number: 3 },
		price: { amount: 200, currency: "SEK" },
		category: "green",
		wide: true,
		legroom: true,
		wing: true,
		limitedRecline: true,
		noRecline: true,
		window: true,
		description: "Some information.",
		exit: true,
	}
	const pricelessSeat: model.Layout.Seat = {
		status: "occupied",
		class: "first-class",
		row: { number: 1 },
		position: "D",
		category: "green",
	}

	const leg: model.Passenger.Itinerary.Leg = {
		reference: "leg01",
		seat: {
			row: { number: 3 },
			position: "D",
			status: "available",
			class: "business",
			price: { amount: 200, currency: "SEK" },
		},
	}
	it("is", () => {
		expect(model.Layout.Seat.is(seat)).toEqual(true)
	})
	it("is - priceless", () => {
		expect(model.Layout.Seat.is(pricelessSeat)).toEqual(true)
	})
	it("is not", () => {
		expect(model.Layout.Seat.is({ ...seat, category: 2 })).toEqual(false)
	})
	it("chosen by", () => {
		expect(model.Layout.Seat.chosen(seat, leg)).toEqual(true)
	})
	it("not chosen by", () => {
		expect(model.Layout.Seat.chosen(seat, { ...leg, seat: { ...seat, position: "A" } })).toEqual(false)
	})
})
