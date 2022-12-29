import React, { Component} from 'react';
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";
import { GrCirclePlay } from 'react-icons/gr'
import ThumbnailYoutube from '../../data/ThumbnailYoutube';
import './ModalLive.css';

export class ModalLive extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({
             isOpen: true,
        });
    }
    render() {
        return (
            <div>
                <div>
                    <ModalVideo 
                        channel='youtube'
                        isOpen={this.state.isOpen}
                        videoId="7_HIR5wFEng"
                        onClose={() => this.setState({
                            isOpen: false
                        })}
                    />
                    <img src={ThumbnailYoutube.ThumbnailYoutube01} alt='live-match-video' className='img-cover' />

                    <GrCirclePlay className='play-btn-live' onClick={this.openModal} >
                    </GrCirclePlay>
                </div>
            </div>
        )
    }
}

export default ModalLive