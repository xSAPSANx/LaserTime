import './index.scss'

interface BurgerButtonProps {
	isActive: boolean
	setActive: (active: boolean) => void
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ isActive, setActive }) => {
	return (
		<button
			className={`menu-button ${isActive ? 'active' : ''}`}
			onClick={() => setActive(!isActive)}
			aria-label='Кнопка меню навигации'
		>
			<span className='menu-button-line' id='line1'></span>
			<span className='menu-button-line' id='line2'></span>
			<span className='menu-button-line' id='line3'></span>
		</button>
	)
}
