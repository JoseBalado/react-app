import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul className="nav">
        <li class="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to='/favorites'>Favorite Beers</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;