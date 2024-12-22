import './App.scss'
import { Services } from './components/Services'
import { Poster } from './components/Poster'
import { FeaturesBlock } from './components/Advantages'
import { Delivery } from './components/Delivery'

function App() {
	return (
		<>
			<Poster />
			<FeaturesBlock />
			<Delivery />
			<Services />
		</>
	)
}

export default App
