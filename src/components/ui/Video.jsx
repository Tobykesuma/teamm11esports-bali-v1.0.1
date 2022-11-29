import React from 'react'
import '../../style/video.css'
import { 
    Container,
    Row,
    Col,
 } from 'reactstrap'
import Slider from 'react-slick'
import ReactPlayer from 'react-player'

const Video = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    autoplaySpeed: 3000,
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
                <ReactPlayer className='youtube-video-box' url='https://www.youtube.com/watch?v=3oA_gBi5gJY' height={180} width={320} />
              </div>
              <div className='video-item'>
                <ReactPlayer className='youtube-video-box' url='https://www.youtube.com/watch?v=CSmTAIxV7Uo&t=479s' height={180} width={320} />
              </div>
              <div className='video-item'>
                <ReactPlayer className='youtube-video-box' url='https://www.youtube.com/watch?v=cNY2ISF2sPw' height={180} width={320} />
              </div>
              <div className='video-item'>
                <ReactPlayer className='youtube-video-box' url='https://www.youtube.com/watch?v=77h3p-xARYM&t=445s' height={180} width={320} />
              </div>
              <div className='video-item'>
                <ReactPlayer className='youtube-video-box' url='https://www.youtube.com/watch?v=3oA_gBi5gJY' height={180} width={320} />
              </div>
              <div className='video-item'>
                <ReactPlayer className='youtube-video-box' url='https://www.youtube.com/watch?v=dfBkLpzM6e8' height={180} width={320} />
              </div>
              <div className='video-item'>
                <ReactPlayer className='youtube-video-box' url='https://www.youtube.com/watch?v=qQkmbU_N6N0&t=4s' height={180} width={320} />
              </div>
              
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Video
