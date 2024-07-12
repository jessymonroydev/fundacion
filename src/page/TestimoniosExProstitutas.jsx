import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function TestimoniosExProstitutas() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">      
                <PrimalNav />          
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Testimonios de Ex prostitutas transformados por Cristo`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'IMPACTANTE TESTIMONIO: ME APODABAN "LA D1ABLA", HOY SIRVO A DIOS'} url={'https://www.youtube.com/embed/fZT5H6VASUY?si=KZZIUuql_HZ9KKkJ'}/>
                        <VideoSyntax text={'Desgarrador testimonio de joven víctima de la prostitución -- Exclusivo Online'} url={'https://www.youtube.com/embed/Gj6EZn_qWc4?si=Sqpeqz7op2AxE-bE'}/>
                        <VideoSyntax text={'Testimonio de una ex-prostituta en unas Jornadas en Cuenca'} url={'https://www.youtube.com/embed/svCp82y-8B0?si=wAspoLwz4Mv66X-I'}/>
                        <VideoSyntax text={'EX-PR0ST1TUT@ 😱 UNO DE LOS TESTIMONIOS MÁS REALES DE LA HISTORIA 😱 VALE LA PENA VER ESTA MUJER'} url={'https://www.youtube.com/embed/S8wazRvbJGE?si=a4FnEn-Fa4rOg1HB'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'IMPACTANTE TESTIMONIO: "CRISTO ME RESCATÓ DE LA PR0ST1TUC10N Y DR0G4AS"'} url={'https://www.youtube.com/embed/J1FiZSOUFEk?si=Yq26IsAwP9Z0wZ6J'}/>
                    </div>                                                       
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}