import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from "../components/counter/Counter.jsx";

export default function VideosLaIdolatria() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container"> 
                <PrimalNav />               
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos La Idolatria`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'La idolatría trae maldición a los hogares'} url={'https://www.youtube.com/embed/KcBnNS5nQOM?si=aU8J4tTfINLe5Sac'}/>
                        <VideoSyntax text={'Las brujas se roban niños espiritualmente para sacrificarlos'} url={'https://www.youtube.com/embed/oVvsXnpYTQA?si=xNrrnsiZZPh4w_UL'}/>
                        <VideoSyntax text={'Que dijo el apóstol pablo de la idolatría'} url={'https://www.youtube.com/embed/1fiyGD_Rneg?si=tuVV7CSCRCiCzwa-'}/>
                        <VideoSyntax text={'Jesús, el único camino a la verdad'} url={'https://www.youtube.com/embed/WGlcoWAPDwg?si=J59Pfo3EHuFtNKUY'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'idolatría lleva a la ceguera'} url={'https://www.youtube.com/embed/IeRAeeHYB2w?si=1G4YZiVHUoCUSeLS'}/>
                        <VideoSyntax text={'Descubre que dice la Biblia sobre la brujería y sus peligros'} url={'https://www.youtube.com/embed/Af69S6BxYhQ?si=9FQWeIQ7e5uT2KFZ'}/>
                        <VideoSyntax text={'Armero castigado por la santería; hay espíritus que se manifiestan hoy'} url={'https://www.youtube.com/embed/DjdOMJybOu0?si=lzMdBoHB8KfApvDv'}/>
                        <VideoSyntax text={'La idolatría te lleva a la condenación'} url={'https://www.youtube.com/embed/ucdK7b1SBMY?si=DJBoP06au9g_1UKc'}/>
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}