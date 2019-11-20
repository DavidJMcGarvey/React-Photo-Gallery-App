import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="main-nav">
        <ul>
          {/* <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li> */}
          <li>
            <Link to="#">Cats</Link>
          </li>
          <li>
            <Link to="#">Dogs</Link>
          </li>
          <li>
            <Link to="#">Computers</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Nav