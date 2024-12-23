import './index.scss'

interface propsPhoto {
	photoOld: string
	photoNew: string
	title?: string
}

export const ShowPhoto = ({ title, photoOld, photoNew }: propsPhoto) => {
	return (
		<div className='titleContainer'>
			<h3 className={`titleServices ${!title ? 'no-title' : ''}`}>{title || ' '}</h3>
			<div className='content'>
				<img className='photoServices' src={photoOld} />
				<div className='arrowBlock'>
					<img className='arrow' src='/assets/arrowimage.svg' />
					<img className='arrow' src='/assets/arrowimage.svg' />
					<img className='arrow' src='/assets/arrowimage.svg' />
				</div>
				<img className='photoServices' src={photoNew} />
			</div>
		</div>
	)
}
