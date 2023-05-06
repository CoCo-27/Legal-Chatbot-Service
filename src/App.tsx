import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';
import Home from './pages/Home';
import Login from './pages/Auth/Login/Login';
import SignUp from './pages/Auth/Register/Register';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import CheckPassword from './pages/Auth/ForgotPassword/CheckPassword';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import Welcome from './pages/Welcome';
import Chat from './pages/Chat/Chat';
import Privacy from './components/Footer/Privacy/Privacy';
import Terms from './components/Footer/Terms/Terms';
import Disclaimer from './components/Footer/Disclaimer/Disclaimer';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.getItem('token'));
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/checkpassword/:id" element={<CheckPassword />} />
          <Route path="/resetpassword/:id" element={<ResetPassword />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
