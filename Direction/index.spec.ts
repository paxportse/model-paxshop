import * as model from "../index"
describe("model.Direction", () => {
	it("is", () => {
		expect(model.Direction.is("return")).toEqual(true)
	})
	it("is not", () => {
		expect(model.Direction.is("back")).toEqual(false)
	})
	it("is not", () => {
		expect(model.Direction.is(1)).toEqual(false)
	})
})
