import './index.scss'
import { ShowPhoto } from '../../widgets/showPhoto'

export const Services = () => {
	return (
		<div className='containerServices'>
			<h2 className='blockName'>Примеры работ</h2>
			<ShowPhoto
				title={'Промышленное оборудование'}
				photoOld={'/photo/cisternOld.jpg'}
				photoNew={'/photo/cisternNew.jpg'}
			/>
			<ShowPhoto
				title={'Промышленное оборудование'}
				photoOld={'/photo/cisternOld.jpg'}
				photoNew={'/photo/cisternNew.jpg'}
			/>
			<ShowPhoto
				title={'Промышленное оборудование'}
				photoOld={'/photo/cisternOld.jpg'}
				photoNew={'/photo/cisternNew.jpg'}
			/>
			<ShowPhoto
				title={'Промышленное оборудование'}
				photoOld={'/photo/cisternOld.jpg'}
				photoNew={'/photo/cisternNew.jpg'}
			/>
			<ShowPhoto
				title={'Промышленное оборудование'}
				photoOld={'/photo/cisternOld.jpg'}
				photoNew={'/photo/cisternNew.jpg'}
			/>
		</div>
	)
}
