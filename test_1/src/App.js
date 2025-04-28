
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shuvo from './pages/shuvo.jsx';

import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      
      <Route path="/shuvo" element={<Shuvo />} />
    </Routes>
  </Router>

  )
  
  
}

export default App;
