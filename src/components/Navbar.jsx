import React from 'react'
import logo from '../images/logo.svg'
import '../style/home/Navbar.css'

function Navbar() {
		return (
			<div className='nav'>
				<div className='container mx-auto'>
					<div className="logo">
						<img src={logo} alt="Hero Background" className='logo-img'/>
					 <p>OFFICE OF KIDS</p>
					</div>
				</div>
			</div>
		)
}

export default Navbar