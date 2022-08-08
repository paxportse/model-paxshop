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
			typeof value.amount == "number" &&
			isoly.Currency.is(value.currency) &&
			(value.offer == undefined || typeof value.offer == "number") &&
			(value.description == undefined || typeof value.description == "string")
		)
	}
	export function amount(price: Price): number {
		return price.offer ?? price.amount
	}
	/**
	 * @param prices length > 0 and same currency
	 * @returns total price and offer and concatenated descriptions
	 */
	export function total(prices: Price[]): Price {
		return (({ offer, ...price }) => (offer != undefined ? { offer, ...price } : price))({
			amount: prices.reduce((s, p) => s + p.amount, 0),
			currency: prices[0].currency,
			offer: prices.every(p => p.offer == undefined)
				? undefined
				: prices.some(p => p.offer == undefined)
				? prices.reduce((s, p) => s + amount(p), 0)
				: undefined,
			description: [...new Set(prices.reduce((s, p) => (p.description ? [...s, p.description] : s), []))].join("\n"),
		})
	}
	export function multiply(price: Price, quantity = 1): Price {
		return {
			...price,
			amount: price.amount * quantity,
			offer: price.offer && price.offer * quantity,
		}
	}
	export function percentageDiscount(price: Price, reduction: number): Price {
		return { ...price, offer: isoly.Currency.multiply(price.currency, price.amount, 1 - reduction) }
	}
	export function reductionDiscount(price: Price, reduction: number): Price {
		return { ...price, offer: price.amount - reduction }
	}
}
