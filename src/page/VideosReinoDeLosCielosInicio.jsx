import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function VideosReinoDeLosCielosInicio() {
    return(
        <div className="Home">
            <Star />
            <div className="page-container">    
                <PrimalNav />            
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos El Reino De Los Cielos`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'El Reino de Dios'} url={'https://www.youtube.com/embed/MiNDZlfDuPo?si=No88bn31y-RvcXo2'}/>
                        <VideoSyntax text={'El Reino de los Cielos'} url={'https://www.youtube.com/embed/ZW-QHQv2FK8?si=kxxtCb5mJYIyeTJp'}/>
                        <VideoSyntax text={'Elías fue llevado al cielo'} url={'https://www.youtube.com/embed/jU0DE6A73F4?si=BrMUMTcTbAosYrzT'}/>
                        <VideoSyntax text={'Cómo llegar al cielo'} url={'https://www.youtube.com/embed/y6K6QZs2W5c?si=kR0kxcQmypEbV5Kf'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Tienes que ser como niño'} url={'https://www.youtube.com/embed/6caSsC03VNU?si=_jVBxNHlfR9MTTV5'}/>
                        <VideoSyntax text={'El Reino de los Cielos'} url={'https://www.youtube.com/embed/gjXUCwRULaQ?si=xiPW8Jcp2z9fopjX'}/>
                        <VideoSyntax text={'El ángel Gabriel le anuncia a María'} url={'https://www.youtube.com/embed/wYGdFc72K6c?si=bLHdILK-_zFbYN13'}/>
                        <VideoSyntax text={'María fue a visitar a su prima'} url={'https://www.youtube.com/embed/vMlh4hqEo6s?si=Sc3nyCEkRV-A7qx_'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'La primera Navidad'} url={'https://www.youtube.com/embed/lQ8fu-cKtc4?si=cXN9jL2HnUWsm6LH'}/>
                        <VideoSyntax text={'Jesús les enseña a los maestros de la ley'} url={'https://www.youtube.com/embed/aygz2Ddf0aw?si=9zeCync_8vzfkDyR'}/>
                        <VideoSyntax text={'Jesús, el héroe que cambió la historia'} url={'https://www.youtube.com/embed/KIT74b_Fovc?si=0OpSVMRsB2gjSq5I'}/>
                        <VideoSyntax text={'Jesús, amigo de los pecadores'} url={'https://www.youtube.com/embed/S6kFy_PDomg?si=ADBBuFJuQEBR8fs2'}/>                       
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Jesús dice: Todos tienen que nacer de nuevo'} url={'https://www.youtube.com/embed/zTWTC5nIR_8?si=Y_a3TRsl8kFX8kRv'}/>
                        <VideoSyntax text={'Jesús llama a los discípulos'} url={'https://www.youtube.com/embed/LzbsxW66-Xw?si=SZp7wpPx90BSrLLA'}/>
                        <VideoSyntax text={'Jesús convierte el agua en vino'} url={'https://www.youtube.com/embed/163G2VKAQIQ?si=djZpvbJ3NddyDh0J'}/>
                        <VideoSyntax text={'Los milagros de Jesús'} url={'https://www.youtube.com/embed/Sv3qphmN4Zo?si=o90defWtOiAx9bfD'}/>                       
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'La última cena'} url={'https://www.youtube.com/embed/82nTLOCvn6U?si=b_W3_XU1F_jS4QA8'}/>
                        <VideoSyntax text={'Ama a tus enemigos'} url={'https://www.youtube.com/embed/8moAsXEliQM?si=Uahg9fupH_PaBaBt'}/>
                        <VideoSyntax text={'El buen samaritano'} url={'https://www.youtube.com/embed/VBMw3RdzRzs?si=saN1PFudaTnGtgwl'}/>
                        <VideoSyntax text={'Él ha resucitado'} url={'https://www.youtube.com/embed/T8cxFEKFMio?si=jFKPGZoHuWGNbKfR'}/>                       
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'El Dios de Elías'} url={'https://www.youtube.com/embed/fagHgx8chFU?si=SkAnWlDYXP0rNdxN'}/>
                        <VideoSyntax text={'Defensores de la Biblia'} url={'https://www.youtube.com/embed/3MJINyimao4?si=Ea5uXumPPq5jBWFf'}/>
                        <VideoSyntax text={'Somos de Dios. No celular con juegos malos'} url={'https://www.youtube.com/embed/GqRLSwzZltg?si=RuePPA7_elzNkj6y'}/>
                        <VideoSyntax text={'Jesús, verdadero héroe'} url={'https://www.youtube.com/embed/1twYH7D6bck?si=lGXBGbeIy0saLOan'}/>                       
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Como en el cieloNIÑOS EN EL INFIERNO POR LAS CARICATURAS'} url={'https://www.youtube.com/embed/t6vB7pXz3L8?si=hQAXf5pZUHLKooSM'}/>                                           
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}