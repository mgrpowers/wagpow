import { useEffect } from "react"
import { useAppStore } from "./useAppStore"
// import { auth } from "../firebase"
import { caesarShift } from "../utils/cc"

export const useAuth = () => {
	const setAuth = useAppStore((state) => state.setAuth)

	const checkAuth = (password: string) => {
		const hash = "c2psamp3bWo="
		const shift = caesarShift(password, password?.length)
		const bto = btoa(shift)

		return bto === hash
	}

	useEffect(() => {
		const pw = localStorage.getItem("auth")
		const isAuthed = checkAuth(pw)
		if (isAuthed) {
			document.documentElement.style.setProperty("--s", "60px")
			setAuth(true)
		}
	}, [setAuth])

	const login = async (password: string) => {
		const isAuthed = checkAuth(password)

		if (isAuthed) {
			localStorage.setItem("auth", password)
			document.documentElement.style.setProperty("--s", "60px")
			setAuth(true)
		}
		// try {
		// 	await auth.signInWithEmailAndPassword(email, password)
		// } catch (error) {
		// 	console.error("Error signing in:", error)
		// }
	}

	const signOut = async () => {
		try {
			await auth.signOut()
		} catch (error) {
			console.error("Error signing out:", error)
		}
	}

	return { login, signOut }
}
