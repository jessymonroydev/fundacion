import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';
import '../styles/home.css';
import LetrasGloboPequeñasAzul from '../subcomponent/LetrasGloboPequeñasAzul.jsx';
import LetrasGloboPequeñasRojo from '../subcomponent/LetrasGloboPequeñasRojo.jsx';
import LetrasGloboPequeñasVerde from '../subcomponent/LetrasGloboPequeñasVerde.jsx';
import LetrasGloboPequeñasAmarillo from '../subcomponent/LetrasGloboPequeñasAmarillo.jsx';


export default function TestimoniosExSatanistas() {
    return(
        <div className="Home">
            <Star />                
            <div className="page-container">     
                <PrimalNav />           
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Testimonios de Ex satanistas transformados por Cristo`}/>
                    </div>                    
                </div>
                <div className=''>
                    <div className='content-index-justify'>
                    <div className='content-text-index-solo'>                                     
                        <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>
                            <LetrasGloboPequeñasAmarillo texto={'descubre aqui: el celular es adictivo y altera la conducta '} />                       
                        </div> 
                        <div style={{display: 'inline-flex', flexWrap: 'wrap', marginTop: '3vh', justifyContent: 'center'}}>   
                             
                            <LetrasGloboPequeñasVerde texto={'EFESIOS '} />                                     
                            <LetrasGloboPequeñasVerde texto={'6:12: '} />
                            <LetrasGloboPequeñasAzul texto={'Porque '} /> 
                            <LetrasGloboPequeñasAzul texto={'no '} /> 
                            <LetrasGloboPequeñasAzul texto={'estamos '} /> 
                            <LetrasGloboPequeñasAzul texto={'luchando '} /> 
                            <LetrasGloboPequeñasAzul texto={'contra '} /> 
                            <LetrasGloboPequeñasAzul texto={'poderes '} /> 
                            <LetrasGloboPequeñasAzul texto={'humanos, '} /> 
                            <LetrasGloboPequeñasRojo texto={'sino '} /> 
                            <LetrasGloboPequeñasRojo texto={'contra '} /> 
                            <LetrasGloboPequeñasRojo texto={'malignas '} /> 
                            <LetrasGloboPequeñasRojo texto={'fuerzas '} /> 
                            <LetrasGloboPequeñasRojo texto={'espirituales '} /> 
                            <LetrasGloboPequeñasRojo texto={'del '} /> 
                            <LetrasGloboPequeñasRojo texto={'cielo, '} /> 
                            <LetrasGloboPequeñasVerde texto={'las '} /> 
                            <LetrasGloboPequeñasVerde texto={'cuales '} /> 
                            <LetrasGloboPequeñasVerde texto={'tienen '} /> 
                            <LetrasGloboPequeñasVerde texto={'mando, '} /> 
                            <LetrasGloboPequeñasVerde texto={'autoridad '} /> 
                            <LetrasGloboPequeñasVerde texto={'y '} /> 
                            <LetrasGloboPequeñasVerde texto={'dominio '} /> 
                            <LetrasGloboPequeñasVerde texto={'sobre '} /> 
                            <LetrasGloboPequeñasVerde texto={'el '} /> 
                            <LetrasGloboPequeñasVerde texto={'mundo '} /> 
                            <LetrasGloboPequeñasVerde texto={'de '} /> 
                            <LetrasGloboPequeñasVerde texto={'tinieblas '} /> 
                            <LetrasGloboPequeñasVerde texto={'que '} /> 
                            <LetrasGloboPequeñasVerde texto={'nos '} /> 
                            <LetrasGloboPequeñasVerde texto={'rodea. '} /> 
                            </div>                      
                    </div>
                    </div>
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'POR 22 AÑOS FUI UNO DE LOS 12 APÓSTOLES DE SATANÁS | Testimonios Cristianos Impactantes'} url={'https://www.youtube.com/embed/6Ns4oKTR8Us?si=GskweWzUe3ydwZeg'}/>
                        <VideoSyntax text={'EX SACERDOTE SATANICO'} url={'https://www.youtube.com/embed/eiWsffKZfIY?si=DSUHtmVkXpCC0hsV'}/>
                        <VideoSyntax text={'Testimonio de Ex-Satanista (Completo) - Rev. Eugenio Masías'} url={'https://www.youtube.com/embed/0oVNi0TW_-4?si=90dgkyYuTQ0iMmOf'}/>
                        <VideoSyntax text={'Testimonios Ex satánicos'} url={'https://www.youtube.com/embed/N8xTzCQn1uE?si=QjEJSdq5M3dwQWEX'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={`EX-BRUJA REVELA LOS SECRETOS DE SATANÁS ¡Testimonios Cristianos Impactantes!`} url={'https://www.youtube.com/embed/KPm2i9npSZg?si=xhI3NJCmwtpO47Tv'}/>
                        <VideoSyntax text={'Era BRUJA y fui rescatada por JESÚS IMPACTANTE testimonio/Parte 2'} url={'https://www.youtube.com/embed/XILzO7e64HI?si=OJxvI2vWuAhSWOL2'}/>
                    </div>                                     
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}