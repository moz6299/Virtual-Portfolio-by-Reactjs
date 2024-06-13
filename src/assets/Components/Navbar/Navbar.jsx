import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState('home');

  const reful = useRef();

  const open = ()=>{
    reful.current.style.right = '0'
  }

  const close =()=>{
    reful.current.style.right='-250px'
  }


  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <img src={menu_open} alt="" className='menu-open' onClick={open} />
        
        <ul className="nav-menu" ref={reful}>
            <img src={menu_close} alt="" className='menu-close' onClick={close} />
            <li> <AnchorLink className='anch-link' href='#hero'> <p onClick={()=> setMenu('home')}>Home</p> </AnchorLink>{menu==='home'? <img src={underline} alt="" /> : <></> }</li>
            <li> <AnchorLink className='anch-link' offset={50} href='#about' > <p onClick={()=> setMenu('about')}>About Me</p> </AnchorLink>{menu==='about'? <img src={underline} alt="" /> : <></> }</li>
            <li> <AnchorLink className='anch-link' offset={50} href='#services' > <p onClick={()=> setMenu('serv')}>Services</p> </AnchorLink>{menu==='serv'? <img src={underline} alt="" /> : <></> }</li>
            <li> <AnchorLink className='anch-link' offset={50} href='#mywork' > <p onClick={()=> setMenu('port')}>Portfolio</p> </AnchorLink>{menu==='port'? <img src={underline} alt="" /> : <></> }</li>
            <li> <AnchorLink className='anch-link' offset={50} href='#contact' > <p onClick={()=> setMenu('cont')}>Contact</p> </AnchorLink>{menu==='cont'? <img src={underline} alt="" /> : <></> }</li>
        </ul>
        <div className="nav-connect"> <AnchorLink className='anch-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      
    </div>
  )
}

export default Navbar
