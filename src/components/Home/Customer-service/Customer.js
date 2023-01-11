import React from 'react'
import './Customer.css'
import { Link } from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap'
import {mainSericeFun} from './utill'

function Customer(props) {
  const{
    pic,btnText
  }=props.serviceCard
  return (
    <>
    <Container className='customer'>
        <Row>
            <Col sm-4>
              <div className='iconsPlace'>
                <img className='IconsPlace' src={pic} />
                </div>
              {mainSericeFun}
             <Link to="/moreinfo"> 
             <button className='btnMoreinfo'>{btnText}</button>
             </Link>
            </Col>

            <Col sm-4>
              <div className='iconsPlace'>
                <img className='IconsPlace' src={pic} />
                </div>
              {mainSericeFun}
              <Link to="/moreinfo"> 
             <button className='btnMoreinfo'>{btnText}</button>
             </Link>
            </Col>

            <Col sm-4>
              <div className='iconsPlace'>
                <img className='IconsPlace' src={pic} />
                </div>
              {mainSericeFun}
              <Link to="/moreinfo"> 
             <button className='btnMoreinfo'>{btnText}</button>
             </Link>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Customer