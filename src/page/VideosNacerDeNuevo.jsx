import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from "../components/counter/Counter.jsx";

export default function VideosNacerDeNuevo() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">    
                <PrimalNav />            
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos Nacer de Nuevo`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Jesús la vid verdadera'} url={'https://www.youtube.com/embed/aDbpZ6H5uvg?si=Sg-5fRpfJarzR5fI'}/>
                        <VideoSyntax text={'Las vírgenes prudentes'} url={'https://www.youtube.com/embed/TkEauEFh7Og?si=W5JAOt80ldP7AuHc'}/>
                        <VideoSyntax text={'El bautismo de Jesús por Juan bautista'} url={'https://www.youtube.com/embed/zsPce4vOtTk?si=HITtXGMBY0wH0_ST'}/>
                        <VideoSyntax text={'Resurrección de lázaro, el que cree en mi vivirá eternamente'} url={'https://www.youtube.com/embed/_wa1ZsghEmE?si=GHjx2VTRSpGoPKjR'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Luis, Anita y Ellie se bautizan'} url={'https://www.youtube.com/embed/qFVEgCf8oBU?si=QhPtmYD2PwwEmDG0'}/>
                        <VideoSyntax text={'Jesús y la mujer samaritana'} url={'https://www.youtube.com/embed/98V5swouRtg?si=sz7vYG4pz9kvW1nn'}/>
                        <VideoSyntax text={'De tal manera amó Dios al mundo'} url={'https://www.youtube.com/embed/b2Eff9xV6wg?si=pp5CGYmJi_4S0W85'}/>
                        <VideoSyntax text={'La Resurrección - La Gran Comisión.'} url={'https://www.youtube.com/embed/VJ9hpTFcB5Y?si=9KcaRp871pd8V5n5'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Ha resucitado'} url={'https://www.youtube.com/embed/lJYtyFs52yw?si=nAhkPcBB6uO_lyYP'}/>
                        <VideoSyntax text={'Jesús resucita'} url={'https://www.youtube.com/embed/81HTK5IMLUk?si=TvzHMkLpLfLSh8M8'}/>
                        <VideoSyntax text={'Cristo se aparece en el camino a Emaús'} url={'https://www.youtube.com/embed/4tflbVFc8jI?si=yP-8f31qWbtT0O6v'}/>                    
                        <VideoSyntax text={'Jesús dijo: yo soy el pan de vida'} url={'https://www.youtube.com/embed/8vU4XN8KBkg?si=0R5MoCOQl8jWmjpN'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'De transexual a Pastor'} url={'https://www.youtube.com/embed/f2kdrcrypSg?si=_XCpaVcfnRfX99wi'}/>
                        <VideoSyntax text={'Ex- lesbiana y bruja transformada por Dios'} url={'https://www.youtube.com/embed/_8FI4JbR99A?si=ncg92Y_rohNmZgTh'}/>
                        <VideoSyntax text={'Cantante cristiana revela luchó con su Identidad Sexual'} url={'https://www.youtube.com/embed/i3ZJhj91hdQ?si=rNJpwwTP9IoDQyxP'}/>                    
                        <VideoSyntax text={'Testimonio de * Joyce Meyer - abuso sexual'} url={'https://www.youtube.com/embed/EN_ISZGxiAU?si=DDOTs5PnBcDtp9KA'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Testimonio Cesar Méndez El Bautista'} url={'https://www.youtube.com/embed/aTZoqVQDfC0?si=UN5WnIy1f3mDA51m'}/>
                        <VideoSyntax text={'Entrevista en Telemundo Evangelista Ángel Morell'} url={'https://www.youtube.com/embed/KaXITtXfGKE?si=EOo99OYs-buaGsvm'}/>
                        <VideoSyntax text={'Impactante testimonio: antes tr4nsexu4l, ahora le sirve a Cristo'} url={'https://www.youtube.com/embed/Md4LE6ESh5s?si=PrL_iThGE109sq8p'}/>                    
                        <VideoSyntax text={'Impactante testimonio, Ex transexual cuenta cómo DIOS le cambió su vida'} url={'https://www.youtube.com/embed/Uu0qnwqdRTM?si=FiOtTt_qfvUrEit7'}/>
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}