import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function VideosLaArmaduraDeDios() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">      
                <PrimalNav />          
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos La Armadura de Dios`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'La armadura de dios'} url={'https://www.youtube.com/embed/Of44-k7kXes?si=0Oo91putA4svps5g'}/>
                        <VideoSyntax text={'Una aventura gigante'} url={'https://www.youtube.com/embed/ujVJNiyUxsg?si=fnN6zsG0M7g7FlYa'}/>
                        <VideoSyntax text={'la Armadura de Dios'} url={'https://www.youtube.com/embed/jGn3DxyVFww?si=PDdx3BpuLBJtnwYu'}/>
                        <VideoSyntax text={'Héroes de la fe'} url={'https://www.youtube.com/embed/4KNxKmudA0A?si=VKVKInHAmrJECA5s'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Luis misionero'} url={'https://www.youtube.com/embed/SXq-ReksQLM?si=_nUAi2drOyaNFUwY'}/>
                        <VideoSyntax text={'El casco de Gracia y Salvación'} url={'https://www.youtube.com/embed/03gfsFBR6YI?si=YMvXed4DqK11t6uC'}/>
                        <VideoSyntax text={'Jesús sana un Ciego'} url={'https://www.youtube.com/embed/Towu4kYAO-Y?si=1ev7iNydkuB5aqYr'}/>
                        <VideoSyntax text={'La Armadura de Dios'} url={'https://www.youtube.com/embed/Vm5vKXB3K9I?si=yCKDbJsLAfua5x6L'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'La Armadura de Dios para niños'} url={'https://www.youtube.com/embed/5xGHKbZ2AkY?si=c_12pEyuIfZH_ddC'}/>
                        <VideoSyntax text={'Pónganse la armadura de Dios'} url={'https://www.youtube.com/embed/NTzBqlnCylw?si=u0FM8WtE1auBa_gF'}/>
                        <VideoSyntax text={'Hacedores de La Palabra'} url={'https://www.youtube.com/embed/E9CWWqnFqhI?si=bQKqEvsKHNU3uWUK'}/>                    
                        <VideoSyntax text={'Somos linaje de Dios'} url={'https://www.youtube.com/embed/jNFSaSBbDzY?si=Str06wQJdB_3Dcg3"'}/>
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}