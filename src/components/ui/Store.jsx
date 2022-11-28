import React from 'react'
import '../../style/store.css'
import { 
    Container,
    Row,
    Col,
 } from 'reactstrap'
import ShopData from '../../data/ShopData'
import {SlBasket} from 'react-icons/sl'


const Store = () => {
  return (
    <section className='section section-store' id='store'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h2 className='section-title section-bg'>
                        Team M11 <span className='span'>Store</span>
                    </h2>
                    <p className='section-subtext'>
                    Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic
                    </p>

                    <ul className='has-scrollbar'>
                        <li className='scrollbar-item'>
                            <div className='shop-card' style={{width: 300, height: 450}}>
                                <div className='card-banner'>
                                    <img src={ShopData.Products01} style={{width: 300, height: 260}} alt='' className='products-image img-holder img-cover' />
                                </div>

                                <div className='card-content'>
                                    <a href='' className='card-badge skewBg'>Jersey</a>
                                    <h3 className='card-content-title'>
                                        Man Black Jersey
                                    </h3>

                                    <div className='card-wrapper'>
                                        <p className='card-price'>IDR 250K</p>
                                        <button className='card-btn'>
                                            <a href='https://www.tokopedia.com/teamm11esports' target='__blank'>
                                                <SlBasket />
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className='scrollbar-item'>
                            <div className='shop-card' style={{width: 300, height: 450}}>
                                <div className='card-banner'>
                                    <img src={ShopData.Products01} style={{width: 300, height: 260}} alt='' className='products-image img-holder img-cover' />
                                </div>

                                <div className='card-content'>
                                    <a href='' className='card-badge skewBg'>Jersey</a>
                                    <h3 className='card-content-title'>
                                        Man Black Jersey
                                    </h3>

                                    <div className='card-wrapper'>
                                        <p className='card-price'>IDR 250K</p>
                                        <button className='card-btn'>
                                            <a href='https://www.tokopedia.com/teamm11esports' target='__blank'>
                                                <SlBasket />
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className='scrollbar-item'>
                            <div className='shop-card' style={{width: 300, height: 450}}>
                                <div className='card-banner'>
                                    <img src={ShopData.Products01} style={{width: 300, height: 260}} alt='' className='products-image img-holder img-cover' />
                                </div>

                                <div className='card-content'>
                                    <a href='' className='card-badge skewBg'>Jersey</a>
                                    <h3 className='card-content-title'>
                                        Man Black Jersey
                                    </h3>

                                    <div className='card-wrapper'>
                                        <p className='card-price'>IDR 250K</p>
                                        <button className='card-btn'>
                                            <a href='https://www.tokopedia.com/teamm11esports' target='__blank'>
                                                <SlBasket />
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className='scrollbar-item'>
                            <div className='shop-card' style={{width: 300, height: 450}}>
                                <div className='card-banner'>
                                    <img src={ShopData.Products01} style={{width: 300, height: 260}} alt='' className='products-image img-holder img-cover' />
                                </div>

                                <div className='card-content'>
                                    <a href='' className='card-badge skewBg'>Jersey</a>
                                    <h3 className='card-content-title'>
                                        Man Black Jersey
                                    </h3>

                                    <div className='card-wrapper'>
                                        <p className='card-price'>IDR 250K</p>
                                        <button className='card-btn'>
                                            <a href='https://www.tokopedia.com/teamm11esports' target='__blank'>
                                                <SlBasket />
                                            </a>
                                        </button>
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

export default Store
