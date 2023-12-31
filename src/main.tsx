import React from 'react'
import ReactDOM from 'react-dom/client'
import { DndProvider } from 'react-dnd'
import { HTML5Backend as Backend } from 'react-dnd-html5-backend'

import App from './App.tsx'
import './index.css'
import { AppStateProvider } from './state/AppStateContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<DndProvider backend={Backend}>
			<AppStateProvider>
				<App />
			</AppStateProvider>
		</DndProvider>
	</React.StrictMode>
)
