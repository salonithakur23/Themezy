import React from 'react'
import './CardService.css'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { mainStandredFun } from './utill'
import {mainCaFunction} from'./utill'
import {mainCaFunction2} from'./utill'
import {mainCaFunction3} from'./utill'
import {mainCaFunction4} from'./utill'

const CardService = () => {
  return (
    <>
    <Container className='Standred2'>
        <Row>

        <hr />
            <Col sm-3>
              <Card className='Card'>
              {mainCaFunction}
              {mainStandredFun}
              </Card>
            
            </Col>
            <Col sm-3>
            <Card>
              {mainCaFunction2}
              {mainStandredFun}
              </Card>
            
            </Col>
            <Col sm-3>
            <Card>
              {mainCaFunction3}
              {mainStandredFun}
              </Card>
            
            </Col>
            <Col sm-3>
            <Card>
              {mainCaFunction4}
              {mainStandredFun}
              </Card>
            
            </Col>
           
          
        </Row>
        <hr />
        <br />
    </Container>
    
    </>
  )
}

export default CardService