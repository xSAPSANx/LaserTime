import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header/index.tsx'
import './main.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<div className='bodyContainer'>
		<BrowserRouter>
			<Header />
		</BrowserRouter>
		<App />
	</div>
)
