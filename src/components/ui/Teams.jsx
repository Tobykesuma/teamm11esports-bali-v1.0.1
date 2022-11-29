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
                <Col>
                    <h2 className='section-title section-bg'>
                        OUR <span className='span'>TEAMS</span>
                    </h2>
                    <p className='section-subtext'>
                        The Team M11 Esports Founders wanted to create something different. A trust based group of people where everyone would have a voice. And it didn't take long for them to start making history. We maybe skilled, but the true strength of Team M11 is its people.
                    </p>

                    <div className='teams-card'>
                        <div className='teams-item card-banner' style={{width: 300, height: 400}}>
                            <img src={imageData.Dota2Bg} alt='' className='w-100 teams-card-image img-cover' style={{width: 300, height: 400}} />
                        </div>
                        <div className='teams-card-content'>
                            <h3 className='teams-title-game'>
                                <Link to='/teams/dota-2' className='card-title-name'>DOTA 2</Link>
                            </h3>
                            <div className='card-content-overlay'>
                                <img src={imageData.Dota2Logo} alt='' style={{width: 60, height: 61}} className='card-logo-image' />
                            </div>
                            <span className='card-meta'>
                                <span className='span'>Dota 2</span>
                            </span>
                        </div>
                    </div>

                    <div className='teams-card'>
                        <div className='teams-item card-banner' style={{width: 300, height: 400}}>
                            <img src={imageData.Dota2Bg} alt='' className='w-100 teams-card-image img-cover' style={{width: 300, height: 400}} />
                        </div>
                        <div className='teams-card-content'>
                            <h3 className='teams-title-game'>
                                <Link to='/teams/dota-2' className='card-title-name'>DOTA 2</Link>
                            </h3>
                            <div className='card-content-overlay'>
                                <img src={imageData.Dota2Logo} alt='' style={{width: 60, height: 61}} className='card-logo-image' />
                            </div>
                            <span className='card-meta'>
                                <span className='span'>Dota 2</span>
                            </span>
                        </div>
                    </div>
                    

                    <div className='teams-card'>
                        <div className='teams-item card-banner' style={{width: 300, height: 400}}>
                            <img src={imageData.Dota2Bg} alt='' className='w-100 teams-card-image img-cover' style={{width: 300, height: 400}} />
                        </div>
                        <div className='teams-card-content'>
                            <h3 className='teams-title-game'>
                                <Link to='/teams/dota-2' className='card-title-name'>DOTA 2</Link>
                            </h3>
                            <div className='card-content-overlay'>
                                <img src={imageData.Dota2Logo} alt='' style={{width: 60, height: 61}} className='card-logo-image' />
                            </div>
                            <span className='card-meta'>
                                <span className='span'>Dota 2</span>
                            </span>
                        </div>
                    </div>
                    

                    <div className='teams-card'>
                        <div className='teams-item card-banner' style={{width: 300, height: 400}}>
                            <img src={imageData.Dota2Bg} alt='' className='w-100 teams-card-image img-cover' style={{width: 300, height: 400}} />
                        </div>
                        <div className='teams-card-content'>
                            <h3 className='teams-title-game'>
                                <Link to='/teams/dota-2' className='card-title-name'>DOTA 2</Link>
                            </h3>
                            <div className='card-content-overlay'>
                                <img src={imageData.Dota2Logo} alt='' style={{width: 60, height: 61}} className='card-logo-image' />
                            </div>
                            <span className='card-meta'>
                                <span className='span'>Dota 2</span>
                            </span>
                        </div>
                    </div>
                    

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Teams