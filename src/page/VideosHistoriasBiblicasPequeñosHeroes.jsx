import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function VideosHistoriasBiblicasPequeñosHeroes() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">   
                <PrimalNav />             
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Video Historias Biblicas Pequenos Heroes`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'¿DÓNDE ESTA MI OVEJA?'} url={'https://www.youtube.com/embed/TUlay--1ATQ?si=z3PNrxOl-aKhCL2L'}/>
                        <VideoSyntax text={'EL COMIENZO DE UN HEROE - PEQUEÑOS HEROES'} url={'https://www.youtube.com/embed/WmLls6zICrA?si=_xeR69Nj6rcCBKU4'}/>
                        <VideoSyntax text={'LA MÁQUINA SUPER ESPECIAL DE LA GRACIA'} url={'https://www.youtube.com/embed/GuJicJyBp7Q?si=HnNcfxUEqROJl3Tx'}/>
                        <VideoSyntax text={'DAVID VS GOLIAT'} url={'https://www.youtube.com/embed/sihr2zLnLcQ?si=Iu2-Scs6ujAwV5J9'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'HISTORIAS DE LA BIBLIA PARA NIÑOS – DAVID'} url={'https://www.youtube.com/embed/HFi56T2wU6g?si=QCc-pYyUKLPFmu_-'}/>
                        <VideoSyntax text={'HISTORIAS DE LA BIBLIA PARA NIÑOS - PEDRO'} url={'https://www.youtube.com/embed/OWFl9nPNkOM?si=IF8YHVNstmNISpRo'}/>
                        <VideoSyntax text={'HISTORIAS DE LA BIBLIA PARA NIÑOS – JESUS'} url={'https://www.youtube.com/embed/uzrlUz68Cno?si=8HKZKPkYDCYiUOMK'}/>
                        <VideoSyntax text={'HISTORIAS DE LA BIBLIA PARA NIÑOS - ESTER'} url={'https://www.youtube.com/embed/VK3p3TmcHE0?si=xNneWpAuDCY6HvZB'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'HISTORIAS DE LA BIBLIA PARA LOS NIÑOS - JOSE'} url={'https://www.youtube.com/embed/QF1WDW_GjvM?si=YjYW2PCVERk4pFA8'}/>
                        <VideoSyntax text={'HISTORIAS DE LA BIBLIA PARA NIÑOS - PABLO'} url={'https://www.youtube.com/embed/fFbyiM7g3dg?si=VjDX72JRxTszS08H'}/>
                        <VideoSyntax text={'HISTORIAS DE LA BIBLIA PARA NIÑOS - MOISÉS'} url={'https://www.youtube.com/embed/dib6xNgTMbU?si=1gYz2t6-JkTqdhAF'}/>
                        <VideoSyntax text={'HISTORIAS DE LA BIBLIA PARA LOS NIÑOS – ELIAS'} url={'https://www.youtube.com/embed/cv271TXComc?si=_ObFcd4KvsDGPh3j'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'La Ciencia de La Biblia: Jesús - Parte 1'} url={'https://www.youtube.com/embed/eprtDGbl7-c?si=jutkNflhiZxfYnu0'}/>                        
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}