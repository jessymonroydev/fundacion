import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function VideosElCastigo() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">    
                <PrimalNav />            
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos El Castigo`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'NIÑOS EN EL INFIERNO POR LAS CARICATURAS'} url={'https://www.youtube.com/embed/rkjbstXj79A?si=wQENWMbBmR92gvmz'}/>
                        <VideoSyntax text={'LA NINA QUE BAJO AL INFIERNO'} url={'https://www.youtube.com/embed/bhVbRRHWSvE?si=C3fmR-y_iO7wskAj'}/>
                        <VideoSyntax text={'NIÑA QUE ESTUVO POR LAS HABITACIONES DEL INFIERNO'} url={'https://www.youtube.com/embed/K4InfbC0v-w?si=o18miy-E83tO7xcD'}/>
                        <VideoSyntax text={'NINA DE 10 AÑOS QUE FUE LLEVADA AL CIELO Y EL INFIERNO'} url={'https://www.youtube.com/embed/XnbjqBvSaAM?si=vKVq5o7hIJw3Nkpi'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'ANGELICA FUE AL INFIERNO Y VIO MUCHOS CANTANTES'} url={'https://www.youtube.com/embed/MPKSbm8T6iQ?si=_Rg7q_bSO3Q8Ha--'}/>
                        <VideoSyntax text={'NIÑA FUE LLEVADA AL CIELO Y AL INFIERNO'} url={'https://www.youtube.com/embed/Vl8zs4sY4dc?si=LuEE-9tnL8RiRyYj'}/>
                        <VideoSyntax text={'EL HORNO DE FUEGO'} url={'https://www.youtube.com/embed/UqKX-JgBRaA?si=3jxAKRTIEU6ybg5O'}/>
                        <VideoSyntax text={'SATANAS TIENTA A JESUS'} url={'https://www.youtube.com/embed/-KJLr-ZaWEs?si=dqeuCelSj0hSE6G9'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'MIGUEL CONTRA LUCIFER'} url={'https://www.youtube.com/embed/A_e4Sww3B8U?si=k4Qm0o3V0hPulVau'}/>
                        <VideoSyntax text={'JESUS HECHA FUERA UN DEMONIO'} url={'https://www.youtube.com/embed/MUpRbRPsEBg?si=J7hBB1xGnPZm5-4K'}/>                        
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}