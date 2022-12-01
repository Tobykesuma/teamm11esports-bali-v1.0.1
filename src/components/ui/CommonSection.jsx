import React from 'react'
import '../../style/commonsection.css'
import { Container } from 'react-bootstrap'


const CommonSectionDota2 = ({title}) => {
  return (
    <section className='section-common-dota2 mb-5'>
        <Container className='text-center'>
            <h1 className='text-light'>{title}</h1>
        </Container>
    </section>
  )
}

export default CommonSectionDota2