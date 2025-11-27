
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Stats from './components/Stats'
import Prices from './components/Prices'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import Dentists from './components/Dentists'
import Form from './components/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
        <Route
          <Hero />
          <About />
          <Services />
          <Stats />
          <Prices />
          <Form />
          <Reviews />
          <Dentists />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
