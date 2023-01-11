import React from 'react'
import './SubService.css'
import { Container,Row,Col } from 'react-bootstrap'
import {subMainServ} from './utill'

const SubService = () => {
  return (
    <>
    <Container className='up'>
        <Row>
          

          { subMainServ}
        </Row>
    </Container>
    </>
  )
}

export default SubService