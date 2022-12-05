import React from 'react'
import '../../style/video.css'
import { 
    Container,
    Row,
    Col,
 } from 'reactstrap'
import Slider from 'react-slick'


const Video = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    // autoplaySpeed: 3000,
    lazyLoad: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive : [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoints: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          intialSlide: 2,
        }
      },
      {
        breakpoints: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className='section section-video' id='video'>
      <Container>
        <Row>
          <Col lg='12'>
            <h2 className='section-title section-bg'>
              YOUTUBE <span className='span'>VIDEO</span>
            </h2>

            <Slider {...settings}>
              <div className='video-item'>
              <iframe width="320" height="180" 
              src="https://www.youtube.com/embed/3oA_gBi5gJY"
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen></iframe>
              </div>
              <div className='video-item'>
              <iframe width="320" height="180" 
              src="https://www.youtube.com/embed/dfBkLpzM6e8"
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen></iframe>
              </div>
              <div className='video-item'>
              <iframe width="320" height="180" 
              src="https://www.youtube.com/embed/9CAOWrD-YvA"
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen></iframe>
              </div>
              <div className='video-item'>
              <iframe width="320" height="180" 
              src="https://www.youtube.com/embed/cNY2ISF2sPw"
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen></iframe>
              </div>
              <div className='video-item'>
              <iframe width="320" height="180" 
              src="https://www.youtube.com/embed/QABGiTNSGLc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen></iframe>
              </div>
              <div className='video-item'>
              <iframe width="320" height="180" 
              src="https://www.youtube.com/embed/77h3p-xARYM" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen></iframe>
              </div>
              
            
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Video
