//..........
//importing
//..........
import React from 'react'
import {
  FaBars, FaTimes
} from 'react-icons/fa'
import {UseAppContext} from '../context/appContext.js'
import {navItems} from '../utils/links.js'
import {Link} from 'react-scroll'
import '../assets/css/nav.css'
//..........
//App
//..........
const Navbar = () => {
  const {showSidebar, openSideBar,closeSidebar,logoutUser} =UseAppContext()
  return (
    <main>
    <span className='nav-btn' onClick={openSideBar}>
      <FaBars/>
    </span>

    <nav className={`${showSidebar?'nav-bar showNav':'nav-bar'}`}>
      <div className="navbar-header">
        <span className='nav-closer' onClick={closeSidebar}><FaTimes/></span>
      </div>
      <ul className='nav-items'>
        {navItems.map((i)=>{
          const {id, path, text} = i
          return(
            <li key={id}>
              <Link className='nav-link' onClick={closeSidebar} to={path} spy={true} smooth={true} offset={-100} duration={1000}>{text}</Link>
            </li>
          )
        })}
        <li>
          <Link className='nav-link' onClick={logoutUser}>logout</Link>
        </li>
      </ul>
    </nav>
    </main>
  )
}
//..........
//exporting
//..........
export default Navbar
