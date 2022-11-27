import React from 'react'
import '../../style/newsletters.css'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import {FiSend} from 'react-icons/fi'
import {MdEmail} from 'react-icons/md'



const NewsLetters = () => {
  return (
    <section className='section newsletter' id='newsletter'>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className='newsletter-card'>
                        <h2 className='section-title3'>
                            Our <span className='span'>Newsletter</span>
                        </h2>

                        <form action='' className='newsletter-form'>
                            <div className='input-wrapper skewBg'>
                                <input type='email' name='email_address' placeholder='Enter Your Email...' required className='email-field'></input>
                                {/* Icons Emails Sending */}
                                <MdEmail className='newsletter-icons' />
                            </div>
                            <button type='submit' className='btn newsletter-btn skewBg'>
                                <span className='span'>Subscribe</span>
                                <FiSend className='newsletter-icons' />
                            </button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewsLetters
