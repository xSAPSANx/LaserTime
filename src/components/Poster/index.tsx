import { useEffect } from 'react'

import './index.scss'

export const Poster = () => {
	useEffect(() => {
		const initialOffset = -200

		const handleScroll = () => {
			const poster = document.querySelector('.poster-container') as HTMLElement

			if (poster) {
				const scrollPosition = window.scrollY
				poster.style.backgroundPosition = `center ${initialOffset + scrollPosition * 0.2}px`
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className='poster-container'>
			<h1 className='poster-title'>Лазерная чистка металла в Воронеже</h1>
		</div>
	)
}
