import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function Ouija() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">   
                <PrimalNav />             
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`videos que muestran el peligro de la ouija`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Estas personas jugaron a la Ouija y fueron poseídos por demonios'} url={'https://www.youtube.com/embed/co3tBKPVJVc?si=lS8zVFJ9YpDkdXI3'}/>
                        <VideoSyntax text={'Jugamos a la Ouija y contactamos un demonio. Historia real'} url={'https://www.youtube.com/embed/5ISWpN5ufz8?si=dB8YRX5xjJHUVGbV'}/>
                        <VideoSyntax text={'Estuve poseída por jugar Ouija'} url={'https://www.youtube.com/embed/VnJ8lATYbGI?si=qAQDXgF1V91nQ-5t'}/>
                        <VideoSyntax text={'Los 5 peores casos de personas que jugando la Ouija y no vivieron para contarlo'} url={'https://www.youtube.com/embed/Yrlvu-5Ogfo?si=FVZZ25dAczzhlcKM'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'La Ouija 1 y 2 : No Jueguen Juegos de mesa'} url={'https://www.youtube.com/embed/_F9l_mb0YMo?si=k7M5CjO-5yWLds7I'}/>
                        <VideoSyntax text={'Una Ouija disfrazada'} url={'https://www.youtube.com/embed/dF8FtIpaS2s?si=nf1EGg7WKQi_jtVl'}/>
                        <VideoSyntax text={'¡No hagas la Ouija!'} url={'https://www.youtube.com/embed/CXl5ptfTRVo?si=uk4EC-eBN_j3Qlrp'}/>
                        <VideoSyntax text={'Poe esto nunca utilices la Ouija'} url={'https://www.youtube.com/embed/tNvPdc4QC3c?si=M8OY0HaGLz8xjWOe'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Jamás retes a la Ouija'} url={'https://www.youtube.com/embed/ixG7CSyetnM?si=iQF--DmvAljSYjSi'}/>                        
                    </div>                                      
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}