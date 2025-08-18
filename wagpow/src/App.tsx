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
			<a href="#things-to-do" className="[&.active]:font-bold">
				{isMobile ? "🚶" : "Things To Do"}
			</a>
			<a href="#things-to-eat" className="[&.active]:font-bold">
				{isMobile ? "🌮" : "Things To Eat"}
			</a>
		</div>
	)
}

function App() {
	const { authenticated } = useAppStore()

	if (!authenticated) {
		return <Login />
	}

	return (
		<>
			<Nav />
			<Section id="home">
				<Home />
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
