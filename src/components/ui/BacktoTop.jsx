import React, { useState } from 'react'
import '../../style/backtotop.css'
import {MdOutlineArrowDropUp} from 'react-icons/md'


function BacktoTop() {
    const [visible, setVisible] = useState(false);
    window.addEventListener('scroll', () => {
        window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });
  return (
    <div className='back-to-top'>
        <a href='#' className={`${visible ? 'scroll-block' : 'scroll-none'}`}>
            <MdOutlineArrowDropUp />
        </a>
    </div>
  )
}

export default BacktoTop