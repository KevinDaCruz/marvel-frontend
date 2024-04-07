import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import des components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import des pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import ComicsById from "./pages/ComicsById";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<ComicsById />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
