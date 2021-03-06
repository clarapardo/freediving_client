import './App.css'
import basicRoutes from './routes/basic.routes'
import AppRoutes from './routes/index.routes'
import BCTNavbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sponsors from './components/Sponsors/Sponsors'
import Sponsors2 from './components/Sponsors/Sponsors2'

function App() {
  return (
    <div className="App">
      {/* <BCTNavbar /> */}
      <AppRoutes />
      <Sponsors />
      {/* <Sponsors2 /> */}
      <Footer />
    </div>
  )
}

export default App
