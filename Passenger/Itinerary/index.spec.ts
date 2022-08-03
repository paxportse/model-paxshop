import * as model from "../index"

describe("model.Itinerary", () => {
	const itinerary: model.Passenger.Itinerary = [
		{
			seat: {
				row: { number: 1 },
				position: "A",
				status: "occupied",
				class: "first-class",
				price: { amount: 200, currency: "SEK" },
			},
		},
	]
	it("is", () => {
		expect(model.Passenger.Itinerary.is(itinerary)).toEqual(true)
	})
})
