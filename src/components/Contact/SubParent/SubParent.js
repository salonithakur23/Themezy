import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './SubParent.css'
import {mainCompArray} from './utill'

const SubParent = (props) => {
    const{
        text,text2
    }=props.addArray
  return (
    <>
    <Container>
        <Row>
            <Col sm-3>
                <p className='bluetext2'>{text}</p>
                <p>{mainCompArray}</p>

            </Col>
            <Col sm-3>
                <p className='bluetext22'>{text2}</p>
                <input className='inpt' placeholder='Your Name' />
                <input className='inpt' placeholder='Company Name' />
                <input className='inpt' placeholder='Email' />

            </Col>
            <Col sm-6>
            <textarea className='textarea' ></textarea>
            <button className='btnn'>send messages   </button >
            </Col>
            {/* name="w3review" rows="7" cols="60" */}
            <br />
            <br />
            <hr  className='tagline'/>
        </Row>
    </Container>
    
    </>
  )
}

export default SubParent