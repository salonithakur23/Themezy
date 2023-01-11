import React from 'react'
import './About.css'
import { Container,Row,Col } from 'react-bootstrap'


const AboutBanner = (props) => {
    const{
        mainhead,subhead
    }=props.NullaArray 
  return (
  <>
  <Container>
    <Row>
        <Col sm-12>
            <p className='main-parent'>{mainhead}</p>
            <p className='sub-parent'>{subhead}</p>
        </Col>
    </Row>
  </Container>
  
  
  </>
  )
}

export default AboutBanner