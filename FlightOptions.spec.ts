import * as model from "./index"
import * as passenger from "./Passenger/Itinerary/"

describe("model.FlightOptions", () => {
	const layout: model.FlightOptions = {
		reference: "AA",
		from: { code: "ARN", name: "Arlanda Airport" },
		to: { code: "LHR", name: "Heathrow Airport" },

		departure: "2022-09-28T07:22:00.000Z",
		arrival: "2022-09-28T10:02:00.000Z",
		seating: [
			{
				groups: [
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							{
								status: "available",
								class: "first-class",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
							},
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 150, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 250, currency: "SEK" } },
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 350, currency: "SEK" }, legroom: true },
							{ status: "available", class: "first-class", price: { amount: 1250, currency: "SEK" }, legroom: true },
						],
					},
				],
				exit: false,
			},
			{
				groups: [
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							{
								status: "available",
								class: "first-class",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
							},
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 150, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 250, currency: "SEK" } },
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 350, currency: "SEK" }, legroom: true },
							{ status: "unavailable", class: "first-class", price: { amount: 1250, currency: "SEK" }, legroom: true },
						],
					},
				],
				exit: false,
			},
		],
		meals: [
			{
				reference: "ref-234",
				name: "Breakfast",
				alternatives: [{ name: "Fancy" }, { name: "Basic" }],
			},
			{
				reference: "ref-754",
				name: "Dinner",
				alternatives: [{ name: "Chicken" }, { name: "Fish" }],
			},
		],
	}
	const updatedLayout: model.FlightOptions = {
		reference: "AA",
		from: { code: "ARN", name: "Arlanda Airport" },
		to: { code: "LHR", name: "Heathrow Airport" },
		departure: "2022-09-28T07:22:00.000Z",
		arrival: "2022-09-28T10:02:00.000Z",
		seating: [
			{
				groups: [
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							{
								status: "available",
								class: "first-class",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
							},
						],
					},
					{
						seats: [
							{ status: "unavailable", class: "first-class", price: { amount: 100, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 150, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 250, currency: "SEK" } },
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 350, currency: "SEK" }, legroom: true },
							{ status: "available", class: "first-class", price: { amount: 1250, currency: "SEK" }, legroom: true },
						],
					},
				],
				exit: false,
			},
			{
				groups: [
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							{
								status: "available",
								class: "first-class",
								price: { amount: 400, offer: 50, currency: "SEK" },
								wide: true,
							},
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 100, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 150, currency: "SEK" } },
							{ status: "available", class: "first-class", price: { amount: 250, currency: "SEK" } },
						],
					},
					{
						seats: [
							{ status: "available", class: "first-class", price: { amount: 350, currency: "SEK" }, legroom: true },
							{ status: "unavailable", class: "first-class", price: { amount: 1250, currency: "SEK" }, legroom: true },
						],
					},
				],
				exit: false,
			},
		],
		meals: [
			{
				reference: "ref-234",
				name: "Breakfast",
				alternatives: [{ name: "Fancy" }, { name: "Basic" }],
			},
			{
				reference: "ref-754",
				name: "Dinner",
				alternatives: [{ name: "Chicken" }, { name: "Fish" }],
			},
		],
	}
	const leg: passenger.Itinerary.Leg = {
		reference: "FL-011",
		seat: {
			row: { number: 1 },
			position: "C",
			status: "available",
			class: "business",
			price: { amount: 100, currency: "DKK" },
		},
	}
	it("is", () => {
		expect(model.FlightOptions.is(layout)).toEqual(true)
	})
	it("reserve", () => {
		expect(model.FlightOptions.reserve(layout, leg)).toEqual(updatedLayout)
	})
	it("isAvailable", () => {
		expect(model.FlightOptions.isAvailable(layout, leg)).toEqual(true)
	})
	it("isAvailable, false", () => {
		expect(
			model.FlightOptions.isAvailable(layout, {
				...leg,
				seat: {
					row: { number: 2 },
					position: "G",
					status: "available",
					class: "business",
					price: { amount: 1250, currency: "SEK" },
				},
			})
		).toEqual(false)
	})
})
