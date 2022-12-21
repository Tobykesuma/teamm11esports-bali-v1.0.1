import React, { useState } from 'react'
import '../../style/backtotop.css'
import {MdOutlineArrowDropUp} from 'react-icons/md'
import { Link } from 'react-router-dom';

function BacktoTop() {
    const [visible, setVisible] = useState(false);
    window.addEventListener('scroll', () => {
        window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });
  return (
    <div className='back-to-top'>
        <Link to='/#' className={`${visible ? 'scroll-block' : 'scroll-none'}`}>
            <MdOutlineArrowDropUp />
        </Link>
    </div>
  )
}

export default BacktoTop