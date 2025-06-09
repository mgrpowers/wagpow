import {
	Home,
	RSVP,
	Login,
	Section,
	Schedule,
	TravelInformation,
	ThingsToDo,
} from "./components"
import { useAppStore } from "./hooks/useAppStore"
import "./App.scss"

const Nav = () => {
	return (
		<div className="wp-navbar">
			<a href="#home" className="[&.active]:font-bold">
				J + M
			</a>{" "}
			<a href="#rsvp" className="[&.active]:font-bold">
				RSVP
			</a>
			<a href="#schedule" className="[&.active]:font-bold">
				Schedule
			</a>
			<a href="#travel" className="[&.active]:font-bold">
				Travel Information
			</a>
			<a href="#things-to-do" className="[&.active]:font-bold">
				Things To Do
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
			<Section id="rsvp">
				<RSVP />
			</Section>
			<Section id="schedule">
				<Schedule />
			</Section>
			<Section id="travel">
				<TravelInformation />
			</Section>
			<Section id={"things-to-do"}>
				<ThingsToDo />
			</Section>
		</>
	)
}

export default App
