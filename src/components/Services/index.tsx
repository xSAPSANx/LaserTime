import './index.scss'
import { ShowPhoto } from '../../widgets/showPhoto'

export const Services = () => {
	return (
		<div className='containerServices'>
			<h2 className='blockName'>Услуги</h2>
			<ShowPhoto
				title={'Промышленное оборудование'}
				photoOld={'/photo/cisternOld.jpg'}
				photoNew={'/photo/cisternNew.jpg'}
			/>
		</div>
	)
}
