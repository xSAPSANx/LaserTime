import './index.scss'

export const Delivery = () => {
	return (
		<div className='delivery-block'>
			<div className='delivery-content'>
				<h2 className='delivery-title'>РАБОТАЕМ НА ВЫЕЗД</h2>
				<p className='delivery-subtitle'>Выезд от 3000₽, окончательная стоимость зависит от расстояния</p>
			</div>
			<div className='delivery-image'>
				<img src='/photo/carDelivery.webp' alt='Бесплатная доставка' className='delivery-van' />
			</div>
		</div>
	)
}
