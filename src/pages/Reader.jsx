import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeftCircle } from 'react-icons/hi2'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReaderScreen from '../components/ReaderScreen'
import '../style/reader/Reader.css'

function Reader() {
	return (
		<>
			<Navbar />
			<div className="container mx-auto">
				<div className="reader-header">
					<Link to='/' className='go-back'>
						<HiOutlineArrowLeftCircle className='ml-2' /> Back
					</Link>
				</div>

				<div>
						<ReaderScreen/>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Reader