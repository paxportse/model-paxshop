import * as model from "../../index"

describe("model.Flight.Seat.Class", () => {
	it("is", () => {
		expect(model.Class.is("first-class")).toEqual(true)
	})
})
