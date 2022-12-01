import React from 'react'
import './Ifrit.css'
import { 
    Container,
    Row,
    Col,
 } from 'reactstrap'
import CommonSectionDota2 from '../../../../components/ui/CommonSection'
import Helmet from '../../../../components/helmet/helmet'


const Ifrit = () => {
    // localhost:3000/teams/dota-2/talent/ifrit
  return (
    <Helmet title='Ifrit'>
        <CommonSectionDota2>
            <section className='section section-ifrit' id='talent'>
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

export default Ifrit