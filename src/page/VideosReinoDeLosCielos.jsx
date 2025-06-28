import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function VideosElReinoDeLosCielos() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container"> 
                <PrimalNav />               
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos el Reino de los cielos`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Buscad primero el Reino de Dios m y su justicia'} url={'https://www.youtube.com/embed/eA1YnySQ-NE?si=JEUyt5LU9AI5wKmc'}/>
                        <VideoSyntax text={'El Reino de los Cielos'} url={'https://www.youtube.com/embed/UHwfyyGrCu0?si=-2FoPdPcT6JuYyjf'}/>
                        <VideoSyntax text={'Jesús habla sobre el Reino de los cielos'} url={'https://www.youtube.com/embed/KbTdPnzP1GM?si=TWmgUPEUpX5z4Sju'}/>
                        <VideoSyntax text={'Quien es el mayor en el Reino de los cielos'} url={'https://www.youtube.com/embed/IkHJbRgxlIM?si=hpolx9sDzgvfMOwJ'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'El Reino de los Cielos es AMOR'} url={'https://www.youtube.com/embed/UHwfyyGrCu0?si=evsUg6CT03K8m06P'}/>
                        <VideoSyntax text={'Seamos como niños para entrar en el Reino de los Cielos'} url={'https://www.youtube.com/embed/-uXCSZ4_MOM?si=uW0f5hNS788EAKyh'}/>
                        <VideoSyntax text={'Yo soy el pan de vida'} url={'https://www.youtube.com/embed/8vU4XN8KBkg?si=ZJjpZZPjjOItabde'}/>
                        <VideoSyntax text={'Tuve hambre y me diste de comer'} url={'https://www.youtube.com/embed/IX6FukNtDgI?si=dtNME1CcMjLEwpS1'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Sin fe no se puede agradar a Dios'} url={'https://www.youtube.com/embed/5D4IjbxgvDo?si=z5YglcHhodo4xDIb'}/>
                        <VideoSyntax text={'Perdona hasta 70 veces 7'} url={'https://www.youtube.com/embed/VWHjF-L6R3E?si=2DX0KF3nrttzO_Ig'}/>
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}