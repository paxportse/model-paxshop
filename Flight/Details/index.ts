import { Passenger } from "../../Passenger"
import { Price } from "../../Price"

export interface Details {
	name: string
	passenger?: Passenger | Passenger[]
	price?: Price
}
