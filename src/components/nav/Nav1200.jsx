import React, { useEffect, useRef, useState } from 'react';
import '../../styles/nav.css';
import HomeIcon from '../../assets/HomeIcon.png';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

export default function Nav1200() {
    const [desplegable, setDesplegable] = useState('');
    const [subMenuVisible, setSubMenuVisible] = useState(false);
    const [subMenuVisibleUno, setSubMenuVisibleUno] = useState(false);
    const [subMenuVisibleDos, setSubMenuVisibleDos] = useState(false);
    const [subMenuVisibleTres, setSubMenuVisibleTres] = useState(false);
    const [subMenuVisibleCuatro, setSubMenuVisibleCuatro] = useState(false); // Añadido estado para el cuarto submenú

    const conocenosRef = useRef(null);
    const proyectosRef = useRef(null);
    const contenidoRef = useRef(null);
    const comoEducarRef = useRef(null);
    const concursosRef = useRef(null);
    const subMenuRef = useRef(null);
    const subMenuRefUno = useRef(null);
    const subMenuRefDos = useRef(null);
    const subMenuRefTres = useRef(null);
    const subMenuRefCuatro = useRef(null); // Añadido useRef para el cuarto submenú

    const handleClickOutside = (event) => {
        if (
        (conocenosRef.current && !conocenosRef.current.contains(event.target)) &&
        (proyectosRef.current && !proyectosRef.current.contains(event.target)) &&
        (contenidoRef.current && !contenidoRef.current.contains(event.target)) &&
        (comoEducarRef.current && !comoEducarRef.current.contains(event.target)) &&
        (concursosRef.current && !concursosRef.current.contains(event.target)) &&
        (subMenuRef.current && !subMenuRef.current.contains(event.target)) &&
        (subMenuRefUno.current && !subMenuRefUno.current.contains(event.target)) &&
        (subMenuRefDos.current && !subMenuRefDos.current.contains(event.target)) &&
        (subMenuRefTres.current && !subMenuRefTres.current.contains(event.target)) &&
        (subMenuRefCuatro.current && !subMenuRefCuatro.current.contains(event.target))
        ) {
        setDesplegable('');
        setSubMenuVisible(false);
        setSubMenuVisibleUno(false);
        setSubMenuVisibleDos(false);
        setSubMenuVisibleTres(false);
        setSubMenuVisibleCuatro(false); // Añadido para el cuarto submenú
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDesplegable = (content) => {
        if (desplegable === content) {
        if (subMenuVisibleUno === 'true') {setSubMenuVisibleUno(false)};
        if (subMenuVisibleDos) setSubMenuVisibleDos(false);
        if (subMenuVisibleTres) setSubMenuVisibleTres(false);
        if (subMenuVisibleCuatro) setSubMenuVisibleCuatro(false);

        setDesplegable('');
        setSubMenuVisible(false);
        } else {
        setDesplegable(content);
        }
    };

    const toggleSubMenu = () => {
        setSubMenuVisible(prev => !prev);
    };

    const toggleSubMenuUno = () => {
        setSubMenuVisibleUno(prev => !prev);
        setSubMenuVisibleDos(false);
        setSubMenuVisibleTres(false);
        setSubMenuVisibleCuatro(false);
    };

    const toggleSubMenuDos = () => {
        setSubMenuVisibleDos(prev => !prev);
        setSubMenuVisibleUno(false);
        setSubMenuVisibleTres(false);
        setSubMenuVisibleCuatro(false);
    };

    const toggleSubMenuTres = () => {
        setSubMenuVisibleTres(prev => !prev);
        setSubMenuVisibleUno(false);
        setSubMenuVisibleDos(false);
        setSubMenuVisibleCuatro(false);
    };

    const toggleSubMenuCuatro = () => {
        setSubMenuVisibleCuatro(prev => !prev);
        if (desplegable !== 'proyectos') {
        setSubMenuVisibleUno(false);
        setSubMenuVisibleDos(false);
        setSubMenuVisibleTres(false);
        }
    };

    const conocenos = (
    <div className="desplegable" ref={conocenosRef}>
        <Link className="button-navN" to={'/historia'}>Historia</Link><br />
        <Link className="button-navN" to={'/informacion-corporativa'}>Información Corporativa</Link><br />
        <Link className="button-navN" to={'/fundador'}>Fundador</Link>
    </div>
    );

    const proyectos = (
    <div className="desplegable" ref={proyectosRef}>
        <div>
        <div
            onMouseEnter={toggleSubMenuUno}
            className="sub-menu-container"
        >
            <Link to={'/el-jardin-con-el-amor-de-dios'}> El jardín con el amor de Dios - Para preescolar<div style={{position: 'absolute', right: '0', margin: 'auto', color: 'gold'}}><FaChevronRight /></div></Link>      
        {subMenuVisibleUno && (
            <div className="desplegable-2" ref={subMenuRefUno}>
            <Link className="button-navN" to={'/folleto-curso-para-capacitadores'}>Folleto: Curso para Capacitadores</Link><br />
            <Link className="button-navN" to={'/folleto-como-ayudar-a-sus-hijos'}>Folleto: Cómo ayudar a tus Hijos</Link><br />
            <Link className="button-navN" to={'/videos-que-promueven-valores'}>Videos: Canciones que Promueven los Valores</Link><br />
            <Link className="button-navN" to={'/videos-canciones-biblicas-pequenos-heroes'}>Videos: Canciones Pequeños Héroes</Link><br />
            <Link className="button-navN" to={'/videos-historias-biblicas-pequenos-heroes'}>Videos: Historias Bíblicas Pequeños Héroes</Link><br />
            <Link className="button-navN" to={'/memorizando-versiculos'}>Videos: Canciones con Versículos para Memorizar</Link>
            </div>
        )}
        </div>
        </div>
        <div>
        <div
            onMouseEnter={toggleSubMenuDos}
            className="sub-menu-container"
        >
            <Link to={'/una-ninez-con-el-proposito-de-dios'}>Una niñez con el propósito de Dios <div style={{position: 'absolute', right: '0', margin: 'auto', color: 'gold'}}><FaChevronRight /></div> </Link>     
        {subMenuVisibleDos && (
            <div className="desplegable-2" ref={subMenuRefDos}>
            <Link className="button-navN"  to={'/folleto-una-ninez-con-el-proposito-de-dios'}>Folleto: una Niñez con el Propósito de Dios</Link><br />
            <Link className="button-navN"  to={'/folleto-como-ayudar-a-sus-hijos'}>Folleto: Cómo Ayudar a tus Hijos</Link><br />
            <Link className="button-navN"  to={'/videos-una-ninez-con-el-proposito-de-dios'}>Videos: una Niñez con el Propósito de Dios</Link><br />
            <Link className="button-navN"  to={'/videos-de-pablito-el-pequeno-misionero'}>Videos: Pablito el Pequeño Misionero</Link><br />
            <Link className="button-navN"  to={'/videos-el-superlibro'}>Videos: Super Libro</Link><br />
            <Link className="button-navN"  to={'/videos-versiculos-para-memorizar'}>Videos: Versículos para Memorizar</Link>   
            </div>
        )}
        </div>
        </div>
        <div>
        <div
            onMouseEnter={toggleSubMenuTres}
            className="sub-menu-container"
        >
            <Link to={'/jovenes-constructores-de-paz-y-amor'}> Jóvenes constructores de paz y amor - de 4° a 11° grado<div style={{position: 'absolute', right: '0', margin: 'auto', color: 'gold'}}><FaChevronRight /></div></Link>          
        {subMenuVisibleTres && (
            <div className="desplegable-2" ref={subMenuRefTres}>
            <Link className="button-navN"  to={'/aprende-sobre-jesus'}>Aprende sobre Jesús</Link><br />
            <Link className="button-navN"  to={'/folleto-la-prevencion'}>Folleto: La Prevención</Link><br />
            <Link className="button-navN"  to={'/folleto-la-armadura-de-dios'}>Folleto: La Armadura de Dios</Link><br />
            <Link className="button-navN"  to={'/folleto-libretos'}>Folleto: Libretos (para pagar alfabetización)</Link><br />
            <Link className="button-navN"  to={'/folleto-jesucristo'}>Folleto: Jesucristo</Link><br />          
            <div
                onMouseEnter={toggleSubMenuCuatro}
                className="sub-menu-container"
            >
                Jesús y la Identidad<div style={{position: 'absolute', right: '0', margin: 'auto', color: 'gold'}}><FaChevronRight /></div>           
            {subMenuVisibleCuatro && (
                <div className="desplegable-2" ref={subMenuRefCuatro}>
                <Link className="button-navN"  to={'/testimonios-ex-homosexuales'}>Testimonios: Ex-Homosexuales</Link><br />            
                <Link className="button-navN"  to={'/testimonios-ex-lesbianas'}>Testimonios: Ex-Lesbianas</Link><br />
                <Link className="button-navN"  to={'/testimonios-ex-prostitutas'}>Testimonios: Ex-Transgéneros</Link><br />
                <Link className="button-navN"  to={'/testimonios-ex-brujos'}>Testimonios: Ex-Brujos</Link><br />
                <Link className="button-navN"  to={'/testimonios-ex-sicarios'}>Testimonios: Ex-Sicarios</Link><br />
                <Link className="button-navN"  to={'/testimonios-ex-transgenero'}>Testimonios: Ex-Transgenero</Link>   
                </div>
            )}
            </div>
            </div>
        )}
        </div>    
        </div>                 
    </div>
    );

    const contenido = (
    <div className="desplegable">
        <Link className="button-navN" to={'/biblia-infantil'}>Biblia Infantil</Link>
        <div>
        <div
            onMouseEnter={() => setSubMenuVisible(true)}
            onMouseLeave={() => setSubMenuVisible(false)}
            onClick={toggleSubMenu}
            className="sub-menu-container"
        >
            Material Didáctico para imprimir<div style={{position: 'absolute', right: '0', margin: 'auto', color: 'gold'}}><FaChevronRight /></div>      
        {subMenuVisible && (
            <div className="desplegable-2" ref={subMenuRef}>
            <Link className="button-navN" to={'/para-colorear-y-memorizar'}>Para Colorear y Memorizar Versículos de la Biblia</Link><br />
            <Link className="button-navN" to={'/para-colorear-el-reino-de-los-cielos'}>Para Colorear el Reino de los Cielos</Link><br />
            <Link className="button-navN" to={'/familias-del-reino-animal'}>Para Colorear Familias Humanas y del Reino Animal</Link><br />
            <Link className="button-navN" to={'/dia-del-nino-para-colorear'}>Carteleras del Día del Niño</Link><br />
            <Link className="button-navN" to={'/cartelera-sobre-valores-para-imprimir'}>Carteleras Sobre Valores para Adolescentes</Link><br />
            <Link className="button-navN" to={'/cartelera-patios-para-imprimir'}>Carteleras Patios para Imprimir</Link><br />
            <Link className="button-navN" to={'/la-armadura-de-dios-para-imprimir-y-recorta'}>La Armadura de Dios para Imprimir y Recortar</Link>
            </div>
        )}
        </div>
        </div>
    </div>
    );

    const comoEducar = (
    <div className="desplegable">
        <Link className="button-navN" to={'/como-educar'}>¿Cómo Educar?</Link><br />
        <Link className="button-navN" to={'/apadrinamiento'}>Apadrinamiento</Link><br />
        <Link className="button-navN" to={'/caricaturas-peligrosas'}>Caricaturas Peligrosas</Link><br />
        <Link className="button-navN" to={'/halloween'}>Halloween</Link><br />
        <Link className="button-navN" to={'/ouija'}>Ouija</Link>
    </div>
    );

    const concursos = (
    <div className="desplegable">
        <Link className="button-navN" to={'/concurso-canciones'}>Concursos y canciones</Link><br />
        <Link className="button-navN" to={'/concurso-memoria'}>Concursos de memoria</Link>      
    </div>
    );

    return(
        <div>
            <div className='nav'>
            <Link to={'/'}>
            <div className='home-icon-container'>
                <img className='home-icon' src={HomeIcon} alt="Home Icon" />
                <div>Home</div>
            </div>
            </Link>
            <div className="nav-row">
            <div className='nav-menu'>
                <div
                className='gold-bar'
                onClick={() => toggleDesplegable('conocenos')}
                onMouseEnter={() => setDesplegable('conocenos')}
                onMouseLeave={() => setDesplegable('')}
                ref={conocenosRef}
                >
                <div>Conocenos</div>
                {desplegable === 'conocenos' && conocenos}
                </div>
                <div
                className='gold-bar'
                onClick={() => toggleDesplegable('proyectos')}
                onMouseEnter={() => setDesplegable('proyectos')}
                onMouseLeave={() => setDesplegable('')}
                ref={proyectosRef}
                >
                <div>Proyectos</div>
                {desplegable === 'proyectos' && proyectos}
                </div>
                <div
                className='gold-bar'
                onClick={() => toggleDesplegable('contenido')}
                onMouseEnter={() => setDesplegable('contenido')}
                onMouseLeave={() => setDesplegable('')}
                ref={contenidoRef}
                >
                <div>Contenido</div>
                {desplegable === 'contenido' && contenido}
                </div>
                <Link style={{textDecoration: 'none'}} to={'/escuela-para-padres'}><div className='gold-bar'>Escuela para padres</div></Link>
                <Link style={{textDecoration: 'none'}} to={'/madres-triunfadoras'}><div className='gold-bar'>Madres triunfadoras</div></Link>
                <Link style={{textDecoration: 'none'}} to={'/enfoque-a-la-familia'}><div className='gold-bar'>Enfoque a la familia</div></Link>            
                <div
                className='gold-bar'
                onClick={() => toggleDesplegable('comoEducar')}
                onMouseEnter={() => setDesplegable('comoEducar')}
                onMouseLeave={() => setDesplegable('')}
                ref={comoEducarRef}
                >
                <div>Cómo Educar</div>
                {desplegable === 'comoEducar' && comoEducar}
                </div>
                <Link style={{textDecoration: 'none'}} to={'/folletos'}><div className='gold-bar'>Folletos</div></Link>
                <Link style={{textDecoration: 'none'}} to={'/periodicos'}><div className='gold-bar'>Periódicos</div></Link>
                <div
                className='gold-bar'
                onClick={() => toggleDesplegable('concursos')}
                onMouseEnter={() => setDesplegable('concursos')}
                onMouseLeave={() => setDesplegable('')}
                ref={concursosRef}
                >
                <div>Concursos</div>
                {desplegable === 'concursos' && concursos}
                </div>
                <Link style={{textDecoration: 'none'}} to={'/investiganos'}><div className='gold-bar'>Investiganos</div></Link>
                <Link style={{textDecoration: 'none'}} to={'/juegos-super-libro'}><div className='gold-bar'>Juegos del SuperLibro</div></Link>
            </div>
            </div>
        </div>
        </div>
    );
}