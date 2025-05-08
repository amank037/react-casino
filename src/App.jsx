import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'
import Header from './components/Header'
import Footer from './components/Footer'
import Support from './components/Support'

function App() {
  return (
    <Router>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
      <Support />
    </Router>
  );
}


export default App
