import { createRoot } from 'react-dom/client'

import { Header } from './components/header/index.tsx'
import './main.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<div className='bodyContainer'>
		<Header />
		<App />
	</div>
)
