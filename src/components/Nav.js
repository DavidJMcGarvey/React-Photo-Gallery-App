import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="main-nav">
        <ul>
          <li><Link to="/">Asteroids</Link></li>
          <li><Link to="/">Boats</Link></li>
          <li><Link to="/">Cameras</Link></li>
        </ul>
      </nav>
  )
}

export default Nav