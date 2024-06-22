import React from "react";
import '../../styles/nav.css';
import HomeIcon from '../../assets/HomeIcon.png';
import {Link} from 'react-router-dom';

export default function Nav() {
    return(
        <div>
          <div className='nav'>
            <Link to={'/'}>
              <div className='home-icon-container'><img className='home-icon' src={HomeIcon} alt="Home Icon" /><div>Home</div></div>
            </Link>
            <div className="nav-row">
            <div className='nav-menu'>
              <Link style={{textDecoration: 'none'}}  to={'/conocenos'}><div className='gold-bar'>Conocenos</div></Link>
              <Link style={{textDecoration: 'none'}}  to={'/proyectos'}><div className='gold-bar'>Proyectos</div></Link>
              <Link style={{textDecoration: 'none'}}  to={'/contenido'}><div className='gold-bar'>Contenido</div></Link>
              <Link style={{textDecoration: 'none'}}  to={'/escuela-para-padres'}><div className='gold-bar'>Escuela para padres</div></Link>
              <Link style={{textDecoration: 'none'}}  to={'/madres-triunfadoras'}><div className='gold-bar'>Madres triunfadores</div></Link>
              <Link style={{textDecoration: 'none'}}  to={'/como-educar'}><div className='gold-bar'>enfoque a la familia</div></Link>
            </div>
            <div className='nav-menu'>
              <Link style={{textDecoration: 'none'}}  to={'/como-educar'}><div className='gold-bar'>Cómo educar</div></Link>
              <Link style={{textDecoration: 'none'}}  to={'/folletos'}><div className='gold-bar'>Folletos</div></Link>
              <Link style={{textDecoration: 'none'}}  to={'/periodicos'}><div className='gold-bar'>Periódicos</div></Link>
              <Link style={{textDecoration: 'none'}}  to={'/consursos'}><div className='gold-bar'>Concursos</div></Link>
              <Link style={{textDecoration: 'none'}}  to={'/investiganos'}><div className='gold-bar'>Investiganos</div></Link>
              <Link style={{textDecoration: 'none'}}  to={'/unete'}><div className='gold-bar'>Unete</div></Link>
            </div>
          </div>
        </div>
    </div>
    );
}