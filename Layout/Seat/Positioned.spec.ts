import * as model from "../../index"
import { Positioned } from "./Positioned"

describe("model.Flight.Seat", () => {
	const positioned: Positioned = {
		row: { number: 1 },
		position: "A",
		status: "available",
		class: "business",
		price: { amount: 200, currency: "SEK" },
	}
	const leg: model.Passenger.Itinerary.Leg = {
		reference: "leg01",
		seat: {
			row: { number: 1 },
			position: "A",
			status: "available",
			class: "business",
			price: { amount: 200, currency: "SEK" },
		},
	}
	const leg2: model.Passenger.Itinerary.Leg = {
		reference: "leg01",
		seat: {
			row: { number: 1 },
			position: "B",
			status: "available",
			class: "business",
			price: { amount: 200, currency: "SEK" },
		},
	}
	it("is", () => {
		expect(Positioned.is(positioned)).toEqual(true)
	})
	it("occupied", () => {
		expect(Positioned.occupied(positioned, leg)).toEqual(true)
	})
	it("occupied - failed", () => {
		expect(Positioned.occupied(positioned, leg2)).toEqual(false)
	})
})
