import React from 'react'
import '../../style/matches.css'
import { Container, Row, Col } from 'react-bootstrap'
import {AiFillYoutube} from 'react-icons/ai'
import {FiTwitch} from 'react-icons/fi'
import MatchesLogo from '../../data/MatchesLogoTeam'

const Matches = () => {
  return (
    <Container>
        <Row>
            <Col>
              
                <div className='match'>
                    <div className='match-header'>
                        <div className='match-status'>Upcoming</div>
                        <div className='match-tournament'>
                            <a href='https://www.gosugamers.net/dota2/tournaments/55051-esea-league'>
                            {/* <img src={} alt='' /> */}
                            ESEA LEAGUE
                            </a>
                        </div>
                        <div className='match-actions'>
                            <button className='match-icons'>
                                <a href='https://www.youtube.com/@TeamM11ESports/streams    '>
                                    <AiFillYoutube />
                                </a>
                                <a href='/'>
                                    <FiTwitch />
                                </a>
                            </button>
                        </div>

                        <div className='match-content'>
                            <div className='match-column'>
                                <div className='matches-team team--home'>
                                    <div className='match-logo-team'>
                                        <img src={MatchesLogo.HomeLogo} alt='' />
                                    </div>
                                    <h2 className='team-name'>Team M11</h2>
                                </div>
                            </div>
                            <div className='match-column'>
                                <div className='match-details'>
                                    <div className='match-date'>
                                        19 December 2022 <br></br> 
                                        <strong>08:00 CEST</strong>
                                    </div>
                                    <div className='match-score'>
                                        <span className='match-score-number match-score-number--leading'> 0 </span>
                                        <span className='match-score-divide'> : </span>
                                        <span className='match-score-number'> 0 </span>
                                    </div>
                                </div>
                            </div>
                            <div className='match-column'>
                                <div className='matches-team team--away'>
                                    <div className='match-logo-team'>
                                        <img src={MatchesLogo.DefaultLogoDota} alt='' />
                                    </div>
                                    <h2 className='team-name'>Team Outlast</h2>
                                </div>
                            </div>
                            <button className='match-live-streams'>
                                <a href='https://www.youtube.com/@TeamM11ESports/streams' target='__blank'>
                                    <AiFillYoutube>
                                    YouTube
                                    </AiFillYoutube>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='match'>
                    <div className='match-header'>
                        <div className='match-status'>Upcoming</div>
                        <div className='match-tournament'>
                            <a href='https://www.gosugamers.net/dota2/tournaments/55051-esea-league'>
                            {/* <img src={} alt='' /> */}
                            ESEA LEAGUE
                            </a>
                        </div>
                        <div className='match-actions'>
                            <div className='match-icons'>
                                <a href='https://www.youtube.com/@TeamM11ESports/streams'>
                                    <AiFillYoutube />
                                </a>
                                <a href='/'>
                                    <FiTwitch />
                                </a>
                            </div>
                        </div>

                        <div className='match-content'>
                            <div className='match-column'>
                                <div className='matches-team team--home'>
                                    <div className='match-logo-team'>
                                        <img src={MatchesLogo.HomeLogo} alt='' />
                                    </div>
                                    <h2 className='team-name'>Team M11</h2>
                                </div>
                            </div>
                            <div className='match-column'>
                                <div className='match-details'>
                                    <div className='match-date'>
                                        19 December 2022 <br></br> 
                                        <strong>10:00 CEST</strong>
                                    </div>
                                    <div className='match-score'>
                                        <span className='match-score-number match-score-number--leading'> 0 </span>
                                        <span className='match-score-divide'> : </span>
                                        <span className='match-score-number'> 0 </span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='match-column'>
                                <div className='matches-team team--away'>
                                    <div className='match-logo-team'>
                                        <img src={MatchesLogo.ReaperLogo} alt='' />
                                    </div>
                                    <h2 className='team-name'>Reaper</h2>
                                </div>
                              
                            </div>
                            <button className='match-live-streams'>
                                <a href='https://www.youtube.com/@TeamM11ESports/streams' target='__blank'>
                                    <AiFillYoutube>
                                    YouTube
                                    </AiFillYoutube>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>



            </Col>
        </Row>
    </Container>
  )
}

export default Matches
