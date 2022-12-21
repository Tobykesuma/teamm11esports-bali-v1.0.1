import React from 'react'
import { 
    Container,
    Row,
    Col,
 } from 'reactstrap'
import imageData from '../../data/imageData'
import MatchesLogo from '../../data/MatchesLogoTeam'
import '../../style/match.css'


const Match = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className='live-match-teams'>
            <div className='match-teams teams-logo'>
              <img src={imageData.MainLogoBlack} className='w-100' alt='' style={{width: 406, height: 277}} />
              </div>
                <div className='live-match-details'>
                  <p className='live-match-subtext'>
                  Upcoming Live Matches
                  </p>
                  <h2 className='live-match-schedule'>23 DECEMBER 2022 </h2>
                  <h2 className='live-match-time'>
                    07:00 CET
                  </h2>
                </div>
                <div className='match-teams teams-logo-2' >
                  <img src={MatchesLogo.XersiaLogo} className='w-100' alt='' style={{width: 406, height: 277}} />
                </div>
                
            </div>

            
        </Col>
      </Row>
    </Container>
  )
}

export default Match