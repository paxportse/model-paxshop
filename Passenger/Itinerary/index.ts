import { Item as ItineraryItem } from "./Item"

export type Itinerary = (Itinerary.Item | undefined)[]

export namespace Itinerary {
	export function is(value: Itinerary | any): value is Itinerary {
		return Array.isArray(value) && value.every(item => item == undefined || Itinerary.Item.is(item))
	}
	export type Item = ItineraryItem
	export const Item = ItineraryItem
}
