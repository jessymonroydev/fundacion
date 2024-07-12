import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function TestimoniosExSicarios() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">   
                <PrimalNav />             
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Testimonios de Ex sicarios transformados por Cristo`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'EX-SICARIO DE LOS ZET4S: "CRISTO ME ALCANZÓ EN EL PEN4L" - IMPACTANTE TESTIMONIO'} url={'https://www.youtube.com/embed/sikeglVJufg?si=16wShilHvmCtS7Bj'}/>
                        <VideoSyntax text={'EX-S1CAR10 DE REYNOSA "TUVE QUE PERDER UNA PIERNA PARA ENTREGARME A DIOS"'} url={'https://www.youtube.com/embed/SHXYnUOi0_4?si=b4kMrAt0dFbySWpa'}/>
                        <VideoSyntax text={'🚨UN LIDER DE ISIS CONOCIO A JESÚS 🚨IMPACTANTE TESTIMONIO 🧾🔥'} url={'https://www.youtube.com/embed/2cUpPpUX1hY?si=-GQOCczz6pLhl7-2'}/>
                        <VideoSyntax text={'Gerardo Villareal, de peligroso criminal a cristiano'} url={'https://www.youtube.com/embed/et-oDRKUQOg?si=yLOHFkPJo_-mD1C4'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'IMPACTANTE TESTIMONIO: Le Apodaban "La Maldad"'} url={'https://www.youtube.com/embed/pFOqqX2U_zo?si=A2vZeCFATVXbDuUR'}/>
                    </div>                                                       
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}