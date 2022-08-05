import * as model from "./index"

describe("model.Flight", () => {
	const layout: model.FlightOptions = {
		reference: "AA",
		from: "ARN",
		to: "LHR",
		departure: "2022-09-28T07:22:00.000Z",
		arrival: "2022-09-28T10:02:00.000Z",
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
		seating: [
			{
				groups: [
					{
						seats: [
							{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
							{
								status: "occupied",
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
		],
	}
	it("is", () => {
		expect(model.Flight.is(layout)).toEqual(true)
	})
})
