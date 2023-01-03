import * as model from "./index"

describe("model.Flight.Layout", () => {
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
						reference: "123",
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
						reference: "123",
					},
					{
						status: "unavailable",
						class: "first-class",
						position: "C",
						row: { number: 1 },
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
						position: "A",
						row: { number: 2 },
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
						position: "B",
						row: { number: 2 },
						price: { amount: 2346, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
					{
						status: "unavailable",
						class: "first-class",
						position: "C",
						row: { number: 2 },
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
						position: "A",
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
						position: "B",
						row: { number: 1 },
						price: { amount: 400, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
					{
						status: "available",
						class: "first-class",
						position: "C",
						row: { number: 1 },
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
						position: "A",
						row: { number: 2 },
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
						position: "B",
						row: { number: 2 },
						price: { amount: 400, currency: "SEK" },
						legroom: true,
						reference: "123",
					},
					{
						status: "available",
						class: "first-class",
						position: "C",
						row: { number: 2 },
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
							position: "A",
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
							position: "B",
							row: { number: 1 },
							price: { amount: 2346, currency: "SEK" },
							legroom: true,
							reference: "123",
						},
						{
							status: "unavailable",
							class: "first-class",
							position: "C",
							row: { number: 1 },
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
		row: { number: 1 },
		position: "A",
		status: "available",
		class: "business",
		price: { amount: 400, currency: "SEK" },
		reference: "123",
	}
	const seats: model.Layout.Seat[] = [
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
	it("isAvailable, undefined row", () => {
		expect(model.Layout.isAvailable([row, rowUndefined, row], { ...seat, row: { number: 2 }, position: "A" })).toEqual(
			true
		)
	})
	it("setSeats", () => {
		expect(model.Layout.setSeats(layout, ...seats)).toEqual(availableLayout)
	})
	it("rowCounter", () => {
		expect(model.Layout.getRowIndex([row, rowUndefined, row, rowUndefined, row], 3)).toEqual(4)
	})
})
