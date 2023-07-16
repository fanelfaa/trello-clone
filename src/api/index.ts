import { AppState } from '@/state/appStateReducer'

const baseUrl = import.meta.env.VITE_BASE_URL

export const save = (payload: AppState) => {
	return fetch(`${baseUrl}/save`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	}).then((response) => {
		if (response.ok) {
			return response.json()
		}
		throw new Error('Error while saving the state.')
	})
}

export const load = () => {
	return fetch(`${baseUrl}/load`).then((response) => {
		if (response.ok) {
			return response.json() as Promise<AppState>
		}
		throw new Error('Error while loading the state.')
	})
}
