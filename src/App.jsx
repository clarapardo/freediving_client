import './App.css'
import basicRoutes from './routes/basic.routes'
import AppRoutes from './routes/index.routes'
import GlassyNavbar from './components/01.Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sponsors from './components/Footer/Sponsors/Sponsors'
import { useEffect, useState, useContext } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { AuthContext } from './contexts/auth.context'
import authService from './services/auth.service'
import OffcanvasCart from './components/00. General/OffcanvasCart/OffcanvasCart'
import CartIcon from './components/00. General/CartIcon/CartIcon'

function App() {

  const { storeToken, authenticateUser } = useContext(AuthContext)
  const [showOffcanvas, setShowOffcanvas] = useState(false)


  useEffect(() => {
    Aos.init({ duration: 2000 })

    createSession()

  }, [])

  const createSession = () => {

    authService
      .setToken()
      .then(({ data }) => {
        storeToken(data.authToken)
        authenticateUser()
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <GlassyNavbar />
      <AppRoutes setShow={setShowOffcanvas} />
      <Footer />

      <OffcanvasCart show={showOffcanvas} setShow={setShowOffcanvas} />
      <CartIcon show={showOffcanvas} setShow={setShowOffcanvas} />

    </div>
  )
}

export default App
