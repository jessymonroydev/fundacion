import React from "react";
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import '../../styles/videos.css';
import '../../styles/folletos.css';
import { Link } from "react-router-dom";
import PageFlip from '../../components/pageFlip/PageFlip.jsx';
import FolletosRutas from "../../components/folletosRutas/FolletosRutas.jsx";
import '../../styles/flipBook3d.css';

export default function FolletoComoAyudarATusHijos() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container"> 
                <PrimalNav />               
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`folleto como ayudar a tus hijos`}/>
                    </div>
                    <iframe
                        src="https://flipbookpdf.net/web/site/fe9091968e8cdff9b9ede350ae6d171abbb5faa5202408.pdf.html"
                        width="100%"
                        height="600"
                        className="flip-book-3d"                        
                        title="Flipbook PDF"
                        ></iframe>  
                    <div style={{width: '100%'}}>  
                        <FolletosRutas />
                </div>                  
                </div>                                
                <Footer />
            </div>
        </div>
    );
}