import React, { useState } from 'react';
import '../../styles/nav800.css';
import HomeIcon from '../../assets/HomeIcon.png';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import Burger from "../../subcomponent/Burger";

export default function Nav700() {
    const [desplegar, setDesplegar] = useState('close');
    const [subDesplegable, setSubDesplegable] = useState('');
    const [secondSubDesplegable, setSecondSubDesplagable] = useState('');
    const [tercer, setTercer] = useState('');

    const handleDesplegar = () => {
        setDesplegar(desplegar === 'close' ? 'open' : 'close');
        setTercer('')
    };

    const handleSubDesplegable = (content) => {
        setSubDesplegable(prevContent => prevContent === content ? '' : content);
        setSecondSubDesplagable('')
    }

    const handleSecondSubDesplegable = (content) => {
        setSecondSubDesplagable(prevContent => prevContent === content ? '' : content);
    };

    const handleTercerSubDesplegable = (content) => {
        setTercer(prevContent => prevContent === content ? '' : content);
    };

    let renderConocenos = <div className='despliegue-sub-container' style={{ display: subDesplegable === 'conocenos' ? 'inherit' : 'none' }}>
            <Link to={'/historia'} className='despliegue-sub-button'>Historia</Link>
            <Link to={'/informacion-corporativa'} className='despliegue-sub-button'>Información Corporativa</Link>
            <Link to={'/fundador'} className='despliegue-sub-button'>Fundador</Link>
        </div>;
    let renderProyectosSubCuatro = <div className='despliegue-sub-container' style={{ display: tercer === 'identidad' ? 'inherit' : 'none' }}>
        <Link className="despliegue-sub-button-3"  to={'/testimonios-ex-homosexuales'}>Testimonios: Ex-Homosexuales</Link>          
        <Link className="despliegue-sub-button-3"  to={'/testimonios-ex-lesbianas'}>Testimonios: Ex-Lesbianas</Link>
        <Link className="despliegue-sub-button-3"  to={'/testimonios-ex-prostitutas'}>Testimonios: Ex-Transgéneros</Link>
        <Link className="despliegue-sub-button-3"  to={'/testimonios-ex-brujos'}>Testimonios: Ex-Brujos</Link>
        <Link className="despliegue-sub-button-3"  to={'/testimonios-ex-sicarios'}>Testimonios: Ex-Sicarios</Link>
        <Link className="despliegue-sub-button-3"  to={'/testimonios-ex-transgenero'}>Testimonios: Ex-Transgenero</Link> 
    </div>
    let renderProyectosSubUno = <div className='despliegue-sub-container' style={{ display: secondSubDesplegable === 'jardin' ? 'inherit' : 'none' }}>
        <Link className="despliegue-sub-button-2" to={'/el-jardin-con-el-amor-de-dios'}>Pagina del proyecto</Link>
        <Link className="despliegue-sub-button-2" to={'/folleto-curso-para-capacitadores'}>Folleto: Curso para Capacitadores</Link>
        <Link className="despliegue-sub-button-2" to={'/folleto-como-ayudar-a-sus-hijos'}>Folleto: Cómo ayudar a tus Hijos</Link>
        <Link className="despliegue-sub-button-2" to={'/videos-que-promueven-valores'}>Videos: Canciones que Promueven los Valores</Link>
        <Link className="despliegue-sub-button-2" to={'/videos-canciones-biblicas-pequenos-heroes'}>Videos: Canciones Pequeños Héroes</Link>
        <Link className="despliegue-sub-button-2" to={'/videos-historias-biblicas-pequenos-heroes'}>Videos: Historias Bíblicas Pequeños Héroes</Link>
        <Link className="despliegue-sub-button-2" to={'/memorizando-versiculos'}>Videos: Canciones con Versículos para Memorizar</Link>
    </div>
    let renderProyectosSubDos = <div className='despliegue-sub-container' style={{ display: secondSubDesplegable === 'niños' ? 'inherit' : 'none' }}>
        <Link className="despliegue-sub-button-2"  to={'/una-ninez-con-el-proposito-de-dios'}>Pagina del proyecto</Link>
        <Link className="despliegue-sub-button-2"  to={'/folleto-una-ninez-con-el-proposito-de-dios'}>Folleto: una Niñez con el Propósito de Dios</Link>
        <Link className="despliegue-sub-button-2"  to={'/folleto-como-ayudar-a-sus-hijos'}>Folleto: Cómo Ayudar a tus Hijos</Link>
        <Link className="despliegue-sub-button-2"  to={'/videos-una-ninez-con-el-proposito-de-dios'}>Videos: una Niñez con el Propósito de Dios</Link>
        <Link className="despliegue-sub-button-2"  to={'/videos-de-pablito-el-pequeno-misionero'}>Videos: Pablito el Pequeño Misionero</Link>
        <Link className="despliegue-sub-button-2"  to={'/videos-el-superlibro'}>Videos: Super Libro</Link>
        <Link className="despliegue-sub-button-2"  to={'/videos-versiculos-para-memorizar'}>Videos: Versículos para Memorizar</Link> 
    </div>
    let renderProyectosSubTres = <div className='despliegue-sub-container' style={{ display: secondSubDesplegable === 'jovenes' ? 'inherit' : 'none' }}>
        <Link className="despliegue-sub-button-2"  to={'/jovenes-constructores-de-paz-y-amor'}>Pagina del proyecto</Link>
        <Link className="despliegue-sub-button-2"  to={'/aprende-sobre-jesus'}>Aprende sobre Jesús</Link>
        <Link className="despliegue-sub-button-2"  to={'/folleto-la-prevencion'}>Folleto: La Prevención</Link>
        <Link className="despliegue-sub-button-2"  to={'/folleto-la-armadura-de-dios'}>Folleto: La Armadura de Dios</Link>
        <Link className="despliegue-sub-button-2"  to={'/folleto-libretos'}>Folleto: Libretos (para pagar alfabetización)</Link>
        <Link className="despliegue-sub-button-2"  to={'/folleto-jesucristo'}>Folleto: Jesucristo</Link>
        <div  className="despliegue-sub-button-2"  onClick={() => handleTercerSubDesplegable('identidad')}>Jesús y la Identidad</div>
        {renderProyectosSubCuatro}
    </div>
    let renderProyectos = <div className='despliegue-sub-container' style={{ display: subDesplegable === 'proyectos' ? 'inherit' : 'none' }}>
            <div className="despliegue-sub-button" onClick={() => handleSecondSubDesplegable('jardin')}>El jardín con el amor de Dios - Para preescolar</div>
            {renderProyectosSubUno}
            <div className="despliegue-sub-button" onClick={() => handleSecondSubDesplegable('niños')}>Una niñez con el propósito de Dios</div>
            {renderProyectosSubDos}
            <div className="despliegue-sub-button" onClick={() => handleSecondSubDesplegable('jovenes')}>Jóvenes constructores de paz y amor - de 4° a 11° grado</div>
            {renderProyectosSubTres}
        </div>;
    let renderContenidoSub = <div className='despliegue-sub-container-2 ' style={{ display: secondSubDesplegable === 'material' ? 'inherit' : 'none' }}>
        <Link className="despliegue-sub-button-2"  to={'/testimonios-ex-homosexuales'}>Testimonios: Ex-Homosexuales</Link>           
        <Link className="despliegue-sub-button-2"  to={'/testimonios-ex-lesbianas'}>Testimonios: Ex-Lesbianas</Link>
        <Link className="despliegue-sub-button-2"  to={'/testimonios-ex-prostitutas'}>Testimonios: Ex-Transgéneros</Link>
        <Link className="despliegue-sub-button-2"  to={'/testimonios-ex-brujos'}>Testimonios: Ex-Brujos</Link>
        <Link className="despliegue-sub-button-2"  to={'/testimonios-ex-sicarios'}>Testimonios: Ex-Sicarios</Link>
        <Link className="despliegue-sub-button-2"  to={'/testimonios-ex-transgenero'}>Testimonios: Ex-Transgenero</Link> 
    </div>
    let renderContenido = <div className='despliegue-sub-container' style={{ display: subDesplegable === 'contenido' ? 'inherit' : 'none' }}>
            <Link className='despliegue-sub-button' to={'/biblia-infantil'}>Biblia Infantil</Link>
            <div className="despliegue-sub-button" onClick={() => handleSecondSubDesplegable('material')}>Material Didáctico para imprimir</div>
            {renderContenidoSub}
        </div>;
    let renderComoEducar = <div style={{ display: subDesplegable === 'comoEducar' ? 'inherit' : 'none' }}>
            <Link className="despliegue-sub-button" to={'/como-educar'}>¿Cómo Educar?</Link>
            <Link className="despliegue-sub-button" to={'/apadrinamiento'}>Apadrinamiento</Link>
            <Link className="despliegue-sub-button" to={'/caricaturas-peligrosas'}>Caricaturas Peligrosas</Link>
            <Link className="despliegue-sub-button" to={'/halloween'}>Halloween</Link>
            <Link className="despliegue-sub-button" to={'/ouija'}>Ouija</Link>           
        </div>;
    let renderConcursos = <div className='despliegue-sub-container' style={{ display: subDesplegable === 'concursos' ? 'inherit' : 'none' }}>
            <Link className="despliegue-sub-button" to={'/concurso-canciones'}>Concursos y canciones</Link>
            <Link className="despliegue-sub-button" to={'/concurso-memoria'}>Concursos de memoria</Link> 
        </div>;

    const desplegable = (
        <div className='desplegar-nav' style={{ display: desplegar === 'open' ? 'inherit' : 'none' }}>
            <div className='despliegue-button'  onClick={() => handleSubDesplegable('conocenos')}>Conocenos</div>
                {renderConocenos}
            <div className='despliegue-button' onClick={() => handleSubDesplegable('proyectos')}>Proyectos</div>
                {renderProyectos}
            <div className='despliegue-button' onClick={() => handleSubDesplegable('contenido')}>Contenido</div>
                {renderContenido}
            <Link className='despliegue-button' to={'/escuela-para-padres'}>Escuela para Padres</Link>
            <Link className='despliegue-button' to={'/madres-triunfadoras'}>Madres Triunfadoras</Link>
            <Link className='despliegue-button' to={'/enfoque-a-la-familia'}>Enfoque a la familia</Link>
            <div className='despliegue-button' onClick={() => handleSubDesplegable('comoEducar')}>Cómo Educar</div>
                {renderComoEducar}
            <Link className='despliegue-button' to={'/folletos'}>Folletos</Link>
            <Link className='despliegue-button' to={'/periodicos'}>Periódicos</Link>
            <div className='despliegue-button' onClick={() => handleSubDesplegable('concursos')}>Concursos</div>
                {renderConcursos}
            <Link className='despliegue-button' to={'/investiganos'}>Investiganos</Link>
            <Link className='despliegue-button' to={'/juegos-super-libro'}>Juegos del SuperLibro</Link>
        </div>
    );

    return (
        <div className='nav-800'>
            <Link to={'/'}>
            <div className='home-icon-container'>
                <img className='home-icon' src={HomeIcon} alt="Home Icon" />
                <div>Home</div>
            </div>
            </Link>
            <div className='desplegar' onClick={handleDesplegar}>
                <Burger />
            </div>
            {desplegable}
        </div>
    );
}
