import React from 'react';
import logo from '../assets/logo-square.png';
import Pic from '../assets/content.jpg';
import PP from '../assets/pp.jpg';
import backgroundPic from '../assets/BP.png'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import Map from './Map';
import { GoogleMap } from '@react-google-maps/api';
import Content from './Content';
import Test from './test';


function Header() {

  return (
    <div className='container'>
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
