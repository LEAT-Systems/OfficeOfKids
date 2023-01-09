import { useState, createContext } from "react";

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {

	const [displayModal, setDisplayModal] = useState(false)
	
	// show modal
	const showModal = () => {
		setDisplayModal(true)
	}

//Close modal
	const closeModal = () => {
		setDisplayModal(false)
	}

	return (
		<ModalContext.Provider value={{
			displayModal,
			showModal,
			closeModal
		}}>
			{children}
		</ModalContext.Provider>
	)
}

export default ModalContext