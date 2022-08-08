import { Price } from "./Price"

describe("model.Flight.Seat", () => {
	const price: Price = { amount: 200, currency: "SEK", description: "Some text", offer: 20 }
	it("is", () => {
		expect(Price.is(price)).toEqual(true)
	})
	it("description is undefined", () => {
		expect(Price.is({ ...price, description: undefined })).toEqual(true)
	})
	it("offer is undefined", () => {
		expect(Price.is({ ...price, offer: undefined })).toEqual(true)
	})
	it("total", () => {
		expect(
			Price.total([
				{ amount: 200, currency: "SEK", description: "Some text" },
				{ amount: 100, currency: "SEK", description: "Some text" },
			])
		).toEqual({ amount: 300, currency: "SEK", offer: undefined, description: "Some text" })
	})
	it("total with offer", () => {
		expect(
			Price.total([
				{ amount: 200, currency: "SEK", description: "Special price for you!", offer: 100 },
				{ amount: 100, currency: "SEK", description: "Ordinary price" },
				{ amount: 42, currency: "SEK", description: "Ordinary price" },
				{ amount: 13.37, currency: "SEK" },
			])
		).toEqual({ amount: 355.37, currency: "SEK", offer: 255.37, description: "Special price for you!\nOrdinary price" })
	})
	it("total with offer", () => {
		expect(Price.multiply({ amount: 200, currency: "SEK", description: "Some text here", offer: 100 }, 2)).toEqual({
			amount: 400,
			currency: "SEK",
			offer: 200,
			description: "Some text here",
		})
	})
	it("percentage discount", () => {
		expect(Price.percentageDiscount({ amount: 200, currency: "SEK", description: "Some text here" }, 0.25)).toEqual({
			amount: 200,
			currency: "SEK",
			offer: 150,
			description: "Some text here",
		})
	})
})
