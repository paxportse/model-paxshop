import * as model from "../index"

describe("model.Passenger", () => {
	const passenger: model.Passenger = {
		reference: "p01",
		name: { first: "Pelle", last: "Karlsson" },
		ageGroup: "child",
		departure: [
			{
				reference: "d02",
				seat: {
					row: { number: 1 },
					position: "A",
					status: "occupied",
					class: "first-class",
					price: { amount: 200, currency: "SEK" },
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
					price: { amount: 200, currency: "SEK" },
				},
			},
		],
	}
	it("is", () => {
		expect(model.Passenger.is(passenger)).toEqual(true)
	})
	it("seated 1 + 1", () => {
		expect(model.Passenger.seated(passenger)).toEqual(true)
	})
	it("seated 1 + undefined", () => {
		expect(model.Passenger.seated({ ...passenger, return: undefined })).toEqual(true)
	})
	it("seated undefined + undefined", () => {
		expect(model.Passenger.seated({ ...passenger, departure: undefined, return: undefined })).toEqual(false)
	})
	it("seated 1 + [undefined]", () => {
		expect(model.Passenger.seated({ ...passenger, return: [undefined] })).toEqual(false)
	})
	it("update luggage", () => {
		const luggage: model.Luggage[] = [
			{
				reference: "l01",
				name: "Extra weight",
				weight: 20,
				price: { amount: 100, currency: "AFN" },
				description: "A description.",
			},
		]
		expect(model.Passenger.update(passenger, { luggage })).toEqual({ ...passenger, luggage })
	})
	it("update meal", () => {
		const meal: model.Meal.Alternative[] = [
			{
				name: "chicken",
				price: { amount: 100, currency: "SEK" },
				default: false,
				description: "Lite text",
			},
		]
		expect(model.Passenger.update(passenger, { departure: [{ meal }] })).toEqual({
			...passenger,
			departure: [{ ...passenger.departure?.[0], meal }],
		})
	})
	it("update seat", () => {
		const seat: model.Layout.Seat.Positioned = {
			row: { number: 1 },
			position: "H",
			status: "occupied",
			class: "first-class",
			price: { amount: 200, currency: "SEK" },
		}
		expect(model.Passenger.update(passenger, { departure: [{ seat }] })).toEqual({
			...passenger,
			departure: [{ ...passenger.departure?.[0], seat }],
		})
	})
})
