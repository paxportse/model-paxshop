import { Row } from "./"

describe("model.Flight.Row", () => {
	const row: Row = {
		groups: [
			{
				seats: [
					{
						status: "available",
						class: "first-class",
						position: { row: 1, column: "A" },
						price: { amount: 400, currency: "SEK", offer: 200 },
						wide: true,
						reference: "123",
					},
					{
						status: "available",
						class: "first-class",
						position: { row: 1, column: "B" },
						price: { amount: 400, currency: "SEK" },
						wide: true,
						reference: "123",
					},
				],
			},
		],
		exit: false,
		wing: true,
		toilet: true,
	}
	const rowUndefinedGroup: Row = {
		groups: [
			undefined,
			{
				seats: [
					{
						status: "available",
						class: "first-class",
						position: { row: 1, column: "A" },
						price: { amount: 400, currency: "SEK", offer: 200 },
						wide: true,
						reference: "123",
					},
					{
						status: "available",
						class: "first-class",
						position: { row: 1, column: "B" },
						price: { amount: 400, currency: "SEK" },
						wide: true,
						reference: "123",
					},
				],
			},
		],
	}
	it("is", () => {
		expect(Row.is(row)).toEqual(true)
	})
	it("is undefined", () => {
		expect(Row.is({ ...row, groups: undefined })).toEqual(true)
	})
	it("is group undefined", () => {
		expect(Row.is({ rowUndefinedGroup })).toEqual(true)
	})
})
