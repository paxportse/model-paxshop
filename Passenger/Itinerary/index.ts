import { Leg as ItineraryLeg } from "./Leg"

export type Itinerary = Itinerary.Leg[]

export namespace Itinerary {
	export function is(value: Itinerary | any): value is Itinerary {
		return Array.isArray(value) && value.every(leg => Itinerary.Leg.is(leg))
	}
	export function update(itinerary: Itinerary, changes: Itinerary | undefined): Itinerary {
		const legs = changes && Object.fromEntries(changes.map(leg => [leg.reference, leg]))
		return legs
			? itinerary.map(
					leg =>
						leg &&
						(({ meal, ...leg }) => (meal ? { ...leg, meal } : { ...leg }))({
							reference: leg.reference,
							seat: legs[leg.reference]?.seat ?? leg.seat,
							meal: legs[leg.reference]?.meal ?? leg.meal,
						})
			  )
			: itinerary
	}
	export type Leg = ItineraryLeg
	export const Leg = ItineraryLeg
}
