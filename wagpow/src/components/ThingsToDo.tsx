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
				mapLink: "https://maps.app.goo.gl/HpTcb9nNiBD4DQT36",
				link: "https://palacio.inba.gob.mx/",
			},
			{
				name: "Anthropology Museum",
				mapLink: "https://maps.app.goo.gl/XpUdudPwJBJMqeRL6",
				link: "https://www.mna.inah.gob.mx/",
			},
			{
				name: "Soumaya and Jumex Museums",
				description: "Next to each other!",
				mapLink: "https://maps.app.goo.gl/MZjChfm3mbWA38AdA",
				link: "https://www.museosoumaya.org/ AND https://www.fundacionjumex.org/en",
			},
			{
				name: "Frida Kahlo Museum",
				description:
					"Reservations required. Pair this visit with a walk around Coyoacan",
				mapLink: "https://maps.app.goo.gl/jkMfduEuXU9F5wic8",
				link: "https://www.museofridakahlo.org.mx/?lang=en",
			},
			{
				name: "Tamayo Museum",
				mapLink: "https://maps.app.goo.gl/GEpvLRhbauC1SvNZ7",
				link: "https://www.museotamayo.org/en",
			},
			{
				name: "Templo Mayor Museum",
				description:
					"If you are unable to make a trip to Teotihuacan, this is a way to see ruins without leaving the city. Pair this with a walk around the Zocalo and the historic center.",
				mapLink: "https://maps.app.goo.gl/YJDbM6YsB5vrSaGf6",
				link: "https://www.templomayor.inah.gob.mx/english",
			},
		],
	},
	{
		title: "Activities",
		items: [
			{
				name: "Chapultepec Castle and walk around the Park",
				mapLink: "https://maps.app.goo.gl/wz3u4Ahzbv55c4KSA",
				link: "https://mnh.inah.gob.mx/home-en AND https://mexicocity.cdmx.gob.mx/locations/chapultepec-park/",
			},
			{
				name: "Visit the Vasconcelos library",
				mapLink: "https://maps.app.goo.gl/5WuiXyrV9TQ97VQH8",
				link: "https://www.bibliotecavasconcelos.gob.mx/",
			},
			{
				name: "Day trip to Teotihuacan",
				description: "Eat lunch at La Gruta",
				mapLink: "https://maps.app.goo.gl/BoVPPdXu2Lb7yrS18",
				link: "https://inah.gob.mx/zonas/23-zona-arqueologica-de-teotihuacan AND https://www.lagruta.mx/index_en.php",
			},
			{
				name: "Day trip to Xochimilco",
				description:
					"Take a ride on a colorful boat—pair up with a group and bring snacks and drinks for a multi-hour ride around the chinampas",
				mapLink: "https://maps.app.goo.gl/ZRoeeV7ckbXuQRsDA",
				link: "https://mexicocity.cdmx.gob.mx/venues/xochimilco-ecological-park/",
			},
		],
	},
	{
		title: "Places to Wander",
		items: [
			{
				name: "Parque México and Avenida Amsterdam",
				description: "Perfect for a relaxing stroll",
				mapLink: "https://maps.app.goo.gl/7LvgdtVRQmFE1n9T8",
				link: "https://mexicocity.cdmx.gob.mx/venues/parque-mexico/ AND https://mexicocity.cdmx.gob.mx/venues/avenida-amsterdam/",
			},
			{
				name: "Roma Norte Boutiques",
				description: "Explore the trendy shopping district",
				mapLink: "https://maps.app.goo.gl/HMDsGgMew9xZE8os9",
			},
			{
				name: "Zocalo and Historic Center",
				description: "The heart of Mexico City",
				mapLink: "https://maps.app.goo.gl/yLt5qnskYy8aMqj29",
				link: "https://mexicocity.cdmx.gob.mx/tag/zocalo-area/",
			},
			{
				name: "Coyoacan Neighborhoods",
				description: "Beautiful tree-lined streets",
				mapLink: "https://maps.app.goo.gl/uB4WdqxdzCvRx2ZY9",
				link: "https://mexicocity.cdmx.gob.mx/tag/centro-de-coyoacan/",
			},
			{
				name: "Muevete en Bici",
				description:
					"Sunday biking from 8:00 to 2:00 - roads are closed to cars",
				mapLink:
					"https://www.semovi.cdmx.gob.mx/tramites-y-servicios/mi-bici/muevete-en-bici",
				link: "https://www.semovi.cdmx.gob.mx/tramites-y-servicios/mi-bici/muevete-en-bici",
			},
		],
	},
	{
		title: "Souvenirs",
		items: [
			{
				name: "FONART Store",
				description: "Multiple locations available",
				link: "https://www.gob.mx/fonart?tab=tienda",
			},
			{
				name: "Ciudadela Market",
				mapLink: "https://maps.app.goo.gl/BieGy16SeZUJYiqdA",
				link: "https://mexicocity.cdmx.gob.mx/venues/la-ciudadela-artisan-market/?lang=es",
			},
			{
				name: "Bazar Sábado",
				description: "Located in San Ángel, open on Saturdays",
				mapLink: "https://maps.app.goo.gl/K2grbUXVwjYNFSNAA",
			},
			{
				name: "Bazar Fusión",
				description:
					"A group of varied small stores in an old mansion in the Juárez neighborhood",
				mapLink: "https://maps.app.goo.gl/XK7mV5yxYaKshbHi6",
				link: "https://www.bazarfusion.com.mx/",
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
		title: "Midday Food",
		items: [
			{
				name: "Tacos Hola",
				description: "Mike: torta de coliflor\nJillian: quelites",
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
		title: "Evening Food",
		items: [
			{
				name: "Por Siempre Vegana 2",
				description:
					"Both: vegan pastor tacos with pineapple and onion",
				mapLink: "https://maps.app.goo.gl/tTjqxpfB9Wihc4wQ7",
				link: "https://www.instagram.com/por_siempre_vegana_taqueria/?hl=en",
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
				description: "Mezcal bar",
				mapLink: "https://maps.app.goo.gl/29NwGoqPAGX7hjJZ8",
				link: "https://laclandestina.mx/en/",
			},
			{
				name: "El Palenquito",
				description: "Mezcal bar",
				mapLink: "https://maps.app.goo.gl/mKTyV19EAHNhWBav7",
				link: "https://elpalenquito.com/",
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
