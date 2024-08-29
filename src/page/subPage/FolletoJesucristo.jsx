import React from "react";
import Nav from "../../components/nav/Nav.jsx";
import Star from "../../subcomponent/Star.jsx";
import PrimalNav from "../../components/primalNav/PrimalNav.jsx";
import Footer from "../../components/footer/Footer.jsx";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import '../../styles/videos.css';
import '../../styles/folletos.css';
import { Link } from "react-router-dom";
import PageFlip from '../../components/pageFlip/PageFlip.jsx';
import FolletosRutas from "../../components/folletosRutas/FolletosRutas.jsx";

export default function FolletoJesucristo() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Folleto Jesucristo`}/>
                    </div>                      
                    <div style={{width: '100%'}}>
                    <iframe
                        src="https://flipbookpdf.net/web/site/168e55ce118ba1742eb9873d742ad1642eb7ec54202408.pdf.html"
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