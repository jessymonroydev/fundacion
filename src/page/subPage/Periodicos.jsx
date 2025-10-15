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
                                src="https://pdfhost.io/v/8yWrr2wFwN_Revista-El-Rapto" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                              
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Bautista 2º Edición</div>
                            <iframe 
                                src="https://online.publuu.com/639335/1425639/page/1?embed" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                             
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Bautista 3º Edición</div>
                            <iframe 
                                src="https://online.publuu.com/639335/1425642/page/1?embed" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                            
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Bautista 4º Edición</div>
                            <iframe 
                                src="https://online.publuu.com/639380/1425656/page/1?embed" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                             
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Bautista 6º Edición</div>
                            <iframe 
                                src="https://online.publuu.com/639380/1425809/page/1?embed" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                            
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Bautista 7º Edición</div>
                            <iframe 
                                src="https://online.publuu.com/639380/1425811/page/1?embed" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                            
                        </div>
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>El Bautista 8º Edición</div>
                            <iframe 
                                src="https://online.publuu.com/639380/1425814/page/1?embed" 
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
                                src="https://online.publuu.com/639380/1425653/page/1?embed" 
                                scrolling="no" 
                                frameborder="0" 
                                allow="clipboard-write; autoplay; fullscreen" 
                                className="publuuflip flipflip">
                            </iframe>                             
                        </div>                        
                        <div>
                            <div style={{color: 'gold', fontSize: '1.5'}}>Periódico Halloween</div>
                            <iframe 
                                src="https://online.publuu.com/639335/1425643/page/1?embed" 
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