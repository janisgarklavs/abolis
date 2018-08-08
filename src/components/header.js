import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo.png'
import styles from './header.css'


const Header = ({ siteTitle }) => (
 <section>
   <div className="flex shadow-md items-center p-4">
      <Link to="/" className="flex items-center no-underline text-black">
        <img src={logo} alt="logo" width="40" height="39"/>
        <p className="font-bold text-xl ml-2">{siteTitle}</p> 
      </Link>
      <div className="ml-2">
        <Link to="/sulas" className="no-underline text-black p-1">Sulas</Link>
        <Link to="/par-mums" className="no-underline text-black ml-2 p-1">Par mums</Link>
      </div>
   </div>
 </section>
)

export default Header
