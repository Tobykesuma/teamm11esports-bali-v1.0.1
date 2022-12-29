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
                    <h2 className='section-title2 section-bg'>
                        OUR <span className='span'>TEAMS</span>
                    </h2>
                    <p className='section-subtext2'>
                        The Team M11 Esports Founders wanted to create something different. A trust based group of people where everyone would have a voice. And it didn't take long for them to start making history. We maybe skilled, but the true strength of Team M11 is its people.
                    </p>

                    <ul className='has-scrollbar'>
                        <li className='scrollbar-item'>
                            <div className='featured-game-card'>
                                <figure className='card-banner img-holder' style={{ width: '400px', height: '550px'}}>
                                <Link to='/teams/dota-2'>
                                    <img src={imageData.Dota2Bg} alt='feature-game' className='img-cover' style={{ width: '400px', height: '550px'}} loading='lazy' />
                                </Link>
                                </figure>

                                <div className='card-content'>
                                    <h3 className='card-content-text'>
                                        <Link to='/teams/dota-2'>
                                            DOTA 2
                                        </Link>
                                    </h3>

                                    <div className='card-content-overlay'>
                                        <img src={imageData.Dota2Logo} style={{ width: '50px', height: '50px'}} loading='lazy' alt='' className='card-icon' />

                                        <h3 className='card-content-text'>
                                            <Link to='/teams/dota-2'>DOTA 2</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </li>

                       <li className='scrollbar-item'>
                            <div className='featured-game-card'>
                                <figure className='card-banner img-holder' style={{ width: '400px', height: '550px'}}>
                                <Link to='/teams/pubgm'>
                                    <img src={imageData.PUBGMBg} alt='feature-game' className='img-cover' style={{ width: '400px', height: '550px'}} loading='lazy' />
                                </Link>
                                </figure>

                                <div className='card-content'>
                                    <h3 className='card-content-text'>
                                        <Link to='/teams/pubgm'>
                                            PUBG MOBILE
                                        </Link>
                                    </h3>

                                    <div className='card-content-overlay'>
                                        <img src={imageData.Dota2Logo} style={{ width: '50px', height: '50px'}} loading='lazy' alt='' className='card-icon' />

                                        <h3 className='card-content-text'>
                                            <Link to='/teams/pubgm'>PUBG MOBILE</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className='scrollbar-item'>
                            <div className='featured-game-card'>
                                <figure className='card-banner img-holder' style={{ width: '400px', height: '550px'}}>
                                    <Link to='/teams/mobile-legend'>
                                        <img src={imageData.MLBBBg} alt='feature-game' className='img-cover' style={{ width: '400px', height: '550px'}} loading='lazy' />
                                    </Link>
                                </figure>

                                <div className='card-content'>
                                    <h3 className='card-content-text'>
                                        <Link to='/teams/mobile-legend'>
                                            MLBB
                                        </Link>
                                    </h3>

                                    <div className='card-content-overlay'>
                                        <img src={imageData.Dota2Logo} style={{ width: '50px', height: '50px'}} loading='lazy' alt='' className='card-icon' />

                                        <h3 className='card-content-text'>
                                            <Link to='/teams/mobile-legend'>MLBB</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className='scrollbar-item'>
                            <div className='featured-game-card'>
                                <figure className='card-banner img-holder' style={{ width: '400px', height: '550px'}}>
                                    <Link to='/teams/valorant'>
                                        <img src={imageData.ValorantBg} alt='feature-game' className='img-cover img-gradient-teams' style={{ width: '400px', height: '550px'}} loading='lazy' />
                                    </Link>
                                </figure>

                                <div className='card-content'>
                                    <h3 className='card-content-text'>
                                        <Link to='/teams/valorant'>
                                            VALORANT
                                        </Link>
                                    </h3>

                                    <div className='card-content-overlay'>
                                        <img src={imageData.Dota2Logo} style={{ width: '50px', height: '50px'}} loading='lazy' alt='' className='card-icon' />

                                        <h3 className='card-content-text'>
                                            <Link to='/teams/valorant'>VALORANT</Link>
                                        </h3>
                                    </div>
                                </div>
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