import * as model from "../../index"

describe("Group", () => {
	const group: model.Layout.Group = {
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
	}
	const groups: model.Layout.Group[] = [
		group,
		{ toilet: true },
		{
			seats: [
				{
					status: "available",
					class: "first-class",
					position: { row: 1, column: "B" },
					price: { amount: 3200, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
			],
		},
		{
			seats: [
				{
					status: "unavailable",
					class: "first-class",
					position: { row: 1, column: "C" },
					price: { amount: 1337, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
				{
					status: "available",
					class: "first-class",
					position: { row: 1, column: "D" },
					price: { amount: 8008, currency: "SEK" },
					legroom: true,
					reference: "123",
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
					position: { row: 1, column: "A" },
					price: { amount: 400, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
			],
		},
		{ toilet: true },
		{
			seats: [
				{
					status: "unavailable",
					class: "first-class",
					position: { row: 1, column: "B" },
					price: { amount: 3200, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
			],
		},
		{
			seats: [
				{
					status: "unavailable",
					class: "first-class",
					position: { row: 1, column: "C" },
					price: { amount: 1337, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
				{
					status: "available",
					class: "first-class",
					position: { row: 1, column: "D" },
					price: { amount: 8008, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
			],
		},
	]
	const updatedGroupsSetSeat: model.Layout.Group[] = [
		group,
		{ toilet: true },
		{
			seats: [
				{
					status: "unavailable",
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
					status: "unavailable",
					class: "first-class",
					position: { row: 1, column: "C" },
					price: { amount: 1337, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
				{
					status: "available",
					class: "first-class",
					position: { row: 1, column: "D" },
					price: { amount: 8008, currency: "SEK" },
					legroom: true,
					reference: "123",
				},
			],
		},
	]
	const seat: model.Layout.Seat = {
		position: { row: 1, column: "B" },
		status: "available",
		class: "business",
		price: { amount: 400, currency: "SEK" },
		reference: "123",
	}
	it("is", () => {
		expect(model.Layout.Group.is({ ...group, offset: [1, 1] })).toEqual(true)
	})
	it("is", () => {
		expect(model.Layout.Group.is({ toilet: true })).toEqual(true)
	})
	it("isArrayOfGroups", () => {
		expect(model.Layout.Group.isArray(groups)).toEqual(true)
	})
	it("reserve", () => {
		expect(model.Layout.Group.reserve(groups, seat.position.column)).toEqual(updatedGroups)
	})
	it("reserve - seat index not found", () => {
		expect(model.Layout.Group.reserve(groups, "I")).toEqual(groups)
	})
	it("isAvailable", () => {
		expect(model.Layout.Group.isAvailable(groups, "A")).toEqual(true)
	})
	it("isAvailable, false", () => {
		expect(model.Layout.Group.isAvailable(groups, "C")).toEqual(false)
	})
	it("setSeat", () => {
		expect(model.Layout.Group.setSeats(groups, { ...seat, status: "unavailable" })).toEqual(updatedGroupsSetSeat)
	})
})
