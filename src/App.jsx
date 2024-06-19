import 'boxicons/css/boxicons.min.css'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'

function App() {

    return <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
          <Route index element = {<Home />} />
          <Route path='about' element={<About />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
    
    </BrowserRouter>
}

export default App
