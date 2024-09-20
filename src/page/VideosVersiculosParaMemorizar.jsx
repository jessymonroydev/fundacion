import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function VideosVersiculosParaMemorizar() {
    return(
        <div className="Home">
            <Star />
            <div className="page-container">     
                <PrimalNav />           
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Video Versiculos para memorizar`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'PORQUE TODA ESCRITURA ES INSPIRADA POR DIOS'} url={'https://www.youtube.com/embed/Qt_30hGoQ5c?si=wqeRq4EvwI4Wpdmv'}/>
                        <VideoSyntax text={'OCULTAN SU MARAVILLOSA CREACION'} url={'https://www.youtube.com/embed/jj_ta8DmJXI?si=Ce69PC4164BAPx6O'}/>
                        <VideoSyntax text={'POR ESO DIOS LOS ENTREGO A PASIONES VERGONZOSAS'} url={'https://www.youtube.com/embed/NmJ3W9sgkTg?si=zZGcUvlshtKJri55'}/>
                        <VideoSyntax text={'ESTE ES MI MANDAMIENTO: DIJO JESUS'} url={'https://www.youtube.com/embed/c5n3EZ7foiw?si=PKnKyUFJvHeCBEOe'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'DIOS VIENE A GOVERNAR Y EN LA TIERRA SERA COMO EN EL CIELO'} url={'https://www.youtube.com/embed/NErn0RjCZ0o?si=nitzzd4JxHDDnbdv'}/>
                        <VideoSyntax text={'EN LA CASA DE MI PADRE MUCHA MORADAS HAY'} url={'https://www.youtube.com/embed/eD8bdQBXzeQ?si=M_Vdc1Ssay3-10Px'}/>
                    </div>                                       
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}