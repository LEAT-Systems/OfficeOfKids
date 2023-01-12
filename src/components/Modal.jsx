import React, { useContext, useState } from 'react'
import { SlClose } from 'react-icons/sl'
import ModalContext from '../context/ModalContext'
import '../style/home/Modal.css'

function Modal() {
	const { closeModal } = useContext(ModalContext)

	const [pin, setPin] = useState([])

	const maxLength = 1

	const handleInput = (e) => {
		const newPin = e.target.value
		setPin(newPin)
	}

	return (
		<div className="modal-container">
			<div className="modal">
				<div className="close-modal" onClick={closeModal}>
					<SlClose className="close-icon" />
				</div>
				<div className='modal-group'>
					<h2 className="modal-title">Enter an access pin to read the full story</h2>
					<div className="flex gap-x-4 mt-[24px]">
						<input type="text" className='input-field' value={pin} onChange={handleInput} maxLength={maxLength}/>
						<input type="text" className='input-field' value={pin} onChange={handleInput} />
						<input type="text" className='input-field' value={pin} onChange={handleInput} />
						<input type="text" className='input-field' value={pin} onChange={handleInput} />
						<input type="text" className='input-field' value={pin} onChange={handleInput} />
					</div>
					<p className='modal-text'>DON’T HAVE AN ACCESS PIN ? <span>CONTACT US</span> <strong>HERE</strong></p>
				</div>
			</div>
		</div>
	)
}

export default Modal