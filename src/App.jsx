import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import ChangeLog from "./pages/ChangeLog";
import ScrollToTop from "./components/ScrollToTop";
import Sudoku from "./pages/Sudoku";

function App() {
  return (
    <HashRouter >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/changelog" element={<ChangeLog />} />
        <Route path="/sudoku" element={<Sudoku />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
