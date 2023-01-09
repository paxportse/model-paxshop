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
	export function total(prices: Price[]): Price
	export function total(prices: (Price | undefined)[]): Price | undefined
	export function total(prices: (Price | undefined)[]): Price | undefined {
		const pricesFiltered = prices.filter(p => p) as Price[]
		return pricesFiltered.length > 0
			? (({ offer, ...price }) => (offer != undefined ? { offer, ...price } : price))({
					amount: pricesFiltered.reduce((s, p) => s + p.amount, 0),
					currency: pricesFiltered[0].currency,
					offer: pricesFiltered.every(p => p.offer == undefined)
						? undefined
						: pricesFiltered.some(p => p.offer == undefined)
						? pricesFiltered.reduce((s, p) => s + amount(p), 0)
						: undefined,
					description: [
						...new Set(pricesFiltered.reduce((s, p) => (p.description ? [...s, p.description] : s), [])),
					].join("\n"),
			  })
			: undefined
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
