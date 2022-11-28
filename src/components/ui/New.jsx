import React from 'react'
import '../../style/new.css'
import { 
    Container,
    Row,
    Col,
 } from 'reactstrap'
import imageData from '../../data/imageData'
import {
    MdAccountCircle,
    MdDateRange,
} from 'react-icons/md'
import {AiOutlineCaretRight} from 'react-icons/ai'


const New = () => {
  return (
    <section className='news' id='News'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h2 className='section-title2 section-bg'>
                        Latest News & <span className='span'>Articles</span>
                    </h2>
                    <p className='section-subtext2'>
                        Compete With 100 Players On A Remote Island For Winner Takes Showdown Known Issue Where Certain Skin Strategic
                    </p>

                    <ul className='news-list'>
                        <li>
                            <div className='news-card'>
                                <figure className='card-banner img-holder' style={{width: '400', height: '290'}}>
                                    <img src={imageData.BlogImages} alt='' className='img-cover' />
                                </figure>

                                <div className='news-card-content'>
                                    <ul className='card-meta-list'>
                                        <li className='card-meta-item'>
                                            <MdAccountCircle />
                                            <a href='' className='item-text'>Admin</a>
                                        </li>

                                        <li className='card-meta-item'>
                                            <MdDateRange />
                                            <time dateTime='2022-11-27' className='item-text'>November 11, 2022</time>
                                        </li>
                                    </ul>

                                    <h3 className='card-title'>
                                        <a href='#'>Shooter Action Video</a>
                                    </h3>

                                    <p className='card-text'>
                                        Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
                                    </p>
                                    <a href='#' className='card-link'>
                                        <span className='span'>Read More</span>
                                        <AiOutlineCaretRight />
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='news-card'>
                                <figure className='card-banner img-holder' style={{width: '400', height: '290'}}>
                                    <img src={imageData.BlogImages} alt='' className='img-cover' />
                                </figure>

                                <div className='news-card-content'>
                                    <ul className='card-meta-list'>
                                        <li className='card-meta-item'>
                                            <MdAccountCircle />
                                            <a href='' className='item-text'>Admin</a>
                                        </li>

                                        <li className='card-meta-item'>
                                            <MdDateRange />
                                            <time dateTime='2022-11-27' className='item-text'>November 11, 2022</time>
                                        </li>
                                    </ul>

                                    <h3 className='card-title'>
                                        <a href='#'>Shooter Action Video</a>
                                    </h3>

                                    <p className='card-text'>
                                        Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
                                    </p>
                                    <a href='#' className='card-link'>
                                        <span className='span'>Read More</span>
                                        <AiOutlineCaretRight />
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='news-card'>
                                <figure className='card-banner img-holder' style={{width: '400', height: '290'}}>
                                    <img src={imageData.BlogImages} alt='' className='img-cover' />
                                </figure>

                                <div className='news-card-content'>
                                    <ul className='card-meta-list'>
                                        <li className='card-meta-item'>
                                            <MdAccountCircle />
                                            <a href='' className='item-text'>Admin</a>
                                        </li>

                                        <li className='card-meta-item'>
                                            <MdDateRange />
                                            <time dateTime='2022-11-27' className='item-text'>November 11, 2022</time>
                                        </li>
                                    </ul>

                                    <h3 className='card-title'>
                                        <a href='#'>Shooter Action Video</a>
                                    </h3>

                                    <p className='card-text'>
                                        Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
                                    </p>
                                    <a href='#' className='card-link'>
                                        <span className='span'>Read More</span>
                                        <AiOutlineCaretRight />
                                    </a>
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

export default New