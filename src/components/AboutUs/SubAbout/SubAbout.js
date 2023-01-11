import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Internal } from './utill'
import './SubAbout.css'

const SubAbout = (props) => {
    const {
        img, mainhead, subhead, subhead2, img2
    } = props.mainInterArray
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm-9>
                        <Row>
                            <Col sm-4>
                                <div className='img-box'>
                                    <img className='img-Box' src={img} />
                                </div>
                            </Col>
                            <Col sm-8>
                                <p className='bluecolor'>{mainhead}</p>
                                <p className='gracy'>{subhead}</p>
                                <p className='gracy'>{subhead2}</p></Col>
                        </Row>
                        <Row>
                            <Col sm-4>
                                <div className='img-box'>
                                    <img className='img-Box' src={img} />
                                </div>
                            </Col>
                            <Col sm-8>
                                <p className='bluecolor'>{mainhead}</p>
                                <p className='gracy'>{subhead}</p>
                                <p className='gracy'>{subhead2}</p></Col>
                        </Row>
                    </Col>
                    <Col sm-3>
                        <Card className='MAin-CardBody'>
                            {Internal}
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default SubAbout