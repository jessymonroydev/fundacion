import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function VideosElMundoYSusTendencias() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">
                <PrimalNav />                
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos el mundo y sus tendencias`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'La verdad de toy story 4 y el orgullo gay'} url={'https://www.youtube.com/embed/DjXXO8lxwsU?si=_-uVdC_nG3V4kW34'}/>
                        <VideoSyntax text={'PERTURBADOR: el oscuro mensaje detrás de bonitos y gorditos'} url={'https://www.youtube.com/embed/xtts85g81fQ?si=wVq_Hi6vIOFP3rQv'}/>
                        <VideoSyntax text={'La extraña película de Bob Esponja'} url={'https://www.youtube.com/embed/8JT19wpuN68?si=r9-HbBILvSkytlSZ'}/>
                        <VideoSyntax text={'Pepe le Pew SACRIFICADO PARA EL ORDEN MUNDIAL'} url={'https://www.youtube.com/embed/aXcmvS0usso?si=BkY-cir5Zs15khoe'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'La verdad sobre los dibujos animados'} url={'https://www.youtube.com/embed/0HW5_slHEIc?si=a00yXY5cEKFD2tPW'}/>
                        <VideoSyntax text={'Detrás de los MINIONS, amantes a la maldad'} url={'https://www.youtube.com/embed/DN1fr8r3kas?si=VOxhriVH3Gv2uuul'}/>
                        <VideoSyntax text={'Apps de teléfono PELIGROSAS para niños'} url={'https://www.youtube.com/embed/OimQTfmrs2E?si=JyuRQdoK8DLVgVjz'}/>
                        <VideoSyntax text={'Las MUJERES detrás de GRU'} url={'https://www.youtube.com/embed/a48B_GG2V1M?si=ljTDdibXuSEOzHX2'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'AMONG US peligroso juego de video'} url={'https://www.youtube.com/embed/kB1NCmF52k8?si=KJ2N0EW7g8L-oKuY'}/>
                        <VideoSyntax text={'Personajes LGBT de las caricaturas que tal vez no sabías'} url={'https://www.youtube.com/embed/iT2Wzg9tgG0?si=wqJMRwX3EQ3kmdj1'}/>
                        <VideoSyntax text={'Parque lleras turismo sexual disfrazado para niñas'} url={'https://www.youtube.com/embed/KGB5rZFCdH0?si=6ZXfT00Fx41jaozC'}/>                    
                        <VideoSyntax text={'Consecuencias negativas de los video juegos para niños'} url={'https://www.youtube.com/embed/vkTe7wRXhaQ?si=XQRQk7WPiOMShRPS'}/>
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}