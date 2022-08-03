import './App.css'
import basicRoutes from './routes/basic.routes'
import AppRoutes from './routes/index.routes'
import BCTNavbar from './components/01.Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sponsors2 from './components/Footer/Sponsors/Sponsors'
import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'



function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="App">
      <BCTNavbar />
      <AppRoutes />
      {/* <Sponsors /> */}
      <Sponsors2 />
      <Footer />
    </div>
  )
}

export default App
