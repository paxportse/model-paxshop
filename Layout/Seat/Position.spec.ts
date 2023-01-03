import * as model from "../../index"

describe("model.Flight.Seat.Position", () => {
	const groups: model.Layout.Group[] = [
		{
			seats: [
				{
					status: "available",
					class: "first-class",
					position: "A",
					row: { number: 1 },
					price: { amount: 400, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
				{
					status: "available",
					class: "first-class",
					position: "B",
					row: { number: 1 },
					price: { amount: 400, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
			],
		},
		{
			seats: [
				{
					status: "available",
					class: "first-class",
					position: "G",
					row: { number: 1 },
					price: { amount: 400, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
				{
					status: "available",
					class: "first-class",
					position: "H",
					row: { number: 1 },
					price: { amount: 400, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
			],
		},
	]

	it("is", () => {
		expect(model.Layout.Seat.Position.is("G")).toEqual(true)
	})
	it("index", () => {
		expect(model.Layout.Seat.Position.index("H", groups)).toEqual(3)
	})
})
