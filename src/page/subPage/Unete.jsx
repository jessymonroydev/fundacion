import React from "react";
import '../../styles/sub/unete.css'
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import Unete from '../../assets/unete/Unete.jpg';

export default function ElMundo() {
    return(
        <div className="Home">
            <Star />
            <div className="page-container">
                <PrimalNav />
                <Nav />
                <div className="content-page-armadura">
                    <div className="unete-cont-1"><img className="imagen-unete-cont-1" src={Unete} alt="unete" /><div className="unete-position"><LetrasGlobo texto={`Unete a la Fundacion Volver a Nacer`}/></div></div>                    
                </div>
                <Footer />
            </div>
        </div>
    );
}