
import Modal from 'react-bootstrap/Modal';
import React, {useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import QR from '../assets/qr-code.png'
import { MdOutlineClose } from 'react-icons/md'

function AppStoreModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
          <h4> Download naka</h4>
          <img src={QR} style={{height:'10rem', width:'10rem'}}/>
          <p>
            Scan QR code
          </p>
          <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
            <Button onClick={props.onHide} style={{display: 'flex', justifyingContent:'center', alignItems:'center', backgroundColor: 'grey', color:'black', border: 'none', borderRadius:'100rem'}}>
              <MdOutlineClose style={{color:'white'}}/>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  
export default AppStoreModal;