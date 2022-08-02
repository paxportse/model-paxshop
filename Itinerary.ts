import { Flight } from "./Flight"
import { Luggage } from "./Luggage"

export interface Itinerary {
	departure: Flight[]
	return?: Flight[]
	luggages: Luggage[]
}
