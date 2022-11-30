import * as model from "../../index"

describe("Group", () => {
	const group: model.Layout.Group = {
		seats: [
			{
				status: "available",
				class: "first-class",
				price: { amount: 400, currency: "SEK" },
				legroom: true,
			},
		],
	}
	const groups: model.Layout.Group[] = [
		group,
		{
			seats: [{ status: "available", class: "first-class", price: { amount: 3200, currency: "SEK" }, legroom: true }],
		},
		{
			seats: [
				{
					status: "unavailable",
					class: "first-class",
					price: { amount: 1337, currency: "SEK" },
					legroom: true,
				},
				{
					status: "available",
					class: "first-class",
					price: { amount: 8008, currency: "SEK" },
					legroom: true,
				},
			],
		},
	]
	const updatedGroups = [
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
					status: "unavailable",
					class: "first-class",
					price: { amount: 3200, currency: "SEK" },
					legroom: true,
				},
			],
		},
		{
			seats: [
				{
					status: "unavailable",
					class: "first-class",
					price: { amount: 1337, currency: "SEK" },
					legroom: true,
				},
				{
					status: "available",
					class: "first-class",
					price: { amount: 8008, currency: "SEK" },
					legroom: true,
				},
			],
		},
	]
	const updatedGroups2: model.Layout.Group[] = [
		group,
		{
			...group,
			seats: [{ status: "selected", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true }],
		},
		{
			seats: [
				{
					status: "unavailable",
					class: "first-class",
					price: { amount: 1337, currency: "SEK" },
					legroom: true,
				},
				{
					status: "available",
					class: "first-class",
					price: { amount: 8008, currency: "SEK" },
					legroom: true,
				},
			],
		},
	]
	const seat: model.Layout.Seat.Positioned = {
		row: { number: 1 },
		position: "B",
		status: "available",
		class: "business",
		price: { amount: 400, currency: "SEK" },
	}
	it("is", () => {
		expect(model.Layout.Group.is({ ...group, offset: [1, 1] })).toEqual(true)
	})
	it("is", () => {
		expect(model.Layout.Group.is(updatedGroups[0])).toEqual(true)
	})
	it("isArrayOfGroups", () => {
		expect(model.Layout.Group.isArray(groups)).toEqual(true)
	})
	it("reserve", () => {
		expect(model.Layout.Group.reserve(groups, seat.position)).toEqual(updatedGroups)
	})
	it("isAvailable", () => {
		expect(model.Layout.Group.isAvailable(groups, seat.position)).toEqual(true)
	})
	it("isAvailable, false", () => {
		expect(model.Layout.Group.isAvailable(groups, "C")).toEqual(false)
	})
	it("setSeat", () => {
		expect(model.Layout.Group.setSeats(groups, { ...seat, status: "selected" })).toEqual(updatedGroups2)
	})
})
