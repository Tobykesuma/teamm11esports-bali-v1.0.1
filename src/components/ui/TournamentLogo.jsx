import React from 'react'
import '../../style/tournamentlogo.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import TournamentData from '../../data/TournamentData'

const TournamentLogo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        // autoplaySpeed: 3000,
        lazyLoad: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

  return (
    <section className='section section-tournament' id='tournament'>
        <Container>
            <Row>
                <Col>
                    {/* <h2 className='section-title section-bg'>
                        OUR <span className='span'>ACHIEVEMENTS</span>
                    </h2> */}

                    <Slider {...settings}>
                        <div className='brand-item'>
                            <img src={TournamentData.Tournament01} alt='' style={{width: 90}} className='w-100 tournament-logo-image' /> 
                            <h3 className='tournament-logo-title'>
                                ESL COMMUNITY BATTLE INDONESIA S1
                            </h3>
                            <p className='tournament-logo-subtext'>
                                1ST PLACE
                            </p>
                        </div>
                        <div className='brand-item'>
                            <img src={TournamentData.Tournament02} alt=''  className='w-100 tournament-logo-image' /> 
                            <h3 className='tournament-logo-title'>
                                ESL COMMUNITY INDONESIA
                            </h3>
                            <p className='tournament-logo-subtext'>
                                1ST PLACE
                            </p>
                        </div>
                        <div className='brand-item'>
                            <img src={TournamentData.Tournament03} alt='' className='w-100 tournament-logo-image' /> 
                            <h3 className='tournament-logo-title'>
                                LUPONWXC SEASON 7
                            </h3>
                            <p className='tournament-logo-subtext'>
                                1ST PLACE
                            </p>
                        </div>
                        <div className='brand-item'>
                            <img src={TournamentData.Tournament04} alt='' className='w-100 tournament-logo-image' /> 
                            <h3 className='tournament-logo-title'>
                                OXTRADE YAMISOK SEASON 2
                            </h3>
                            <p className='tournament-logo-subtext'>
                                1ST PLACE
                            </p>
                        </div>
                        <div className='brand-item'>
                            <img src={TournamentData.Tournament05} alt='' className='w-100 tournament-logo-image' /> 
                            <h3 className='tournament-logo-title'>
                                PRASMUL OLYMPICS
                            </h3>
                            <p className='tournament-logo-subtext'>
                                1ST PLACE
                            </p>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default TournamentLogo