import icon from '/assets/icon.svg'
import './index.scss'

export const Header = () => {
	return (
		<div className='container'>
			<img className='logo' src={icon} />
			<div className='linkBlock neon'>
				<a href='/'>О нас</a>
				<a href='/'>Услуги</a>
				<a href='/'>Цена</a>
			</div>
			<div className='contacts'>
				<div className='adress neon'>
					<img src='/assets/mapicon.svg' />
					<a className='linkMap' href='https://yandex.ru/maps/-/CHAciX2J'>
						г.Воронеж,<br></br> ул.Ленинградская, д.118
					</a>
				</div>
				<div className='contactsBlock neon'>
					<div className='blockMessenger '>
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
			</div>
		</div>
	)
}
