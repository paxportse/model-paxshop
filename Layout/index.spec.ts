import * as model from "./index"

describe("model.Flight.Layout", () => {
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
		],
	}
	const row2: model.Layout.Row = {
		groups: [
			{
				seats: [
					{
						status: "available",
						class: "first-class",
						position: { row: 2, column: "A" },
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
						position: { row: 2, column: "B" },
						price: { amount: 2346, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
					{
						status: "unavailable",
						class: "first-class",
						position: { row: 2, column: "C" },
						price: { amount: 1337, currency: "SEK" },
						legroom: true,
						reference: "123",
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
						price: { amount: 400, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
					{
						status: "available",
						class: "first-class",
						position: { row: 1, column: "C" },
						price: { amount: 400, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
				],
			},
		],
	}
	const availableRow2: model.Layout.Row = {
		groups: [
			{
				seats: [
					{
						status: "available",
						class: "first-class",
						position: { row: 2, column: "A" },
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
						position: { row: 2, column: "B" },
						price: { amount: 400, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
					{
						status: "available",
						class: "first-class",
						position: { row: 2, column: "C" },
						price: { amount: 400, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
				],
			},
		],
	}
	const rowUndefined: model.Layout.Row = {
		groups: undefined,
	}
	const layout: model.Layout = [row, row2]
	const availableLayout: model.Layout = [availableRow, availableRow2]
	const updatedLayout: model.Layout = [
		{
			groups: [
				{
					seats: [
						{
							status: "unavailable",
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
			],
		},
		row2,
	]
	const seat: model.Layout.Seat = {
		position: { row: 1, column: "A" },
		status: "available",
		class: "business",
		price: { amount: 400, currency: "SEK" },
		reference: "123",
	}
	const seats: model.Layout.Seat[] = [
		{ ...seat },
		{ ...seat, position: { row: 1, column: "B" } },
		{ ...seat, position: { row: 1, column: "C" } },
		{ ...seat, position: { row: 2, column: "A" } },
		{ ...seat, position: { row: 2, column: "B" } },
		{ ...seat, position: { row: 2, column: "C" } },
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
		expect(model.Layout.isAvailable(layout, { ...seat, position: { row: 2, column: "C" } })).toEqual(false)
	})
	it("isAvailable, undefined row", () => {
		expect(
			model.Layout.isAvailable([row, rowUndefined, row], {
				...seat,
				position: { row: 2, column: "A" },
			})
		).toEqual(true)
	})
	it("setSeats", () => {
		expect(model.Layout.setSeats(layout, ...seats)).toEqual(availableLayout)
	})
	it("rowCounter", () => {
		expect(model.Layout.getRowIndex([row, rowUndefined, row, rowUndefined, row], 3)).toEqual(4)
	})
})
