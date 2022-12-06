import React, { useState } from "react"
import "./nav-bar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
       
       
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Services</li>
          </Link>
          <Link to='/' className='about'>
            <li>How We Work</li>
          </Link>
          <Link to='/' className='services'>
            <li>Partnership</li>
          </Link>
          <Link to='/' className='skills'>
            <li>Get A free Quote</li>
          </Link>
                                  
                          </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
         </nav>
    </>
  )
}
export default Navbar