import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import '../style/home/Navbar.css'

function Navbar() {
		return (
			<div className='nav'>
				<div className='container mx-auto'>
					<Link to='/' className="logo">
						<img src={logo} alt="Hero Background" className='logo-img'/>
					 <p>OFFICE OF KIDS</p>
					</Link>
				</div>
			</div>
		)
}

export default Navbar