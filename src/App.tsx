import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Dashboard from './pages/dashboard';
import { Home } from './pages/home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
