import React, { useState } from "react";
import LogoPage from '../../assets/LogoPage.png';
import { FaYoutube, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import Burguer from '../../subcomponent/Burger';
import '../../styles/primalNav.css';
import { Link } from "react-router-dom";

export default function PrimalNav() {
  const [switchState, setSwitchState] = useState('noVisible');
  const [conocenos, setConocenos] = useState('close');
  
  let renderConocenos = null;
  let renderMenu = null;

  const handleMenu = (content) => {
    setSwitchState(content)
  }

  const handleConocenos = (content) => {
    setConocenos(content)
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
          <div><img className='LogoPage' src={LogoPage} alt=""/></div>
          <div className='social-media'>
            <a className='social-media-button' href='https://www.youtube.com/channel/UCORJPp240Z14lc04mZ7BN4A' target='_blank'><FaYoutube /></a>
            <a className='social-media-button' href='https://twitter.com/fvanradio' target='_blank'><FaTwitter /></a>
            <a className='social-media-button' href='https://web.facebook.com/funvolveranacer/?_rdc=1&_rdr' target='_blanck'><FaFacebookSquare /></a>
          </div>
          <div className='social-media'>
            { /* Espacio para la radio <ReactPlayer url='https://tunein.com/radio/Adora-a-Dios-Kids-s241749/?lang=es' /> */ }
            <div onClick={() => handleMenu(switchState === 'noVisible' ? 'visible' : 'noVisible')}><Burguer /></div>
          </div>
        </div>
        <div className = 'menuContainer' style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          width: switchState === 'visible' ? '100vw' : 0,
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -2,
          overflow: 'hidden',
          transition: 'width 0.3s ease-in-out',
          }}
        >
          <div className="menu-primal"
            style={{
              position: 'absolute',
              top: '0',
              right: 0,
              width: switchState === 'visible' ? '80vw' : 0,
              height: '89.5vh',
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
            <Link to={'/'} className="menu-button-primal" style={{textDecoration: 'none'}}>
              <div>Home</div>
            </Link>
            <div 
              className="menu-button-primal" 
              onClick={() => handleConocenos(conocenos === 'close' ? 'open' : 'close')}
            >
              <div>Conócenos</div> 
            </div>
            {renderConocenos}
            <div className="menu-button-primal" >Proyectos</div>
            <div className="menu-button-primal" >Contenido</div>
            <div className="menu-button-primal" >Escuela para padres</div>
            <div className="menu-button-primal" >Madres triunfadoras</div>
            <div className="menu-button-primal" >Enfoque a la familia</div>
            <div className="menu-button-primal" >Cómo educar</div>
            <div className="menu-button-primal" >Folletos</div>
            <div className="menu-button-primal" >Periódicos</div>
            <div className="menu-button-primal" >Concursos</div>
            <div className="menu-button-primal" >Investiganos</div>
            <div className="menu-button-primal" >Únete</div>
          </div>
        </div>
      </div>
    );
}