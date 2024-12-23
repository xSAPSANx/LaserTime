import { useState } from 'react'
import { Link } from 'react-router-dom'

import { BurgerModal } from '../../widgets/burgerModal'
import icon from '/assets/icon.svg'
import './index.scss'
import { BurgerButton } from '../../widgets/burgerButton'

export const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)

	const offsets: Record<string, number> = {
		'#about': 50,
		'#features-block': 85,
		'#containerServices': 75,
	}

	const scrollToSection = (id: string, offset: number = 0) => {
		const section = document.querySelector(id)
		if (section) {
			const sectionTop = section.getBoundingClientRect().top + window.scrollY
			window.scrollTo({
				top: sectionTop - offset,
				behavior: 'smooth',
			})
		}
	}

	const closeMenu = () => setMenuOpen(false)

	return (
		<>
			<div className='container'>
				<img className='logo' src={icon} alt='Логотип компании' />
				<div className='linkBlock neon'>
					<Link to='/' onClick={() => scrollToSection('#features-block', offsets['#features-block'])}>
						Преимущества
					</Link>
					<Link to='/' onClick={() => scrollToSection('#containerServices', offsets['#containerServices'])}>
						Примеры работ
					</Link>
				</div>
				<div className='contacts'>
					<div className='adress neon'>
						<img src='/assets/mapicon.svg' alt='Иконка карты' />
						<a className='linkMap' href='https://yandex.ru/maps/-/CHAciX2J'>
							г.Воронеж,
							<br /> ул.Ленинградская, д.118
						</a>
					</div>
					<div className='contactsBlock neon'>
						<div className='blockMessenger'>
							<a className='linkMessenger whatsApp' href='https://wa.me/+79290068090'>
								WhatsApp
							</a>
							<a className='linkMessenger telegram' href='https://t.me/+79290068090'>
								Telegram
							</a>
						</div>
						<a className='tel' href='tel:89290068090'>
							8-929-006-80-90
						</a>
					</div>
				</div>
				<BurgerButton isActive={isMenuOpen} setActive={setMenuOpen} />
			</div>
			<BurgerModal isMenuOpen={isMenuOpen} scrollToSection={scrollToSection} closeMenu={closeMenu} offsets={offsets} />
		</>
	)
}
