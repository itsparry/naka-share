import React from 'react'
import Pic from '../assets/content.jpg';
import PP from '../assets/pp.jpg';
import backgroundPic from '../assets/BP.png'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';

function Content(props) {
  return (
    <div className='post-con'>
        <div style={{backgroundImage: `url(${backgroundPic})`}} className='content-container'>
          {/* <img src={backgroundPic} className='backgroundpic'/> */}
          <img src={Pic} className='content-pic'/>
          <div className='pp-buttons'>
            <div className='pp-username'>
              <div className='imgCropper'>
                <img src={PP} className='avatar'/>
              </div>
              <p className='username'>USERNAME</p>
            </div>
            <div className='buttons'>
              <AiOutlineHeart/>
              <BiComment/>
              <RiShareForwardLine/>
            </div>
          </div>
          <div className='description'>
            <p className='p-des'>but also the leap into electronic typesetting,but also the leap into electronic </p>
          </div>
        </div>
    </div>
  )
}

export default Content