import React from 'react'
import '../../style/matches.css'
import { Container, Row, Col } from 'react-bootstrap'
import {AiFillYoutube} from 'react-icons/ai'
import {FiTwitch} from 'react-icons/fi'
import MatchesLogo from '../../data/MatchesLogoTeam'
import { Link } from 'react-router-dom'


const Matches = () => {
  return (
    <Container>
        <Row>
            <Col>
            <section className='match-section section-bg'>
                <h1 className='match-title'>
                    SCHEDULE <span className='span'>TEAMS</span>
                </h1>
                </section>

                <div className='match'>
                    <div className='match-header'>
                        <div className='match-status'>Upcoming</div>
                        <div className='match-tournament'>
                            <a href='https://www.gosugamers.net/dota2/tournaments/55051-esea-league'>
                            <img src={MatchesLogo.ESLLeagueLogo} alt='' />
                            ESEA LEAGUE
                            {/* <img src={MatchesLogo.DefaultLogoDota} alt='' /> */}
                            </a>
                        </div>
                        <div className='match-actions'>
                            <button className='match-icons'>
                                <a href='https://www.youtube.com/@TeamM11ESports/streams    '>
                                    <AiFillYoutube />
                                </a>
                            </button>
                            <button className='match-icons'>
                                <a href='https://www.gosugamers.net/dota2/streams/365885-yuhengtv'>
                                    <FiTwitch />
                                </a>
                            </button>
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
                                        25 DECEMBER 2022 <br></br> 
                                        <strong>08:00 CET</strong>
                                    </div>
                                    <div className='match-score'>
                                        <span className='match-score-number'> 0 </span>
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
                                    <h2 className='team-name'>Outlast</h2>
                                </div>
                            </div>
                            <button className='match-live-streams'>
                                <a href='https://www.youtube.com/@TeamM11ESports/streams' target='__blank'>
                                    <AiFillYoutube />
                                </a>
                            </button>
                        </div>
                    </div>

                <div className='match'>
                    <div className='match-header'>
                        <div className='match-status'>Upcoming</div>
                        <div className='match-tournament'>
                            <a href='https://www.gosugamers.net/dota2/tournaments/55375-top-egaming'>
                            <img src={MatchesLogo.DefaultLogoDota} alt='' />
                            TOP EGAMING
                            {/* <img src={MatchesLogo.DefaultLogoDota} alt='' /> */}
                            </a>
                        </div>
                        <div className='match-actions'>
                            <button className='match-icons'>
                                <a href='https://www.youtube.com/@TeamM11ESports/streams    '>
                                    <AiFillYoutube />
                                </a>
                            </button>
                            <button className='match-icons'>
                                <a href='https://www.gosugamers.net/dota2/streams/365885-yuhengtv'>
                                    <FiTwitch />
                                </a>
                            </button>
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
                                        27 DECEMBER 2022 <br></br> 
                                        <strong>05:00 CET</strong>
                                    </div>
                                    <div className='match-score'>
                                        <span className='match-score-number'> 0 </span>
                                        <span className='match-score-divide'> : </span>
                                        <span className='match-score-number'> 0 </span>
                                    </div>
                                </div>
                            </div>
                            <div className='match-column'>
                                <div className='matches-team team--away'>
                                    <div className='match-logo-team'>
                                        <img src={MatchesLogo.SpawnLogo} alt='' />
                                    </div>
                                    <h2 className='team-name'>496Gaming</h2>
                                </div>
                            </div>
                            <button className='match-live-streams'>
                                <a href='https://www.youtube.com/@TeamM11ESports/streams' target='__blank'>
                                    <AiFillYoutube />
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className='match'>
                    <div className='match-header'>
                        <div className='match-status'>UpComing</div>
                        <div className='match-tournament'>
                            <a href='https://www.gosugamers.net/dota2/tournaments/55375-top-egaming'>
                            <img src={MatchesLogo.DefaultLogoDota} alt='' />
                            TOP EGAMING
                            {/* <img src={MatchesLogo.DefaultLogoDota} alt='' /> */}
                            </a>
                        </div>
                        <div className='match-actions'>
                            <button className='match-icons'>
                                <a href='https://www.youtube.com/@TeamM11ESports/streams    '>
                                    <AiFillYoutube />
                                </a>
                            </button>
                            <button className='match-icons'>
                                <a href='https://www.gosugamers.net/dota2/streams/365885-yuhengtv'>
                                    <FiTwitch />
                                </a>
                            </button>
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
                                        5 JANUARY 2023 <br></br> 
                                        <strong>07:00 CET</strong>
                                    </div>
                                    <div className='match-score'>
                                        <span className='match-score-number'> 0 </span>
                                        <span className='match-score-divide'> : </span>
                                        <span className='match-score-number'> 0 </span>
                                    </div>
                                </div>
                            </div>
                            <div className='match-column'>
                                <div className='matches-team team--away'>
                                    <div className='match-logo-team'>
                                        <img src={MatchesLogo.XersiaLogo} alt='' />
                                    </div>
                                    <h2 className='team-name'>XERXIA</h2>
                                </div>
                            </div>
                            <button className='match-live-streams'>
                                <a href='https://www.youtube.com/@TeamM11ESports/streams' target='__blank'>
                                    <AiFillYoutube />
                                </a>
                            </button>
                        </div>
                    </div>
                    

                                
                    
                    <button className='all-schedule-btn btn-primary'>
                        <Link to='/schedule'>
                            VIEW ALL SCHEDULE
                        </Link>
                </button>
                
            </Col>
        </Row>
    </Container>
    
  )
}

export default Matches
