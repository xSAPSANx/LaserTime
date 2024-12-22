import './index.scss'

export const Delivery = () => {
	return (
		<div className='delivery-block'>
			<div className='delivery-content'>
				<h2 className='delivery-title'>РАБОТАЕМ НА ВЫЕЗД</h2>
				<p className='delivery-subtitle'>Цена договорная</p>
			</div>
			<div className='delivery-image'>
				<img src='/photo/carDelivery.webp' alt='Бесплатная доставка' className='delivery-van' />
			</div>
		</div>
	)
}
