import * as model from "../../index"

describe("model.Flight.Row.Positioned", () => {
	const positioned = {
		number: 1,
		groups: [
			{
				seats: [
					{
						status: "available",
						class: "economy",
						position: "A",
						row: { number: 1 },
						price: { amount: 400, currency: "DKK" },
					},
				],
			},
		],
		exit: true,
		wing: true,
		toilet: true,
	}
	it("is", () => {
		expect(model.Layout.Row.Positioned.is(positioned)).toEqual(true)
	})
	it("is not string", () => {
		expect(model.Layout.Row.Positioned.is({ ...positioned, number: "hej" })).toEqual(false)
	})
	it("is not 0", () => {
		expect(model.Layout.Row.Positioned.is({ ...positioned, number: 0 })).toEqual(false)
	})
	it("is undefined", () => {
		expect(model.Layout.Row.Positioned.is({ ...positioned, number: undefined })).toEqual(false)
	})
})
