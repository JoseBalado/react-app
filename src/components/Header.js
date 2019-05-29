import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
  <header className="container">
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/favorites'>Favorite Beers</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;