import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import '../style/home/Footer.css'

function Footer() {
		return (
			<div className="footer">
				<div className="container mx-auto">
					<div className='block mx-[14px] md:mx-0 md:flex md:justify-between'>
						<div>
							<div className="flex items-center">
								<img src={logo} alt="logo" />
								<p className="footer-heading">OFFICE OF KIDS</p>
							</div>
							<p className='footer-text mt-2'>felicia.reid@example.com</p>
							<p className='footer-text'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
							</div>
						<div className='flex gap-x-10 mt-[64px] md:mt-0'>
							<div className='text-[14px] md:text-[18px]'>
								<Link to='/private-policy'>
									Privacy Policy
								</Link>
							</div>
							<div className='text-[14px] md:text-[18px]'>
								<Link to='/tac'>
									Terms and Condition
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
}

export default Footer