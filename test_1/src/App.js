
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shuvo from './pages/shuvo.jsx';
import Cointain from './pages/contain.jsx';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Cointain />} />
      <Route path="/shuvo" element={<Shuvo />} />
    </Routes>
  </Router>

  )
  
  
}

export default App;
