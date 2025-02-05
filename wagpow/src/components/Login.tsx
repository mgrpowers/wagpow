import { useAuth } from "../hooks/useAuth"
import { Section } from "./Section"

export const Login = () => {
	const { login } = useAuth()
	const handleSubmit = async (event) => {
		event.preventDefault()

		const value = event.target.value

		login(value)
	}

	return (
		<Section>
			<div>
				<h1>J + M</h1>
			</div>
			<div className="wp-login">
				<input placeholder="password" onChange={handleSubmit} />
			</div>
		</Section>
	)
}
