import './index.scss'
import { ShowPhoto } from '../../widgets/showPhoto'

export const Services = () => {
	return (
		<div className='containerServices' id='containerServices'>
			<h2 className='blockName'>Примеры работ</h2>
			<ShowPhoto
				title={'Промышленное оборудование'}
				photoOld={'/photo/cisternOld.webp'}
				photoNew={'/photo/cisternNew.webp'}
				altOld={'Большой резервуар с загрязнениями'}
				altNew={'Большой резервуар отчищенный до состояния как новый'}
			/>
			<ShowPhoto
				title={'Антиквариат'}
				photoOld={'/photo/cupOld.webp'}
				photoNew={'/photo/cupNew.webp'}
				altOld={'Старая загрязненная чаша с крышкой'}
				altNew={'Очищенная старая чаша с крышкой'}
			/>

			<ShowPhoto
				title={'Удаление ржавчины'}
				photoOld={'/photo/corozionOld.webp'}
				photoNew={'/photo/corozionNew.webp'}
				altOld={'Поднос в ржавчине'}
				altNew={'Поднос на половину очищенный'}
				heightOld={'533.33px'}
			/>
			<ShowPhoto
				title={'Удаление краски'}
				photoOld={'/photo/groundOld.webp'}
				photoNew={'/photo/groundNew.webp'}
				altOld={'Стена в краске'}
				altNew={'Стена очищенная от краски'}
			/>
			<ShowPhoto
				photoOld={'/photo/paintOld.webp'}
				photoNew={'/photo/paintNew.webp'}
				altOld={'Стойка забора в краске'}
				altNew={'Стойка забора очищенная от краски'}
			/>

			<ShowPhoto
				title={'Детали автомобиля'}
				photoOld={'/photo/engineOld.webp'}
				photoNew={'/photo/engineNew.webp'}
				altOld={'Часть двигателя в моторном масле'}
				altNew={'Часть двигателя очищенная от масла'}
			/>
			<ShowPhoto
				photoOld={'/photo/crugOld.webp'}
				photoNew={'/photo/crugNew.webp'}
				altOld={'Запчасть машины вся в масле '}
				altNew={'Очищенная до блеска запчасть машины'}
			/>

			<ShowPhoto
				title={'Инструменты'}
				photoOld={'/photo/knifeOld.webp'}
				photoNew={'/photo/knifeNew.webp'}
				altOld={'Лезвие ножа с ржавчиной'}
				altNew={'Лезвие ножа очищенное от ржавчины'}
			/>
		</div>
	)
}
