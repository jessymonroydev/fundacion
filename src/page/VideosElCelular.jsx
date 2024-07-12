import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function VideosElCelular() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">    
                <PrimalNav />            
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos El Celular`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Apps de teléfono PELIGROSAS para niños y comunes para ADULTOS que son PEOR de lo que parecen'} url={'https://www.youtube.com/embed/OimQTfmrs2E?si=fmV6-FuN3Qg3fAKc'}/>
                        <VideoSyntax text={'Niño de 10 años se quitó la vida en Medellín porque su hermano “no le prestó el celular”'} url={'https://www.youtube.com/embed/1uXMkbT6JWU?si=itnqzo4i_IA710w2'}/>
                        <VideoSyntax text={'Cómo ESTAS TECNOLOGIAS generan niños más AGRESIVOS, DISTRAIDOS Y ENFERMOS'} url={'https://www.youtube.com/embed/DQk7HK3Aq_U?si=lynDAhpP8vTBBH0r'}/>
                        <VideoSyntax text={'CUIDADOS DEL CEREBRO en la primera infancia - Cómo cuidar el cerebro de un niño de 0 a 6 años'} url={'https://www.youtube.com/embed/lJvcHhOcOD0?si=huYxzldlDTfbmP82'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Se lanzó de un puente porque su mamá le quitó su celular'} url={'https://www.youtube.com/embed/D8h-urYyh7A?si=88jfPrVouxJYZkOq'}/>
                        <VideoSyntax text={'Efectos de la Televisión, Celulares y Videojuegos en los Niños 😮'} url={'https://www.youtube.com/embed/ES7Wub9M7Lo?si=ZQT-IYfI-KF3ruqA'}/>
                        <VideoSyntax text={'Los peligrosos efectos por el uso de celulares en los niños'} url={'https://www.youtube.com/embed/TcXe8cnsECg?si=OG772X49raCta8nN'}/>
                        <VideoSyntax text={'CONSECUENCIAS CIENTÍFICAMENTE COMPROBADAS DE LAS PANTALLAS EN EL CEREBRO DEL NIÑO'} url={'https://www.youtube.com/embed/ofpIRE8EKjQ?si=XUrPMIRVOGnUuTs_'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'¿Qué daños a la salud causa el uso excesivo del celular?'} url={'https://www.youtube.com/embed/gJgjlOi85ww?si=0dzsdnJlARgVvPTr'}/>
                        <VideoSyntax text={'6 enfermedades que los celulares le provocan a los niños'} url={'https://www.youtube.com/embed/LV1Qs3EuUp8?si=2UJuRmw1m-eozheG'}/>
                        <VideoSyntax text={'Adicción a los videojuegos 🎮 💀 trastorno del juego juego patológico🕹️'} url={'https://www.youtube.com/embed/zQrURkmh-jw?si=yJh_Dv_Q1h6n7fAX'}/>
                        <VideoSyntax text={'El terror de los videojuegos - ADICCIÓN DIGITAL'} url={'https://www.youtube.com/embed/ZrYOHWA76_I?si=vmrFw1aeqsvp7eUu'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'¿Cómo afecta el uso de la tecnología a la visión de los niños?'} url={'https://www.youtube.com/embed/dp315wlQAg8?si=34KMOLJnZRx3DPWr'}/>
                        <VideoSyntax text={'Niño se quita la vida porque lo quitaron el celular'} url={'https://www.youtube.com/embed/DsZmQcxrbbU?si=YacJA592u1o7Kmok'}/>                                               
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}