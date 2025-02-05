import { create } from "zustand"

export const useAppStore = create((set) => ({
	authenticated: false,
	setAuth: (auth) => set({ authenticated: auth }),
}))
