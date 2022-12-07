export interface FlightCapacity {
	reference: string
	capacity: number
}

export namespace FlightCapacity {
	export function is(value: FlightCapacity | any): value is FlightCapacity {
		return typeof value == "object" && typeof value.reference == "string" && typeof value.capacity == "number"
	}
}
