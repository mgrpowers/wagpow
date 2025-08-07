import React from "react"
import { MapPin } from "lucide-react"

interface Activity {
	name: string
	description?: string
	mapLink?: string
	link?: string | string[]
}

interface ActivitySection {
	title: string
	items: Activity[]
}

const foods: ActivitySection[] = [
	{
		title: "Breakfast",
		items: [
			{
				name: "La Esquina del Chilaquil",
				description:
					"Mike: torta de chilaquiles with pechuga and salsa verde\nJillian: torta de chilaquiles campechana, no meat\nTip: Buy coffee elsewhere, arrive early, and expect to wait",
				mapLink: "https://maps.app.goo.gl/fq8XaPa1FverNzi59",
			},
			{
				name: "Panadería Rosetta",
				description: "Mike: guava roll\nJillian: tarragon roll",
				mapLink: "https://maps.app.goo.gl/iZWWYiVjWPmzqGPy5",
				link: "https://www.instagram.com/panaderiarosetta/?hl=en",
			},
			{
				name: "Molino El Pujol",
				description: "Mike: café de olla\nJillian: avocado taco",
				mapLink: "https://maps.app.goo.gl/QBY9vVhBVVQwYwdt5",
				link: "https://pujol.com.mx/eng/molino-el-pujol/",
			},
		],
	},

	{
		title: "Lunch",
		items: [
			{
				name: "Tacos Hola",
				description:
					"Closed through august 11th\nMike: torta de coliflor\nJillian: quelites",
				mapLink: "https://maps.app.goo.gl/SpfCurqybUCfBsyg9",
				link: "https://www.instagram.com/tacosholaelguero/?hl=en",
			},
			{
				name: "Tlacoyos Medellin",
				description:
					"Mike: tlacoyo de frijol with everything and green salsa\nJillian: tlacoyo de habas with everything and red salsa",
				mapLink: "https://maps.app.goo.gl/KPJqYfUUPnk9Qkwx5",
			},
			{
				name: "Tortas La Moderna",
				description:
					"Mike: torta de salchicha\nJillian: torta de tres quesos",
				mapLink: "https://maps.app.goo.gl/WEUajfkGy5yyu7sU6",
			},
			{
				name: "El Hidalguense",
				description:
					"Mike: barbacoa and consomé\nJillian: quesadilla de flor de calabaza",
				mapLink: "https://maps.app.goo.gl/ARg7x9YoTSzAr62m6",
			},
			{
				name: "Contramar",
				description:
					"Mike: pescado a la talla Contramar\nJillian: sope sencillo",
				mapLink: "https://maps.app.goo.gl/BMzM7maUnhRnTAmt5",
				link: "http://www.contramar.com.mx/english.html",
			},
		],
	},
	{
		title: "Dinner",
		items: [
			{
				name: "Por Siempre \n Vegana 2",
				description:
					"Both: vegan pastor tacos with pineapple and onion",
				mapLink: "https://maps.app.goo.gl/tTjqxpfB9Wihc4wQ7",
				link: "https://www.instagram.com/por_siempre_vegana_taqueria/?hl=en",
			},
			{
				name: "Taquería El Greco",
				description:
					"Mike: taco Doneraky\nJillian: gringa de champiñones",
				mapLink: "https://maps.app.goo.gl/Kraek3qfq14e4Nts5",
				link: "https://www.instagram.com/taqueriaelgreco/?hl=en",
			},
			{
				name: "Taquería Orinoco",
				description:
					"Mike: costra de pastor\nJillian: quesadilla\nMultiple locations available",
				mapLink: "",
				link: "https://taqueriaorinoco.com/",
			},
			{
				name: "Restaurante Rosetta",
				description:
					"Mike: gnocchi\nJillian: pasta and fresh herbs with rosemary ice cream",
				mapLink: "https://maps.app.goo.gl/kBSnqBCSn1s2hwQ16",
				link: "https://rosetta.com.mx/en/",
			},
			{
				name: "Galanga Thai House",
				description: "Excellent Thai food in a beautiful setting",
				mapLink: "https://maps.app.goo.gl/aEhdY4L55XzKwbEu7",
			},
		],
	},
	{
		title: "Drinks",
		items: [
			{
				name: "Baltra",
				description: "Interesting cocktail bar",
				mapLink: "https://maps.app.goo.gl/4TMiyxXmLas8g4T39",
				link: "https://baltra.bar/",
			},
			{
				name: "Meroma",
				description: "Great for snacks and drinks",
				mapLink: "https://maps.app.goo.gl/JZj47Z58cZzZ6c1K9",
				link: "https://meroma.mx/",
			},
			{
				name: "La Clandestina",
				description: "Mezcal bar\nMike: mezcal\nJillian: not mezcal",
				mapLink: "https://maps.app.goo.gl/29NwGoqPAGX7hjJZ8",
				link: "https://laclandestina.mx/en/",
			},
			{
				name: "El Palenquito",
				description: "Mezcal bar\nMike: mezcal\nJillian: not mezcal",
				mapLink: "https://maps.app.goo.gl/mKTyV19EAHNhWBav7",
				link: "https://elpalenquito.com/",
			},
		],
	},
]

const ActivityCard = ({ name, description, mapLink, link }: Activity) => (
	<div className="activity-card">
		<h3>
			{typeof link === "object" ? (
				<>
					{name.split("and").map((part, i) => (
						<a
							key={i}
							href={link[i]}
							target="_blank"
							rel="noopener noreferrer"
						>
							{part}
						</a>
					))}
				</>
			) : (
				<a href={link} target="_blank" rel="noopener noreferrer">
					{name}
				</a>
			)}
		</h3>
		{description && (
			<p>
				{description.split("\n").map((line, i) => (
					<React.Fragment key={i}>
						{line}
						{i < description.split("\n").length - 1 && <br />}
					</React.Fragment>
				))}
			</p>
		)}
		{mapLink && (
			<a href={mapLink} target="_blank" rel="noopener noreferrer">
				<MapPin size={16} /> View Map
			</a>
		)}
	</div>
)

export const ThingsToEat = () => {
	return (
		<div className="wp-content things-to">
			<h1>Things to Eat</h1>

			{foods.map((section) => (
				<section key={section.title} className="activity-section">
					<h2>{section.title}</h2>
					<div className="activity-grid">
						{section.items.map((activity) => (
							<ActivityCard key={activity.name} {...activity} />
						))}
					</div>
				</section>
			))}
		</div>
	)
}
