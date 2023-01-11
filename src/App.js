import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import Home from "./pages/Home";
import Reader from "./pages/Reader"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <ModalProvider>
      <Router>
        <div className="flex flex-col items-stretch justify-between">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reader" element={<Reader />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;
