import React from 'react'
import './News.css'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {categoriMain} from './utill'
import { catMain } from './utill'

const NewsMain = (props) => {
     const{
        mainText,pic,text,btn,picture,
        picture2,paratext,paratext2, mainText2,
        subtext2
     }=props.MarvalsArray
  return (
    <>

    <Container>
        <Row>
            <Col sm-10>
            <p className='mainText'>{mainText}</p>
            <div className="picBox"><img className="pics" src={pic} /></div>
            <p className='text2'>{text}</p>
           <Link to="/"> <button className='blubtn'>{btn}</button></Link>
           <hr className='lintTag' />

           <p className='mainText'>{mainText}</p>
            <div className="picBox"><img className="pics" src={picture} /></div>
            <p className='text2'>{text}</p>
           <Link to="/"> <button className='blubtn'>{btn}</button></Link>
           <hr className='lintTag' />

           <p className='mainText'>{mainText}</p>
            <div className="picBox"><img className="pics" src={picture2} /></div>
            <p className='text2'>{text}</p>
           <Link to="/"> <button className='blubtn'>{btn}</button></Link>
           <hr className='lineTag' />
           
            </Col>



            <Col sm-2>
                <p className='paratext'>{paratext}</p>
                {categoriMain}
              
                {catMain}
                <p className='blue2'>{paratext2}</p>
                <p className='repal'>{ mainText2}</p>
                <p className='gray'>{subtext2}</p>
            </Col>
        
       <div className='display'>
       <Link to="/news"><button className='oldest'>Oldest posts</button></Link>
            <Link to="/news"><button  className='oldest2'>New Post</button></Link>
       </div>
  


        </Row>
    </Container>
    </>
  )
}

export default NewsMain