import * as model from "../../../index"

describe("model.Flight.Seat.Position.Column", () => {
	const groups: model.Layout.Group[] = [
		{
			seats: [
				{
					status: "available",
					class: "first-class",
					position: { row: 1, column: "A" },
					price: { amount: 400, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
				{
					status: "available",
					class: "first-class",
					position: { row: 1, column: "B" },
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
					position: { row: 1, column: "G" },
					price: { amount: 400, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
				{
					status: "available",
					class: "first-class",
					position: { row: 1, column: "H" },
					price: { amount: 400, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
			],
		},
	]

	it("is", () => {
		expect(model.Layout.Seat.Position.Column.is("G")).toEqual(true)
	})
	it("index", () => {
		expect(model.Layout.Seat.Position.Column.index("H", groups)).toEqual(3)
	})
})
