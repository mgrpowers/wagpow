import {
	Home,
	RSVP,
	Login,
	Section,
	Schedule,
	TravelInformation,
	ThingsToDo,
	ThingsToEat,
} from "./components"
import { useEffect, useState } from "react"
import { useAppStore } from "./hooks/useAppStore"
import "./App.scss"

const Nav = () => {
	const isMobile = window.innerWidth < 768

	return (
		<div className="wp-navbar">
			<a href="#home" className="[&.active]:font-bold">
				J + M
			</a>{" "}
			<a href="#schedule" className="[&.active]:font-bold">
				{isMobile ? "📅" : "Schedule"}
			</a>
			<a href="#travel" className="[&.active]:font-bold">
				{isMobile ? "🛫" : "Travel"}
			</a>
			<a href="#things-to-do" className="[&.active]:font-bold">
				{isMobile ? "🚶" : "Things To Do"}
			</a>
			<a href="#things-to-eat" className="[&.active]:font-bold">
				{isMobile ? "🌮" : "Things To Eat"}
			</a>
		</div>
	)
}

function MikeCheck() {
	const [gamerTag, setGamerTag] = useState("")
	const [isARealGamer, setIsARealGamer] = useState(false)

	useEffect(() => {
		if (gamerTag) {
			const gamerTags = [
				"Ton1c",
				"C0lin",
				"uh_ohFox",
				"Clon1c",
				"Oz",
				"Kittenmittens",
				"Hipperman",
			]

			if (
				gamerTags
					.map((tag) => tag.toLowerCase())
					.includes(gamerTag.toLowerCase())
			) {
				setIsARealGamer(true)
			}
		}
	}, [gamerTag])

	return (
		<div className="wp-content">
			{isARealGamer ? (
				<>
					<h1>
						Tell mike or jillian this is a nice party but you rather
						be gaming.
					</h1>
					<h3>Even better, tell them what you'd be drinking.</h3>
				</>
			) : (
				<>
					<h1>Wow you're a smartie!</h1>
					<h2>This is for gamers only, please enter you gamer tag</h2>
					<input
						onChange={(e) => setGamerTag(e.target.value)}
						type="text"
						placeholder="Enter your gamer tag"
					/>
				</>
			)}
		</div>
	)
}

function App() {
	const { authenticated } = useAppStore()

	if (!authenticated) {
		return <Login />
	}

	if (window.location.pathname === "/oqvivlumhkit") {
		return (
			<Section id="home">
				<MikeCheck />
			</Section>
		)
	}

	return (
		<>
			<Nav />
			<Section id="home">
				<Home />
			</Section>
			<Section id="schedule">
				<Schedule />
			</Section>
			<Section id="travel">
				<TravelInformation />
			</Section>
			<Section id="things-to-do">
				<ThingsToDo />
			</Section>
			<Section id="things-to-eat">
				<ThingsToEat />
			</Section>
		</>
	)
}

export default App
