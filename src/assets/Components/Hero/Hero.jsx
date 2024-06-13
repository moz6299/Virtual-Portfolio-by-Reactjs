import React from 'react'
import './Hero.css'
import profileimage from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="hero" className='hero'>
        <img src= {profileimage} alt="" />
        <h1><span>I am Ahmed Ramy,</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, expedita.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quae.</p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anch-link' offset={50} href='#contact'> Connect with me </AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
      
    </div>
  )
}

export default Hero
