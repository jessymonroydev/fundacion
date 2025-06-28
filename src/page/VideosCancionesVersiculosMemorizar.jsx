import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function VideosCancionesVersiculosMemorizar() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">     
                <PrimalNav />           
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Video Canciones con versiculos para memorizar`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Salmo 4:8'} url={'https://www.youtube.com/embed/Tewdssx-9zo?si=fAn_I77jxZEEInaN'}/>
                        <VideoSyntax text={'Isaías 43:2'} url={'https://www.youtube.com/embed/aPXKZNRhQ_E?si=5V6ZWVJ-7GDpumJO'}/>
                        <VideoSyntax text={'Mateo 6:6'} url={'https://www.youtube.com/embed/bRO0db-x97Y?si=-a-H0YZkG07mL6lm'}/>
                        <VideoSyntax text={'Josué 1:9'} url={'https://www.youtube.com/embed/Tewdssx-9zo?si=9v7tOLO6Jc1H76ju'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Juan 3:16'} url={'https://www.youtube.com/embed/xpF_vKwbh5A?si=p836fBvSZcM-pNgF'}/>
                        <VideoSyntax text={'Apocalipsis 3:20'} url={'https://www.youtube.com/embed/1e9OIlXVvbU?si=l4mmPCzgNoWiA-PP'}/>
                        <VideoSyntax text={'Juan 14:2-4'} url={'https://www.youtube.com/embed/eD8bdQBXzeQ?si=C8kpYUuYRuOEAMiL'}/>
                        <VideoSyntax text={'Juan 3:16'} url={'https://www.youtube.com/embed/x9yMt8TDRsU?si=rG2Z1YjGmJnomrcT'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'1ra de Corintios 13:4-6'} url={'https://www.youtube.com/embed/Aw1nBIdCVtU?si=hahcTcp5NNr9hCKz'}/>
                        <VideoSyntax text={'BENITO canta: ERES TODO PODEROSO | Mundo JOSÉ ORDÓÑEZ 2020'} url={'https://www.youtube.com/embed/2tN_VcwRTWI?si=KFB85Bzf8Zte4ZVZ'}/>
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}