import React from 'react'
import './Vinz.css'
import { 
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import CommonSectionDota2 from '../../../../components/ui/CommonSection'
import Helmet from '../../../../components/helmet/helmet'


const Vinz = () => {
    // localhost:3000/teams/dota-2/talent/vinzdoto
  return (
    <Helmet title='Vinz'>
        <CommonSectionDota2>
            <section className='section section-vinz' id='talent'>
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

export default Vinz