import React from "react";
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import '../../styles/videos.css';
import '../../styles/folletos.css';
import { Link } from "react-router-dom";
import FolletosRutas from "../../components/folletosRutas/FolletosRutas.jsx";

export default function EscuelaDePadres() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`folletos`}/>
                    </div>  
                    <div style={{width: '100%'}}>  
                        <FolletosRutas />
                    </div>                  
                </div>                                
                <Footer />
            </div>
        </div>
    );
}