import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import ModalContext from '../context/ModalContext'
import '../style/home/Hero.css'

function Hero() {
	const {showModal} = useContext(ModalContext)

	return (
		<div className='hero'>
			<div className='container mx-auto '>
				<div className='hero-display'>
					<div className='hero-text'>
						<h1 className='hero-header'>A NOTE FROM THE FOUNDER</h1>
						<p className='text-display'>For me it has always been a question of; how can I, as an individual help in the fight against climate change. Thus, i decided to use my passion for drawing and writing to fuel my passion for this cause. The goal is to raise Awareness through my books. Especially in younger generation on climate change, to basically start them young. To cultivate the habit of climate change consciousness in them, so they grow up with the knowledge and passion for it and the understanding that they have a responsibility towards it</p>

						<button className='read-more'>
							<Link to='/reader'>
								Read this Book
							</Link>
						</button>
					</div>
					<div className='hero-video'>
								<iframe width="566" height="338" src="https://www.youtube.com/embed/MBlcEM1Ln2g" className='video-player' title="What would you do to help climate change?" frameborder="0" allow=" autoplay; " allowfullscreen></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero