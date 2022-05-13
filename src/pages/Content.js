import React, { useEffect } from 'react'
import backgroundPic from '../assets/BP.png'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import contentId from '../content.json';
import { getContent } from '../actions/content';
import { useDispatch, useSelector } from 'react-redux';

function Content(props) {
  const dispatch = useDispatch()
  const contentPost = useSelector(s => s.userContent)

  useEffect(() => {getContent(contentId).then(contid => dispatch({type: 'GET_CONTENT', payload: contid}))},[])

  return (
    <div className='post-con'>
        <div style={{backgroundImage: `url(${backgroundPic})`}} className='content-container'>
          {contentId.map((content, i) => (
            <div key={i} className='cont-m-con'>
              <div className='img-con'>
                <img src={content.imageUrls[0]} className='content-pic' alt='content'/>
              </div>
              <div className='bot-half'>
                <div className='pp-buttons'>
                  <div className='pp-username'>
                    <div className='imgCropper'>
                      <img src={content.userimage} className='avatar' alt='avatar'/>
                    </div>
                    <p className='username'>{content.username}</p>
                  </div>
                  <div className='buttons'>

                    <AiOutlineHeart/>
                    <BiComment/>
                    <RiShareForwardLine/>
                  </div>
                </div>
                <div className='description'>
                  <p className='p-des'>{content.comment}</p>
                </div>
              </div>
            </div>
          ))}
          {/* <img src={backgroundPic} className='backgroundpic'/> */}
          {/* <img src={Pic} className='content-pic'/>
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
          </div> */}
        </div>
    </div>
  )
}

export default Content