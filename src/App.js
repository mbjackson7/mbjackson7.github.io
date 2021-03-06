import './App.css';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume';
import ChangeLog from './pages/ChangeLog';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

//Just Launches the App
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/changelog" element={<ChangeLog/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
