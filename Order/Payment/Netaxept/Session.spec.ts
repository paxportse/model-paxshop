import * as model from "../../../index"

describe("Order.Payment.Netaxept.Session", () => {
	const session: model.Order.Payment.Netaxept.Session = {
		provider: "netaxept",
		shop: 123,
	}
	it("is", () => {
		expect(model.Order.Payment.Netaxept.Session.is(session)).toEqual(true)
		expect(model.Order.Payment.Netaxept.Session.is({ ...session, target: "https://netaxept.com" })).toEqual(true)
		expect(model.Order.Payment.Netaxept.Session.is({ ...session, target: 123 })).toEqual(false)
		expect(model.Order.Payment.Netaxept.Session.is({ ...session, shop: "123" })).toEqual(false)
		expect(model.Order.Payment.Netaxept.Session.is({ ...session, provider: "someoneElse" })).toEqual(false)
	})
})
