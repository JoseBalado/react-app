import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className='container'>
    <nav>
      <ul className='nav'>
        <li className='nav-item'>
          <Link className='nav-link' to='/'><h3>Home</h3></Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/favorites'><h3>Favorite Beers</h3></Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
