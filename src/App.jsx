import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import ChangeLog from "./pages/ChangeLog";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/changelog" element={<ChangeLog />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
