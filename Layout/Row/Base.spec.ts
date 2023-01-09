import * as model from "../../index"
describe("model.Flight.Row", () => {
	const row: model.Layout.Row = {
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
						reference: "123",
					},
					{
						status: "available",
						class: "first-class",
						position: "B",
						row: { number: 1 },
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
	const rowUndefinedGroup: model.Layout.Row = {
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
						reference: "123",
					},
					{
						status: "available",
						class: "first-class",
						position: "B",
						row: { number: 1 },
						price: { amount: 400, currency: "SEK" },
						wide: true,
						reference: "123",
					},
				],
			},
		],
	}
	it("is", () => {
		expect(model.Layout.Row.is(row)).toEqual(true)
	})
	it("is undefined", () => {
		expect(model.Layout.Row.is({ ...row, groups: undefined })).toEqual(true)
	})
	it("is group undefined", () => {
		expect(model.Layout.Row.is({ rowUndefinedGroup })).toEqual(true)
	})
})
