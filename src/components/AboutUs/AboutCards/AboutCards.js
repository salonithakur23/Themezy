import React from 'react'
import './AboutCards.css'
import { Container,Row,Col } from 'react-bootstrap'
import {Mainprofile} from './utill'

const AboutCards = () => {
  return (
   <>
   <Container fluid className='main-container' >
    <Row>
     {Mainprofile}
    </Row>
   </Container>
   
   </>
  )
}

export default AboutCards