import * as model from "../index"

describe("model.Passenger", () => {
	const passenger: model.Passenger = {
		name: { first: "Pelle", last: "Karlsson" },
		ageGroup: "child",
		departure: [
			{
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
})
