import { Outlet } from "react-router-dom"
import NavBar from "./Navbar.jsx"
import Footer from "./Footer.jsx"


const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet /> {/* This will render the child routes */}
        <Footer />
    </div>
  )
}

export default Layout