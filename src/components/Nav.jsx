import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css'

const Nav = () => {
  return (
    <div className='nav'>
        <p><span>G</span>Green Groves</p>

        <nav>
            <Link to='/'>Home</Link>
            <Link to='/gardening'>Gardening</Link>
            <Link to='/educational'>Educational</Link>
            <Link to='/about'>About Us</Link>
        </nav>

        <Link>Contact Us</Link>
    </div>
  )
}

export default Nav