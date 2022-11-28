import React from 'react'
import '../../style/store.css'
import { 
    Container,
    Row,
    Col,
 } from 'reactstrap'




const Store = () => {
  return (
    <section className='section section-store' id='store'>
        <Container>
            <Row>
                <Col>
                    <h2 className='section-title section-bg'>
                        Team M11 <span className='span'>Store</span>
                    </h2>
                    <p className='section-subtext'>
                    Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic
                    </p>

                    <ul className='has-scrollbar'>
                        <li className='scrollbar-item'>
                            <div className='shop-card'>
                                
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
