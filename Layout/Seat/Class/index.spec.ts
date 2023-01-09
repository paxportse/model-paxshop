import * as model from "../../../index"

describe("model.Flight.Seat.Class", () => {
	const class_: model.Layout.Seat.Class = "first-class"
	it("is", () => {
		expect(model.Layout.Seat.Class.is(class_)).toEqual(true)
	})
})
