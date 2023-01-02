import * as model from "../../index"

describe("model.Order.Payment.Session", () => {
	const session: model.Order.Payment.Session = {
		shop: 123,
	}
	it("is", () => {
		expect(model.Order.Payment.Session.is(session)).toEqual(true)
		expect(model.Order.Payment.Session.is({ ...session, target: "https://netaxept.com" })).toEqual(true)
		expect(model.Order.Payment.Session.is((({ shop, ...other }) => other)(session))).toEqual(false)
	})
})
