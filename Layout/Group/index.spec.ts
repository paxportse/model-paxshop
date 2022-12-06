import * as model from "../../index"

describe("Group", () => {
	const group: model.Layout.Group = {
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
	}
	const groupReserve: model.Layout.Group = {
		seats: [
			{
				status: "available",
				class: "first-class",
				position: "A",
				row: { number: 1 },
				price: { amount: 400, currency: "SEK" },
				legroom: true,
			},
			{
				status: "available",
				class: "first-class",
				position: "B",
				row: { number: 1 },
				price: { amount: 400, currency: "SEK" },
				legroom: true,
			},
		],
	}
	const groups: model.Layout.Group[] = [
		group,
		{
			seats: [
				{
					status: "available",
					class: "first-class",
					position: "B",
					row: { number: 1 },
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
					position: "C",
					row: { number: 1 },
					price: { amount: 1337, currency: "SEK" },
					legroom: true,
				},
				{
					status: "available",
					class: "first-class",
					position: "D",
					row: { number: 1 },
					price: { amount: 8008, currency: "SEK" },
					legroom: true,
				},
			],
		},
	]
	const updatedGroupReserve: model.Layout.Group = {
		seats: [
			{
				status: "available",
				class: "first-class",
				position: "A",
				row: { number: 1 },
				price: { amount: 400, currency: "SEK" },
				legroom: true,
			},
			{
				status: "unavailable",
				class: "first-class",
				position: "B",
				row: { number: 1 },
				price: { amount: 400, currency: "SEK" },
				legroom: true,
			},
		],
	}
	const updatedGroupsSetSeat: model.Layout.Group[] = [
		group,
		{
			seats: [
				{
					status: "unavailable",
					class: "first-class",
					position: "B",
					row: { number: 1 },
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
					position: "C",
					row: { number: 1 },
					price: { amount: 1337, currency: "SEK" },
					legroom: true,
				},
				{
					status: "available",
					class: "first-class",
					position: "D",
					row: { number: 1 },
					price: { amount: 8008, currency: "SEK" },
					legroom: true,
				},
			],
		},
	]
	const seat: model.Layout.Seat = {
		row: { number: 1 },
		position: "B",
		status: "available",
		class: "business",
		price: { amount: 400, currency: "SEK" },
	}
	it("is", () => {
		expect(model.Layout.Group.is({ ...group, offset: [1, 1] })).toEqual(true)
	})
	it("isArrayOfGroups", () => {
		expect(model.Layout.Group.isArray(groups)).toEqual(true)
	})
	it("reserve", () => {
		expect(model.Layout.Group.reserve(groupReserve, seat.position)).toEqual(updatedGroupReserve)
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
