import * as model from "../../Layout"
import { Group } from "./Group"

describe("Group", () => {
	const group: Group = {
		seats: [
			{
				status: "available",
				class: "first-class",
				price: { amount: 400, currency: "SEK" },
				legroom: true,
			},
		],
	}
	const groups: Group[] = [
		group,
		{
			...group,
			seats: [{ status: "available", class: "first-class", price: { amount: 3200, currency: "SEK" }, legroom: true }],
		},
		{
			seats: [
				{
					status: "available",
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
					status: "available",
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
		expect(Group.is(group)).toEqual(true)
	})
	it("is", () => {
		expect(Group.is(updatedGroups[0])).toEqual(true)
	})
	it("isArrayOfGroups", () => {
		expect(Group.isArrayOfGroups(groups)).toEqual(true)
	})
	it("reserve", () => {
		expect(Group.reserve(groups, seat.position)).toEqual(updatedGroups)
	})
})
