import React from 'react'
import './MainParent.css'
import { Container,Row,Col } from 'react-bootstrap'

const MainPArent = () => {
  return (
<>
<Container>
    <Row>
        <Col sm-12>
        <div className="mainParent">
        <iframe className='setWidth' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.196060779947!2d78.77054666508712!3d28.83302233233912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbc0611edfe1%3A0xa8422c0a52f2e022!2sKothiwal%20Nagar%2C%20Shankar%20Nagar%2C%20Malviya%20Nagar%2C%20Budh%20Bazaar%2C%20Moradabad%2C%20Uttar%20Pradesh%20244001!5e0!3m2!1sen!2sin!4v1671620767347!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <p></p>
        </Col>
    </Row>
</Container>

</>
  )
}

export default MainPArent