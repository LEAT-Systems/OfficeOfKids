import React, { useContext } from "react";
import Hero from "../components/Hero";
import Modal from "../components/Modal";
import ModalContext from "../context/ModalContext";

function Home() {
  const { displayModal } = useContext(ModalContext);
  return (
    <>
      <Hero />
      {displayModal && <Modal />}
    </>
  );
}

export default Home;
