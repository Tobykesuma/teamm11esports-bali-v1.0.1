import React, { useEffect, useRef } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import '../../style/livestreaming.css'
import imageData from '../../data/imageData'
import Match from './Match'
import ReactPlayer from 'react-player'



const LiveStreaming = () => {
    
        // const player = useRef();
        // useEffect(() => {
        //     player.current = new YTPlayer('#' + videoId);
        //     player.current.load(videoId);
        // }, [])
        // useEffect(() => {
        //     if (!on) {
        //         player.current.pause();
        //     }
        // }, [on]);
    
  return (
    
    <section className='section live-match' id='live'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h2 className='section-title section-bg'>
                        Watch Live <span className='span'>Match</span>
                    </h2>
                    <div className='live-match-box'>
                        <ReactPlayer className='live-match-box2' url='https://www.youtube.com/watch?v=zh0-ivEiFb0' height={500} width={1280} playing={true}
                        autoPlay={true} config={{youtube: {playerVars: {origin: 'https://www.youtube.com'}}}} />
                    </div>
                    <Match />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default LiveStreaming