import * as model from "../index"

describe("model.Layout.Row", () => {
	const row: model.Layout.Row = {
		groups: [
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
				],
			},
			{
				seats: [
					{
						status: "available",
						class: "first-class",
						position: { row: 1, column: "B" },

						price: { amount: 2346, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
					{
						status: "unavailable",
						class: "first-class",
						position: { row: 1, column: "C" },

						price: { amount: 1337, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
				],
			},
			{
				seats: [
					{
						status: "available",
						class: "business",
						position: { row: 1, column: "D" },

						price: { amount: 556, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
				],
			},
		],
	}
	const updatedRow: model.Layout.Row = {
		groups: [
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
				],
			},
			{
				seats: [
					{
						status: "available",
						class: "first-class",
						position: { row: 1, column: "B" },

						price: { amount: 2346, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
					{
						status: "unavailable",
						class: "first-class",
						position: { row: 1, column: "C" },

						price: { amount: 1337, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
				],
			},
			{
				seats: [
					{
						status: "unavailable",
						class: "business",
						position: { row: 1, column: "D" },

						price: { amount: 556, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
				],
			},
		],
	}
	const occupiedRow: model.Layout.Row = {
		groups: [
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
				],
			},
			{
				seats: [
					{
						status: "available",
						class: "first-class",
						position: { row: 1, column: "B" },

						price: { amount: 2346, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
					{
						status: "unavailable",
						class: "first-class",
						position: { row: 1, column: "C" },

						price: { amount: 1337, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
				],
			},
			{
				seats: [
					{
						status: "occupied",
						class: "business",
						position: { row: 1, column: "D" },

						price: { amount: 400, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
				],
			},
		],
	}
	const seat: model.Layout.Seat = {
		position: { row: 1, column: "A" },
		status: "available",
		class: "business",
		price: { amount: 400, currency: "SEK" },
		reference: "123",
	}
	const occupiedSeat: model.Layout.Seat = {
		position: { row: 1, column: "D" },
		status: "occupied",
		class: "business",
		price: { amount: 400, currency: "SEK" },
		reference: "123",
	}
	it("is", () => {
		expect(model.Layout.Row.is(row)).toEqual(true)
	})
	it("reserve", () => {
		expect(model.Layout.Row.reserve(row, "D")).toEqual(updatedRow)
	})
	it("isAvailable", () => {
		expect(model.Layout.Row.isAvailable(row, seat.position.column)).toEqual(true)
	})
	it("isAvailable, false", () => {
		expect(model.Layout.Row.isAvailable(row, "C")).toEqual(false)
	})
	it("setSeat", () => {
		expect(model.Layout.Row.setSeats(row, occupiedSeat)).toEqual(occupiedRow)
	})
	it("get row number", () => {
		expect(model.Layout.Row.getRowNumber(row)).toEqual(1)
	})
})
