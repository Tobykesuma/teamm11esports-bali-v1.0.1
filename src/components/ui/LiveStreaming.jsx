import React, { lazy } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import '../../style/livestreaming.css'
import Match from './Match'
import ModalLive from '../modal/ModalLive'
import ThumbnailYoutube from '../../data/ThumbnailYoutube'


const LiveStreaming = () => {
    
        // const player = useRef();
        // useEffect(() => {
        //     player.current = new YTPlayer('https://www.youtube.com/' + videoId);
        //     player.current.load(videoId);
        // }, [])
        // useEffect(() => {
        //     if (!on) {
        //         player.current.pause();
        //     }
        // }, [on]);
        

        // Modal Pop up Video //
        // const [modal, setModal] = React.useState(false)
        // const [videoLoading, setVideoLoading] = React.useState(true)
        // const openModal = () => {
        //     setModal(!modal)
        // }
        // const spinner = () => {
        //     setVideoLoading(!videoLoading)
        // }
    
  return (
    
    <section className='section live-match' id='live'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h2 className='section-title section-bg'>
                        Watch Live <span className='span'>Match</span>
                    </h2>
                    <div className='live-match-box'>
                        <ModalLive />
                         
                    
                    </div>
                    <Match />
                   
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default LiveStreaming