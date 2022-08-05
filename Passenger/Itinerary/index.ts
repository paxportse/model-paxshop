import { Item as ItineraryItem } from "./Item"

export type Itinerary = (Itinerary.Item | undefined)[]

export namespace Itinerary {
	export function is(value: Itinerary | any): value is Itinerary {
		return Array.isArray(value) && value.every(item => item == undefined || Itinerary.Item.is(item))
	}
	export function update(itinerary: Itinerary, changes: Itinerary | undefined): Itinerary {
		return changes
			? itinerary.map(
					(item, index) =>
						item &&
						(({ seat, meal }) => (meal ? { seat, meal } : { seat }))({
							seat: changes[index]?.seat ?? item.seat,
							meal: changes[index]?.meal ?? item.meal,
						})
			  )
			: itinerary
	}
	export type Item = ItineraryItem
	export const Item = ItineraryItem
}
