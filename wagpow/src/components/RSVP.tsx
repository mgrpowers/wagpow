import { useState } from "react"
import { db } from "../firebase"
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"

interface member {
	name: string
	attending: boolean
	dietaryRestrictions: string
}

interface Family {
	name: string
	members: member[]
	email: string
}

export const Step = ({ children }: { children: React.ReactNode }) => {
	return <div className="step">{children}</div>
}

export const RSVP = () => {
	const rsvp = localStorage.getItem("rsvp")
	const [step, setStep] = useState(rsvp ? 3 : 1)
	const [search, setSearch] = useState("")
	const [family, setFamily] = useState<Family>()
	const [error, setError] = useState("")

	const handleFindFamily = async (e) => {
		e.preventDefault()

		const errorText = "Oops, try another name or call me: 831.325.6813"

		try {
			const familiesRef = collection(db, "families")
			const lcName = search
				.replace("-", " ")
				.toLowerCase()
				.trim()
				.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "")

			const q = query(
				familiesRef,
				where("members", "array-contains", {
					name: lcName,
				})
			)

			const querySnapshot = await getDocs(q)
			console.log("querySnapshot", querySnapshot.empty)
			if (!querySnapshot.empty) {
				const familyDoc = querySnapshot.docs[0].data()

				setFamily(() => familyDoc)
				setError("")
				setStep(2)
			} else {
				setError(errorText)
			}
		} catch (error) {
			console.error("Error finding family: ", error)
			setError(errorText)
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

		setFamily(() => updatedFamily)
	}

	const updateFamilyEmail = (email: string) => {
		const updatedFamily = { ...family } as Family
		updatedFamily.email = email
		setFamily(() => updatedFamily)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			await addDoc(collection(db, "rsvps"), family)
			setStep(3)
			localStorage.setItem("rsvp", "true")
		} catch (error) {
			console.error("Error adding document: ", error)
			setError("Failed to submit RSVP. Please try again.")
		}
	}

	return (
		<div className="hero wp-rsvp wp-content">
			{step !== 3 && (
				<h2 className="wp-title">Please RSVP by May 1, 2025</h2>
			)}
			{error && <p className="wp-error">{error}</p>}
			{step === 3 && (
				<Step>
					<h2>
						Thank you for RSVPing! Please let us know if you'd like
						to make any changes.
					</h2>
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
										<h3>{member.name}</h3>
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
						<div className="rsvp-form-row">
							<label
								className={`rsvp-form-email ${family?.members.some((m) => m.attending) && "active"}`}
							>
								Please add an email
								<input
									placeholder="email"
									name="email"
									type="email"
									onChange={(e) =>
										updateFamilyEmail(e.target.value)
									}
								/>
							</label>

							<button onClick={handleSubmit} type="submit">
								RSVP
							</button>
						</div>
					</form>
				</Step>
			)}
			{step === 1 && (
				<Step>
					<h3>Step 1: Search for a member of your family</h3>

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
