import React from 'react'
import '../../style/modal.css'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Modal (){
    const banner = document.querySelector('cookies-banner')
    const close = document.querySelector('cookies-banner')
    const ShowBanner = () => {
      setTimeout(() => {
        banner.classList.add('show')
      }, 3000)
    }

    window.addEventListener('load',ShowBanner)
    close.addEventListener('click',() => {
      banner.classList.remove('show')
    })

  return (
    <div className='cookies-banner'>
      <AiOutlineClose />
      <h1 className='section-title-cookies'>
        Privacy Info
      </h1>
      <p className='section-subtext-cookies'>
        We use cookies to provide you with a better browsing experience. By continuing to browse, you are agreeing to our
      </p>
      <div className='cookies-button'>
        <Link to='/'>Learn more about privacy</Link>
        <div className='cookies-right'>
          <button className='cookies-cancel'>Cancel</button>
          <button className='cookies-confrim'>Confrim</button>
        </div>
      </div>
    </div>
  )
}

export default Modal