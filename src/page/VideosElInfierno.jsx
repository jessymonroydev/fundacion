import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function VideosElInfierno() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos sobre el infierno`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'El Infierno es real'} url={'https://www.youtube.com/embed/dpaAQdI_zFE?si=M51Gmepg6-pYUuKM'}/>
                        <VideoSyntax text={'Historia real-La Niña que Bajo al Infierno'} url={'https://www.youtube.com/embed/bhVbRRHWSvE?si=UblLGa-8zkBkYjLG'}/>
                        <VideoSyntax text={'Descubre como Jesucristo anunció el cielo y el infierno'} url={'https://www.youtube.com/embed/tU6rlUf0Xi4?si=n4EyteyW5-eYw-5J'}/>
                        <VideoSyntax text={'El infierno sí existe. Audio de las almas en pena'} url={'https://www.youtube.com/embed/BqbRPEwvNNg?si=7UxM_4ITrwtSCB1n'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Una revelación a siete jóvenes'} url={'https://www.youtube.com/embed/LykYFkQaqWU?si=aTN0slBO7UZcpA8n'}/>
                        <VideoSyntax text={'Rescatado del horno de fuego'} url={'https://www.youtube.com/embed/rOriwY-UzlY?si=ccwYut86AdfiBxHX'}/>
                        <VideoSyntax text={'Resucitado del infierno'} url={'https://www.youtube.com/embed/qM2wRtL0m3A?si=fNXcas4coGvqFLFE'}/>
                        <VideoSyntax text={'Morí y me encontré entre el Cielo y el infierno.'} url={'https://www.youtube.com/embed/gcNM_eHKbJU?si=EQBb1mrnA2Bsd7Nf'}/>
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}