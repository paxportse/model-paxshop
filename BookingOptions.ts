import { Flight } from "./Flight"
import { Luggage } from "./Luggage"

export interface BookingOptions {
	departure: Flight[]
	return?: Flight[]
	luggages: Luggage[]
}
