import { useState } from "react"
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"

interface member {
	name: string
	attending: boolean
	dietaryRestrictions: string
}

interface Family {
	name: string
	members: member[]
}

export const Step = ({ children }: { children: React.ReactNode }) => {
	return <div className="step">{children}</div>
}

const families = [
	{
		name: "McClay",
		members: [
			{
				name: "Claire McClay",
				attending: false,
				dietaryRestrictions: "",
			},
			{
				name: "Shane McClay",
				attending: false,
				dietaryRestrictions: "",
			},
			{
				name: "Quinn McClay",
				attending: false,
				dietaryRestrictions: "",
			},
			{
				name: "Mars McClay",
				attending: false,
				dietaryRestrictions: "",
			},
		],
	},
	{
		name: "Wagman and Powers",
		members: [
			{
				name: "Jillian Wagman",
				attending: false,
				dietaryRestrictions: "",
			},
			{
				name: "Michael Powers",
				attending: false,
				dietaryRestrictions: "",
			},
		],
	},
]

export const RSVP = () => {
	const [step, setStep] = useState(1)
	const [search, setSearch] = useState("")
	const [family, setFamily] = useState<Family>()
	const [error, setError] = useState("")

	const handleFindFamily = (e) => {
		e.preventDefault()

		const family = families.find((family) => {
			return family.members.find(
				(member) => member?.name?.toLowerCase() === search.toLowerCase()
			)
		})

		console.log("family", family)

		if (family) {
			setFamily(() => family)
			setError("")
			setStep(2)
		} else {
			setError("Oops, try again")
		}
	}

	const updateFamilyMember = (
		member: string,
		key: keyof member,
		value: string | boolean
	) => {
		const updatedFamily = { ...family } as Family

		const updatedMember = updatedFamily?.members?.find(
			(m) => m.name === member
		)

		if (updatedMember) {
			updatedMember[key] = value
		}

		console.log("updatedFamily", updatedFamily)

		setFamily(() => updatedFamily)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		setStep(3)
		console.log("submitted", family)

		// submit to firebase
		try {
			await addDoc(collection(db, "rsvps"), family)
			setStep(3)
			console.log("submitted", family)
		} catch (error) {
			console.error("Error adding document: ", error)
			setError("Failed to submit RSVP. Please try again.")
		}
	}

	return (
		<div className="hero wp-rsvp wp-content">
			{step !== 3 && (
				<h2 className="wp-title">Please RSVP by June 1, 2025</h2>
			)}
			{error && <p className="wp-error">{error}</p>}
			{step === 3 && (
				<Step>
					<h2>Thank you for RSVPing!</h2>
				</Step>
			)}
			{step === 2 && family && (
				<Step>
					<h3>Step 2: RSVP for {family?.name}</h3>
					<form className="rsvp-form">
						{family?.members.map((member: member) => {
							return (
								<div
									className="rsvp-form-row"
									key={member.name}
								>
									<div>
										<h2>{member.name}</h2>
										<div>
											<input
												disabled={!member.attending}
												className="rsvp-form-input"
												type="text"
												placeholder="Dietary Restrictions"
												onChange={(e) =>
													updateFamilyMember(
														member.name,
														"dietaryRestrictions",
														e.target.value
													)
												}
											/>
										</div>
									</div>
									<div className="rsvp-form-options">
										<fieldset>
											<legend>Will:</legend>
											<div
												onClick={() =>
													updateFamilyMember(
														member.name,
														"attending",
														true
													)
												}
											>
												<input
													type="radio"
													name={`attending-${member.name}`}
													value="attending"
													checked={member.attending}
													readOnly
												/>
												<label
													htmlFor={`attending-${member.name}`}
												>
													Attend
												</label>
											</div>

											<div
												onClick={() =>
													updateFamilyMember(
														member.name,
														"attending",
														false
													)
												}
											>
												<input
													type="radio"
													name={`notattending-${member.name}`}
													value="notattending"
													checked={!member.attending}
													readOnly
												/>
												<label
													htmlFor={`notattending-${member.name}`}
												>
													Not Attend
												</label>
											</div>
										</fieldset>
									</div>
								</div>
							)
						})}
						<button onClick={handleSubmit} type="submit">
							RSVP
						</button>
					</form>
				</Step>
			)}
			{step === 1 && (
				<Step>
					<h3>Step 1: Find Your Crew</h3>

					<form className="rsvp-form rsvp-form-find">
						<input
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Name"
						/>
						<button onClick={handleFindFamily}>Find</button>
					</form>
				</Step>
			)}
		</div>
	)
}
