import React from 'react'
import './Juju.css'
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap'
import CommonSectionDota2 from '../../../../components/ui/CommonSection'
import Helmet from '../../../../components/helmet/helmet'

const Juju = () => {
    // localhost:3000/teams/dota-2/talent/juju
  return (
    <Helmet title='Juju'>
        <CommonSectionDota2>
            <section className='section section-juju' id='talent'>
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

export default Juju