import { BookingOptions } from "../BookingOptions"
import { Booking } from "./../Booking"
import { Passenger } from "./../Passenger"
import * as model from "./index"
import { Item } from "./Item"

describe("model.Order", () => {
	const passengers: Passenger[] = [
		{
			reference: "p01",
			name: { first: "Pelle", last: "Karlsson" },
			ageGroup: "child",
			departure: [
				{
					reference: "AA",
					seat: {
						row: { number: 1 },
						position: "A",
						status: "occupied",
						class: "first-class",
						price: { amount: 40, currency: "EUR" },
					},
				},
			],
			return: [
				{
					reference: "d03",
					seat: {
						row: { number: 1 },
						position: "B",
						status: "occupied",
						class: "first-class",
						price: { amount: 20, currency: "EUR" },
					},
				},
			],
		},
		{
			reference: "p02",
			name: { first: "Olle", last: "Karlsson" },
			ageGroup: "adult",
			departure: [
				{
					reference: "CC",
					seat: {
						row: { number: 4 },
						position: "B",
						status: "occupied",
						class: "first-class",
						price: { amount: 40, currency: "EUR" },
					},
				},
			],
			return: [
				{
					reference: "DD",
					seat: {
						row: { number: 6 },
						position: "D",
						status: "occupied",
						class: "first-class",
						price: { amount: 20, currency: "EUR" },
					},
				},
			],
			luggage: [
				{
					reference: "lug-006",
					name: "Extra Bag",
					weight: 20,
					direction: "roundtrip",
					price: { amount: 300, currency: "EUR" },
					description: "Extra bag with the maximum weight of 20kg",
					flights: [
						{ reference: "BLX504", capacity: 2 },
						{ reference: "UDE342", capacity: 2 },
					],
				},
			],
		},
	]
	const bookingEmptyPassengerSelections: Booking = {
		reference: "AAAA12",
		departure: "2022-12-01",
		passengers: [
			{
				reference: "p-00A",
				name: {
					first: "Pelle",
					last: "Karlsson",
				},
				ageGroup: "child",
				departure: [
					{
						reference: "FL-001",
					},
				],
				return: [
					{
						reference: "FL-002",
					},
				],
			},
		],
	}
	const booking: Booking = {
		reference: "booking-01",
		departure: "2022-12-12",
		passengers,
	}
	const order: model.Order = {
		id: "7yeackbEgAGwb60H",
		booking: booking,
		total: { amount: 20, currency: "EUR" },
	}

	const bookingOptions: BookingOptions = {
		departure: [
			{
				reference: "FL-001",
				number: "PAX001",
				from: { code: "ARN", name: "Arlanda Airport" },
				to: { code: "LHR", name: "Heathrow Airport" },
				departure: "2022-09-28T10:02:00.000Z",
				arrival: "2022-09-28T12:22:00.000Z",
				meals: [
					{
						reference: "ref-454",
						name: "Dinner",
						optional: true,
						alternatives: [
							{ name: "chicken", price: { amount: 10, currency: "EUR" } },
							{ name: "meat", price: { amount: 12, currency: "EUR" } },
						],
					},
				],
				seating: [
					{
						groups: [
							{
								seats: [
									{
										status: "available",
										class: "first-class",
										row: { number: 1 },
										position: "A",
										price: { amount: 400, currency: "EUR" },
										wide: true,
									},
									{
										status: "available",
										class: "first-class",
										row: { number: 1 },
										position: "B",
										price: { amount: 400, currency: "EUR" },
										wide: true,
									},
								],
							},
						],
						exit: false,
						wing: true,
						toilet: true,
					},
					{
						groups: [
							{
								seats: [
									{
										status: "available",
										class: "first-class",
										row: { number: 2 },
										position: "A",
										price: { amount: 400, currency: "EUR", offer: 200 },
										wide: true,
									},
									{
										status: "available",
										class: "first-class",
										row: { number: 2 },
										position: "B",
										price: { amount: 400, currency: "EUR" },
										wide: true,
									},
								],
							},
						],
						exit: false,
						wing: true,
						toilet: true,
					},
				],
			},
		],
		return: [
			{
				reference: "FL-002",
				number: "PAX002",
				from: { code: "LHR", name: "Heathrow Airport" },
				to: { code: "ARN", name: "Arlanda Airport" },
				departure: "2022-10-18T10:10:00.000Z",
				arrival: "2022-10-18T22:22:00.000Z",
				meals: [
					{
						reference: "ref-5464",
						name: "Dinner",
						optional: true,
						alternatives: [
							{ name: "chicken", price: { amount: 10, currency: "DKK" } },
							{ name: "meat", price: { amount: 12, currency: "DKK" } },
						],
					},
				],
				seating: [
					{
						groups: [
							{
								seats: [
									{
										status: "available",
										class: "first-class",
										row: { number: 1 },
										position: "A",
										price: { amount: 400, currency: "EUR", offer: 200 },
										wide: true,
									},
									{
										status: "available",
										class: "first-class",
										row: { number: 1 },
										position: "B",
										price: { amount: 400, currency: "EUR" },
										wide: true,
									},
								],
							},
						],
						exit: false,
						wing: true,
						toilet: true,
					},
					{
						groups: [
							{
								seats: [
									{
										status: "occupied",
										class: "first-class",
										row: { number: 2 },
										position: "A",
										price: { amount: 400, currency: "EUR", offer: 200 },
										wide: true,
									},
									{
										status: "available",
										class: "first-class",
										row: { number: 2 },
										position: "B",
										price: { amount: 400, currency: "EUR" },
										wide: true,
									},
								],
							},
						],
						exit: false,
						wing: true,
						toilet: true,
					},
				],
			},
		],
		luggage: [
			{
				name: "Sport",
				description: "Some description",
				options: [
					{
						reference: "lug-009",
						name: "Bicycle",
						weight: 20,
						direction: "roundtrip",
						price: { amount: 300, currency: "EUR" },
						description: "Adult sized bike",
					},
				],
				open: true,
			},
			{
				reference: "lug-006",
				name: "Extra Bag",
				weight: 20,
				direction: "roundtrip",
				price: { amount: 300, currency: "EUR" },
				description: "Extra bag with the maximum weight of 20kg",
			},
			{
				reference: "lug-001",
				name: "Extra weight",
				weight: 20,
				direction: "roundtrip",
				price: { amount: 100, currency: "EUR" },
				description: "Added weight when a piece of luggage exceeds weight limit",
			},
		],
	}
	const items: Item[] = [
		{
			flight: "",
			name: "1A",
			passenger: "Pelle Karlsson",
			price: {
				amount: 40,
				currency: "EUR",
			},
			reference: "pm-seat-ref",
		},
		{
			flight: "",
			name: "1B",
			passenger: "Pelle Karlsson",
			price: {
				amount: 20,
				currency: "EUR",
			},
			reference: "pm-seat-ref",
		},
		{
			flight: "",
			name: "4B",
			passenger: "Olle Karlsson",
			price: {
				amount: 40,
				currency: "EUR",
			},
			reference: "pm-seat-ref",
		},
		{
			flight: "",
			name: "6D",
			passenger: "Olle Karlsson",
			price: {
				amount: 20,
				currency: "EUR",
			},
			reference: "pm-seat-ref",
		},
		{
			flight: "roundtrip",
			name: "Extra Bag",
			passenger: "Olle Karlsson",
			price: {
				amount: 300,
				currency: "EUR",
			},
			quantity: undefined,
			reference: "lug-006",
		},
	]
	it("is", () => {
		expect(model.Order.is(order)).toEqual(true)
	})
	it("create", () => {
		const result = model.Order.create(booking)
		expect(result).toMatchObject({
			booking: booking,
			total: { amount: 720, currency: "EUR", description: "" },
		})
		expect(result?.id).toMatch(/([\w\d-_]{16})/)
	})
	it("getItems", () => {
		expect(model.Order.getItems(order, bookingOptions)).toEqual(items)
	})
	it("getTotal", () => {
		expect(model.Order.getTotal(booking)).toEqual({ amount: 720, currency: "EUR", description: "" })
	})
	it("getTotal - no selections", () => {
		expect(model.Order.getTotal(bookingEmptyPassengerSelections)).toEqual(undefined)
	})
})
