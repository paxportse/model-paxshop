// import { dreamliner } from "../demo/dreamliner"
import * as model from "./Name"

describe("model.Name", () => {
	const passenger: model.Name = {
		title: "Mr",
		first: "Bill",
		last: "Billsson",
	}
	it("is", () => {
		expect(model.Name.is(passenger)).toEqual(true)
	})
	it("is not first:42", () => {
		expect(model.Name.is({ ...passenger, first: 42 })).toEqual(false)
	})
	it("is not title:42", () => {
		expect(model.Name.is({ ...passenger, title: 42 })).toEqual(false)
	})
	it("is not other than allowed", () => {
		expect(model.Name.is({ ...passenger, title: "Hello" })).toEqual(false)
	})
})
