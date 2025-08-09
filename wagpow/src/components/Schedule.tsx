import { db } from "../firebase"
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"

export const Schedule = () => {
	const [currentLocation, setCurrentLocation] = useState(null)

	const getOurCurrentLocation = () => {
		// get our current location thats stored in the firebase collection called "where"
		// store in state

		const ourLocation = collection(db, "where")
		getDocs(ourLocation).then((snapshot) => {
			const locations = snapshot.docs.map((doc) => doc.data())

			// 			{
			//     "location": "Taquería Orinoco in La Roma",
			//     "timestamp": {
			//         "seconds": 1754524144,
			//         "nanoseconds": 987000000
			//     }
			// }

			// get most recent location
			const location = locations.reduce((latest, current) => {
				return latest.timestamp.seconds > current.timestamp.seconds
					? latest
					: current
			}, locations[0])

			setCurrentLocation(location?.location)
		})
	}

	const setOurCurrentLocation = async (location) => {
		const ourLocation = collection(db, "where")
		await addDoc(ourLocation, {
			location: location,
			timestamp: new Date(),
		})
	}

	useEffect(() => {
		getOurCurrentLocation()

		const urlParams = new URLSearchParams(window.location.search)
		const location = urlParams.get("current")
		if (location) {
			setOurCurrentLocation(location)
		}
	}, [])

	return (
		<div className="wp-content things-to">
			{currentLocation && (
				<div className="wp-schedule activity-card ">
					<h2>WagPowTracker5000: </h2>
					<h3>We are probably {currentLocation}</h3>
					<p>Call or text for questions: 831.325.6813</p>
				</div>
			)}

			<h1>Schedule</h1>
			<div className="wp-schedule">
				<h2>welcome dinner.</h2>
				<p>
					Friday, August 8, 2025
					<br /> 6:00 p.m. to 10:00 p.m.
					<br />
					Casa Barcelona. Barcelona 26. Colonia Juárez
				</p>

				<p>
					Please join us at{" "}
					<a
						target="_blank"
						href="https://maps.app.goo.gl/jCcTNNYrB5SeFdug7"
					>
						Casa Barcelona
					</a>{" "}
					the night before our wedding as we welcome you to Mexico
					City.
				</p>

				<p>Dress code: Dressy Casual</p>
			</div>
			<div className="wp-schedule">
				<h2>Wedding.</h2>
				<p>
					Saturday, August 9, 2025
					<br /> 5:00 p.m. until late
					<br />
					General Prim. General Prim 30. Colonia Juárez
				</p>

				<p>
					Please join us at
					<a
						target="_blank"
						href="https://www.google.com/maps/place/Proyectos+P%C3%BAblicos/@19.4294481,-99.1527793,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1ff2d1ad218f3:0x91c0786937fd6dc8!8m2!3d19.4294481!4d-99.1527793!16s%2Fg%2F11c0vlh4jj?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
					>
						{" "}
						General Prim
					</a>{" "}
					for our wedding ceremony. Drinks, dinner, and celebration to
					follow.
				</p>
				<p>Dress code: Cocktail/Formal</p>
			</div>
			<div className="wp-schedule">
				<h2>brunch.</h2>
				<p>
					Sunday, August 10, 2025 <br />
					10:00 a.m. to 12:30 p.m.
					<br />
					Milo’s. Amsterdam 308. Colonia Hipódromo
				</p>

				<p>
					Please join us at
					<a
						target="_blank"
						href="https://maps.app.goo.gl/Ch8mNkLwJ36fRBTw9"
					>
						{" "}
						Milo's
					</a>{" "}
					for a post-wedding brunch.
				</p>
				<p>Dress code: Casual</p>
			</div>
		</div>
	)
}
