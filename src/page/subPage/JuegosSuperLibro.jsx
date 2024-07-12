import React from "react";
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../../subcomponent/VideoSyntax.jsx";
import '../../styles/videos.css';

export default function JuegosSuperLibro() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container"> 
                <PrimalNav />               
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center', color: '#b57917'}}>
                        <LetrasGlobo texto={`Juegos de super libro`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <iframe style={{width: '100%', height: '100vh'}} id="JuegosElSuperlibro" title="Juegos del Superlibro" src="https://superlibro.tv/Juegos">
                    </iframe>       
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}