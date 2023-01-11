import React from 'react'
import './SafeHosting.css'
import { Container,Row,Col } from 'react-bootstrap'
import {mainSafeArray} from './utill'
import {mainEXportFun} from './utill'

const SafeHosting = (props) => {
    const{
        mainheading
    }=props.expactArrFun
  return (
   <>
   <Container className='main-Section'>
    <Row>
        <Col sm-6>
            {mainSafeArray}
        </Col>
        <Col sm-6>
           <p className='mainHead'> { mainheading}</p>
            {mainEXportFun}
        </Col>
    </Row>
   </Container>
    
   
   </>
  )
}

export default SafeHosting