import { Options } from "../Booking/Options"
import * as model from "../index"
import { Booking } from "./../Booking"
import { Passenger } from "./../Passenger"
import { Item } from "./Item"

describe("model.Order", () => {
	const passengers: Passenger[] = [
		{
			reference: "p01",
			name: { first: "Pelle", last: "Karlsson" },
			ageGroup: "child",
			departure: [
				{
					reference: "FL-001",
					seat: {
						position: { row: 1, column: "A" },
						status: "occupied",
						class: "first-class",
						price: { amount: 40, currency: "EUR" },
						reference: "123",
					},
				},
			],
			return: [
				{
					reference: "FL-002",
					seat: {
						position: { row: 1, column: "B" },
						status: "occupied",
						class: "first-class",
						price: { amount: 20, currency: "EUR" },
						reference: "123",
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
					reference: "FL-001",
					seat: {
						position: { row: 4, column: "B" },
						status: "occupied",
						class: "first-class",
						price: { amount: 40, currency: "EUR" },
						reference: "123",
					},
				},
			],
			return: [
				{
					reference: "FL-002",
					seat: {
						position: { row: 6, column: "D" },
						status: "occupied",
						class: "first-class",
						price: { amount: 20, currency: "EUR" },
						reference: "123",
					},
				},
			],
			luggage: [
				{
					reference: "lug-006",
					name: "Extra Bag",
					weight: 20,
					direction: "roundtrip",
					description: "Extra bag with the maximum weight of 20kg",
					flights: [
						{ reference: "FL-001", capacity: 2, price: { amount: 300, currency: "EUR" } },
						{ reference: "FL-002", capacity: 2, price: { amount: 300, currency: "EUR" } },
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
	const price: model.Price = {
		amount: 123,
		currency: "EUR",
	}
	const payment: model.Order.Payment = {
		price,
		provider: "netaxept",
		reference: "asd123",
		shop: 123,
	}
	const session: model.Order.Payment.Session = {
		provider: "netaxept",
		shop: 123,
	}
	const contact: model.Order.Contact = {
		phone: "0123456789",
		email: "jessie@doe.com",
	}
	const total: model.Price = {
		amount: 20,
		currency: "EUR",
	}
	const order: model.Order = {
		id: "7yeackbEgAGwb60H",
		booking: booking,
	}

	const bookingOptions: Options = {
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
							{ name: "chicken", price: { amount: 10, currency: "EUR" }, reference: "345" },
							{ name: "meat", price: { amount: 12, currency: "EUR" }, reference: "345" },
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

										position: { row: 1, column: "A" },
										price: { amount: 400, currency: "EUR" },
										wide: true,
										reference: "123",
									},
									{
										status: "available",
										class: "first-class",

										position: { row: 1, column: "B" },
										price: { amount: 400, currency: "EUR" },
										wide: true,
										reference: "123",
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
										position: { row: 2, column: "A" },
										price: { amount: 400, currency: "EUR", offer: 200 },
										wide: true,
										reference: "123",
									},
									{
										status: "available",
										class: "first-class",
										position: { row: 2, column: "B" },
										price: { amount: 400, currency: "EUR" },
										wide: true,
										reference: "123",
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
							{ name: "chicken", price: { amount: 10, currency: "DKK" }, reference: "345" },
							{ name: "meat", price: { amount: 12, currency: "DKK" }, reference: "345" },
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

										position: { row: 1, column: "A" },
										price: { amount: 400, currency: "EUR", offer: 200 },
										wide: true,
										reference: "123",
									},
									{
										status: "available",
										class: "first-class",

										position: { row: 1, column: "B" },
										price: { amount: 400, currency: "EUR" },
										wide: true,
										reference: "123",
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
										position: { row: 2, column: "A" },
										price: { amount: 400, currency: "EUR", offer: 200 },
										wide: true,
										reference: "123",
									},
									{
										status: "available",
										class: "first-class",
										position: { row: 2, column: "B" },
										price: { amount: 400, currency: "EUR" },
										wide: true,
										reference: "123",
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
						description: "Adult sized bike",
						flights: [
							{ reference: "FL-001", capacity: 5, price: { amount: 300, currency: "EUR" } },
							{ reference: "FL-002", capacity: 5, price: { amount: 300, currency: "EUR" } },
						],
					},
				],
				open: true,
			},
			{
				reference: "lug-006",
				name: "Extra Bag",
				weight: 20,
				description: "Extra bag with the maximum weight of 20kg",
				flights: [
					{ reference: "FL-001", capacity: 5, price: { amount: 300, currency: "EUR" } },
					{ reference: "FL-002", capacity: 5, price: { amount: 300, currency: "EUR" } },
				],
			},
			{
				reference: "lug-001",
				name: "Extra weight",
				weight: 20,
				description: "Added weight when a piece of luggage exceeds weight limit",
				flights: [
					{ reference: "FL-001", capacity: 5, price: { amount: 100, currency: "EUR" } },
					{ reference: "FL-002", capacity: 5, price: { amount: 100, currency: "EUR" } },
				],
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
				amount: 600,
				currency: "EUR",
				description: "",
			},
			quantity: undefined,
			reference: "lug-006",
		},
	]
	it("is", () => {
		expect(model.Order.is(order)).toEqual(true)
		expect(model.Order.is({ ...order, payment })).toEqual(true)
		expect(model.Order.is({ ...order, payment, contact })).toEqual(true)
		expect(model.Order.is({ ...order, payment, contact, total })).toEqual(true)
		expect(model.Order.is({ ...order, payment: session, contact, total })).toEqual(true)
		expect(model.Order.is((({ booking, ...other }) => other)(order))).toEqual(false)
		expect(model.Order.is((({ id, ...other }) => other)(order))).toEqual(false)
		expect(model.Order.is({ ...order, payment: {} })).toEqual(false)
		expect(model.Order.is({ ...order, contact: {} })).toEqual(false)
		expect(model.Order.is({ ...order, total: {} })).toEqual(false)
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
