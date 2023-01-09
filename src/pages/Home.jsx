import React, {useContext} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Modal from '../components/Modal'
import Footer from '../components/Footer'
import ModalContext from '../context/ModalContext'

function Home() {
	const {displayModal} = useContext(ModalContext)
		return (
			<>
				<Navbar />
				<Hero />
				{displayModal && <Modal/>}
				<Footer/>
			</>
		)
}

export default Home