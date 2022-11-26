import React, { lazy } from 'react'
import { 
    Container,
    Row,
    Col,
 } from 'reactstrap'
import imageData from '../../data/imageData'
import '../../style/match.css'



const Match = () => {
  return (
    <div className='live-match-teams'>
        <figure className='match-team match-1 img-holder' style={{width: '406', height:'277'}}>
            <img src={imageData.MainLogo} width={406} height={277} loading={lazy} alt='' className='w-100' />
        </figure>
    </div>
  )
}

export default Match