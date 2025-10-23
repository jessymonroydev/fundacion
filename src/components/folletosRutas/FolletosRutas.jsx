     import React from 'react';
import { Link } from 'react-router-dom';

import Folleto1 from '../../assets/imgFolletos/Curso-para-Capacitadores2redux_page-0001.jpg';
import Folleto2 from '../../assets/imgFolletos/2-Como-ayudar-a-sus-Hijos_page-0001.jpg';
import Folleto3 from '../../assets/imgFolletos/7-Revista-Jesucristo_page-0001.jpg';
import Folleto4 from '../../assets/imgFolletos/3-La-prevencion_page-0001.jpg';
import Folleto5 from '../../assets/imgFolletos/B.-La-Armadura-de-Dios (2)_page-0001.jpg';
import Folleto6 from '../../assets/imgFolletos/4-LIBRETOS-DE-ALFABETIZACION_page-0001.jpg';
import Folleto7 from '../../assets/imgFolletos/5-Revista-una-ninez-con-e-proposito-de-Dios-3_page-0001.jpg';

export default function FolletosRutas() {
    return(
        <div style={{width: '100%'}}>
            <div className="folleto-container">                    
                <Link to={'https://fundacionvolveranacer.org/curso-para-capacitadores/'} className="img-container-folleto">
                    <img className="img-folleto" src={Folleto1} alt="Folleto1" />
                </Link>
                <Link to={'https://fundacionvolveranacer.org/como-ayudar-a-sus-hijos/'} className="img-container-folleto">
                    <img className="img-folleto" src={Folleto2} alt="Folleto2" />
                </Link>
                <Link to={'https://fundacionvolveranacer.org/revista-jesucristo/'} className="img-container-folleto">
                    <img className="img-folleto" src={Folleto3} alt="Folleto3" />
                </Link>
                <Link to={'https://fundacionvolveranacer.org/la-prevencion/'} className="img-container-folleto">
                    <img className="img-folleto" src={Folleto4} alt="Folleto4" />
                </Link>
                <Link to={'https://fundacionvolveranacer.org/folleto-la-armadura-de-dios/'} className="img-container-folleto">
                    <img className="img-folleto" src={Folleto5} alt="Folleto5" />
                </Link>
                <Link to={'https://fundacionvolveranacer.org/libretos/'} className="img-container-folleto">
                    <img className="img-folleto" src={Folleto6} alt="Folleto6" />
                </Link>
            </div>
            <div className="folleto-container">                    
                <Link to={'/Folleto-una-ninez-con-el-proposito-de-dios'} className="img-container-folleto">
                    <img className="img-folleto" src={Folleto7} alt="Folleto7" />
                </Link>
            </div>
        </div>
    );
}
