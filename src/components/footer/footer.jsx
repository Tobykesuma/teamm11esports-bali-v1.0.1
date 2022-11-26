import React from 'react'
import imageData from '../../data/imageData'
import { Link } from 'react-router-dom'
import {
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
import {Container} from 'reactstrap'




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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus consectetur ipsum beatae eaque temporibus molestias, expedita cumque recusandae, dolores architecto porro error velit veritatis! Possimus sit nobis velit impedit nisi.
                    </p>
                </Col>

                <Col lg='2' md='4' sm='6'>
                    <div className='mb-4 pt-5'>
                        <ListGroup>
                            {
                                quickLinksFooter.map((item, index) => (
                                    <ListGroupItem key={index} className='p-0 mt-4 footer-links'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </div>
                </Col>
                
                <Col lg='2' md='4' sm='6'>
                    <div className='mb-4 pt-5'>
                        <ListGroup>
                            {
                                quickLinksFooter3.map((item, index) => (
                                    <ListGroupItem key={index} className='p-0 mt-4 footer-links'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </div>
                </Col>

                <Col lg='2' md='4' sm='6'>
                    <div className='mb-4 pt-5'>
                        <ListGroup>
                            {
                                quickLinksFooter2.map((item, index) => (
                                    <ListGroupItem key={index} className='p-0 mt-4 footer-links'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </div>
                </Col>

                <Col lg='2' md='4' sm='6'>
                    <div className='mb-4 pt-5'>
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