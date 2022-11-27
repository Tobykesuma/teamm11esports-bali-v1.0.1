import React from 'react'
import imageData from '../../data/imageData'
import { Link } from 'react-router-dom'
import {
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem
} from 'reactstrap'
import {MdCopyright} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'
import {BsFillTelephoneOutboundFill} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import {IoIosTime} from 'react-icons/io'
import {BsArrowRightShort} from 'react-icons/bs'
import '../../style/footer.css'




const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    const quickLinksFooter = [
        {
            path: '/',
            display: 'Home',
        },
        {
            path: '/about-us',
            display: 'About',
        },
        {
            path: '/teams',
            display: 'Teams',
        },
        {
            path: '/schedule',
            display: 'Schedule',
        },
        {
            path: '/about-us',
            display: 'Be Come Partnership',
        },
    ];

    const quickLinksFooter2 = [
        {
            path: '/faq',
            display: 'F.A.Q',
        },
        {
            path: '/terms-of-services',
            display: 'Terms Of Services',
        },
        {
            path: '/live-streaming',
            display: 'Live Stream',
        },
        {
            path: '/news',
            display: 'News',
        },
        {
            path: '/privacy-policy',
            display: 'Privacy Policy',
        },
        
    ];

    const quickLinksFooter3 = [
        {
            path: '/dota-2',
            display: 'Dota 2',
        },
        {
            path: '/pubg',
            display: 'PUBG',
        },
        {
            path: '/valorant',
            display: 'Valorant',
        },
        {
            path: '/mobile-legend',
            display: 'Mobile Legend',
        },
        {
            path: '/coming-soon',
            display: 'Coming Soon',
        },
    ]
  return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col lg='4' md='4' sm='12'>
                    <div className='footer-logo'>
                        <Link to='/' className='d-flex align-items-center gap-2'>
                            <img src={imageData.MainLogo} alt='' />
                        </Link>
                    </div>
                    <p className='footer-subtext'>
                        Berdiri pada awal April 2021 Team M11 Esports Divisi Dota 2 berhasil meraih beberapa kompetisi tingkat Indonesia dan International. Pada bulan Oktober 2021 Team M11 Esports menambah Divisi baru yaitu PUBGM Ladies. Dan pada tahun 2022 Team M11 Esports membuka 2 Divisi yaitu MLBB dan Valorant.
                    </p>
                </Col>

                <Col lg='2' md='4' sm='6'>
                    <div className='mb-4 pt-5'>
                        <ListGroup>
                            {
                                quickLinksFooter.map((item, index) => (
                                    <ListGroupItem key={index} className='p-0 mt-3 footer-links'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </div>
                </Col>
                
                <Col lg='2' md='4' sm='6'>
                    <div className='mb-4 pt-5 footer-div'>
                        <ListGroup>
                            {
                                quickLinksFooter3.map((item, index) => (
                                    <ListGroupItem key={index} className='p-0 mt-3 footer-links'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </div>
                </Col>

                <Col lg='2' md='4' sm='6'>
                    <div className='mb-4 pt-5 footer-div'>
                        <ListGroup>
                            {
                                quickLinksFooter2.map((item, index) => (
                                    <ListGroupItem key={index} className='p-0 mt-3 footer-links'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </div>
                </Col>

                <Col lg='2' md='4' sm='6'>
                    <div className='mb-4 pt-5 footer-div'>
                        <p className='footer-info'>
                            <a href='' target='__blank'>
                                <ImLocation2 />
                                Jl. Taman Giri Perumahan Samantha CitraKuta No 9A Jimbaran - Bali 
                            </a>
                        </p>
                        <p className='footer-info'>
                            <a href='mailto:teamm11bali@gmail.com' target='__blank'>
                                <TfiEmail />
                                teamm11bali@gmail.com
                            </a>
                        </p>
                    </div>
                </Col>

                <div className='footer-border-top'>
                    <Col lg='12' md='4' sm='12'>
                        <div className='footer-bottom align-items-center justify-content-between'>
                            <p className='footer-bottom-desc align-items-center gap-1 justify-content-between'>
                                <MdCopyright />TEAM M11 ESPORTS BALI {year}
                            </p>

                            <p className='footer-bottom-desc align-items-center gap-1'>
                                DESIGN AND DEVELOPED BY <a href='https://www.instagram.com/itstobikesuma/' target='__blank'>TOBI KESUMA</a>
                            </p>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer