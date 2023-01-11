import React from 'react'
import './style.css'
import {BsFacebook}  from 'react-icons/bs'
import {GrPinterest} from 'react-icons/gr'
import {AiFillTwitterCircle, AiFillGooglePlusCircle} from 'react-icons/ai'
import { Container,Row,Col } from 'react-bootstrap'
import {footerArray} from './utill'

const footer = (props) => {
    const{
        pic,title,text
    } = props.TextFooter
  return (
<>


<Container fluid className="footer">
    <Row >
        <Col sm-6>
            <p className='logo'>{pic}</p>
            <p className='tag-line'>{title}</p>
            <p className='tag-line'>{text}</p>
        </Col>
        <Col sm-6>
        <div className='Link-Name'>{footerArray}</div>
        <ul className='index'>
            <li> <div className='icon-color'>  < BsFacebook /></div></li>
            <li> <div className='icon-color2'>  <AiFillTwitterCircle /></div></li>
            <li> <div className='icon-color2'>  <AiFillGooglePlusCircle /></div></li>
            <li> <div className='icon-color'>  <GrPinterest /></div></li>
        </ul>
  
    
        </Col>
    </Row>
</Container>
</>
  )
}

export default footer