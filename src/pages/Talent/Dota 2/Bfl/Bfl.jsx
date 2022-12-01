import React from 'react'
import './Bfl.css'
import { 
    Container,
    Row,
    Col,
} from 'reactstrap'
import CommonSectionDota2 from '../../../../components/ui/CommonSection'
import Helmet from '../../../../components/helmet/helmet'


const Bfl = () => {
    // localhost:3000/teams/dota-2/talent/bfl
  return (
    <Helmet title='Bfl'>
        <CommonSectionDota2>
            <section className='section section-bfl' id='talent'>
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

export default Bfl