import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import '../../style/livestreaming.css'
import Match from './Match'
// import ModalVideo from 'react-modal-video'


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
                    <iframe playing='true' width="1280" height="510" src="https://www.youtube.com/embed/7_HIR5wFEng" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" channel='youtube' origin='https://www.youtube.com' className='live-match-box2' loading="lazy" allowFullScreen autoPlay={true} config={{youtube: {playerVars: {origin : 'https://www.youtube.com'}}}}>
                    </iframe>
                        
                    
                    </div>
                    <Match />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default LiveStreaming