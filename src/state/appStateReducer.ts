import { findItemIndexById } from '@/utils/arrayUtils'
import { Action } from './actions'

export type Task = {
	id: string
	text: string
}
export type List = {
	id: string
	text: string
	tasks: Task[]
}
export type AppState = {
	lists: List[]
}

// closure gen id
const createGenId = () => {
	let id = 1
	return () => {
		// eslint-disable-next-line no-plusplus
		return `${++id}`
	}
}

const genId = createGenId()

export const appStateReducer = (
	draft: AppState,
	action: Action
): AppState | void => {
	switch (action.type) {
		case 'ADD_LIST': {
			draft.lists.push({
				id: genId(),
				text: action.payload,
				tasks: [],
			})
			break
		}

		case 'ADD_TASK': {
			const { text, listId } = action.payload
			const targetListIndex = findItemIndexById(draft.lists, listId)
			draft.lists[targetListIndex].tasks.push({
				id: genId(),
				text,
			})
			break
		}

		default: {
			break
		}
	}
}
