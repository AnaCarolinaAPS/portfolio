import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </Router>
  )
}

export default App
