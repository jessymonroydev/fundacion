import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function TestimoniosExBrujos() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">      
                <PrimalNav />          
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Testimonios de Ex brujos transformados por Cristo`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'EX BRUJO CONVERTIDO EN PASTOR'} url={'https://www.youtube.com/embed/VUrSUiyMF00?si=CoIEIWHafaF0kKnP'}/>
                        <VideoSyntax text={'EX BRUJO EXPLICA CÓMO LOS DEMONIOS ENGAÑAN A LAS IGLESIAS'} url={'https://www.youtube.com/embed/C2dLydSeHyc?si=wlRMiTBPabmlxDuY'}/>
                        <VideoSyntax text={'EX BRUJA REVELA LOS SECRETOS DE SATANÁS'} url={'https://www.youtube.com/embed/LIKlVYELdXY?si=k6pfMSXC0ADv9BcS'}/>
                        <VideoSyntax text={'EX BRUJO REVELA CÓMO HACEN DAÑO LAS BRUJAS'} url={'https://www.youtube.com/embed/ZfSve2CDLUE?si=mq6FAtdCi5ZHKKm_'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'EX BRUJA EXPLICA TODO LO QUE PODÍA HACER'} url={'https://www.youtube.com/embed/Tangte1iX64?si=6JbP7AwAUCWkLhh0'}/>
                        <VideoSyntax text={'6 FAMOSOS QUE HICIERON PACTO CON EL DIABLO'} url={'https://www.youtube.com/embed/97s-zNj5ZFw?si=JJh6St-4KQbqafJU'}/>
                        <VideoSyntax text={'LOS FAMOSOS BEBEN SANGRE DE BEBÉ'} url={'https://www.youtube.com/embed/HYac-YNTgds?si=ipaqyMw5pd0UR7uP'}/>                        
                    </div>                                      
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}