import React, { useEffect,useState } from 'react'
import backgroundPic from '../assets/BP.png'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md'
import contentId from '../content.json';
import { getContent } from '../actions/content';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import QR from '../assets/qr-code.png'
import AppStoreModal from '../components/AppStoreModal'



function Content(props) {
  const dispatch = useDispatch()
  const contentPost = useSelector(s => s.userContent)
  const [modalShow, setModalShow] = useState();

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
                    <Button variant="primary" onClick={() => setModalShow(true)} style={{outline:'none', border:'none', boxShadow:'none', backgroundColor:'transparent', padding:'0', margin:'0'}}>
                      <AiOutlineHeart style={{color: 'black'}}/>
                    </Button>
                    <Button variant="primary" onClick={() => setModalShow(true)} style={{outline:'none', border:'none', boxShadow:'none', backgroundColor:'transparent', padding:'0', margin:'0'}}>
                      <BiComment style={{color: 'black'}}/>
                    </Button>
                    <Button variant="primary" onClick={() => setModalShow(true)} style={{outline:'none', border:'none', boxShadow:'none', backgroundColor:'transparent', padding:'0', margin:'0'}}>
                      <RiShareForwardLine style={{color: 'black'}}/>
                    </Button>
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
        <AppStoreModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </div>
  )
}

export default Content