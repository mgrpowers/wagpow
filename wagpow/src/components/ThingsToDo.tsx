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
				link: [
					"https://www.museosoumaya.org/",
					"https://www.fundacionjumex.org/en",
				],
			},
			{
				name: "Frida Kahlo Museum",
				description:
					"Reservations required. Pair this visit with a walk around Coyoacan.",
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
		title: "Places to Wander",
		items: [
			{
				name: "Chapultepec Castle and walk around the Park",
				mapLink: "https://maps.app.goo.gl/wz3u4Ahzbv55c4KSA",
				link: [
					"https://mnh.inah.gob.mx/home-en",
					"https://mexicocity.cdmx.gob.mx/locations/chapultepec-park/",
				],
			},
			{
				name: "Vasconcelos library",
				mapLink: "https://maps.app.goo.gl/5WuiXyrV9TQ97VQH8",
				link: "https://www.bibliotecavasconcelos.gob.mx/",
			},
			{
				name: "Parque México and Avenida Amsterdam",
				description: "Perfect for a relaxing stroll",
				mapLink: "https://maps.app.goo.gl/7LvgdtVRQmFE1n9T8",
				link: [
					"https://mexicocity.cdmx.gob.mx/venues/parque-mexico/",
					"https://mexicocity.cdmx.gob.mx/venues/avenida-amsterdam/",
				],
			},
			{
				name: "Roma Norte Boutiques",
				description: "Explore the trendy shopping district",
				mapLink: "https://maps.app.goo.gl/HMDsGgMew9xZE8os9",
			},
			{
				name: "Zocalo + Historic Center",
				description: "The heart of Mexico City",
				mapLink: "https://maps.app.goo.gl/yLt5qnskYy8aMqj29",
				link: "https://mexicocity.cdmx.gob.mx/tag/zocalo-area/",
			},
			{
				name: "Plaza de la Tecnología",
				description: "For all your technology needs",
				mapLink: "https://maps.app.goo.gl/8Wk9JkCrmxZXR7ND9",
				link: "https://plazastecnologicas.com/",
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
			{
				name: "Skate Park Constituyentes",
				description: "Wear your helmet, please",
				mapLink: "https://maps.app.goo.gl/cK3iSzerQJpx94cXA",
				link: "https://www.chapultepec.org.mx/proyecto/skatepark-constituyentes/",
			},
			{
				name: "Day trip to Teotihuacan",
				description: "Eat lunch at La Gruta",
				mapLink: "https://maps.app.goo.gl/BoVPPdXu2Lb7yrS18",
				link: [
					"https://inah.gob.mx/zonas/23-zona-arqueologica-de-teotihuacan",
					"https://www.lagruta.mx/index_en.php",
				],
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
]

const ActivityCard = ({ name, description, mapLink, link }: Activity) => (
	<div className="activity-card">
		<h3>
			{typeof link === "object" ? (
				<>
					{name.split("and").map((part, i, arr) => (
						<>
							<a
								key={i}
								href={link[i]}
								target="_blank"
								rel="noopener noreferrer"
							>
								{part}
								{i < arr.length - 1 && " + "}
							</a>{" "}
						</>
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

export const ThingsToDo = () => {
	return (
		<div className="wp-content things-to">
			<h1>Things to Do</h1>

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
