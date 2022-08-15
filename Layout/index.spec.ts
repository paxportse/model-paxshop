import * as model from "./index"

describe("model.Flight.Layout", () => {
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
		],
	}
	const layout: model.Layout = [row, row]
	const updatedLayout: model.Layout = [
		{
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
			],
		},
		row,
	]
	const seat: model.Layout.Seat.Positioned = {
		row: { number: 1 },
		position: "A",
		status: "available",
		class: "business",
		price: { amount: 400, currency: "SEK" },
	}
	it("is", () => {
		expect(model.Layout.is(layout)).toEqual(true)
	})
	it("reserve", () => {
		expect(model.Layout.reserve(layout, seat)).toEqual(updatedLayout)
	})
})
