// import { dreamliner } from "../demo/dreamliner"
import * as model from "../index"

describe("model.Passenger", () => {
	const passenger: model.Passenger = {
		name: { first: "Pelle", last: "Karlsson" },
		ageGroup: "child",
	}
	it("is", () => {
		expect(model.Passenger.is(passenger)).toEqual(false) // TODO: should be true
	})
})
