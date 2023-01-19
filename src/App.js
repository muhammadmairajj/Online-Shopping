import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import LoginReg from './components/pages/auth/LoginReg';
import ResetPassword from './components/pages/auth/ResetPassword';
import SendPasswordResetEmail from './components/pages/auth/SendPasswordResetEmail';
import Contact from './components/pages/Contact';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" exact element={ <Home /> }/>
          <Route path="/contact" exact element={ <Contact /> }/>
          <Route path="/dashboard" exact element={ <Dashboard /> }/>
          <Route path="/login" exact element={ <LoginReg /> }/>
          <Route path='/resetemail' exact element={<SendPasswordResetEmail />} />
          <Route path='/resetPassword' exact element={<ResetPassword />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
