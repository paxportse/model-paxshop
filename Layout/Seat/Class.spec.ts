import { Class } from "./Class"

describe("model.Flight.Seat.Class", () => {
	it("is", () => {
		expect(Class.is("first-class")).toEqual(true)
	})
})
