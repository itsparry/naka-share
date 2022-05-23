import React from 'react';
import logo from '../assets/logo-square.png';
import Map from './Map';
import Content from './Content';


function Header() {

  return (
    <div className='container-cus'>
      <div className='header-container'>
        <img src={logo} alt='naka' className='logo'/>
        <h1>
          get naka
        </h1>
      </div>

      <div className='post-con'>
        {/* the Map component needs this container!!! */}
        <Map component={<Content/>}/>
      </div>
    
    </div>
  )
}

export default Header
