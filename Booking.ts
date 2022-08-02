import { Passenger } from "./Passenger"

export interface Booking {
	reference: string
	passengers: Passenger[]
}
