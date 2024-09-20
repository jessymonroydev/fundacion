import React from "react";
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../../subcomponent/VideoSyntax.jsx";
import '../../styles/videos.css';
import Counter from '../../components/counter/Counter2.jsx';

export default function BibliaInfantil() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center', color: '#b57917'}}>
                        <LetrasGlobo texto={`Biblia Infantil`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'La Creación - Génesis 1'} url={'https://www.youtube.com/embed/UVou_Dmndqc?si=wPSlaJhX8wSSt001'}/>                       
                        <VideoSyntax text={'Adan y Eva La Caída - Génesis 3'} url={'https://www.youtube.com/embed/BH3x-rjmciQ?si=A-lcUoMurEctW_2l'}/> 
                        <VideoSyntax text={'Noé y El Diluvio - Génesis 6'} url={'https://www.youtube.com/embed/Agd0NWdsfL0?si=qP97Hj2yZWRcuwap'}/> 
                        <VideoSyntax text={'Dios llama a Abraham - Génesis 12'} url={'https://www.youtube.com/embed/D2KF1mq6U6Y?si=0WJ7uPd5OqaYgHW_'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Abraham e Isaac - Genesis 15'} url={'https://www.youtube.com/embed/9xcFfA8XFcE?si=gb-IkCgJJ_YDMor-'}/>                       
                        <VideoSyntax text={'Los sueños de José - Génesis 37'} url={'https://www.youtube.com/embed/8Khk01C1YEU?si=ygpckbZp0uDgGzoG'}/> 
                        <VideoSyntax text={'José y Sus Hermanos - Genesis 39'} url={'https://www.youtube.com/embed/OmH_ToxwWrY?si=3CukIyvxjrZMu_M3'}/> 
                        <VideoSyntax text={'Moisés -Éxodo 1'} url={'https://www.youtube.com/embed/kb-EIkRCkOo?si=13p2OWG3BupI_igO'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Biblia para Niños - Nació Jesús - Lucas 1, Mateo 1'} url={'https://www.youtube.com/embed/gWOdNvvU_1M?si=AZ2PmGWmrYmtwnpF'}/>                       
                        <VideoSyntax text={'Jesús es bautizado - Mateo 3'} url={'https://www.youtube.com/embed/9-qf8dVgMfE?si=exkAnsWboFCF2wkw'}/> 
                        <VideoSyntax text={'Jesús probado en el Desierto - Mateo 4'} url={'https://www.youtube.com/embed/zdVVb6MYaxs?si=5QlVa4plobjTAsE2'}/> 
                        <VideoSyntax text={'El Reino de Dios - Juan 18'} url={'https://www.youtube.com/embed/MCkkstrVjMQ?si=_MWrarb2QqNrV_7n'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Jesus resucita a una niña - Lucas 8'} url={'https://www.youtube.com/embed/j-zMw8i9GAg?si=0gaDsQHhKXQGRsjz'}/>                       
                        <VideoSyntax text={'Jesús y el Burrito - Mateo 21'} url={'https://www.youtube.com/embed/WPQcvQiUxbI?si=GcW9x0gqmVIbnU3I'}/> 
                        <VideoSyntax text={'Panes y peces para 5,000 personas - Mateo 6'} url={'https://www.youtube.com/embed/E55RzN-tLrM?si=7VrDT0kwYIfDuaDn'}/> 
                        <VideoSyntax text={'La última cena de Jesús - Juan 13'} url={'https://www.youtube.com/embed/uGS0ixl5PJU?si=0C69SqRL6MrjALiQ'}/>                  
                    </div>                
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}