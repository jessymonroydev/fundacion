import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from "../components/counter/Counter.jsx";

export default function VideosLaInmoralidad() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">   
                <PrimalNav />             
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos La Inmoralidad`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Pedófilo se hizo entrenador de futbol para abusar de los niños'} url={'https://www.youtube.com/embed/3nLMgnl9KFE?si=XdpmeaIWWSG_Vq47'}/>
                        <VideoSyntax text={'JESUS dice: el matrimonio es un hombre y una mujer'} url={'https://www.youtube.com/embed/zOlcpLB1qfY?si=aGJ4bqXQv4EC93Id'}/>
                        <VideoSyntax text={'Jesús, el adulterio y el divorcio'} url={'https://www.youtube.com/embed/2avxUe3gDY4?si=IiimyASu0qK-VFp4'}/>
                        <VideoSyntax text={'El Mensajero Bautista'} url={'https://www.youtube.com/embed/wpry8mcVpbc?si=eNKRXQt26aIeYOJK'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Vete y no peques más'} url={'https://www.youtube.com/embed/YmQHAYv7SM0?si=Mrz5BoCrvW5dP66w'}/>
                        <VideoSyntax text={'El martirio de Esteban por decirles la verdad'} url={'https://www.youtube.com/embed/5JRdF319LMo?si=NRp4nw9OrWmHd3sk'}/>
                        <VideoSyntax text={'Generación de Víboras'} url={'https://www.youtube.com/embed/kCGqK4vzRB8?si=s-uTVnwb8YEY6s_i'}/>
                        <VideoSyntax text={'Amen a sus enemigos'} url={'https://www.youtube.com/embed/fHKHcNXZg2I?si=aPNitJyvM9sFBRhS'}/>
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}