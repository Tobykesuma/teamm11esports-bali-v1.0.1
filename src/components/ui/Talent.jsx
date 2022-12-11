import React from 'react'
import '../../style/talent.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {MdLink} from 'react-icons/md'
import ImageDataImage from '../../data/imageData'


const Talent = () => {
  return (
    <section className='section section-talent' id='talent'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h2 className='section-title section-bg'>
                        Talent <span className='span'>Members</span> 
                    </h2>
                    <ul className='talent-list'>
                        <li>
                            <Link to='/teams/dota-2/talent/ramz' className='talent-member'>
                                <div className='talent-member-card'>
                                    <img src={ImageDataImage.Talent01} alt='talent-member-image' />
                                </div>
                                <MdLink className='icons-talent-link' />
                            </Link>
                        </li>

                        <li>
                            <Link to='/teams/dota-2/talent/ifrit' className='talent-member'>
                                <div className='talent-member-card'>
                                    <img src={ImageDataImage.Talent01} alt='talent-member-image' />
                                </div>
                                <MdLink className='icons-talent-link' />
                            </Link>
                        </li>

                        <li>
                            <Link to='/teams/dota-2/talent/bfl' className='talent-member'>
                                <div className='talent-member-card'>
                                    <img src={ImageDataImage.Talent01} alt='talent-member-image' />
                                </div>
                                <MdLink className='icons-talent-link' />
                            </Link>
                        </li>

                        <li>
                            <Link to='/teams/dota-2/talent/vinz' className='talent-member'>
                                <div className='talent-member-card'>
                                    <img src={ImageDataImage.Talent01} alt='talent-member-image' />
                                </div>
                                <MdLink className='icons-talent-link' />
                            </Link>
                        </li>

                        <li>
                            <Link to='/teams/dota-2/talent/juju' className='talent-member'>
                                <div className='talent-member-card'>
                                    <img src={ImageDataImage.Talent01} alt='talent-member-image' />
                                </div>
                                <MdLink className='icons-talent-link' />
                            </Link>
                        </li>

                        <li>
                            <Link to='' className='talent-member'>
                                <div className='talent-member-card'>
                                    <img src={ImageDataImage.Talent01} alt='talent-member-image' />
                                </div>
                                <MdLink className='icons-talent-link' />
                            </Link>
                        </li>

                        <li>
                            <Link to='' className='talent-member'>
                                <div className='talent-member-card'>
                                    <img src={ImageDataImage.Talent01} alt='talent-member-image' />
                                </div>
                                <MdLink className='icons-talent-link' />
                            </Link>
                        </li>

                        <li>
                            <Link to='' className='talent-member'>
                                <div className='talent-member-card'>
                                    <img src={ImageDataImage.Talent01} alt='talent-member-image' />
                                </div>
                                <MdLink className='icons-talent-link' />
                            </Link>
                        </li>

                        <li>
                            <Link to='' className='talent-member'>
                                <div className='talent-member-card'>
                                    <img src={ImageDataImage.Talent01} alt='talent-member-image' />
                                </div>
                                <MdLink className='icons-talent-link' />
                            </Link>
                        </li>

                        <li>
                            <Link to='' className='talent-member'>
                                <div className='talent-member-card'>
                                    <img src={ImageDataImage.Talent01} alt='talent-member-image' />
                                </div>
                                <MdLink className='icons-talent-link' />
                            </Link>
                        </li>
                    </ul>

                    {/* Buttons */}
                    <button className='btn-talent btn-primary'>
                    <Link to='/talent'>
                    View all members
                    </Link>    
                    </button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Talent