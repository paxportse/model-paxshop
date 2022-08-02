import * as model from "../Flight"

export const dreamliner: model.Flight = {
	from: "ARN",
	to: "LHR",
	departure: "2022-09-28T07:22:00.000Z",
	arrival: "2022-09-28T10:02:00.000Z",
	meals: [
		{
			name: "Celebration",
			alternatives: [
				{
					name: "Sparkling wine & Chocolate",
					price: { amount: 200, currency: "SEK" },
					description: "Some chocolate and so on.",
				},
				{
					name: "Champagne & Chocolate",
					price: { amount: 300, currency: "SEK" },
					description: "Some champagne and so on.",
				},
			],
		},
		{
			name: "Breakfast",
			alternatives: [
				{ name: "Eggs", price: { amount: 100, currency: "SEK" }, description: "Some eggs and so on." },
				{ name: "Apple", price: { amount: 80, currency: "SEK" }, description: "Some apples and so on." },
			],
		},
		{
			name: "Dinner",
			alternatives: [
				{ name: "Chicken", price: { amount: 200, currency: "SEK" }, description: "Some chicken and so on." },
				{ name: "Fish", price: { amount: 150, currency: "SEK" }, description: "Some fish and so on." },
			],
		},
	],
	rows: [
		{
			layout: [2, 3, 2],
			groups: [
				{
					seats: [
						{
							status: "available",
							class: "first-class",
							price: { amount: 400, currency: "SEK", offer: 200 },
							wide: true,
						},
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
					],
				},
				{
					seats: [
						{
							status: "available",
							class: "first-class",
							price: { amount: 400, currency: "SEK" },
						},
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
					],
				},
			],
			exit: true,
		},
		{
			layout: [2, 3, 2],
			groups: [
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
					],
				},
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
						{
							status: "available",
							class: "first-class",
							price: { amount: 400, currency: "SEK", offer: 300 },
						},
					],
				},
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
					],
				},
			],
			exit: false,
		},
		{
			layout: [2, 3, 2],
			groups: [
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
					],
				},
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
					],
				},
			],
			exit: false,
		},
		{
			layout: [2, 3, 2],
			groups: [
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
					],
				},
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
					],
				},
			],
			exit: false,
		},
		{
			layout: [2, 3, 2],
			exit: false,
		},
		{
			layout: [2, 3, 2],
			groups: [
				{
					seats: [
						{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
						{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
					],
				},
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
					],
				},
			],
			exit: false,
		},
		{
			layout: [2, 3, 2],
			groups: [
				{
					seats: [
						{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
						{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
					],
				},
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" }, legroom: true },
					],
				},
			],
			exit: false,
		},
		{
			layout: [2, 3, 2],
			groups: [
				{
					seats: [
						{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
						{ status: "occupied", class: "first-class", price: { amount: 400, currency: "SEK" }, wide: true },
					],
				},
				{
					seats: [
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
						{ status: "available", class: "first-class", price: { amount: 400, currency: "SEK" } },
					],
				},
				{ toilet: true },
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: true,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
			wing: true,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
			wing: true,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
			wing: true,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
			wing: true,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
			wing: true,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
				{ toilet: true },
				{
					seats: [
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
						{ status: "available", class: "economy", price: { amount: 150, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
			],
			exit: true,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				{
					seats: [
						undefined,
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						undefined,
					],
				},
			],
			exit: false,
		},
		{
			layout: [3, 3, 3],
			groups: [
				undefined,
				{
					seats: [
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
						{ status: "available", class: "premium-economy", price: { amount: 175, currency: "SEK" } },
					],
				},
				{ toilet: true },
			],
			exit: false,
		},
	],
}
