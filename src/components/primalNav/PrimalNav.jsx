import React from "react";
import LogoPage from '../../assets/LogoPage.png';
import { FaYoutube, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import Burguer from '../../subcomponent/Burger';

export default function PrimalNav() {
    return(
        <div className='nav-index'>
          <div><img className='LogoPage' src={LogoPage} alt=""/></div>
          <div className='social-media'>
            <a className='social-media-button' href='https://www.youtube.com/channel/UCORJPp240Z14lc04mZ7BN4A' target='_blank'><FaYoutube /></a>
            <a className='social-media-button' href='https://twitter.com/fvanradio' target='_blank'><FaTwitter /></a>
            <a className='social-media-button' href='https://web.facebook.com/funvolveranacer/?_rdc=1&_rdr' target='_blanck'><FaFacebookSquare /></a>
          </div>
          <div className='social-media'>
            { /* Espacio para la radio <ReactPlayer url='https://tunein.com/radio/Adora-a-Dios-Kids-s241749/?lang=es' /> */ }
            <Burguer />
          </div>
        </div>
    );
}