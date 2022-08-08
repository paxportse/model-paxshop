import { Positioned } from "./Positioned"

describe("model.Flight.Seat", () => {
	const positioned: Positioned = {
		row: { number: 1 },
		position: "A",
		status: "available",
		class: "business",
		price: { amount: 100, currency: "DKK" },
	}
	it("is", () => {
		expect(Positioned.is(positioned)).toEqual(true)
	})
})
