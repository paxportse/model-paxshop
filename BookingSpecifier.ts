import * as isoly from "isoly"
import { Passenger } from "./Passenger"

export interface BookingSpecifier {
	reference: string
	departure?: isoly.Date
	name?: Partial<Passenger.Name>
}
