import * as model from "../../index"

describe("model.Order.Payment", () => {
	const netaxept: model.Order.Payment = {
		amount: 123,
		currency: "EUR",
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
