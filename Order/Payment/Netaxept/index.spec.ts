import * as model from "../../../index"

describe("Order.Payment.Netaxept", () => {
	const payment: model.Order.Payment.Netaxept = {
		amount: 123,
		currency: "EUR",
		provider: "netaxept",
		reference: "asd123",
		shop: 123,
	}
	it("is", () => {
		expect(model.Order.Payment.Netaxept.is(payment)).toEqual(true)
		expect(model.Order.Payment.Netaxept.is({ ...payment, target: "https://netaxept.com" })).toEqual(true)
		expect(model.Order.Payment.Netaxept.is({ ...payment, target: 123 })).toEqual(false)
		expect(model.Order.Payment.Netaxept.is({ ...payment, amount: "123" })).toEqual(false)
		expect(model.Order.Payment.Netaxept.is({ ...payment, currency: "åäö" })).toEqual(false)
		expect(model.Order.Payment.Netaxept.is({ ...payment, provider: "someone else" })).toEqual(false)
		expect(model.Order.Payment.Netaxept.is({ ...payment, shop: "123" })).toEqual(false)
	})
})
