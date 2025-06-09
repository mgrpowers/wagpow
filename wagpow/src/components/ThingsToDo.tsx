import { MapPin } from "lucide-react"

interface Activity {
	name: string
	description?: string
	mapLink?: string
	link?: string
}

interface ActivitySection {
	title: string
	items: Activity[]
}

const activities: ActivitySection[] = [
	{
		title: "Museums",
		items: [
			{
				name: "Bellas Artes",
				mapLink: "",
				link: "",
			},
			{
				name: "Anthropology Museum",
				mapLink: "",
				link: "",
			},
			{
				name: "Soumaya and Jumex Museums",
				description: "Next to each other!",
				mapLink: "",
				link: "",
			},
			{
				name: "Frida Kahlo Museum",
				description:
					"Reservations required. Pair this visit with a walk around Coyoacan",
				mapLink: "",
				link: "",
			},
			{
				name: "Tamayo Museum",
				mapLink: "",
				link: "",
			},
			{
				name: "Templo Mayor Museum",
				description:
					"If you are unable to make a trip to Teotihuacan, this is a way to see ruins without leaving the city. Pair this with a walk around the Zocalo and the historic center.",
				mapLink: "",
				link: "",
			},
		],
	},
	{
		title: "Activities",
		items: [
			{
				name: "Chapultepec Castle and walk around the Park",
				mapLink: "",
				link: "",
			},
			{
				name: "Visit the Vasconcelos library",
				mapLink: "",
				link: "",
			},
			{
				name: "Day trip to Teotihuacan",
				description: "Eat lunch at La Gruta",
				mapLink: "",
				link: "",
			},
			{
				name: "Day trip to Xochimilco",
				description:
					"Take a ride on a colorful boat—pair up with a group and bring snacks and drinks for a multi-hour ride around the chinampas",
				mapLink: "",
				link: "",
			},
		],
	},
	{
		title: "Places to Wander",
		items: [
			{
				name: "Parque México and Avenida Amsterdam",
				description: "Perfect for a relaxing stroll",
				mapLink: "",
			},
			{
				name: "Roma Norte Boutiques",
				description: "Explore the trendy shopping district",
				mapLink: "",
			},
			{
				name: "Zocalo and Historic Center",
				description: "The heart of Mexico City",
				mapLink: "",
			},
			{
				name: "Coyoacan Neighborhoods",
				description: "Beautiful tree-lined streets",
				mapLink: "",
			},
			{
				name: "Muevete en Bici",
				description:
					"Sunday biking from 8:00 to 2:00 - roads are closed to cars",
				mapLink: "",
				link: "",
			},
		],
	},
	{
		title: "Souvenirs",
		items: [
			{
				name: "FONART Store",
				description: "Multiple locations available",
				mapLink: "",
				link: "",
			},
			{
				name: "Ciudadela Market",
				mapLink: "",
			},
			{
				name: "Bazar Sábado",
				description: "Located in San Ángel, open on Saturdays",
				mapLink: "",
			},
		],
	},
	{
		title: "Morning Food",
		items: [
			{
				name: "La Esquina del Chilaquil",
				description:
					"Mike: torta de chilaquiles with pechuga and salsa verde\nJillian: torta de chilaquiles campechana, no meat\nTip: Buy coffee elsewhere, arrive early and expect to wait",
				mapLink: "",
			},
			{
				name: "Panadería Rosetta",
				description: "Mike: guava roll\nJillian: tarragon roll",
				mapLink: "",
				link: "",
			},
			{
				name: "Molino El Pujol",
				description: "Mike: café de olla\nJillian: avocado taco",
				mapLink: "",
				link: "",
			},
		],
	},
	{
		title: "Midday Food",
		items: [
			{
				name: "Tacos Hola",
				description: "Mike: torta de coliflor\nJillian: quelites",
				mapLink: "",
			},
			{
				name: "Tlacoyos Medellin",
				description:
					"Mike: tlacoyo de frijol with everything and green salsa\nJillian: tlacoyo de habas with everything and red salsa",
				mapLink: "",
			},
			{
				name: "Tortas La Moderna",
				description:
					"Mike: torta de salchicha\nJillian: torta de tres quesos",
				mapLink: "",
			},
			{
				name: "El Hidalguense",
				description:
					"Mike: barbacoa and consomé\nJillian: quesadilla de flor de calabaza",
				mapLink: "",
			},
			{
				name: "Contramar",
				description:
					"Mike: pescado a la talla Contramar\nJillian: sope sencillo",
				mapLink: "",
				link: "",
			},
		],
	},
	{
		title: "Evening Food",
		items: [
			{
				name: "Por Siempre Vegana 2",
				description:
					"Both: vegan pastor tacos with pineapple and onion",
				mapLink: "",
			},
			{
				name: "Taquería Orinoco",
				description:
					"Mike: costra de pastor\nJillian: quesadilla\nMultiple locations available",
				mapLink: "",
				link: "",
			},
			{
				name: "Restaurante Rosetta",
				description:
					"Mike: gnocchi\nJillian: pasta and fresh herbs with rosemary ice cream",
				mapLink: "",
				link: "",
			},
			{
				name: "Galanga Thai House",
				description: "Excellent Thai food in a beautiful setting",
				mapLink: "",
				link: "",
			},
		],
	},
	{
		title: "Drinks",
		items: [
			{
				name: "Baltra",
				description: "Interesting cocktail bar",
				mapLink: "",
				link: "",
			},
			{
				name: "Meroma",
				description: "Great for snacks and drinks",
				mapLink: "",
				link: "",
			},
			{
				name: "La Clandestina",
				description: "Mezcal bar",
				mapLink: "",
			},
			{
				name: "El Palenquito",
				description: "Mezcal bar",
				mapLink: "",
			},
		],
	},
]

const ActivityCard = ({ name, description, mapLink, link }: Activity) => (
	<div className="activity-card">
		<h3>
			<a href={link} target="_blank" rel="noopener noreferrer">
				{name}
			</a>
		</h3>
		{description && <p>{description}</p>}
		{mapLink && (
			<a href={mapLink} target="_blank" rel="noopener noreferrer">
				<MapPin size={16} /> View Map
			</a>
		)}
	</div>
)

export const ThingsToDo = () => {
	return (
		<div className="wp-content things-to-do">
			<h2>Things to Do in Mexico City</h2>

			{activities.map((section) => (
				<section key={section.title} className="activity-section">
					<h3>{section.title}</h3>
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
