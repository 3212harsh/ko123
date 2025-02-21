import { Outlet } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./shared/Navbar"
import Footer from "./shared/Footer"

function App() {

  return (
    <>
      <Navbar/>
      <div className=" min-h-screen">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
