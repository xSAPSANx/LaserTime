import './index.scss'
import { ShowPhoto } from '../../widgets/showPhoto'

export const Services = () => {
	return (
		<div className='containerServices' id='containerServices'>
			<h2 className='blockName'>Примеры работ</h2>
			<ShowPhoto
				title={'Промышленное оборудование'}
				photoOld={'/photo/cisternOld.jpg'}
				photoNew={'/photo/cisternNew.jpg'}
			/>
			<ShowPhoto title={'Детали автомобиля'} photoOld={'/photo/engineOld.jpeg'} photoNew={'/photo/engineNew.jpeg'} />
			<ShowPhoto photoOld={'/photo/crugOld.jpeg'} photoNew={'/photo/crugNew.jpeg'} />
			<ShowPhoto title={'Инструменты'} photoOld={'/photo/knifeOld.jpeg'} photoNew={'/photo/knifeNew.jpeg'} />
		</div>
	)
}
