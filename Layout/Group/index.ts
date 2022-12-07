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
	export function reserve(group: Group | undefined, position: Seat.Position): Group | undefined {
		const index = Group.Seats.is(group) ? group.seats.findIndex(s => s?.position == position) : undefined
		return index != undefined && index > -1 && Group.Seats.is(group)
			? {
					...group,
					seats: [
						...group.seats.slice(0, index),
						{
							...group.seats[index],
							status: "unavailable",
						} as Seat,
						...group.seats.slice(index + 1),
					],
			  }
			: group
	}
	export function isAvailable(groups: (Group | undefined)[], position: Seat.Position): boolean {
		const group = groups.filter(g => Group.Seats.is(g) && g.seats.find(s => s?.position == position))[0] as
			| Group.Seats
			| undefined
		return group?.seats.find(s => s?.position == position)?.status == "available"
	}
	export function setSeats(groups: (Group | undefined)[], seat: Seat): (Group | undefined)[] {
		let index = Seat.Position.index(seat.position, groups)
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
