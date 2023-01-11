import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import './Banner.css'

const Banner = (props) => {
    const {
        MainTitle, subTitle, paraText, text,subTitle2, 
         paraText2, MainTitle3,  subTitle3,  paraText3
     
    } = props.BannerText
    return (
        <>
            <Container  fluid >

                <Row className='containers'>
                    <Col sm={8} className='slider-row'>

                        <Carousel slide={false} className="slider">
                            <Carousel.Item>
                                <p className='text'>{MainTitle}</p>
                                <p className='subtext'>{subTitle}</p>
                                <p className='pText'>{paraText}</p>
                            </Carousel.Item>

                            <Carousel.Item>
                                <p className='text'>{text}</p>
                                <p className='subtext'>{subTitle2}</p>
                                <p className='pText'>{paraText2}</p>
                            </Carousel.Item>

                            <Carousel.Item>
                                <p className='text'>{MainTitle3}</p>
                                <p className='subtext'>{subTitle3}</p>
                                <p className='pText'>{paraText3}</p>
                            </Carousel.Item>
                        </Carousel>
                        <Link to="/ReadMore">
                        <button className='button2'>Rede more</button>
                        </Link>
                    </Col>

                    <Col sm-={4}>
                        <div className='image-box'>
                            <img className='setImage-box' src='host.gif'/>
                        </div>
                     
                    </Col>
                </Row>
             
            </Container>
        </>
    )
}

export default Banner