import React from 'react'
import './Ramz.css'
import { 
    Container,
    Row,
    Col,
 } from 'react-bootstrap'
import CommonSectionDota2 from '../../../../components/ui/CommonSection'
import Helmet from '../../../../components/helmet/helmet'

const Ramz = () => {
    // localhost:3000/teams/dota-2/talent/ramz
  return (
    <Helmet title='Ramz'>
      <CommonSectionDota2>
        <section className='section section-ramz' id='talent'>
          <Container>
            <Row>
              <Col>

              </Col>
            </Row>
          </Container>
        </section>
      </CommonSectionDota2>
    </Helmet>
  )
}

export default Ramz