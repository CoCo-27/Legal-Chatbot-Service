import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Auth/Login/Login';
import SignUp from './pages/Auth/Register/Register';
import Welcome from './pages/Welcome';
import Chat from './pages/Chat/Chat';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
