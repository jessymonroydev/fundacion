import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function VideosDePablitoElMisionero() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Pablito el pequeno misionero`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div style={{fontSize: '2.5em', color: 'gold', width: '100%', textAlign: 'center', marginBottom: '25px'}}>Volumen 1</div>
                    <div className="video-contenedor-articulos">                        
                        <VideoSyntax text={'1. Daniel en el Foso de los Leones'} url={'https://drive.google.com/file/d/17Y7FftIeknNlPJ2VB4ytKII4MzO73y_c/preview'}/>
                        <VideoSyntax text={'2. Daniel en el Palacio del Rey'} url={'https://drive.google.com/file/d/1AtyCMd6eS-sjMdJW_rr17FxzIzOZbome/preview'}/>
                        <VideoSyntax text={'3. La Estatua de Oro'} url={'https://drive.google.com/file/d/18B0n4uZimlEpqvIYuITkyphAgRLGUHUF/preview'}/>
                        ya<VideoSyntax text={'4. La Escritura en la Pared'} url={'https://www.youtube.com/embed/wvVXBV9iDvI?si=rfq5k5CZMRrG2f3Y'}/>
                     </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'5. La Consagración del Rey David'} url={'hhttps://drive.google.com/file/d/1HqPzph7qbcIR_e4QNDUE67S9ZqTIJ2YW/preview'}/>
                        <VideoSyntax text={'6. Saúl y los Espíritus Malignos'} url={'https://drive.google.com/file/d/1bQGbwSMFdhIGnc5SBFBMO5SVo52dy2RW/preview'}/>
                        <VideoSyntax text={'7. David y Goliat'} url={'https://drive.google.com/file/d/1m_4fww9qPA8XZBrEe5qcBiohmbNLMx7D/preview'}/>
                        <VideoSyntax text={'8. David Perdona a Saúl'} url={'https://drive.google.com/file/d/1GR9oYLh0quBfEI6YmRBgOMfnEUYTB_Hk/preview'}/>
                    </div> 


                    {/* Separación */}
                    <div style={{fontSize: '2.5em', color: 'gold', width: '100%', textAlign: 'center', marginBottom: '25px'}}>Volumen 2</div>
                    <div className="video-contenedor-articulos">                        
                        <VideoSyntax text={'1. La Sabíduria del Rey Salomon'} url={'https://drive.google.com/file/d/1Bfr-QEU8kEkKQQCdY5sSJEFEq-0alAqi/preview'}/>
                        <VideoSyntax text={'2. El Sacrificio de Anna'} url={'https://drive.google.com/file/d/13nT5jq_JHhlWOCsrxIpXLsIPUiYyQm5B/preview'}/>
                        <VideoSyntax text={'3. La Viuda de Sarepta'} url={'https://drive.google.com/file/d/1pREGQ_I8lJqKN2kuvGDxYopg-dgt2ZMY/preview'}/>
                        <VideoSyntax text={'4. Sansón y Dalila'} url={'https://drive.google.com/file/d/14s7I_adC4ztOn8CpxC_Guu-3aHQ7aeZT/preview'}/>
                     </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'5. Jonas y El Gran Pez'} url={'https://drive.google.com/file/d/1yyjEk_AXwvdmS-AzdUklxiwuESA-ADOy/preview'}/>
                        <VideoSyntax text={'6. Jonas en La Ciudad de Ninive'} url={'https://drive.google.com/file/d/10lYVBfVEqpR67gmba5nc1oBxDZdjahVn/preview'}/>
                        <VideoSyntax text={'7. La Cura de Naaman'} url={'https://drive.google.com/file/d/1SjsITZhP0h1QCcF6ydYpWe1VNmDeLsIN/preview'}/>
                        <VideoSyntax text={'8. La Coronacion de Roboam'} url={'https://www.youtube.com/embed/RVjTEcvP82E?si=gE4g02lFWJk8wPvg'}/>
                    </div> 
                    
                    
                    {/* Separación */}
                    <div style={{fontSize: '2.5em', color: 'gold', width: '100%', textAlign: 'center', marginBottom: '25px'}}>Volumen 2</div>
                    <div className="video-contenedor-articulos">                        
                        <VideoSyntax text={'1. El Rescate de Moisés'} url={'https://drive.google.com/file/d/1kr170yiPH5KwESU202pnaAUzqIAdimFO/preview'}/>
                        <VideoSyntax text={'2. Dios habla con Moisés'} url={'https://drive.google.com/file/d/1Og6vX3IWK0WG5zBgj6i-_567pwITTdh8/preview'}/>
                        <VideoSyntax text={'3. Moisés habla con el Faraón'} url={'https://www.youtube.com/embed/lvNROOCVFrQ?si=p3hBLp553DeVRebb'}/>
                        <VideoSyntax text={'4. El cruce del mar rojo'} url={'https://drive.google.com/file/d/1jW3aHbLTCitc2w04LJsP6y1MCq2Q-A3m/preview'}/>
                     </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'5. El asna de Balaam'} url={'https://drive.google.com/file/d/1ZeObepsdt2rfYodKWWvkRE0co16JVTCk/preview'}/>
                        <VideoSyntax text={'6. La historia del Rey Acab'} url={'https://drive.google.com/file/d/1dMKnTNuvuYRcyqRnuHFGNKe8cFxIkuYW/preview'}/>
                        <VideoSyntax text={'7. Gedeón elige su ejército'} url={'https://www.youtube.com/embed/5YaQnbNEPo0?si=KK_VMgFp1z_H-1ht'}/>
                        <VideoSyntax text={'8. Esaú y Jacob'} url={'https://drive.google.com/file/d/1U7WnSXpn55U7_T7kOLgb9hIJgRP2C1k3/preview'}/>
                    </div> 
                
                
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}