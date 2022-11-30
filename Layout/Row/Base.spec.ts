import { Row } from "./"

describe("model.Flight.Row", () => {
	const row: Row = {
		groups: [
			{
				seats: [
					{
						status: "available",
						class: "first-class",
						position: "A",
						row: { number: 1 },
						price: { amount: 400, currency: "SEK", offer: 200 },
						wide: true,
					},
					{
						status: "available",
						class: "first-class",
						position: "B",
						row: { number: 1 },
						price: { amount: 400, currency: "SEK" },
						wide: true,
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
						position: "A",
						row: { number: 1 },
						price: { amount: 400, currency: "SEK", offer: 200 },
						wide: true,
					},
					{
						status: "available",
						class: "first-class",
						position: "B",
						row: { number: 1 },
						price: { amount: 400, currency: "SEK" },
						wide: true,
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
