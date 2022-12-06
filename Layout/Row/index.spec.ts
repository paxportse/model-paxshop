import * as model from "../index"

describe("model.Layout.Row", () => {
	const row: model.Layout.Row = {
		groups: [
			{
				seats: [
					{
						status: "available",
						class: "first-class",
						position: "A",
						row: { number: 1 },
						price: { amount: 400, currency: "SEK" },
						legroom: true,
					},
				],
			},
			{
				seats: [
					{
						status: "available",
						class: "first-class",
						position: "B",
						row: { number: 1 },
						price: { amount: 2346, currency: "SEK" },
						legroom: true,
					},
					{
						status: "unavailable",
						class: "first-class",
						position: "C",
						row: { number: 1 },
						price: { amount: 1337, currency: "SEK" },
						legroom: true,
					},
				],
			},
			{
				seats: [
					{
						status: "available",
						class: "business",
						position: "D",
						row: { number: 1 },
						price: { amount: 556, currency: "SEK" },
						legroom: true,
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
						position: "A",
						row: { number: 1 },
						price: { amount: 400, currency: "SEK" },
						legroom: true,
					},
				],
			},
			{
				seats: [
					{
						status: "available",
						class: "first-class",
						position: "B",
						row: { number: 1 },
						price: { amount: 2346, currency: "SEK" },
						legroom: true,
					},
					{
						status: "unavailable",
						class: "first-class",
						position: "C",
						row: { number: 1 },
						price: { amount: 1337, currency: "SEK" },
						legroom: true,
					},
				],
			},
			{
				seats: [
					{
						status: "unavailable",
						class: "business",
						position: "D",
						row: { number: 1 },
						price: { amount: 556, currency: "SEK" },
						legroom: true,
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
						position: "A",
						row: { number: 1 },
						price: { amount: 400, currency: "SEK" },
						legroom: true,
					},
				],
			},
			{
				seats: [
					{
						status: "available",
						class: "first-class",
						position: "B",
						row: { number: 1 },
						price: { amount: 2346, currency: "SEK" },
						legroom: true,
					},
					{
						status: "unavailable",
						class: "first-class",
						position: "C",
						row: { number: 1 },
						price: { amount: 1337, currency: "SEK" },
						legroom: true,
					},
				],
			},
			{
				seats: [
					{
						status: "occupied",
						class: "business",
						position: "D",
						row: { number: 1 },
						price: { amount: 400, currency: "SEK" },
						legroom: true,
					},
				],
			},
		],
	}
	const seat: model.Layout.Seat = {
		row: { number: 1 },
		position: "A",
		status: "available",
		class: "business",
		price: { amount: 400, currency: "SEK" },
	}
	const occupiedSeat: model.Layout.Seat = {
		row: { number: 1 },
		position: "D",
		status: "occupied",
		class: "business",
		price: { amount: 400, currency: "SEK" },
	}
	it("is", () => {
		expect(model.Layout.Row.is(row)).toEqual(true)
	})
	it("reserve", () => {
		expect(model.Layout.Row.reserve(row, "D")).toEqual(updatedRow)
	})
	it("isAvailable", () => {
		expect(model.Layout.Row.isAvailable(row, seat.position)).toEqual(true)
	})
	it("isAvailable, false", () => {
		expect(model.Layout.Row.isAvailable(row, "C")).toEqual(false)
	})
	it("setSeat", () => {
		expect(model.Layout.Row.setSeats(row, occupiedSeat)).toEqual(occupiedRow)
	})
})
