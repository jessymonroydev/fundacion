import React from "react";
import '../../styles/home.css';
import HomeIcon from '../../assets/HomeIcon.png';
import {Link} from 'react-router-dom';

export default function Nav() {
    return(
        <div>
          <div className='nav'>
            <Link to={'/'}>
              <div className='home-icon-container'><img className='home-icon' src={HomeIcon} alt="Home Icon" /><div>Home</div></div>
            </Link>
              <div>
            <div className='nav-menu'>
              <div className='gold-bar'>Conocenos</div>
              <div className='gold-bar'>Proyectos</div>
              <div className='gold-bar'>Contenido</div>
              <div className='gold-bar'>Escuela para padres</div>
              <div className='gold-bar'>Madres triunfadores</div>
              <div className='gold-bar'>enfoque a la familia</div>
            </div>
            <div className='nav-menu'>
              <div className='gold-bar'>Cómo educar</div>
              <div className='gold-bar'>Folletos</div>
              <div className='gold-bar'>Periódicos</div>
              <div className='gold-bar'>Concursos</div>
              <Link to={'/investiganos'}><div className='gold-bar'>Investiganos</div></Link>
              <div className='gold-bar'>Unete</div>
            </div>
          </div>
        </div>
    </div>
    );
}