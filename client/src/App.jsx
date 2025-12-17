import { Routes, Route } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import ForgotPassword from './pages/ForgotPassword';
function App() {
  
  return (
    <>
    <Navbar />
    <div className="main-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/book" element={<Book />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
