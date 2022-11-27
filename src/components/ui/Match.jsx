import React, { lazy } from 'react'
import { 
    Container,
    Row,
    Col,
 } from 'reactstrap'
import imageData from '../../data/imageData'
import '../../style/match.css'



const Match = () => {
  return (
    <Container>
      <Row>
<<<<<<< HEAD
        <Col lg='6' md='6'>
          <div className='live-match-teams'>
            <figure className='match-team match-1 img-holder' style={{width: '406', height:'277'}}>
              <img src={imageData.MainLogo} width={406} height={277} alt='' className='w-100' />
            </figure>
          </div>
=======
        <Col>
        <div className='live-match-teams'>
          <figure className='match-team match-1 img-holder' style={{width: '406', height:'277'}}>
            <img src={imageData.MainLogo} width={406} height={277} alt='' className='w-100' />
          </figure>
        </div>
>>>>>>> f0b1fc8e3225a4b94a95c433564aceb68d08e072
        </Col>
      </Row>
    </Container>
  )
}

export default Match