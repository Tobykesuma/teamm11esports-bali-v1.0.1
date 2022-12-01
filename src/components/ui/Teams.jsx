import React from 'react'
import '../../style/teams.css'
import { 
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import imageData from '../../data/imageData'
import { Link } from 'react-router-dom'


const Teams = () => {
  return (
    <section className='section section-teams' id='teams'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h2 className='section-title section-bg'>
                        OUR <span className='span'>TEAMS</span>
                    </h2>
                    <p className='section-subtext'>
                        The Team M11 Esports Founders wanted to create something different. A trust based group of people where everyone would have a voice. And it didn't take long for them to start making history. We maybe skilled, but the true strength of Team M11 is its people.
                    </p>

                    <ul className='has-scrollbar'>
                        <li className='scrollbar-item'>
                            <div className='teams-game-card'>
                                <div className='card-banner' style={{width: 250, height: 400}}>
                                    <Link to='/teams/dota-2'>
                                    <img src={imageData.Dota2Bg} style={{width: 250, height: 400}} className='img-holder img-cover game-imagebg'/>
                                    </Link>
                                    
                                </div>

                                <div className='card-content'>
                                    <h3 className='card-content-title'>
                                        <Link to='/teams/dota-2'>
                                            DOTA 2
                                        </Link>
                                    </h3>
                                </div>
                                {/* <div className='card-content'>
                                    <h3>
                                    <Link to='/teams/dota-2' className='card-content-title'>DOTA 2</Link>
                                    </h3>
                                

                                    <span className='card-meta'>
                                        <span className='span'>
                                            DOTA 2
                                        </span>
                                    </span>
                                </div>

                                <div className='card-content-overlay'>
                                    <img src={imageData.Dota2Logo} style={{width: 70}}className='card-icon' />
                                    <h3>
                                        <Link to='/' className='card-content-title'>
                                           DOTA 2 
                                        </Link>
                                    </h3>
                                </div> */}

                            </div>
                        </li>

                        <li className='scrollbar-item'>
                            <div className='teams-game-card'>
                                <div className='card-banner' style={{width: 250, height: 400}}>
                                    <Link to='/teams/pubgm'>
                                    <img src={imageData.PUBGMBg } style={{width: 250, height: 400}} className='img-holder img-cover game-imagebg'/>
                                    </Link>
                                    
                                </div>

                                <div className='card-content'>
                                    <h3 className='card-content-title'>
                                        <Link to='/teams/pubgm'>
                                            PUBG MOBILE
                                        </Link>
                                    </h3>
                                </div>
                                {/* <div className='card-content'>
                                    <h3>
                                    <Link to='/teams/dota-2' className='card-content-title'>PUBG Mobile</Link>
                                    </h3>

                                    <span className='card-meta'>
                                        <span className='span'>
                                            DOTA 2
                                        </span>
                                    </span>
                                </div>

                                <div className='card-content-overlay'>
                                    <img src={imageData.Dota2Logo} style={{width: 70}} className='card-icon' />
                                    <h3>
                                        <Link to='/' className='card-content-title'>
                                           DOTA 2 
                                        </Link>
                                    </h3>
                                </div> */}

                            </div>
                        </li>

                        <li className='scrollbar-item'>
                            <div className='teams-game-card'>
                                <div className='card-banner' style={{width: 250, height: 400}}>
                                    <Link to='/teams/mobile-legend'>
                                    <img src={imageData.MLBBBg} style={{width: 250, height: 400}} className='img-holder img-cover game-imagebg'/>
                                    </Link>
                                    
                                </div>

                                <div className='card-content'>
                                    <h3 className='card-content-title'>
                                        <Link to='/teams/mobile-legend'>
                                            MLBB
                                        </Link>
                                    </h3>
                                </div>
                                {/* <div className='card-content'>
                                    <h3>
                                    <Link to='/teams/dota-2' className='card-content-title'>Dota 2</Link>
                                    </h3>

                                    <span className='card-meta'>
                                        <span className='span'>
                                            DOTA 2
                                        </span>
                                    </span>
                                </div>

                                <div className='card-content-overlay'>
                                    <img src={imageData.Dota2Logo} style={{width: 70}} className='card-icon' />
                                    <h3>
                                        <Link to='/' className='card-content-title'>
                                           DOTA 2 
                                        </Link>
                                    </h3>
                                </div> */}

                            </div>
                        </li>

                        <li className='scrollbar-item'>
                            <div className='teams-game-card'>
                                <div className='card-banner' style={{width: 250, height: 400}}>
                                    <Link to='/teams/valorant'>
                                    <img src={imageData.ValorantBg} style={{width: 250, height: 400}} className='img-holder img-cover game-imagebg'/>
                                    </Link>
                                    
                                </div>

                                <div className='card-content'>
                                    <h3 className='card-content-title'>
                                        <Link to='/teams/valorant'>
                                            VALORANT
                                        </Link>
                                    </h3>
                                </div>
                                {/* <div className='card-content'>
                                    <h3>
                                    <Link to='/teams/dota-2' className='card-content-title'>Dota 2</Link>
                                    </h3>

                                    <span className='card-meta'>
                                        <span className='span'>
                                            DOTA 2
                                        </span>
                                    </span>
                                </div> */}

                                {/* <div className='card-content-overlay'>
                                    <img src={imageData.Dota2Logo} style={{width: 70}} className='card-icon' />
                                    <h3>
                                        <Link to='/' className='card-content-title'>
                                           DOTA 2 
                                        </Link>
                                    </h3>
                                </div> */}

                            </div>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Teams