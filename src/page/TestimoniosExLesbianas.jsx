import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function TestimoniosExLesbianas() {
    return(
        <div className="Home">
            <Star />
            <div className="page-container">     
                <PrimalNav />           
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Testimonios de Ex lesbianas transformados por Cristo`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'De Lesbiana a Cristiana Testimonio cristiano impactante'} url={'https://www.youtube.com/embed/qtNUyEyhm28?si=r3mYaQ0T7seKw4Cq'}/>
                        <VideoSyntax text={'EX- LESBIANA Y BRUJA TRANSFORMADA POR DIOS / IMPACTANTE TESTIMONIO'} url={'https://www.youtube.com/embed/_8FI4JbR99A?si=musjau6AvQElSmTN'}/>
                        <VideoSyntax text={'TESTIMONIO / DIOS TRANSFORMA EX- LESBIANA (Centro Cristiano Soplo De Vida) - Cristina Bletré'} url={'https://www.youtube.com/embed/Lp_FBilP8nw?si=IyN_gR8ad4Bi5YlJ'}/>
                        <VideoSyntax text={'Testimonio Ex-Lesbiana Ana Lara'} url={'https://www.youtube.com/embed/CRXosl4IR88?si=ajdW0MvSzw0QionZ'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'HISTORIAS REALES: EX LESBIANA'} url={'https://www.youtube.com/embed/pt5rxkegc_A?si=Lsyo6ur1EOUI6iXx'}/>
                        <VideoSyntax text={'Blanquita Silva ex-lesbiana testimonio impactante'} url={'https://www.youtube.com/embed/dSeVOLZnqOo?si=NSkBBnCnhnjB7vLb'}/>
                        <VideoSyntax text={'TESTIMONIO CRISTIANO IMPACTANTE| LIBERACIÓN DE LESBIANISMO| DOMINIC CRUZ'} url={'https://www.youtube.com/embed/iVhJCVv4qPc?si=1oy7SKNHwqqOomBs'}/>
                        <VideoSyntax text={'TESTIMONIO 1MPACTANTE DE EX LESBIANA - DIOS ME CAMB10 !'} url={'https://www.youtube.com/embed/sYDbuGrqYVI?si=kZVksLp5vWipsnsJ'}/>
                    </div>  
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Cómo Detectar una Lesbiana'} url={'https://www.youtube.com/embed/TZyp388W-Pg?si=oMYO4KA_yd8QoxG1'}/>
                        <VideoSyntax text={'Testimonio ¿Se puede salir de lesbianismo? Blanquita Silva (versión larga)'} url={'https://www.youtube.com/embed/Y6pnNeycG8M?si=q8n_sHLeJgar10Xo'}/>                        
                    </div>                                  
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}