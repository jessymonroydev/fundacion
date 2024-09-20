import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function Halloween() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">     
                <PrimalNav />           
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`HALLOWEEN`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Cesar Méndez El Bautista reacciona contra la propuesta del ICBF'} url={'https://www.youtube.com/embed/OvqKth4E3jU?si=F6p5_gwvvSnMKvDb'}/>
                        <VideoSyntax text={'† EL ORIGEN SATÁNICO DEL HALLOWEEN ��'} url={'https://www.youtube.com/embed/crM0flPBLI8?si=dUFbbQ0GCpxf5APc'}/>
                        <VideoSyntax text={'EX SATANICO EN CONTRA DEL HALLOWEEN WEB'} url={'https://www.youtube.com/embed/H0Zbaqt8Hfo?si=A3zzJfRYoC6yn1hM'}/>
                        <VideoSyntax text={'HALLOWEEN Su Origen Satanico a La Luz de La Biblia para Jovenes, Adolescentes y Niños'} url={'https://www.youtube.com/embed/NgdbPh83WO0?si=USbU2jyi5l0pHclI'}/>
                    </div>                                                         
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}