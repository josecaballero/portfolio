import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/WorkPage";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        {/* Cuando encuentra la ruta se queda
      y no sigue buscando más */}
        <Route path="/" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
