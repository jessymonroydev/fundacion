import React from "react";
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import PageFlip from '../../components/pageFlip/PageFlip.jsx';
import Counter from '../../components/counter/Counter2.jsx';

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
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Rapto</div>
                            <iframe 
                                src="https://pdfhost.io/v/Vv89Sm89gU_Revista-El-Rapto" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                              
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Bautista 2º Edición</div>
                            <iframe 
                                src="https://pdfhost.io/v/nvyTsduHz7_El-Bautista-2da-Edicion" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                             
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Bautista 3º Edición</div>
                            <iframe 
                                src="https://pdfhost.io/v/wjPx2Bagxn_El-Bautista-3ra-Edicion" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                            
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Bautista 4º Edición</div>
                            <iframe 
                                src="https://pdfhost.io/v/8qBnR5bmdx_Periodico-El-Bautista-4o-Edicion-La-Armadura" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                             
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Bautista 6º Edición</div>
                            <iframe 
                                src="https://pdfhost.io/v/6cvBVQ7Hry_Periodico-El-Bautista-6o-Edicion-Los-dos-caminos" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                            
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Bautista 7º Edición</div>
                            <iframe 
                                src="https://pdfhost.io/v/GCk5LjFTfG_Periodico-El-Bautista-7o-Edicion-El-poder-de-la-Palabra" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                            
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Bautista 8º Edición</div>
                            <iframe 
                                src="https://pdfhost.io/v/knYThL5AtC_Periodico-El-Bautista-8o-Edicion-Nueva-jerusalen" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                             
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Bautista 9º Edición</div>
                            <iframe 
                                src="https://online.publuu.com/639380/1425817/page/1?embed" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                             
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>Periódico-Ataques conta la niñez y adolescencia</div>
                            <iframe 
                                src="https://pdfhost.io/v/g6TFUAGRKm_Periodico-Ataques-conta-la-ninez-y-adolescencia-1" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                             
                        </div>                        
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>Periódico Halloween</div>
                            <iframe 
                                src="https://pdfhost.io/v/MHncqkQWWj_Halloween" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                            
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>Nueva Jerusalén</div>
                            <iframe 
                                src="https://pdfhost.io/v/uKgtxjW8yA_Periodico_Nueva_Jerusalen_Octubre" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                            
                        </div>
                    </div>                   
                </div>  
                <Counter />                 
                <Footer />
            </div>
        </div>
    );
}