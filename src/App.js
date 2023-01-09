import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import Home from "./pages/Home";
import Reader from "./pages/Reader"; 

function App() {
  return (
    <ModalProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reader" element={<Reader />} />
          </Routes>
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;
