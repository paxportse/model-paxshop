import * as model from "../index"
describe("model.Layout.Row", () => {
	const row: model.Layout.Row = {
		groups: [
			{
				seats: [
					{
						status: "available",
						class: "first-class",
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
						price: { amount: 2346, currency: "SEK" },
						legroom: true,
					},
					{
						status: "available",
						class: "first-class",
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
						status: "unavailable",
						class: "first-class",
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
						price: { amount: 2346, currency: "SEK" },
						legroom: true,
					},
					{
						status: "available",
						class: "first-class",
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
						price: { amount: 556, currency: "SEK" },
						legroom: true,
					},
				],
			},
		],
	}
	const seat: model.Layout.Seat.Positioned = {
		row: { number: 1 },
		position: "A",
		status: "available",
		class: "business",
		price: { amount: 400, currency: "SEK" },
	}
	it("is", () => {
		expect(model.Layout.Row.is(row)).toEqual(true)
	})
	it("reserve", () => {
		expect(model.Layout.Row.reserve(row, seat.position)).toEqual(updatedRow)
	})
})
