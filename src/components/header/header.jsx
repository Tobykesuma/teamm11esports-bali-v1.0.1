import React, { useState } from 'react'
import {
    AiFillFacebook,
    AiFillTwitterSquare,
    AiOutlineInstagram,
    AiFillYoutube,
    AiOutlineAlignRight,
    AiOutlineClose,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import imageData from '../../data/imageData'
import '../../style/header.css'


const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 90){
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)


  return (
    <header className='header'>
        <div className={color ? 'header-top header-bg' : 'header-top'} id='header'>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={imageData.MainLogo} alt='' />
                </Link>
                {/* Hamburger Navbar */}
                <div className='hamburger' onClick={handleClick}>
                    {
                        click ? (<AiOutlineClose size={35} style={{color: '#fff'}} />)
                        : (<AiOutlineAlignRight size={35} style={{color: '#fff'}} />)
                    }
                </div>

                {/* Navbar Menu */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-links'>
                        <Link to='/' onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-links'>
                        <Link to='/about-us' onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-links'>
                        <Link to='/teams' onClick={closeMenu}>Teams</Link>
                    </li>
                    <li className='nav-links'>
                        <Link to='/schedule' onClick={closeMenu}>Schedule</Link>
                    </li>
                    <li className='nav-links'>
                        <Link to='/news' onClick={closeMenu}>News</Link>
                    </li>
                    <li className='nav-links'>
                        <Link to='/partners' onClick={closeMenu}>Partners</Link>
                    </li>
                    <li className='nav-links'>
                        <a href='https://www.tokopedia.com/teamm11esports' onClick={closeMenu} target='__blank'>Store</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header