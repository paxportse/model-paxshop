import { Base as Row } from "./Base"

describe("model.Flight.Row", () => {
	const row: Row = {
		groups: [
			{
				seats: [
					{
						status: "available",
						class: "first-class",
						price: { amount: 400, currency: "SEK", offer: 200 },
						wide: true,
					},
					{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
				],
			},
		],
		exit: false,
		wing: true,
		toilet: true,
	}
	it("is", () => {
		expect(Row.is(row)).toEqual(true)
	})
	it("is undefined", () => {
		expect(Row.is({ ...row, groups: undefined })).toEqual(true)
	})
})
