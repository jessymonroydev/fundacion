import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from "../components/counter/Counter.jsx";

export default function VideosDePablitoElMisionero() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Pablito el pequeno misionero`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'LA CONSAGRACIÓN DEL REY DAVID'} url={'https://www.youtube.com/embed/120IUEkChEo?si=8P3tr2Av6yhCSnr7'}/>
                        <VideoSyntax text={'LA SABIDURÍA DEL REY SALOMÓN'} url={'https://player.vimeo.com/video/239342109?h=0b35140df8'}/>
                        <VideoSyntax text={'LA VIUDA DE SAREPTA'} url={'https://dailymotion.com/embed/video/x2slxxm?ui-highlight&amp;start&amp;endscreen-enable=0&amp;controls=1&amp;mute=0&amp;ui-start-screen-info=1&amp;ui-logo=1'}/>
                        <VideoSyntax text={'LA ESCRITURA EN LA PARED'} url={'https://dailymotion.com/embed/video/x5f9xge?ui-highlight&amp;start&amp;endscreen-enable=0&amp;controls=1&amp;mute=0&amp;ui-start-screen-info=1&amp;ui-logo=1'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'LA ESTATUA DE ORO'} url={'https://www.dailymotion.com/embed/video/x5f9xgf?autoplay=1'}/>
                        <VideoSyntax text={'LA CORONACION DE ROBOAM'} url={'https://www.youtube.com/embed/RVjTEcvP82E?si=wCVTcAw6gmng1npH'}/>
                        <VideoSyntax text={'LA CURA DE NAAMAN'} url={'https://fundacionvolveranacer.org/wp-content/uploads/2021/09/Pablito-el-Misionero-Cap-La-cura-de-nahaman-1.mp4'}/>                        
                    </div>                  
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}