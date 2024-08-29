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

export default function FolletoLaArmaduraDeDios() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">     
                <PrimalNav />           
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`folleto la armadura de dios`}/>
                    </div>  
                    <div style={{width: '100%'}}>  
                    <iframe
                        src="https://flipbookpdf.net/web/site/78abfbed54facb717d7906589ff45755a0ea7119202408.pdf.html"
                        width="100%"
                        height="600"
                        className="flip-book-3d"                        
                        title="Flipbook PDF"
                        ></iframe>  
                        <FolletosRutas />
                </div>                  
                </div>                                
                <Footer />
            </div>
        </div>
    );
}