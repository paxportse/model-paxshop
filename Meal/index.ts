import { Itinerary } from "../Passenger/Itinerary"
import { Alternative as MealAlternative } from "./Alternative"

export interface Meal {
	reference: string
	name: string
	optional?: boolean
	alternatives: Meal.Alternative[]
}

export namespace Meal {
	export function is(value: Meal | any): value is Meal {
		return (
			typeof value == "object" &&
			typeof value.reference == "string" &&
			typeof value.name == "string" &&
			(value.optional == undefined || typeof value.optional == "boolean") &&
			Array.isArray(value.alternatives) &&
			value.alternatives.every(Alternative.is)
		)
	}
	export function updatePassengerMeal(
		meal: Meal,
		alternative: Meal.Alternative,
		flights: Itinerary,
		index: number
	): Meal[] | undefined {
		const itinerary: Itinerary | undefined = { ...flights }
		// Find passengers meal selection of current flight
		const passengerMeals: Meal[] | undefined =
			index != undefined && index >= 0 && itinerary ? itinerary[index].meal ?? [] : undefined

		// Check if there is an existing meal
		const existingMeal: Meal | undefined =
			passengerMeals && meal ? passengerMeals.find(m => m.reference == meal.reference) : undefined

		// Create new meal object
		const newMeal = existingMeal
			? existingMeal.alternatives.find(a => a == alternative)
				? existingMeal
				: { ...existingMeal, alternatives: [alternative] }
			: { ...meal, alternatives: [alternative] }

		// Find the index of this meal in the passenger meal array
		const indexMeal = existingMeal ? passengerMeals?.findIndex(m => m.reference == newMeal.reference) : undefined

		// Update passenger meals with new meal object.
		passengerMeals && passengerMeals?.length > 0 && indexMeal != undefined && indexMeal >= 0
			? (passengerMeals[indexMeal] = newMeal)
			: passengerMeals?.push(newMeal)

		// Draft of "Update passenger meals with new meal object." for both select and deselect //
		// passengerMeals != undefined
		// 	? indexMeal != undefined
		// 		? newMeal.reference === existingMeal?.reference
		// 			? passengerMeals?.splice(indexMeal, 1)
		// 			: (passengerMeals[indexMeal] = newMeal)
		// 		: passengerMeals?.push(newMeal)
		// 	: []

		return passengerMeals
	}
	export type Alternative = MealAlternative
	export const Alternative = MealAlternative
}
