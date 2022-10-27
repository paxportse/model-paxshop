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
						status: "unavailable",
						class: "first-class",
						price: { amount: 1337, currency: "SEK" },
						legroom: true,
					},
				],
			},
		],
	}
	const availableRow: model.Layout.Row = {
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
	const availableLayout: model.Layout = [availableRow, availableRow]
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
							status: "unavailable",
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
	const seats: model.Layout.Seat.Positioned[] = [
		{ ...seat },
		{ ...seat, position: "B" },
		{ ...seat, position: "C" },
		{ ...seat, row: { number: 2 } },
		{ ...seat, row: { number: 2 }, position: "B" },
		{ ...seat, row: { number: 2 }, position: "C" },
	]
	it("is", () => {
		expect(model.Layout.is(layout)).toEqual(true)
	})
	it("reserve", () => {
		expect(model.Layout.reserve(layout, seat)).toEqual(updatedLayout)
	})
	it("isAvailable", () => {
		expect(model.Layout.isAvailable(layout, seat)).toEqual(true)
	})
	it("isAvailable, false", () => {
		expect(model.Layout.isAvailable(layout, { ...seat, row: { number: 2 }, position: "C" })).toEqual(false)
	})
	it("availableSeat", () => {
		expect(model.Layout.availableSeats(seats, layout)).toEqual(availableLayout)
	})
})
