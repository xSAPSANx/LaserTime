import './index.scss'

export const FeaturesBlock = () => {
	const featuresData = [
		{
			icon: '/assets/fast.svg',
			title: 'Скорость',
			description:
				'Быстрее пескоструя в 4 раза, не требует предварительной подготовки пескоструйного оборудования и последующей очистки от песка.',
		},
		{
			icon: '/assets/circle.svg',
			title: 'Точность',
			description:
				'Сжигает загрязнения (жир, грязь, ржавчину, краску и т.д.), не повреждая поверхность детали. Не требует шлифования.',
		},
		{
			icon: '/assets/cold.svg',
			title: 'Отсутствие теплового эффекта',
			description:
				'Исключает деформации, не снижает эксплуатационные характеристики металла или сплава, позволяет безопасно очищать мелкие детали.',
		},
		{
			icon: '/assets/robohand.svg',
			title: 'Бесконтактность',
			description: 'Бесконтактная очистка подходит для всех видов объектов.',
		},
		{
			icon: '/assets/newtech.svg',
			title: 'Универсальность',
			description:
				'Лазер способен очищать любые твёрдые поверхности, включая все виды металлов (чёрные, цветные, различные сплавы), а также кирпич, керамику, камень, гранит, бетон, стекло и другие материалы с высокой плотностью.',
		},
		{
			icon: '/assets/ecolog.svg',
			title: 'Экологичность',
			description: 'Безопасна для окружающей среды, поскольку исключает применение химических веществ.',
		},
	]
	return (
		<div className='features-block' id='features-block'>
			{featuresData.map((feature, index) => (
				<div className='feature-item' key={index}>
					<img src={feature.icon} alt={feature.title} className='feature-icon' />
					<div className='feature-content'>
						<h2 className='feature-title'>{feature.title}</h2>
						<p className='feature-description'>{feature.description}</p>
					</div>
				</div>
			))}
		</div>
	)
}
