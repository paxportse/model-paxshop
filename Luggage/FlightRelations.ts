export interface FlightRelations {
	reference: string
	capacity?: number
}

export namespace FlightRelations {
	export function is(value: FlightRelations | any): value is FlightRelations {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			(value.capacity == undefined || typeof value.capacity == "number")
		)
	}
}
