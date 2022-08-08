import { Leg as ItineraryLeg } from "./Leg"

export type Itinerary = (Itinerary.Leg | undefined)[]

export namespace Itinerary {
	export function is(value: Itinerary | any): value is Itinerary {
		return Array.isArray(value) && value.every(leg => leg == undefined || Itinerary.Leg.is(leg))
	}
	export function update(itinerary: Itinerary, changes: Itinerary | undefined): Itinerary {
		return changes
			? itinerary.map(
					(leg, index) =>
						leg &&
						(({ meal, ...leg }) => (meal ? { ...leg, meal } : { ...leg }))({
							reference: leg.reference,
							seat: changes[index]?.seat ?? leg.seat,
							meal: changes[index]?.meal ?? leg.meal,
						})
			  )
			: itinerary
	}
	export type Leg = ItineraryLeg
	export const Leg = ItineraryLeg
}
