import React, { useState } from "react";
import LogoPage from '../../assets/LogoPage1.png';
import { FaYoutube, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import '../../styles/primalNav.css';
import { Link } from "react-router-dom";
import RadioBrowser from '../radioBrowser/RadioBrowser.jsx';

export default function PrimalNav() {
  const [switchState, setSwitchState] = useState('noVisible');
  const [conocenos, setConocenos] = useState('close');
  const [menu, setMenu] = useState('niños');
  
  let renderMenu = null;

  const handleMenu = (content) => {
    setSwitchState(content)
  }

  const handleConocenos = (content) => {
    setConocenos(content)
  }

  const handleRadio = (content) => {
    setMenu(content)
  }

  if (menu === 'niños') {
    renderMenu = <div><RadioBrowser estacion={'niños'} /></div>
  } else if (menu === 'adultos') {
    renderMenu = <div><RadioBrowser estacion={'adultos'} /></div>
  }
 
  if (conocenos === 'open') {
    renderConocenos = <div 
      className="conocenos-new-menu"
      style={{
        width: '100%',
        height: conocenos === 'open' ? '' : 0,
        backgroundColor: '#0A0C18',
        zIndex: -2,
        overflow: 'hidden',
        transition: 'width 0.3s ease-in-out',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto'
      }}  
    >
      <Link to={'/historia'} className="menu-button-conocenos" style={{textDecoration: 'none'}}><div>Historia</div></Link>
      <Link to={'/'} className="menu-button-conocenos" style={{textDecoration: 'none'}}><div>Información corporativa</div></Link>
      <Link to={'/'} className="menu-button-conocenos" style={{textDecoration: 'none'}}><div>Fundador</div></Link>                  
    </div>
  }

    return(
      <div className="primal-nav">
        <div className='nav-index'>
          <Link to={'/'}><img className='LogoPage' src={LogoPage} alt=""/></Link>
          <div className='social-media'>
            <a className='social-media-button' href='https://www.youtube.com/channel/UCORJPp240Z14lc04mZ7BN4A' target='_blank'><FaYoutube /></a>
            <a className='social-media-button' href='https://twitter.com/fvanradio' target='_blank'><FaTwitter /></a>
            <a className='social-media-button' href='https://web.facebook.com/funvolveranacer/?_rdc=1&_rdr' target='_blanck'><FaFacebookSquare /></a>
          </div>
          <div className='social-media'>
            { /* Espacio para la radio <ReactPlayer url='https://tunein.com/radio/Adora-a-Dios-Kids-s241749/?lang=es' /> */ }
            <div className="menu-emisora" onClick={() => handleMenu(switchState === 'noVisible' ? 'visible' : 'noVisible')}>Emisoras</div>
          </div>
        </div>
        <div className ={switchState === 'visible' ? 'menuContainer visible' : 'menuContainer noVisible'}
        >
          <div className="menu-primal"
            style={{
              position: 'absolute',
              top: '0',
              right: 0,
              width: switchState === 'visible' ? '100%' : 0,
              height: 'max-content',
              backgroundColor: '#0A0C18',
              zIndex: -2,
              overflow: 'hidden',
              transition: 'width 0.3s ease-in-out',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflowY: 'auto'
            }}
          >
            <div className="button-radio-container">
              <div className="button-radio" onClick={() => handleRadio('niños')}>Para Niños</div>
              <div className="button-radio" onClick={() => handleRadio('adultos')}>Volerver a Nacer Radio</div>
            </div>
            {renderMenu}
            </div>
        </div>
      </div>
    );
}