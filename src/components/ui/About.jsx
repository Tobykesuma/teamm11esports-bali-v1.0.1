import React from 'react'
import '../../style/about.css'
import { 
    Container,
    Row,
    Col,
 } from 'reactstrap'


const About = () => {
  return (
    <section className='section section-about' id='about'>
        <Container>
            <Row>
                <Col>
                    <div className='section-bg-wrapper'>
                        <div className='about-banner'>
                            
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}



export default About