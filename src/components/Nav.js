import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

// Nav component
const Nav = (props) => {

  return (
    <nav className="main-nav">
      <ul>
        <li><Link onClick={()=><Search onSearch={props.search('rainbows')} />} 
          to={{
            pathname: "/",
            search: `search=rainbows`
          }}>Rainbows</Link></li>
        <li><Link onClick={()=><Search onSearch={props.search('asteroids')} />}
          to={{
            pathname: "/",
            search: `search=asteroids`
          }}>Asteroids</Link></li>
        <li><Link onClick={()=><Search onSearch={props.search('boats')} />}
          to={{
            pathname: "/",
            search: `search=boats`
          }}>Boats</Link></li>
        <li><Link onClick={()=><Search onSearch={props.search('cameras')} />}
          to={{
            pathname: "/",
            search: `search=cameras`
          }}>Cameras</Link></li>
      </ul>
    </nav>
  )
}

export default Nav