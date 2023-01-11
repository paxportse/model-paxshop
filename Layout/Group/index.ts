import { Seat } from "../Seat"
import { Base } from "./Base"
import { Seats as GroupSeats } from "./Seats"
import { Toilet as GroupToilet } from "./Toilet"

export type Group = Group.Seats | Group.Toilet

export namespace Group {
	export function is(value: Group | any): value is Group {
		const result = Base.is(value) || Group.Toilet.is(value) || Group.Seats.is(value)
		return result
	}
	export function isArray(value: (Group | any)[]): value is Group[] {
		return Array.isArray(value) && value.every(group => group == undefined || Group.is(group))
	}
	export function reserve(groups: (Group | undefined)[], position: Seat.Position.Column): (Group | undefined)[] {
		let index = Seat.Position.Column.index(position, groups)
		let seatFound = false
		return index > -1
			? groups.map(g => {
					let result: Group | undefined
					if (Seats.is(g)) {
						let seats = g.seats
						if (seats && index > -1 && index < seats.length && !seatFound) {
							seatFound = true
							seats = [...seats]
							seats[index] = { ...seats[index], status: "unavailable" } as any
							result = { ...g, seats }
						} else {
							index -= g.seats.length ?? 0
							result = g
						}
					} else
						result = g
					return result
			  })
			: groups
	}
	export function isAvailable(groups: (Group | undefined)[], position: Seat.Position.Column): boolean {
		const group = groups.filter(g => Group.Seats.is(g) && g.seats.find(s => s?.position.column == position))[0] as
			| Group.Seats
			| undefined
		return group?.seats.find(s => s?.position.column == position)?.status == "available"
	}
	export function setSeats(groups: (Group | undefined)[], seat: Seat): (Group | undefined)[] {
		let index = Seat.Position.Column.index(seat.position.column, groups)
		return groups.map(g => {
			let result = g
			if (Seats.is(g)) {
				const current = g.seats[index]
				if (current)
					result = {
						...g,
						seats: [
							...g.seats.slice(0, index),
							{
								...current,
								status: seat.status,
								...(seat.price && { price: seat.price }),
								...(seat.reference && { reference: seat.reference }),
							},
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
