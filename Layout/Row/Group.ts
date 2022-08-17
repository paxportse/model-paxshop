import { Seat } from "../Seat"

export interface Group {
	seats?: (Seat | undefined)[]
	toilet?: boolean
}

export namespace Group {
	export const types = [Seat] as const
	export function is(value: Group | any): value is Group {
		return (
			value.seats.every((seat: any) => Seat.is(seat)) && (value.toilet == undefined || typeof value.toilet == "boolean")
		)
	}
	export function isArrayOfGroups(value: (Group | any)[]): value is Group[] {
		return Array.isArray(value) && value.every(group => group == undefined || Group.is(group))
	}

	export function reserve(groups: (Group | undefined)[], position: Seat.Position): (Group | undefined)[] {
		let index = Seat.Position.types.indexOf(position)
		let seatFound = false
		return groups.map(g => {
			let result: Group | undefined
			let seats = g?.seats
			if (seats && index < seats.length && !seatFound) {
				seatFound = true
				seats = [...seats]
				seats[index] = { ...seats[index], status: "unavailable" } as any
				result = { ...g, seats }
			} else {
				index -= g?.seats?.length ?? 0
				result = g
			}
			return result
		})
	}
	export function isAvailable(groups: (Group | undefined)[], position: Seat.Position): boolean {
		let index: number = Seat.Position.types.indexOf(position)
		let seatAvailable = false
		groups.forEach(group => {
			const seats = group?.seats
			if (seats && index < seats.length) {
				if (seats[index]?.status == "available") {
					seatAvailable = true
				}
			} else {
				index -= group?.seats?.length ?? 0
			}
		})
		return seatAvailable
	}
}
