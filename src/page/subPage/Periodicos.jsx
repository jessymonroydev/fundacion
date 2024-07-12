import React from "react";
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import PageFlip from '../../components/pageFlip/PageFlip.jsx';

export default function periodicos() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`periodicos`}/>
                    </div> 
                    <div>
                        <div>
                            <PageFlip texto={'El Rapto'} ruta={'periodico1'} />
                        </div>
                        <div>
                            <PageFlip texto={'El Bautista 2º Edición'} ruta={'periodico2'} />
                        </div>
                        <div>
                            <PageFlip texto={'El Bautista 3º Edición'} ruta={'periodico3'} />
                        </div>
                        <div>
                            <PageFlip texto={'El Bautista 4º Edición'} ruta={'periodico4'} />
                        </div>
                        <div>
                            <PageFlip texto={'El Bautista 6º Edición'} ruta={'periodico5'} />
                        </div>
                        <div>
                            <PageFlip texto={'El Bautista 7º Edición'} ruta={'periodico6'} />
                        </div>
                        <div>
                            <PageFlip texto={'El Bautista 8º Edición'} ruta={'periodico7'} />
                        </div>
                        <div>
                            <PageFlip texto={'El Bautista 9º Edición'} ruta={'periodico8'} />
                        </div>
                        <div>
                            <PageFlip texto={'Periodico-Ataques conta la niñes y adolescencia'} ruta={'periodico9'} />
                        </div>
                        <div>
                            <PageFlip texto={'Periodico Halloween'} ruta={'periodico10'} />
                        </div>
                        <div>
                            <PageFlip texto={'Periodico Nueva Jerusalen'} ruta={'periodico11'} />
                        </div>
                    </div>                   
                </div>                
                <Footer />
            </div>
        </div>
    );
}