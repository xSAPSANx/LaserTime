import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

interface BurgerModalProps {
	isMenuOpen: boolean
	scrollToSection: (id: string, offset?: number) => void
	closeMenu: () => void
	offsets: Record<string, number>
}

export const BurgerModal: React.FC<BurgerModalProps> = ({ isMenuOpen, scrollToSection, closeMenu, offsets }) => {
	useEffect(() => {
		if (isMenuOpen) {
			document.body.classList.add('no-scroll')
		} else {
			document.body.classList.remove('no-scroll')
		}

		return () => {
			document.body.classList.remove('no-scroll')
		}
	}, [isMenuOpen])

	const handleLinkClick = (id: string, offsets: Record<string, number>) => {
		scrollToSection(id, offsets[id])
		closeMenu()
	}

	return (
		<div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
			<nav className='mobile-menu-links'>
				{/* <Link to='/' onClick={() => handleLinkClick('#about', offsets)}>
					О нас
				</Link> */}
				<Link to='/' onClick={() => handleLinkClick('#features-block', offsets)}>
					Преимущества
				</Link>
				<Link to='/' onClick={() => handleLinkClick('#containerServices', offsets)}>
					Примеры работ
				</Link>
				<div className='adress neon'>
					<img src='/assets/mapicon.svg' />
					<a className='linkMap' href='https://yandex.ru/maps/-/CHAciX2J'>
						г.Воронеж,
						<br /> ул.Ленинградская, д.118
					</a>
				</div>
				<div className='contactsBlock neon'>
					<div className='blockMessenger'>
						<a className='linkMessenger whatsApp' href='https://wa.me/89290068090'>
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
			</nav>
		</div>
	)
}
