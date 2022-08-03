import { Positioned } from "./Positioned"

describe("model.Flight.Row.Positioned", () => {
	const positioned: Positioned = {
		number: 1,
		groups: [{ seats: [{ status: "available", class: "economy", price: { amount: 400, currency: "DKK" } }] }],
		exit: true,
		wing: true,
		toilet: true,
	}
	it("is", () => {
		expect(Positioned.is(positioned)).toEqual(true)
	})
	it("is not string", () => {
		expect(Positioned.is({ ...positioned, number: "hej" })).toEqual(false)
	})
	it("is not 0", () => {
		expect(Positioned.is({ ...positioned, number: 0 })).toEqual(false)
	})
	it("is undefined", () => {
		expect(Positioned.is({ ...positioned, number: undefined })).toEqual(true)
	})
})
