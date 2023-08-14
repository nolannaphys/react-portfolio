import './App.css'
import Footer from './pages/Footer'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Nav />

      <Outlet />
      <Footer />
    </>
  )
}

export default App