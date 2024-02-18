import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import Layout from './components/shared/layout';
import { Login } from './components/auth/login';
import Dashboard from './components/dashboard';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
