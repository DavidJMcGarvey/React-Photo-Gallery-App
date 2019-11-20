import React from 'react';
import { NavLink } from 'react-router-dom';

// Nav component
const Nav = (props) => {
  
  let query = props.query;
  console.log(query);

  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to={{
            pathname: "/",
            state: { query: 'rainbows' },
            search: `search=rainbows`
          }}>Rainbows</NavLink></li>
        <li><NavLink 
          to={{
            pathname: "/",
            state: { query: 'asteroids' },
            search: `search=asteroids`
          }}>Asteroids</NavLink></li>
        <li><NavLink 
          to={{
            pathname: "/",
            state: { query: 'boats' },
            search: `search=boats`
          }}>Boats</NavLink></li>
        <li><NavLink 
          to={{
            pathname: "/",
            state: { query: 'cameras' },
            search: `search=cameras`
          }}>Cameras</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav