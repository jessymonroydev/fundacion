import React, { useState } from "react";
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import Canciones from "../../subcomponent/pageComponent/Canciones.jsx";
import Memoria from "../../subcomponent/pageComponent/Memoria.jsx";
import '../../styles/sub/switches.css';
import Counter from '../../components/counter/Counter2.jsx';

export default function ElMundo() {
    const [switchPage, setSwitchPage] = useState('canciones');
    
    let renderSwitch = null;

    const handleSwitchPage = (content) => {
        setSwitchPage(content)
    }

    if (switchPage === 'canciones') {
        renderSwitch = <Canciones />
    } else if (switchPage === 'memoria') {
        renderSwitch = <Memoria />
    }

    return(
        <div className="Home">
            <Star />
            <div className="page-container">     
                <PrimalNav />           
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center', color: '#b57917'}}>
                        <LetrasGlobo texto={`Concurso "Aprende las canciones de Cesar Mendez El Bautista"`}/>
                    </div>
                    <div className="switch">
                        <div className={switchPage === 'canciones' ? "button-switch elegido" : "button-switch"} onClick={() => {handleSwitchPage('canciones')}}>Canciones</div> 
                        <div className={switchPage === 'memoria' ? "button-switch elegido" : "button-switch"} onClick={() => {handleSwitchPage('memoria')}}>Memoria</div>   
                    </div> 
                    {renderSwitch}                   
                </div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}