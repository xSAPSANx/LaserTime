import './index.scss'

type propsPhoto = {
	photoOld: string
	photoNew: string
	title: string
}

export const ShowPhoto = ({ title, photoOld, photoNew }: propsPhoto) => {
	return (
		<div className='titleContainer'>
			<div className='titleServices'>{title}</div>
			<div className='content'>
				<img className='photoServices' src={photoOld} />
				<div className='arrowBlock'>
					<img className='arrow' src='/src/assets/arrow.svg' />
					<img className='arrow' src='/src/assets/arrow.svg' />
					<img className='arrow' src='/src/assets/arrow.svg' />
				</div>
				<img className='photoServices' src={photoNew} />
			</div>
		</div>
	)
}
