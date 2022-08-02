import * as isoly from "isoly"

export interface Price {
	amount: number
	currency: isoly.Currency
	offer?: number
	description?: string
}

export namespace Price {
	export function is(value: any | Price): value is Price {
		return (
			typeof value == "object" &&
			typeof value.offer == "number" &&
			typeof value.description == "string" &&
			isoly.Currency.is(value.currency)
		)
	}
	export function amount(price: Price): number {
		return price.offer ?? price.amount
	}
	export function total(numbers: number[]): number {
		return numbers.reduce((sum, n) => sum + n, 0)
	}
	export function percentageDiscount(price: Price, reduction: number): Price {
		return { ...price, offer: price.amount / (1 - reduction) }
	}
	export function reductionDiscount(price: Price, reduction: number): Price {
		return { ...price, offer: price.amount - reduction }
	}
}
