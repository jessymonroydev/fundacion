import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import FotoUno from "../assets/imgIndex/FotoUno.png";
import ElAmor from "../assets/imgIndex/ElAmor.jpg";
import ElInfierno from "../assets/imgIndex/ElInfierno.jpg";
import LaIdolatria from "../assets/imgIndex/LaIdolatria.jpg";
import LaInmoralidad from "../assets/imgIndex/LaInmoralidad.jpg";
import NacerDeNuevo from "../assets/imgIndex/NacerDeNuevo.jpg";
import PrevenirElAbuso from "../assets/imgIndex/PrevenirElAbuso.jpg";
import ReinoDeLosCielos from "../assets/imgIndex/ReinoDeLosCielos.jpg";
import Satanas from "../assets/imgIndex/Satanas.jpg";
import Tendencias from "../assets/imgIndex/Tendencias.jpg";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import LetrasGloboPequeñas from '../subcomponent/LetrasGloboPequeñas.jsx';
import Nav from '../components/nav/Nav.jsx';
import Star from '../subcomponent/Star.jsx';
import PrimalNav from '../components/primalNav/PrimalNav.jsx';
import Footer from '../components/footer/Footer.jsx';
import Carrousel from '../components/carrousel/Carrousel.jsx';
import ElCelular from '../assets/imgIndex/ElCelular.png';
import LetrasGloboPequeñasAzul from '../subcomponent/LetrasGloboPequeñasAzul.jsx';
import LetrasGloboPequeñasRojo from '../subcomponent/LetrasGloboPequeñasRojo.jsx';
import LetrasGloboPequeñasVerde from '../subcomponent/LetrasGloboPequeñasVerde.jsx';
import LetrasGloboPequeñasAmarillo from '../subcomponent/LetrasGloboPequeñasAmarillo.jsx';
import VideoSyntax from '../subcomponent/VideoSyntax.jsx';

export default function Home() {

  return (
    <div className='Home'>
      <Star />           
      <div className='page-container'>
      <PrimalNav /> 
      <div className='xxxx' style={{width: '90%', margin: 'auto', display: 'flex', flexDirection: 'column'}}><LetrasGlobo texto={`EN MATEO 19:14: JESUS DIJO: `}/><LetrasGlobo texto={ 'DEJEN QUE LOS NIÑOS VENGAN A MI PORQUE EL REINO DE LOS CIELOS ES DE QUIENES SON COMO ELLOS'} /></div>      
        <div className='nav-buttons'>
          <Link to={'/videos-reino-de-los-cielos-inicio'}>
            <div className='button-nav'><Carrousel carrousel={'reino'}/></div>
            <div style={{margin: '20px', display: 'flex', justifyContent: 'center', width: '100%'}}>
              <LetrasGloboPequeñas texto = {'Reino de los cielos'} /> 
            </div>             
          </Link>
          <Link to={'/videos-la-creacion'}>
            <div className='button-nav'><Carrousel carrousel={'creacion'}/></div>
            <div style={{margin: '20px', display: 'flex', justifyContent: 'center', width: '100%'}}>
              <LetrasGloboPequeñas texto = {'La creacion'} />
            </div>
          </Link>
          <Link to={'/videos-el-castigo'}>
            <div className='button-nav'><Carrousel carrousel={'castigo'}/></div>
            <div style={{margin: '20px', display: 'flex', justifyContent: 'center', width: '100%'}}>
              <LetrasGloboPequeñas texto = {'El castigo'} />
            </div>
          </Link>                                       
        </div>
        <div className='nav-buttons'>
          <div className='button-nav'>
            <iframe width="560" height="250" src="https://www.youtube.com/embed/9VKLxto5BDU?si=V0skUYm0q6daF9Dp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
          </div>
          <div className='button-nav'>
            <iframe width="560" height="250" src="https://www.youtube.com/embed/bvvhpbwTr1o?si=4geUqJ5612PuNaN1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
          </div>
          <div className='button-nav'>
            <iframe width="560" height="250" src="https://www.youtube.com/embed/Dsy9pBVWPhk?si=48K7VSXecUZqCo5a" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
          </div>
        </div>
        <Nav />
        <div className='content-home'>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`EL CELULAR ES ADICTIVO Y ALTERA LA CONDUCTA DE LOS NIÑOS`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/el-celular'}>                    
                  <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                      <LetrasGloboPequeñasAmarillo texto={'descubre aqui: el celular es adictivo y altera la conducta '} />                       
                    </div> 
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>   
                      <LetrasGloboPequeñasAmarillo texto={'dios '} />
                      <LetrasGloboPequeñasAmarillo texto={'habla '} />
                      <LetrasGloboPequeñasAmarillo texto={'hoy '} />  
                      <LetrasGloboPequeñasVerde texto={'2 '} />                                     
                      <LetrasGloboPequeñasVerde texto={'timoteo '} />
                      <LetrasGloboPequeñasVerde texto={'3: 16: '} />
                      <LetrasGloboPequeñasAzul texto={'toda '} /> 
                      <LetrasGloboPequeñasAzul texto={'escritura '} /> 
                      <LetrasGloboPequeñasAzul texto={'esta '} /> 
                      <LetrasGloboPequeñasAzul texto={'inspirada '} /> 
                      <LetrasGloboPequeñasAzul texto={'por '} /> 
                      <LetrasGloboPequeñasAzul texto={'dios '} /> 
                      <LetrasGloboPequeñasAzul texto={'y '} /> 
                      <LetrasGloboPequeñasAzul texto={'es '} /> 
                      <LetrasGloboPequeñasRojo texto={'util '} /> 
                      <LetrasGloboPequeñasRojo texto={'para '} /> 
                      <LetrasGloboPequeñasRojo texto={'enseñar '} /> 
                      <LetrasGloboPequeñasRojo texto={'y '} /> 
                      <LetrasGloboPequeñasRojo texto={'reprender, '} />  
                      <LetrasGloboPequeñasAzul texto={'para '} /> 
                      <LetrasGloboPequeñasAzul texto={'corregir '} /> 
                      <LetrasGloboPequeñasAzul texto={'y '} /> 
                      <LetrasGloboPequeñasAzul texto={'educar '} /> 
                      <LetrasGloboPequeñasAzul texto={'en '} /> 
                      <LetrasGloboPequeñasAzul texto={'una '} /> 
                      <LetrasGloboPequeñasAzul texto={'vida '} /> 
                      <LetrasGloboPequeñasAzul texto={'de '} />                      
                      <LetrasGloboPequeñasAzul texto={'rectitud. '} />
                    </div>
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                      <LetrasGloboPequeñasVerde texto={'deuteronomio '} /> 
                      <LetrasGloboPequeñasVerde texto={'11: 19: '} /> 
                      <LetrasGloboPequeñasAzul texto={'instruyanen '} /> 
                      <LetrasGloboPequeñasAzul texto={'a '} /> 
                      <LetrasGloboPequeñasAzul texto={'sus '} /> 
                      <LetrasGloboPequeñasAzul texto={'hijos '} /> 
                      <LetrasGloboPequeñasAzul texto={'hablandoles '} /> 
                      <LetrasGloboPequeñasAzul texto={'de ellas '} />
                      <LetrasGloboPequeñasAzul texto={'tanto '} />
                      <LetrasGloboPequeñasAzul texto={'en '} />
                      <LetrasGloboPequeñasAzul texto={'la '} />
                      <LetrasGloboPequeñasAzul texto={'casa '} />
                      <LetrasGloboPequeñasAzul texto={'como '} />
                      <LetrasGloboPequeñasAzul texto={'en '} />
                      <LetrasGloboPequeñasAzul texto={'el '} />
                      <LetrasGloboPequeñasAzul texto={'camino, '} />
                      <LetrasGloboPequeñasAzul texto={'y '} />
                      <LetrasGloboPequeñasAzul texto={'cuando '} />
                      <LetrasGloboPequeñasAzul texto={'se '} />
                      <LetrasGloboPequeñasRojo texto={'acuesten, '} />
                      <LetrasGloboPequeñasRojo texto={'y '} />
                      <LetrasGloboPequeñasRojo texto={'cuando '} />
                      <LetrasGloboPequeñasRojo texto={'se '} />
                      <LetrasGloboPequeñasAzul texto={'levanten. '} />
                      <LetrasGloboPequeñasVerde texto={'escribanlas '} />
                      <LetrasGloboPequeñasVerde texto={'en '} />
                      <LetrasGloboPequeñasVerde texto={'los '} />
                      <LetrasGloboPequeñasVerde texto={'postes '} />
                      <LetrasGloboPequeñasVerde texto={'y '} />
                      <LetrasGloboPequeñasVerde texto={'en '} />
                      <LetrasGloboPequeñasVerde texto={'las '} />
                      <LetrasGloboPequeñasVerde texto={'puertas '} />
                      <LetrasGloboPequeñasVerde texto={'de '} />
                      <LetrasGloboPequeñasVerde texto={'sus '} />
                      <LetrasGloboPequeñasVerde texto={'casas. '} />                                                                                                                              
                    </div>
                  </Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-el-celular'}>
                    <img className='img-index' src={ElCelular} alt="El Celular" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE "EL CELULAR" DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>  
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`PONTE "LA ARMADURA DE DIOS" PARA VENCER LA TENTACION Y LA CONDENACION`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/la-armadura-de-dios'}>
                    <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                      <LetrasGloboPequeñasAmarillo texto={'ponte la armadura de dios para vencer las tentaciones'} />
                    </div>  
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>                      
                      <LetrasGloboPequeñasAmarillo texto={'dios '} />
                      <LetrasGloboPequeñasAmarillo texto={'habla '} />
                      <LetrasGloboPequeñasAmarillo texto={'hoy '} />
                      <LetrasGloboPequeñasVerde texto={'1 '} />
                      <LetrasGloboPequeñasVerde texto={'pedro '} />
                      <LetrasGloboPequeñasVerde texto={'5:8: '} />
                      <LetrasGloboPequeñasAzul texto={'sean '} /> 
                      <LetrasGloboPequeñasAzul texto={'prudentes '} /> 
                      <LetrasGloboPequeñasAzul texto={'y '} /> 
                      <LetrasGloboPequeñasAzul texto={'mantenganse '} /> 
                      <LetrasGloboPequeñasAzul texto={'despiertos, '} />                       
                      <LetrasGloboPequeñasAzul texto={'porque'} /> 
                      <div style={{width: '10px'}}></div>
                      <LetrasGloboPequeñasRojo texto={'su '} />
                      <LetrasGloboPequeñasRojo texto={'enemigo '} />
                      <LetrasGloboPequeñasRojo texto={'el '} />
                      <LetrasGloboPequeñasRojo texto={'diablo,'} />
                      <LetrasGloboPequeñasRojo texto={'como '} />
                      <LetrasGloboPequeñasRojo texto={'un '} />
                      <LetrasGloboPequeñasRojo texto={'leon '} />
                      <LetrasGloboPequeñasRojo texto={'rugiente, '} />
                      <LetrasGloboPequeñasRojo texto={'anda '} />
                      <LetrasGloboPequeñasRojo texto={'buscando '} />
                      <LetrasGloboPequeñasRojo texto={'a '} />
                      <LetrasGloboPequeñasRojo texto={'quien '} />
                      <LetrasGloboPequeñasRojo texto={'devorar.'} />
                    </div>
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>                      
                      <LetrasGloboPequeñasVerde texto={'Santiago '} />
                      <LetrasGloboPequeñasVerde texto={'4:7: '} />
                      <LetrasGloboPequeñasAzul texto={'sometanse, '} /> 
                      <LetrasGloboPequeñasAzul texto={'pues, '} /> 
                      <LetrasGloboPequeñasAzul texto={'a '} /> 
                      <LetrasGloboPequeñasAzul texto={'dios. '} /> 
                      <LetrasGloboPequeñasRojo texto={'resistan '} />
                      <LetrasGloboPequeñasRojo texto={'al '} />
                      <LetrasGloboPequeñasRojo texto={'diablo, '} />
                      <LetrasGloboPequeñasAzul texto={'y '} />
                      <LetrasGloboPequeñasAzul texto={'este '} />
                      <LetrasGloboPequeñasAzul texto={'huira '} />
                      <LetrasGloboPequeñasAzul texto={'de '} />
                      <LetrasGloboPequeñasAzul texto={'ustedes. '} />
                    </div>       
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>                      
                      <LetrasGloboPequeñasVerde texto={'marcos '} />
                      <LetrasGloboPequeñasVerde texto={'16:17: '} />
                      <LetrasGloboPequeñasAzul texto={'y '} /> 
                      <LetrasGloboPequeñasAzul texto={'estas '} /> 
                      <LetrasGloboPequeñasAzul texto={'señales '} /> 
                      <LetrasGloboPequeñasAzul texto={'acompañan '} /> 
                      <LetrasGloboPequeñasAzul texto={'a '} /> 
                      <LetrasGloboPequeñasAzul texto={'los '} /> 
                      <LetrasGloboPequeñasAzul texto={'que '} /> 
                      <LetrasGloboPequeñasAzul texto={'creen: '} /> 
                      <LetrasGloboPequeñasRojo texto={'en '} />
                      <LetrasGloboPequeñasRojo texto={'mi '} />
                      <LetrasGloboPequeñasRojo texto={'nombre '} />
                      <LetrasGloboPequeñasRojo texto={'expulsaran '} />
                      <LetrasGloboPequeñasRojo texto={'demonios. '} />
                    </div> 
                  
                  </Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-la-armadura-de-dios'}>
                    <img className='img-index' src={FotoUno} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`EL REINO DE LOS CIELOS ES REAL SEGUN LA BIBLIA`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/el-reino-de-los-cielos'}>
                    <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                      <LetrasGloboPequeñasAmarillo texto={'el reino de los cielos es real'} />
                    </div> 
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>  
                      <LetrasGloboPequeñasAmarillo texto={'dios '} />
                      <LetrasGloboPequeñasAmarillo texto={'habla '} />
                      <LetrasGloboPequeñasAmarillo texto={'hoy '} />                                          
                      <LetrasGloboPequeñasVerde texto={'1 '} />
                      <LetrasGloboPequeñasVerde texto={'corintios '} />
                      <LetrasGloboPequeñasVerde texto={'6: 9 - 10: '} />
                      <LetrasGloboPequeñasAzul texto={'¿no '} /> 
                      <LetrasGloboPequeñasAzul texto={'saben '} /> 
                      <LetrasGloboPequeñasAzul texto={'ustedes '} /> 
                      <LetrasGloboPequeñasAzul texto={'que '} /> 
                      <LetrasGloboPequeñasAzul texto={'los '} /> 
                      <LetrasGloboPequeñasAzul texto={'que '} /> 
                      <LetrasGloboPequeñasRojo texto={'cometen '} />
                      <LetrasGloboPequeñasRojo texto={'injusticias '} />
                      <LetrasGloboPequeñasRojo texto={'no '} />
                      <LetrasGloboPequeñasRojo texto={'tendran '} />
                      <LetrasGloboPequeñasRojo texto={'parte '} />
                      <LetrasGloboPequeñasAzul texto={'en '} /> 
                      <LetrasGloboPequeñasAzul texto={'el '} /> 
                      <LetrasGloboPequeñasAzul texto={'reino '} /> 
                      <LetrasGloboPequeñasAzul texto={'de '} /> 
                      <LetrasGloboPequeñasAzul texto={'dios? '} /> 
                      <LetrasGloboPequeñasRojo texto={'no '} />
                      <LetrasGloboPequeñasRojo texto={'se '} />
                      <LetrasGloboPequeñasRojo texto={'dejen '} />
                      <LetrasGloboPequeñasRojo texto={'engañar, '} />
                      <LetrasGloboPequeñasAzul texto={'pues '} />
                      <LetrasGloboPequeñasAzul texto={'en '} />  
                      <LetrasGloboPequeñasAzul texto={'el '} />
                      <LetrasGloboPequeñasAzul texto={'reino '} />
                      <LetrasGloboPequeñasAzul texto={'de '} />
                      <LetrasGloboPequeñasAzul texto={'dios '} />  
                      <LetrasGloboPequeñasRojo texto={'no '} />
                      <LetrasGloboPequeñasRojo texto={'tendran '} />
                      <LetrasGloboPequeñasRojo texto={'parte '} />
                      <LetrasGloboPequeñasRojo texto={'los '} />
                      <LetrasGloboPequeñasRojo texto={'que '} />
                      <LetrasGloboPequeñasRojo texto={'se '} />
                      <LetrasGloboPequeñasRojo texto={'entregan '} />
                      <LetrasGloboPequeñasRojo texto={'a '} />
                      <LetrasGloboPequeñasRojo texto={'la '} />
                      <LetrasGloboPequeñasRojo texto={'prostitucion, '} />       
                      <LetrasGloboPequeñasRojo texto={'ni '} />    
                      <LetrasGloboPequeñasRojo texto={'los '} />    
                      <LetrasGloboPequeñasRojo texto={'idolatras, '} />    
                      <LetrasGloboPequeñasRojo texto={'ni '} /> 
                      <LetrasGloboPequeñasRojo texto={'los '} /> 
                      <LetrasGloboPequeñasRojo texto={'que '} /> 
                      <LetrasGloboPequeñasRojo texto={'cometen '} /> 
                      <LetrasGloboPequeñasRojo texto={'adulterio, '} />    
                      <LetrasGloboPequeñasRojo texto={'ni '} />  
                      <LetrasGloboPequeñasRojo texto={'los '} />  
                      <LetrasGloboPequeñasRojo texto={'afeminados, '} />      
                      <LetrasGloboPequeñasRojo texto={'ni '} /> 
                      <LetrasGloboPequeñasRojo texto={'los '} /> 
                      <LetrasGloboPequeñasRojo texto={'homosexuales, '} />   
                      <LetrasGloboPequeñasRojo texto={'ni '} />  
                      <LetrasGloboPequeñasRojo texto={'los '} />  
                      <LetrasGloboPequeñasRojo texto={'que '} />  
                      <LetrasGloboPequeñasRojo texto={'roban, '} />  
                      <LetrasGloboPequeñasRojo texto={'ni '} /> 
                      <LetrasGloboPequeñasRojo texto={'los '} /> 
                      <LetrasGloboPequeñasRojo texto={'avaros, '} /> 
                      <LetrasGloboPequeñasRojo texto={'ni '} />
                      <LetrasGloboPequeñasRojo texto={'los '} />  
                      <LetrasGloboPequeñasRojo texto={'borrachos, '} />
                      <LetrasGloboPequeñasRojo texto={'ni '} />
                      <LetrasGloboPequeñasRojo texto={'los '} />
                      <LetrasGloboPequeñasRojo texto={'maldicientes, '} />
                      <LetrasGloboPequeñasRojo texto={'ni '} />
                      <LetrasGloboPequeñasRojo texto={'los '} />
                      <LetrasGloboPequeñasRojo texto={'ladrones. '} />
                    </div> 
                  </Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-el-reino-de-los-cielos'}>
                    <img className='img-index' src={ReinoDeLosCielos} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`EL AMOR, EL NUEVO MANDAMIENTO PARA IR AL REINO DE LOS CIELOS`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/el-amor'}>
                    <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                      <LetrasGloboPequeñasAmarillo texto={'el amor, el nuevo mandamiento para vivir en el reino de los cielos'} />
                    </div> 
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>  
                      <LetrasGloboPequeñasAmarillo texto={'dios '} />
                      <LetrasGloboPequeñasAmarillo texto={'habla '} />
                      <LetrasGloboPequeñasAmarillo texto={'hoy '} />                                          
                      <LetrasGloboPequeñasVerde texto={'juan '} />
                      <LetrasGloboPequeñasVerde texto={'13: 34: '} />
                      <LetrasGloboPequeñasAzul texto={'les '} /> 
                      <LetrasGloboPequeñasAzul texto={'doy '} /> 
                      <LetrasGloboPequeñasAzul texto={'este '} /> 
                      <LetrasGloboPequeñasAzul texto={'mandamiento '} /> 
                      <LetrasGloboPequeñasAzul texto={'nuevo: '} /> 
                      <LetrasGloboPequeñasAzul texto={'que '} /> 
                      <LetrasGloboPequeñasAzul texto={'se '} /> 
                      <LetrasGloboPequeñasAzul texto={'amen '} /> 
                      <LetrasGloboPequeñasAzul texto={'los '} /> 
                      <LetrasGloboPequeñasAzul texto={'unos '} /> 
                      <LetrasGloboPequeñasAzul texto={'a '} /> 
                      <LetrasGloboPequeñasAzul texto={'los '} /> 
                      <LetrasGloboPequeñasAzul texto={'otros. '} /> 
                      <LetrasGloboPequeñasVerde texto={'asi '} />
                      <LetrasGloboPequeñasVerde texto={'como '} />
                      <LetrasGloboPequeñasVerde texto={'yo '} />
                      <LetrasGloboPequeñasVerde texto={'los '} />
                      <LetrasGloboPequeñasVerde texto={'amo '} />
                      <LetrasGloboPequeñasVerde texto={'a '} />
                      <LetrasGloboPequeñasVerde texto={'ustedes, '} />
                      <LetrasGloboPequeñasAzul texto={'asi '} />
                      <LetrasGloboPequeñasAzul texto={'deben '} />
                      <LetrasGloboPequeñasAzul texto={'amarse '} />
                      <LetrasGloboPequeñasAzul texto={'ustedes '} />
                      <LetrasGloboPequeñasAzul texto={'los '} />
                      <LetrasGloboPequeñasAzul texto={'unos '} />
                      <LetrasGloboPequeñasAzul texto={'a '} />
                      <LetrasGloboPequeñasAzul texto={'los '} />
                      <LetrasGloboPequeñasAzul texto={'otros. '} />
                      <LetrasGloboPequeñasAzul texto={'si '} />
                      <LetrasGloboPequeñasAzul texto={'se '} />
                      <LetrasGloboPequeñasAzul texto={'aman '} />
                      <LetrasGloboPequeñasAzul texto={'los '} />
                      <LetrasGloboPequeñasAzul texto={'unos '} />
                      <LetrasGloboPequeñasAzul texto={'a '} />
                      <LetrasGloboPequeñasAzul texto={'los '} />
                      <LetrasGloboPequeñasAzul texto={'otros, '} />
                      <LetrasGloboPequeñasAzul texto={'todo '} />
                      <LetrasGloboPequeñasAzul texto={'el '} />
                      <LetrasGloboPequeñasAzul texto={'mundo '} />
                      <LetrasGloboPequeñasAzul texto={'se '} />
                      <LetrasGloboPequeñasAzul texto={'dara '} />
                      <LetrasGloboPequeñasAzul texto={'cuenta '} />
                      <LetrasGloboPequeñasVerde texto={'que '} />
                      <LetrasGloboPequeñasVerde texto={'son '} />
                      <LetrasGloboPequeñasVerde texto={'discipulos '} />
                      <LetrasGloboPequeñasVerde texto={'mios. '} />
                    </div> 
                  </Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-el-amor'}>
                    <img className='img-index' src={ElAmor} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`TENEMOS QUE NACER DE NUEVO PARA SER COMO NIÑOS`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/nacer-de-nuevo'}>
                  <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                      <LetrasGloboPequeñasAmarillo texto={'tenemos '} />
                      <LetrasGloboPequeñasAmarillo texto={'que '} />
                      <LetrasGloboPequeñasAmarillo texto={'nacer '} />
                      <LetrasGloboPequeñasAmarillo texto={'de '} />
                      <LetrasGloboPequeñasAmarillo texto={'nuevo '} />
                      <LetrasGloboPequeñasAmarillo texto={'para '} />
                      <LetrasGloboPequeñasAmarillo texto={'ser '} />
                      <LetrasGloboPequeñasAmarillo texto={'como '} />
                      <LetrasGloboPequeñasAmarillo texto={'niños '} />
                      <LetrasGloboPequeñasAmarillo texto={'y '} />
                      <LetrasGloboPequeñasAmarillo texto={'vivir '} />
                      <LetrasGloboPequeñasAzul texto={'en '} /> 
                      <LetrasGloboPequeñasAzul texto={'el '} /> 
                      <LetrasGloboPequeñasAzul texto={'reino '} /> 
                      <LetrasGloboPequeñasAzul texto={'de '} /> 
                      <LetrasGloboPequeñasAzul texto={'los '} /> 
                      <LetrasGloboPequeñasAzul texto={'cielos '} /> 
                    </div> 
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>  
                      <LetrasGloboPequeñasAmarillo texto={'dios '} />
                      <LetrasGloboPequeñasAmarillo texto={'habla '} />
                      <LetrasGloboPequeñasAmarillo texto={'hoy '} />                                          
                      <LetrasGloboPequeñasVerde texto={'mateo '} />
                      <LetrasGloboPequeñasVerde texto={'19: 14: '} />
                      <LetrasGloboPequeñasAzul texto={'entonces '} /> 
                      <LetrasGloboPequeñasAzul texto={'jesus '} /> 
                      <LetrasGloboPequeñasAzul texto={'dijo:  '} /> 
                      <LetrasGloboPequeñasAzul texto={'dejen '} /> 
                      <LetrasGloboPequeñasAzul texto={'que: '} /> 
                      <LetrasGloboPequeñasAzul texto={'los '} /> 
                      <LetrasGloboPequeñasAzul texto={'niños '} /> 
                      <LetrasGloboPequeñasAzul texto={'vengan '} /> 
                      <LetrasGloboPequeñasAzul texto={'a '} /> 
                      <LetrasGloboPequeñasAzul texto={'mi, '} /> 
                      <LetrasGloboPequeñasAzul texto={'y '} /> 
                      <LetrasGloboPequeñasAzul texto={'no '} /> 
                      <LetrasGloboPequeñasAzul texto={'se '} /> 
                      <LetrasGloboPequeñasAzul texto={'lo '} /> 
                      <LetrasGloboPequeñasAzul texto={'impidan, '} /> 
                      <LetrasGloboPequeñasAzul texto={'porque '} /> 
                      <LetrasGloboPequeñasAzul texto={'el '} /> 
                      <LetrasGloboPequeñasAzul texto={'reino '} /> 
                      <LetrasGloboPequeñasAzul texto={'de '} /> 
                      <LetrasGloboPequeñasAzul texto={'los '} /> 
                      <LetrasGloboPequeñasAzul texto={'cielos '} /> 
                      <LetrasGloboPequeñasAzul texto={'es '} /> 
                      <LetrasGloboPequeñasAzul texto={'de '} /> 
                      <LetrasGloboPequeñasAzul texto={'quienes '} /> 
                      <LetrasGloboPequeñasAzul texto={'son '} /> 
                      <LetrasGloboPequeñasAzul texto={'como '} /> 
                      <LetrasGloboPequeñasAzul texto={'ellos. '} /> 
                      <LetrasGloboPequeñasVerde texto={'romanos '} />
                      <LetrasGloboPequeñasVerde texto={'8: 19: '} />
                      <LetrasGloboPequeñasRojo texto={'pero '} />
                      <LetrasGloboPequeñasRojo texto={'ustdes '} />
                      <LetrasGloboPequeñasRojo texto={'ya '} />
                      <LetrasGloboPequeñasRojo texto={'no '} />
                      <LetrasGloboPequeñasRojo texto={'viven '} />
                      <LetrasGloboPequeñasRojo texto={'segun '} />
                      <LetrasGloboPequeñasRojo texto={'esas '} />
                      <LetrasGloboPequeñasRojo texto={'inclinaciones, '} />
                      <LetrasGloboPequeñasAzul texto={'sino '} /> 
                      <LetrasGloboPequeñasAzul texto={'segun '} /> 
                      <LetrasGloboPequeñasAzul texto={'el '} /> 
                      <LetrasGloboPequeñasAzul texto={'espiritu, '} /> 
                      <LetrasGloboPequeñasAzul texto={'puesto '} /> 
                      <LetrasGloboPequeñasAzul texto={'que '} /> 
                      <LetrasGloboPequeñasAzul texto={'el '} /> 
                      <LetrasGloboPequeñasAzul texto={'espiritu '} /> 
                      <LetrasGloboPequeñasAzul texto={'de '} /> 
                      <LetrasGloboPequeñasAzul texto={'dios '} /> 
                      <LetrasGloboPequeñasAzul texto={'vive '} /> 
                      <LetrasGloboPequeñasAzul texto={'en '} /> 
                      <LetrasGloboPequeñasAzul texto={'ustdes. '} /> 
                      <LetrasGloboPequeñasVerde texto={'el '} />
                      <LetrasGloboPequeñasVerde texto={'que '} />
                      <LetrasGloboPequeñasVerde texto={'no '} />
                      <LetrasGloboPequeñasVerde texto={'tiene: '} />
                      <LetrasGloboPequeñasVerde texto={'el: '} />
                      <LetrasGloboPequeñasVerde texto={'espiritu '} />
                      <LetrasGloboPequeñasVerde texto={'de '} />
                      <LetrasGloboPequeñasVerde texto={'cristo, '} />
                      <LetrasGloboPequeñasVerde texto={'no '} />
                      <LetrasGloboPequeñasVerde texto={'es '} />
                      <LetrasGloboPequeñasVerde texto={'de '} />
                      <LetrasGloboPequeñasVerde texto={'cristo. '} />
                    </div> 
                  </Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-nacer-de-nuevo'}>
                    <img className='img-index' src={NacerDeNuevo} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`ATAQUE A LOS NIÑOS, EL MUNDO Y SUS TENDENCIAS, SEGUN LA BIBLIA`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/el-mundo-y-sus-tendencias'}>
                  <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                      <LetrasGloboPequeñasAmarillo texto={'el mundo y sus tendencias rechazan la existencia de dios '} />                       
                    </div> 
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>                                          
                      <LetrasGloboPequeñasVerde texto={'romanos '} />
                      <LetrasGloboPequeñasVerde texto={'1: 21: '} />
                      <LetrasGloboPequeñasAzul texto={'pues '} /> 
                      <LetrasGloboPequeñasAzul texto={'aunque '} /> 
                      <LetrasGloboPequeñasAzul texto={'han '} /> 
                      <LetrasGloboPequeñasAzul texto={'conocido '} /> 
                      <LetrasGloboPequeñasAzul texto={'a '} /> 
                      <LetrasGloboPequeñasAzul texto={'dios, '} /> 
                      <LetrasGloboPequeñasRojo texto={'no '} />
                      <LetrasGloboPequeñasRojo texto={'lo '} />
                      <LetrasGloboPequeñasRojo texto={'han '} />
                      <LetrasGloboPequeñasRojo texto={'honrrado '} />
                      <LetrasGloboPequeñasRojo texto={'como '} />
                      <LetrasGloboPequeñasRojo texto={'a '} />
                      <LetrasGloboPequeñasRojo texto={'dios '} />
                      <LetrasGloboPequeñasRojo texto={'ni '} />
                      <LetrasGloboPequeñasRojo texto={'le '} />
                      <LetrasGloboPequeñasRojo texto={'han '} />
                      <LetrasGloboPequeñasRojo texto={'dado '} />
                      <LetrasGloboPequeñasRojo texto={'las '} />
                      <LetrasGloboPequeñasRojo texto={'gracias. '} />
                      <LetrasGloboPequeñasRojo texto={'al '} />
                      <LetrasGloboPequeñasRojo texto={'contrario, '} />
                      <LetrasGloboPequeñasRojo texto={'han '} />
                      <LetrasGloboPequeñasRojo texto={'terminado '} />
                      <LetrasGloboPequeñasRojo texto={'pensando '} />
                      <LetrasGloboPequeñasRojo texto={'puras '} />
                      <LetrasGloboPequeñasRojo texto={'tonterias, '} />
                      <LetrasGloboPequeñasRojo texto={'y '} />
                      <LetrasGloboPequeñasRojo texto={'su '} />
                      <LetrasGloboPequeñasRojo texto={'necia '} />
                      <LetrasGloboPequeñasRojo texto={'mente '} />
                      <LetrasGloboPequeñasRojo texto={'se '} />
                      <LetrasGloboPequeñasRojo texto={'ha '} />
                      <LetrasGloboPequeñasRojo texto={'quedado '} />
                      <LetrasGloboPequeñasRojo texto={'a '} />
                      <LetrasGloboPequeñasRojo texto={'oscuras. '} />
                      <LetrasGloboPequeñasRojo texto={'decian '} />
                      <LetrasGloboPequeñasRojo texto={'que '} />
                      <LetrasGloboPequeñasRojo texto={'eran '} />
                      <LetrasGloboPequeñasRojo texto={'sabios, '} />
                      <LetrasGloboPequeñasRojo texto={'pero '} />
                      <LetrasGloboPequeñasRojo texto={'se '} />
                      <LetrasGloboPequeñasRojo texto={'hicieron '} />
                      <LetrasGloboPequeñasRojo texto={'tontos; '} />
                      <LetrasGloboPequeñasAzul texto={'porque '} /> 
                      <LetrasGloboPequeñasAzul texto={'han '} /> 
                      <LetrasGloboPequeñasAzul texto={'conocido '} /> 
                      <LetrasGloboPequeñasAzul texto={'la '} /> 
                      <LetrasGloboPequeñasAzul texto={'gloria '} /> 
                      <LetrasGloboPequeñasAzul texto={'del '} /> 
                      <LetrasGloboPequeñasAzul texto={'dios '} /> 
                      <LetrasGloboPequeñasAzul texto={'inmortal '} /> 
                      <LetrasGloboPequeñasRojo texto={'por '} />
                      <LetrasGloboPequeñasRojo texto={'imagenes '} />
                      <LetrasGloboPequeñasRojo texto={'del '} />
                      <LetrasGloboPequeñasRojo texto={'hombre '} />
                      <LetrasGloboPequeñasRojo texto={'mortal, '} />
                      <LetrasGloboPequeñasRojo texto={'y '} />
                      <LetrasGloboPequeñasRojo texto={'hasta '} />
                      <LetrasGloboPequeñasRojo texto={'por '} />
                      <LetrasGloboPequeñasRojo texto={'imagenes '} />
                      <LetrasGloboPequeñasRojo texto={'de '} />
                      <LetrasGloboPequeñasRojo texto={'aves, '} />
                      <LetrasGloboPequeñasRojo texto={'cuadrupedos '} />
                      <LetrasGloboPequeñasRojo texto={'y '} />
                      <LetrasGloboPequeñasRojo texto={'reptiles. '} />                      
                    </div>
                  </Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-el-mundo-y-sus-tendencias'}>
                    <img className='img-index' src={Tendencias} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`ATAQUE A LOS NIÑOS CON LA INMORALIDAD, SEGUN LA BIBLIA`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/la-inmoralidad'}>
                    <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                      <LetrasGloboPequeñasAmarillo texto={'la inmoralidad rechaza la existencia de dios '} />                       
                    </div> 
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>                                          
                      <LetrasGloboPequeñasVerde texto={'romanos '} />
                      <LetrasGloboPequeñasVerde texto={'1: 21: '} />
                      <LetrasGloboPequeñasAzul texto={'pues '} /> 
                      <LetrasGloboPequeñasAzul texto={'aunque '} /> 
                      <LetrasGloboPequeñasAzul texto={'han '} /> 
                      <LetrasGloboPequeñasAzul texto={'conocido '} /> 
                      <LetrasGloboPequeñasAzul texto={'a '} /> 
                      <LetrasGloboPequeñasAzul texto={'dios, '} /> 
                      <LetrasGloboPequeñasRojo texto={'no '} />
                      <LetrasGloboPequeñasRojo texto={'lo '} />
                      <LetrasGloboPequeñasRojo texto={'han '} />
                      <LetrasGloboPequeñasRojo texto={'honrrado '} />
                      <LetrasGloboPequeñasRojo texto={'como '} />
                      <LetrasGloboPequeñasRojo texto={'a '} />
                      <LetrasGloboPequeñasRojo texto={'dios '} />
                      <LetrasGloboPequeñasRojo texto={'ni '} />
                      <LetrasGloboPequeñasRojo texto={'le '} />
                      <LetrasGloboPequeñasRojo texto={'han '} />
                      <LetrasGloboPequeñasRojo texto={'dado '} />
                      <LetrasGloboPequeñasRojo texto={'las '} />
                      <LetrasGloboPequeñasRojo texto={'gracias. '} />
                      <LetrasGloboPequeñasRojo texto={'al '} />
                      <LetrasGloboPequeñasRojo texto={'contrario, '} />
                      <LetrasGloboPequeñasRojo texto={'han '} />
                      <LetrasGloboPequeñasRojo texto={'terminado '} />
                      <LetrasGloboPequeñasRojo texto={'pensando '} />
                      <LetrasGloboPequeñasRojo texto={'puras '} />
                      <LetrasGloboPequeñasRojo texto={'tonterias, '} />
                      <LetrasGloboPequeñasRojo texto={'y '} />
                      <LetrasGloboPequeñasRojo texto={'su '} />
                      <LetrasGloboPequeñasRojo texto={'necia '} />
                      <LetrasGloboPequeñasRojo texto={'mente '} />
                      <LetrasGloboPequeñasRojo texto={'se '} />
                      <LetrasGloboPequeñasRojo texto={'ha '} />
                      <LetrasGloboPequeñasRojo texto={'quedado '} />
                      <LetrasGloboPequeñasRojo texto={'a '} />
                      <LetrasGloboPequeñasRojo texto={'oscuras. '} />
                      <LetrasGloboPequeñasRojo texto={'decian '} />
                      <LetrasGloboPequeñasRojo texto={'que '} />
                      <LetrasGloboPequeñasRojo texto={'eran '} />
                      <LetrasGloboPequeñasRojo texto={'sabios, '} />
                      <LetrasGloboPequeñasRojo texto={'pero '} />
                      <LetrasGloboPequeñasRojo texto={'se '} />
                      <LetrasGloboPequeñasRojo texto={'hicieron '} />
                      <LetrasGloboPequeñasRojo texto={'tontos; '} />
                      <LetrasGloboPequeñasAzul texto={'porque '} /> 
                      <LetrasGloboPequeñasAzul texto={'han '} /> 
                      <LetrasGloboPequeñasAzul texto={'conocido '} /> 
                      <LetrasGloboPequeñasAzul texto={'la '} /> 
                      <LetrasGloboPequeñasAzul texto={'gloria '} /> 
                      <LetrasGloboPequeñasAzul texto={'del '} /> 
                      <LetrasGloboPequeñasAzul texto={'dios '} /> 
                      <LetrasGloboPequeñasAzul texto={'inmortal '} /> 
                      <LetrasGloboPequeñasRojo texto={'por '} />
                      <LetrasGloboPequeñasRojo texto={'imagenes '} />
                      <LetrasGloboPequeñasRojo texto={'del '} />
                      <LetrasGloboPequeñasRojo texto={'hombre '} />
                      <LetrasGloboPequeñasRojo texto={'mortal, '} />
                      <LetrasGloboPequeñasAzul texto={'por '} /> 
                      <LetrasGloboPequeñasAzul texto={'eso '} /> 
                      <LetrasGloboPequeñasAzul texto={'dios '} /> 
                      <LetrasGloboPequeñasAzul texto={'los '} /> 
                      <LetrasGloboPequeñasAzul texto={'ha '} /> 
                      <LetrasGloboPequeñasAzul texto={'abandonado '} /> 
                      <LetrasGloboPequeñasRojo texto={'a '} />
                      <LetrasGloboPequeñasRojo texto={'los '} />
                      <LetrasGloboPequeñasRojo texto={'impuros '} />
                      <LetrasGloboPequeñasRojo texto={'deseos '} />
                      <LetrasGloboPequeñasRojo texto={'que '} />
                      <LetrasGloboPequeñasRojo texto={'hay '} />
                      <LetrasGloboPequeñasRojo texto={'en '} />
                      <LetrasGloboPequeñasRojo texto={'ellos, '} />
                      <LetrasGloboPequeñasRojo texto={'y '} />
                      <LetrasGloboPequeñasRojo texto={'han '} />
                      <LetrasGloboPequeñasRojo texto={'cometido '} />
                      <LetrasGloboPequeñasRojo texto={'unos '} />
                      <LetrasGloboPequeñasRojo texto={'con '} />
                      <LetrasGloboPequeñasRojo texto={'otros '} />
                      <LetrasGloboPequeñasRojo texto={'acciones '} />
                      <LetrasGloboPequeñasRojo texto={'vergonzosas. '} />                                         
                    </div>
                  </Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-la-inmoralidad'}>
                    <img className='img-index' src={LaInmoralidad} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`ATAQUE A LOS NIÑOS CON EL ABUSO SEGUN LA BIBLIA`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/el-abuso'}>
                  <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                      <LetrasGloboPequeñasAmarillo texto={'el mundo y sus tendencias corrompen la inocencia de los niños y niñas '} />                       
                    </div> 
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>   
                      <LetrasGloboPequeñasAmarillo texto={'dios '} />
                      <LetrasGloboPequeñasAmarillo texto={'habla '} />
                      <LetrasGloboPequeñasAmarillo texto={'hoy '} />                                       
                      <LetrasGloboPequeñasVerde texto={'levitico '} />
                      <LetrasGloboPequeñasVerde texto={'19: 28: '} />
                      <LetrasGloboPequeñasRojo texto={'no '} /> 
                      <LetrasGloboPequeñasRojo texto={'se '} /> 
                      <LetrasGloboPequeñasRojo texto={'hagan '} /> 
                      <LetrasGloboPequeñasRojo texto={'heridas '} /> 
                      <LetrasGloboPequeñasRojo texto={'en '} /> 
                      <LetrasGloboPequeñasRojo texto={'el '} /> 
                      <LetrasGloboPequeñasRojo texto={'cuerpo '} /> 
                      <LetrasGloboPequeñasRojo texto={'por '} /> 
                      <LetrasGloboPequeñasRojo texto={'causa '} /> 
                      <LetrasGloboPequeñasRojo texto={'de '} /> 
                      <LetrasGloboPequeñasRojo texto={'un '} /> 
                      <LetrasGloboPequeñasRojo texto={'muerto. '} /> 
                      <LetrasGloboPequeñasRojo texto={'no '} /> 
                      <LetrasGloboPequeñasRojo texto={'se '} /> 
                      <LetrasGloboPequeñasRojo texto={'hagan '} /> 
                      <LetrasGloboPequeñasRojo texto={'ningun '} /> 
                      <LetrasGloboPequeñasRojo texto={'tipo '} /> 
                      <LetrasGloboPequeñasRojo texto={'de '} /> 
                      <LetrasGloboPequeñasRojo texto={'tatuaje. '} /> 
                      <LetrasGloboPequeñasVerde texto={'yo '} /> 
                      <LetrasGloboPequeñasVerde texto={'soy '} /> 
                      <LetrasGloboPequeñasVerde texto={'el '} /> 
                      <LetrasGloboPequeñasVerde texto={'señor. '} /> 
                      <LetrasGloboPequeñasAzul texto={'no '} /> 
                      <LetrasGloboPequeñasAzul texto={'deshonrres '} /> 
                      <LetrasGloboPequeñasAzul texto={'a '} /> 
                      <LetrasGloboPequeñasAzul texto={'tu '} /> 
                      <LetrasGloboPequeñasAzul texto={'hija, '} /> 
                      <LetrasGloboPequeñasAzul texto={'convirtiendola '} /> 
                      <LetrasGloboPequeñasAzul texto={'en '} /> 
                      <LetrasGloboPequeñasRojo texto={'una '} /> 
                      <LetrasGloboPequeñasRojo texto={'prostituta. '} /> 
                      <LetrasGloboPequeñasAzul texto={'no '} /> 
                      <LetrasGloboPequeñasAzul texto={'corrompas '} /> 
                      <LetrasGloboPequeñasAzul texto={'el '} /> 
                      <LetrasGloboPequeñasAzul texto={'oais '} /> 
                      <LetrasGloboPequeñasAzul texto={'llenandolo '} /> 
                      <LetrasGloboPequeñasAzul texto={'de '} /> 
                      <LetrasGloboPequeñasRojo texto={'depravaciones. '} />                                       
                    </div>
                  </Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-el-abuso'}>
                    <img className='img-index' src={PrevenirElAbuso} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`ATAQUE A LOS NIÑOS CON LA IDOLATRIA, SEGUN LA BIBLIA`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/la-idolatria'}>
                  <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                      <LetrasGloboPequeñasAmarillo texto={'maldiciones de la idolatria '} />                       
                    </div> 
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>   
                      <LetrasGloboPequeñasAmarillo texto={'dios '} />
                      <LetrasGloboPequeñasAmarillo texto={'habla '} />
                      <LetrasGloboPequeñasAmarillo texto={'hoy '} />                                       
                      <LetrasGloboPequeñasVerde texto={'exodo '} />
                      <LetrasGloboPequeñasVerde texto={'20: 4: '} />
                      <LetrasGloboPequeñasAzul texto={'no '} /> 
                      <LetrasGloboPequeñasAzul texto={'te '} /> 
                      <LetrasGloboPequeñasAzul texto={'hagas '} /> 
                      <LetrasGloboPequeñasAzul texto={'ningun '} /> 
                      <LetrasGloboPequeñasAzul texto={'idolo '} /> 
                      <LetrasGloboPequeñasAzul texto={'o '} /> 
                      <LetrasGloboPequeñasAzul texto={'figura '} /> 
                      <LetrasGloboPequeñasAzul texto={'de '} /> 
                      <LetrasGloboPequeñasAzul texto={'lo '} /> 
                      <LetrasGloboPequeñasAzul texto={'que '} /> 
                      <LetrasGloboPequeñasAzul texto={'hay '} /> 
                      <LetrasGloboPequeñasAzul texto={'arriba '} /> 
                      <LetrasGloboPequeñasAzul texto={'en '} /> 
                      <LetrasGloboPequeñasAzul texto={'el '} /> 
                      <LetrasGloboPequeñasAzul texto={'cielo, '} /> 
                      <LetrasGloboPequeñasAzul texto={'ni '} /> 
                      <LetrasGloboPequeñasAzul texto={'de '} /> 
                      <LetrasGloboPequeñasAzul texto={'lo '} /> 
                      <LetrasGloboPequeñasAzul texto={'que '} /> 
                      <LetrasGloboPequeñasAzul texto={'hay '} /> 
                      <LetrasGloboPequeñasAzul texto={'abajo '} /> 
                      <LetrasGloboPequeñasAzul texto={'en '} /> 
                      <LetrasGloboPequeñasAzul texto={'la '} /> 
                      <LetrasGloboPequeñasAzul texto={'tierra, '} /> 
                      <LetrasGloboPequeñasAzul texto={'ni '} /> 
                      <LetrasGloboPequeñasAzul texto={'lo '} /> 
                      <LetrasGloboPequeñasAzul texto={'que '} /> 
                      <LetrasGloboPequeñasAzul texto={'hay '} /> 
                      <LetrasGloboPequeñasAzul texto={'en '} /> 
                      <LetrasGloboPequeñasAzul texto={'el '} /> 
                      <LetrasGloboPequeñasAzul texto={'mar '} /> 
                      <LetrasGloboPequeñasAzul texto={'debajo '} /> 
                      <LetrasGloboPequeñasAzul texto={'de '} /> 
                      <LetrasGloboPequeñasAzul texto={'la '} /> 
                      <LetrasGloboPequeñasAzul texto={'no '} /> 
                      <LetrasGloboPequeñasAzul texto={'te '} /> 
                      <LetrasGloboPequeñasAzul texto={'inclines '} /> 
                      <LetrasGloboPequeñasAzul texto={'delante '} /> 
                      <LetrasGloboPequeñasAzul texto={'de '} /> 
                      <LetrasGloboPequeñasAzul texto={'ellos '} /> 
                      <LetrasGloboPequeñasAzul texto={'ni '} /> 
                      <LetrasGloboPequeñasAzul texto={'les '} /> 
                      <LetrasGloboPequeñasAzul texto={'rindas '} /> 
                      <LetrasGloboPequeñasAzul texto={'culto, '} /> 
                      <LetrasGloboPequeñasAzul texto={'porque '} /> 
                      <LetrasGloboPequeñasAzul texto={'yo '} /> 
                      <LetrasGloboPequeñasAzul texto={'soy '} /> 
                      <LetrasGloboPequeñasAzul texto={'el '} /> 
                      <LetrasGloboPequeñasAzul texto={'señor '} /> 
                      <LetrasGloboPequeñasAzul texto={'tu '} /> 
                      <LetrasGloboPequeñasAzul texto={'dios, '} /> 
                      <LetrasGloboPequeñasAzul texto={'dios '} /> 
                      <LetrasGloboPequeñasAzul texto={'Celoso. '} /> 
                      <LetrasGloboPequeñasRojo texto={'que '} /> 
                      <LetrasGloboPequeñasRojo texto={'castiga '} /> 
                      <LetrasGloboPequeñasRojo texto={'la '} /> 
                      <LetrasGloboPequeñasRojo texto={'maldad '} /> 
                      <LetrasGloboPequeñasRojo texto={'de '} /> 
                      <LetrasGloboPequeñasRojo texto={'los '} /> 
                      <LetrasGloboPequeñasRojo texto={'padres '} /> 
                      <LetrasGloboPequeñasRojo texto={'que '} /> 
                      <LetrasGloboPequeñasRojo texto={'me '} /> 
                      <LetrasGloboPequeñasRojo texto={'odian, '} /> 
                      <LetrasGloboPequeñasRojo texto={'en '} /> 
                      <LetrasGloboPequeñasRojo texto={'sus'} /> 
                      <LetrasGloboPequeñasRojo texto={'hijos, '} /> 
                      <LetrasGloboPequeñasRojo texto={'nietos '} /> 
                      <LetrasGloboPequeñasRojo texto={'y '} /> 
                      <LetrasGloboPequeñasRojo texto={'bisnietos; '} /> 
                      <LetrasGloboPequeñasVerde texto={'pero '} /> 
                      <LetrasGloboPequeñasVerde texto={'que '} /> 
                      <LetrasGloboPequeñasVerde texto={'trato '} /> 
                      <LetrasGloboPequeñasVerde texto={'con '} /> 
                      <LetrasGloboPequeñasVerde texto={'amor '} /> 
                      <LetrasGloboPequeñasVerde texto={'por '} /> 
                      <LetrasGloboPequeñasVerde texto={'mil '} /> 
                      <LetrasGloboPequeñasVerde texto={'generaciones '} /> 
                      <LetrasGloboPequeñasVerde texto={'a '} /> 
                      <LetrasGloboPequeñasVerde texto={'los '} /> 
                      <LetrasGloboPequeñasVerde texto={'que '} /> 
                      <LetrasGloboPequeñasVerde texto={'me '} /> 
                      <LetrasGloboPequeñasVerde texto={'aman '} /> 
                      <LetrasGloboPequeñasVerde texto={'y'} /> 
                      <LetrasGloboPequeñasVerde texto={'cumplen '} /> 
                      <LetrasGloboPequeñasVerde texto={'mis '} /> 
                      <LetrasGloboPequeñasVerde texto={'mandamientos. '} />                                       
                    </div>
                  </Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-la-idolatria'}>
                    <img className='img-index' src={LaIdolatria} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`JESUCRISTO VINO A DEMOSTRAR QUE SATANAS ES REAL Y LO VENCIO`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/satanas-es-real'}>
                  <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                      <LetrasGloboPequeñasAmarillo texto={'jesucristo vino a librarnos de satanas '} />                       
                    </div> 
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>   
                      <LetrasGloboPequeñasAmarillo texto={'dios '} />
                      <LetrasGloboPequeñasAmarillo texto={'habla '} />
                      <LetrasGloboPequeñasAmarillo texto={'hoy '} />                                       
                      <LetrasGloboPequeñasVerde texto={'apocalipsis '} />
                      <LetrasGloboPequeñasVerde texto={'12: 9: '} />
                      <LetrasGloboPequeñasAzul texto={'asi '} /> 
                      <LetrasGloboPequeñasAzul texto={'que '} /> 
                      <LetrasGloboPequeñasAzul texto={'fue '} /> 
                      <LetrasGloboPequeñasAzul texto={'expulsado '} /> 
                      <LetrasGloboPequeñasAzul texto={'el '} /> 
                      <LetrasGloboPequeñasAzul texto={'gran '} /> 
                      <LetrasGloboPequeñasAzul texto={'dragon, '} /> 
                      <LetrasGloboPequeñasAzul texto={'aquella '} /> 
                      <LetrasGloboPequeñasAzul texto={'serpiente '} /> 
                      <LetrasGloboPequeñasAzul texto={'antigua '} /> 
                      <LetrasGloboPequeñasAzul texto={'que '} /> 
                      <LetrasGloboPequeñasAzul texto={'se '} /> 
                      <LetrasGloboPequeñasAzul texto={'llama '} /> 
                      <LetrasGloboPequeñasRojo texto={'diablo '} /> 
                      <LetrasGloboPequeñasRojo texto={'y '} /> 
                      <LetrasGloboPequeñasRojo texto={'satanas, '} /> 
                      <LetrasGloboPequeñasRojo texto={'y '} /> 
                      <LetrasGloboPequeñasRojo texto={'que '} /> 
                      <LetrasGloboPequeñasRojo texto={'engaña '} /> 
                      <LetrasGloboPequeñasRojo texto={'a '} /> 
                      <LetrasGloboPequeñasRojo texto={'todo '} /> 
                      <LetrasGloboPequeñasRojo texto={'el '} /> 
                      <LetrasGloboPequeñasRojo texto={'mundo. '} /> 
                      <LetrasGloboPequeñasAzul texto={'el '} /> 
                      <LetrasGloboPequeñasAzul texto={'y '} /> 
                      <LetrasGloboPequeñasAzul texto={'sus '} /> 
                      <LetrasGloboPequeñasAzul texto={'angeles '} /> 
                      <LetrasGloboPequeñasAzul texto={'fueron '} /> 
                      <LetrasGloboPequeñasAzul texto={'lanzados '} /> 
                      <LetrasGloboPequeñasAzul texto={'a '} /> 
                      <LetrasGloboPequeñasAzul texto={'la '} /> 
                      <LetrasGloboPequeñasAzul texto={'tierra. '} />
                    </div>
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                      <LetrasGloboPequeñasVerde texto={'Juan '} />
                      <LetrasGloboPequeñasVerde texto={'14: 30: '} />
                      <LetrasGloboPequeñasAzul texto={'ya '} /> 
                      <LetrasGloboPequeñasAzul texto={'no '} /> 
                      <LetrasGloboPequeñasAzul texto={'hablare '} /> 
                      <LetrasGloboPequeñasAzul texto={'mucho '} /> 
                      <LetrasGloboPequeñasAzul texto={'con '} /> 
                      <LetrasGloboPequeñasAzul texto={'ustedes, '} /> 
                      <LetrasGloboPequeñasAzul texto={'porque '} /> 
                      <LetrasGloboPequeñasAzul texto={'viene '} />
                      <LetrasGloboPequeñasRojo texto={'el '} /> 
                      <LetrasGloboPequeñasRojo texto={'que '} /> 
                      <LetrasGloboPequeñasRojo texto={'manda '} /> 
                      <LetrasGloboPequeñasRojo texto={'en '} /> 
                      <LetrasGloboPequeñasRojo texto={'este '} /> 
                      <LetrasGloboPequeñasRojo texto={'mundo. '} />  
                      <LetrasGloboPequeñasAzul texto={'aunque '} /> 
                      <LetrasGloboPequeñasAzul texto={'no '} /> 
                      <LetrasGloboPequeñasAzul texto={'tiene '} /> 
                      <LetrasGloboPequeñasAzul texto={'ningun '} /> 
                      <LetrasGloboPequeñasAzul texto={'poder '} /> 
                      <LetrasGloboPequeñasAzul texto={'sobre '} /> 
                      <LetrasGloboPequeñasAzul texto={'mi. '} />                                                              
                    </div>
                  </Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-satanas-es-real'}>
                    <img className='img-index' src={Satanas} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`JESUCRISTO PAGO CON SU MUERTE PARA NO SER CONDENADOS EN EL INFIERNO`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/el-infierno'}>
                    <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                      <LetrasGloboPequeñasAmarillo texto={'jesucristo anuncio el infierno como castigo eterno '} />                       
                    </div> 
                    <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>   
                      <LetrasGloboPequeñasAmarillo texto={'dios '} />
                      <LetrasGloboPequeñasAmarillo texto={'habla '} />
                      <LetrasGloboPequeñasAmarillo texto={'hoy '} />                                       
                      <LetrasGloboPequeñasVerde texto={'mateo '} />
                      <LetrasGloboPequeñasVerde texto={'18: 8: '} />
                      <LetrasGloboPequeñasAzul texto={'por '} /> 
                      <LetrasGloboPequeñasAzul texto={'eso, '} /> 
                      <LetrasGloboPequeñasAzul texto={'si '} /> 
                      <LetrasGloboPequeñasAzul texto={'tu '} /> 
                      <LetrasGloboPequeñasAzul texto={'mano '} /> 
                      <LetrasGloboPequeñasAzul texto={'o '} /> 
                      <LetrasGloboPequeñasAzul texto={'tu '} /> 
                      <LetrasGloboPequeñasAzul texto={'pie '} /> 
                      <LetrasGloboPequeñasRojo texto={'te '} /> 
                      <LetrasGloboPequeñasRojo texto={'hacen '} /> 
                      <LetrasGloboPequeñasRojo texto={'caer '} /> 
                      <LetrasGloboPequeñasRojo texto={'en '} /> 
                      <LetrasGloboPequeñasRojo texto={'pecado, '} />  
                      <LetrasGloboPequeñasAzul texto={'cortatelos '} /> 
                      <LetrasGloboPequeñasAzul texto={'y '} /> 
                      <LetrasGloboPequeñasAzul texto={'hechalos '} /> 
                      <LetrasGloboPequeñasAzul texto={'lejos '} /> 
                      <LetrasGloboPequeñasAzul texto={'de '} /> 
                      <LetrasGloboPequeñasAzul texto={'ti; '} /> 
                      <LetrasGloboPequeñasAzul texto={'es '} /> 
                      <LetrasGloboPequeñasAzul texto={'mejor '} />                      
                      <LetrasGloboPequeñasAzul texto={'que '} /> 
                      <LetrasGloboPequeñasAzul texto={'entres '} /> 
                      <LetrasGloboPequeñasAzul texto={'en '} /> 
                      <LetrasGloboPequeñasAzul texto={'la '} /> 
                      <LetrasGloboPequeñasAzul texto={'vida '} /> 
                      <LetrasGloboPequeñasAzul texto={'manco '} /> 
                      <LetrasGloboPequeñasAzul texto={'o '} /> 
                      <LetrasGloboPequeñasAzul texto={'cojo, '} />
                      <LetrasGloboPequeñasAzul texto={'y '} />
                      <LetrasGloboPequeñasAzul texto={'no '} />
                      <LetrasGloboPequeñasAzul texto={'que '} />
                      <LetrasGloboPequeñasAzul texto={'con '} />
                      <LetrasGloboPequeñasAzul texto={'tus '} />
                      <LetrasGloboPequeñasAzul texto={'dos '} />
                      <LetrasGloboPequeñasAzul texto={'manos '} />
                      <LetrasGloboPequeñasAzul texto={'o '} />
                      <LetrasGloboPequeñasAzul texto={'tus '} />
                      <LetrasGloboPequeñasAzul texto={'dos '} />
                      <LetrasGloboPequeñasAzul texto={'seas '} />
                      <LetrasGloboPequeñasRojo texto={'arrojado '} />
                      <LetrasGloboPequeñasRojo texto={'al '} />
                      <LetrasGloboPequeñasRojo texto={'fuego '} />
                      <LetrasGloboPequeñasRojo texto={'eterno. '} />
                      <LetrasGloboPequeñasAzul texto={'y '} />
                      <LetrasGloboPequeñasAzul texto={'si '} />
                      <LetrasGloboPequeñasAzul texto={'tu '} />
                      <LetrasGloboPequeñasAzul texto={'ojo '} />
                      <LetrasGloboPequeñasAzul texto={'te '} />
                      <LetrasGloboPequeñasAzul texto={'hace '} />
                      <LetrasGloboPequeñasAzul texto={'caer '} />
                      <LetrasGloboPequeñasAzul texto={'en '} />
                      <LetrasGloboPequeñasAzul texto={'pecado, '} />
                      <LetrasGloboPequeñasAzul texto={'sacatelo '} />
                      <LetrasGloboPequeñasAzul texto={'y '} />
                      <LetrasGloboPequeñasAzul texto={'hechalo '} />
                      <LetrasGloboPequeñasAzul texto={'lejos '} />
                      <LetrasGloboPequeñasAzul texto={'de '} />
                      <LetrasGloboPequeñasAzul texto={'ti; '} />
                      <LetrasGloboPequeñasAzul texto={'es '} />
                      <LetrasGloboPequeñasAzul texto={'mejor '} />
                      <LetrasGloboPequeñasAzul texto={'que '} />
                      <LetrasGloboPequeñasAzul texto={'entres '} />
                      <LetrasGloboPequeñasAzul texto={'a '} />
                      <LetrasGloboPequeñasAzul texto={'la '} />
                      <LetrasGloboPequeñasAzul texto={'vida '} />
                      <LetrasGloboPequeñasAzul texto={'con '} />
                      <LetrasGloboPequeñasAzul texto={'un '} />
                      <LetrasGloboPequeñasAzul texto={'solo '} />
                      <LetrasGloboPequeñasAzul texto={'ojo, '} />
                      <LetrasGloboPequeñasAzul texto={'y '} />
                      <LetrasGloboPequeñasAzul texto={'no '} />
                      <LetrasGloboPequeñasAzul texto={'que '} />
                      <LetrasGloboPequeñasAzul texto={'con '} />
                      <LetrasGloboPequeñasAzul texto={'tus '} />
                      <LetrasGloboPequeñasAzul texto={'dos '} />
                      <LetrasGloboPequeñasAzul texto={'ojos '} />
                      <LetrasGloboPequeñasRojo texto={'seas '} /> 
                      <LetrasGloboPequeñasRojo texto={'arrojado '} /> 
                      <LetrasGloboPequeñasRojo texto={'al '} /> 
                      <LetrasGloboPequeñasRojo texto={'fuego '} /> 
                      <LetrasGloboPequeñasRojo texto={'del '} /> 
                      <LetrasGloboPequeñasRojo texto={'infierno. '} />                                                                                    
                    </div>
                  </Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-el-infierno'}>
                    <img className='img-index' src={ElInfierno} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
