import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function VideosSobreSatanas() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">    
                <PrimalNav />            
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos Sobre Satanas Es Real`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Jesús se Enfrenta al Diablo Satanás Lucifer'} url={'https://www.youtube.com/embed/4UHFm13y7BY?si=5pd7P8N8VIvxqhAn'}/>
                        <VideoSyntax text={'Sois de vuestro padre el diablo'} url={'https://www.youtube.com/embed/7hpuNX4ASDo?si=IREp0Ksy0fNLNJBk'}/>
                        <VideoSyntax text={'Jesús advierte a Pedro y ofrece la oración intercesora'} url={'https://www.youtube.com/embed/WvouorejX0E?si=_0NS4MWAwxFbN2gD'}/>
                        <VideoSyntax text={'Jesús echa fuera un demonio'} url={'https://www.youtube.com/embed/ye5eJUTmSZk?si=qW0xjDjtxFd09cbo'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Cuando 7 espíritus peores entran en un pecador'} url={'https://www.youtube.com/embed/5y6QR_HMq-0?si=2UWR9Nsul2Wc-MM1'}/>
                        <VideoSyntax text={'JESÚS es tentado por Satanás en el desierto'} url={'https://www.youtube.com/embed/H1l4wDjJAro?si=shSk7fihkb33qzc9'}/>
                        <VideoSyntax text={'Job'} url={'https://www.youtube.com/embed/wXSrKZBuiAg?si=FAxiV5YJWbEgVrLS'}/>
                        <VideoSyntax text={'Jesús y la prueba en el desierto'} url={'https://www.youtube.com/embed/3efzKzwt_F8?si=jux5KrDNOvjt8W1R"'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'El endemoniado Gadareno'} url={'https://www.youtube.com/embed/i4hyMH8vEe0?si=1H2X_zpLBFQeoEcg'}/>
                        <VideoSyntax text={'El Templo de Lucifer'} url={'https://www.youtube.com/embed/XVeZTaUQvlc?si=LcANQ6qHZPFUnJxG'}/>
                        <VideoSyntax text={'De Quien Eres Hijo - César Méndez El Bautista'} url={'https://www.youtube.com/embed/_swV10hJDgQ?si=YN6aY7b0dR5Vo3XG'}/>                    
                        <VideoSyntax text={'Descubre La Verdad Oculta del Halloween | César Méndez El Bautista'} url={'https://www.youtube.com/embed/rmMGNnMs_7U?si=bfrNP66P6GleCogZ'}/>
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}