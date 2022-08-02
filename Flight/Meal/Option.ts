import { Price } from "../../Price"

export interface Option {
	name: string
	price?: Price
	multiple?: boolean
}
