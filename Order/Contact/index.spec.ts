import * as model from "../../index"

describe("Order.Contact", () => {
	const contact: model.Order.Contact = {
		phone: "0123456789",
		email: "jessie@doe.com",
	}
	it("is", () => {
		expect(model.Order.Contact.is(contact)).toEqual(true)
		expect(model.Order.Contact.is({ ...contact, email: 123 })).toEqual(false)
		expect(model.Order.Contact.is({ ...contact, phone: {} })).toEqual(false)
	})
})
