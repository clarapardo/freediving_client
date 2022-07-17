import './App.css'
import basicRoutes from './routes/basic.routes'
import AppRoutes from './routes/index.routes'
import BCTNavbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      {/* <BCTNavbar /> */}
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
