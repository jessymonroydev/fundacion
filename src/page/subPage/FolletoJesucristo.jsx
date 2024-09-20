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
import Counter from '../../components/counter/Counter2.jsx';

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
                        src="https://online.publuu.com/639335/1425592/page/1?embed" 
                        scrolling="no" 
                        frameborder="0" 
                        allow="clipboard-write; autoplay; fullscreen" 
                        className="publuuflip flipflip"></iframe>                          
                        <FolletosRutas />
                </div>                  
                </div> 
                <Counter />                                  
                <Footer />
            </div>
        </div>
    );
}