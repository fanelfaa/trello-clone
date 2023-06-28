import { Dispatch, ReactNode, createContext, useContext } from 'react'
import { useImmerReducer } from 'use-immer'
import { AppState, List, Task, appStateReducer } from './appStateReducer'
import { Action } from './actions'

const appData: AppState = {
	lists: [
		{
			id: '0',
			text: 'To Do',
			tasks: [{ id: 'c0', text: 'Generate app scaffold react' }],
		},
		{
			id: '1',
			text: 'In Progress',
			tasks: [{ id: 'c2', text: 'Learn Typescript' }],
		},
		{
			id: '2',
			text: 'Done',
			tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
		},
	],
}

type AppStateContextProps = {
	lists: List[]
	getTasksByListId(id: string): Task[]
	dispatch: Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>(
	{} as AppStateContextProps
)

export const AppStateProvider = ({ children }: { children?: ReactNode }) => {
	const [state, dispatch] = useImmerReducer(appStateReducer, appData)

	const { lists } = state

	const getTasksByListId = (id: string) => {
		return lists.find((list) => list.id === id)?.tasks || []
	}

	return (
		<AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
			{children}
		</AppStateContext.Provider>
	)
}

export const useAppState = () => {
	return useContext(AppStateContext)
}
