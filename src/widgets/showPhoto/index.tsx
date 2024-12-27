import './index.scss'

interface propsPhoto {
	photoOld: string
	photoNew: string
	title?: string
	altOld: string
	altNew: string
	widthOld?: string
	heightOld?: string
	widthNew?: string
	heightNew?: string
}

export const ShowPhoto = ({ title, photoOld, photoNew, heightOld, altOld, altNew }: propsPhoto) => {
	return (
		<div className='titleContainer'>
			<h3 className={`titleServices ${!title ? 'no-title' : ''}`}>{title || ' '}</h3>
			<div className='content'>
				<img className='photoServices' src={photoOld} style={{ height: heightOld }} alt={altOld} />
				<div className='arrowBlock'>
					<img className='arrow' src='/assets/arrowimage.svg' alt='Стрелочка' />
					<img className='arrow' src='/assets/arrowimage.svg' alt='Стрелочка' />
					<img className='arrow' src='/assets/arrowimage.svg' alt='Стрелочка' />
				</div>
				<img className='photoServices' src={photoNew} alt={altNew} />
			</div>
		</div>
	)
}
