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

function App() {
	const { authenticated } = useAppStore()

	if (!authenticated) {
		return <Login />
	}

	return (
		<>
			<Section>
				<Home />
			</Section>
			<Section>
				<RSVP />
			</Section>
			<Section>
				<Schedule />
			</Section>
			<Section>
				<TravelInformation />
			</Section>
			{/* <Section>
				<ThingsToDo />
			</Section> */}
		</>
	)
}

export default App
