import React from "react";
import { FaYoutube, FaTwitter, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
    return(
        <div style={{backgroundColor: '#0A0C18', paddingBottom: '50px'}}>
        <div className="footer">
          <div className='width-footer'>
            <div><a href="https://www.fundacionvolveranacer.org" target='_blank'>fundacionvolveranacer.org</a></div>
            <div><a href="https://volveranacerradio.com" target='_blank'>volveranacerradio.com</a></div>
            <div><a href="http://noticiaselbautista.com" target='_blank'>noticiaselbautista.com</a></div>
          </div>
          <div className='social-media'>
            <a className='social-media-button' href='https://www.youtube.com/channel/UCORJPp240Z14lc04mZ7BN4A' target='_blank'><FaYoutube /></a>
            <a className='social-media-button' href='https://twitter.com/fvanradio' target='_blank'><FaTwitter /></a>
            <a className='social-media-button' href='https://web.facebook.com/funvolveranacer/?_rdc=1&_rdr' target='_blanck'><FaFacebookSquare /></a>
          </div>
          <div className='width-footer'>
            <h3>Contáctenos</h3>
            <div>Carrera 79 Nº 49A – 105 INT 301 – Tel: 585 8500 Cel: 301 4117699.  Medellín – Colombia</div>
          </div>
          </div>
          <div className='copyright'>© Copyright 2021 Todos los derechos reservados</div>
        </div>
    );
}