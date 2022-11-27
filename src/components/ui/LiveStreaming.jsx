import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import '../../style/livestreaming.css'
import imageData from '../../data/imageData'
import Match from './Match'

const LiveStreaming = () => {
  return (
    
    <section className='section live-match' id='live'>
        <Match />
        <Container>
            <Row>
                
                    <h2 className='section-title section-bg'>
                        Watch Live <span className='span'>Match</span>
                    </h2>
                    <figure className='live-match-banner img-holder' style={{width: '800', height: '470'}}>
                        <img src= {imageData.LiveMatchBanner} style={{width: '800', height: '470', }} className='img-live-cover' alt='Live Match Video' />
                    </figure>
                    
<<<<<<< HEAD
                    
                </Col>
            
=======
                    <Match />
               

>>>>>>> f0b1fc8e3225a4b94a95c433564aceb68d08e072
                
            </Row>
        </Container>
    </section>
  )
}

export default LiveStreaming