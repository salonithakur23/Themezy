import React from 'react'
import './End.css'
import { Container,Row,Col } from 'react-bootstrap'
import {MainNuncFunction} from './utill'
import {MainCras} from './utill'

const EndParent = (props) => {
    const{
        mainHeade,mainHeade2
    }=props.DoneArray
  return (
    <>
    <Container>
        <Row>
            <Col sm={6}>
                <p className='mainheadtext'>{mainHeade}</p>
                {MainNuncFunction}
            </Col>
            <Col sm={6}>
                
                <p className='mainheadtext'>{mainHeade2}</p>
                {MainCras}
                <hr />
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default EndParent