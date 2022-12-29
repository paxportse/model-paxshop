import * as model from "../../index"

describe("model.Order.Payment", () => {
	const price: model.Price = {
		amount: 123,
		currency: "EUR",
	}
	const netaxept: model.Order.Payment = {
		price,
		provider: "netaxept",
		reference: "asd123",
		shop: 123,
	}
	it("is", () => {
		expect(model.Order.Payment.is(netaxept)).toEqual(true)
		expect(model.Order.Payment.is((({ shop, ...other }) => other)(netaxept))).toEqual(false)
		expect(model.Order.Payment.is({})).toEqual(false)
	})
})
