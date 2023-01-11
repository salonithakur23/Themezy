import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import './MainService.css'
import {serveMain} from './utill'

const Mainservice = () => {
  return (
    <>
    <Container>
        <Row>
            <Col sm-12>
                {serveMain}
            </Col>
        </Row>
    </Container>
    
    
    </>
  )
}

export default Mainservice