import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function CaricaturasPeligrosas() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`caricaturas peligrosas`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Caritaturas peligrosas cambiarlo por QUIEREN APADRINAR TUS HIJOS'} url={'https://www.youtube.com/embed/Ectwm7q1S0w?si=2nLErGo26GXwmhck'}/>                           
                        <VideoSyntax text={'Dibujos Animados Diabólicos 2019'} url={'https://www.youtube.com/embed/IqC6wtC2XIY?si=73e1ZUv6y4WNvTRG'}/> 
                        <VideoSyntax text={'Spiderman es Satánico'} url={'https://www.youtube.com/embed/LLbYEpurl-o?si=ntcK0OkNUTrApxak'}/> 
                        <VideoSyntax text={'CONFIRMADO!! THE BATMAN ES SATÁNICO Y TE LO DEMUESTRO'} url={'https://www.youtube.com/embed/ZPA-MlwqKB4?si=B7PVdeps_MNa3v-f'}/>                           
                    </div> 
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'CONFIRMADO!! SUPERMAN ES SATÁNICO Y TE LO DEMUESTRO'} url={'https://www.youtube.com/embed/-IOPVVqh7Us?si=FyvFSVSTPgy7ffHT'}/>                           
                        <VideoSyntax text={'ESTAS SERIES PODRÍAN ESTAR ENSEÑANDO MALAS CONDUCTAS - PROGRAMAS INFANTILES'} url={'https://www.youtube.com/embed/wTrUO7btBc0?si=LhvAp1f6G3HnHWKK'}/> 
                        <VideoSyntax text={'LA PEOR CARICATURA de CADA CANAL de TV ANIMADO'} url={'https://www.youtube.com/embed/Cb3qjWvaScw?si=KZ5_lpz4zZC9FglE'}/> 
                        <VideoSyntax text={'LA PEOR PELÍCULA ANIMADA de CADA ESTUDIO'} url={'https://www.youtube.com/embed/HmnVexBNBFA?si=Gi7vcDf-AD_yUCdS'}/>                           
                    </div> 
                    <div className="video-contenedor-articulos">                           
                        <VideoSyntax text={'EX BRUJA REVELA LA VERDAD DE LOS TATUAJES Y PERFUMES ¡LO QUE NADIE TE CONTÓ!'} url={'https://www.youtube.com/embed/aWKUD6uTwe0?si=XcQOmTtc7plETNsB'}/> 
                    </div>                                      
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}