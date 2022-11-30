import { Seat } from "../Seat"
import { Seats as GroupSeats } from "./Seats"
import { Toilet as GroupToilet } from "./Toilet"

export type Group = Group.Seats | Group.Toilet

export namespace Group {
	export function is(value: Group | any): value is Group {
		return Seats.is(value) || Toilet.is(value)
	}
	export function isArray(value: (Group | any)[]): value is Group[] {
		return Array.isArray(value) && value.every(group => group == undefined || Group.is(group))
	}
	export function reserve(groups: (Group | undefined)[], position: Seat.Position): (Group | undefined)[] {
		let index = Seat.Position.index(position)
		let seatFound = false
		return groups.map(g => {
			let result: Group | undefined
			if (Seats.is(g)) {
				let seats = g.seats
				if (seats && index < seats.length && !seatFound) {
					seatFound = true
					seats = [...seats]
					seats[index] = { ...seats[index], status: "unavailable" } as any
					result = { ...g, seats }
				} else {
					index -= g.seats.length ?? 0
					result = g
				}
			}
			return result
		})
	}
	export function isAvailable(groups: (Group | undefined)[], position: Seat.Position): boolean {
		let index: number = Seat.Position.index(position)
		let result = false
		groups.forEach(group => {
			if (Seats.is(group) && !result)
				if (index < group.seats.length)
					result = group.seats[index]?.status == "available"
				else
					index -= group.seats.length
		})
		return result
	}
	export function setSeats(groups: (Group | undefined)[], seat: Seat): (Group | undefined)[] {
		let index = Seat.Position.index(seat.position)
		return groups.map(g => {
			let result = g
			if (Seats.is(g)) {
				if (index >= 0 && index < g.seats.length)
					result = {
						...g,
						seats: [
							...g.seats.slice(0, index),
							{ ...g.seats[index], status: seat.status, price: seat.price } as Seat,
							...g.seats.slice(index + 1),
						],
					}
				index -= g.seats.length
			}
			return result
		})
	}
	export type Seats = GroupSeats
	export const Seats = GroupSeats
	export type Toilet = GroupToilet
	export const Toilet = GroupToilet
}
