import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function VideosElAmor() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container"> 
                <PrimalNav />               
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos El amor de dios`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Chelsy y Paula hablan del Amor'} url={'https://www.youtube.com/embed/XKbdpgOxWvg?si=qISX3D2xIYMRF7m6'}/>
                        <VideoSyntax text={'Isaac y Rebeca: un amor nace'} url={'https://www.youtube.com/embed/mUCmueu_oCY?si=kap6PCmpkuYN8MC7'}/>
                        <VideoSyntax text={'Rescatados por DIOS del horno'} url={'https://www.youtube.com/embed/lVbNJT0iR_s?si=6ec6-1zRhAcIAER3'}/>
                        <VideoSyntax text={'El futbolista'} url={'https://www.youtube.com/embed/yb66SYWLJTg?si=iyxq20AynTk9kNtJ'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Un relato de fe, amistad y perdón'} url={'https://www.youtube.com/embed/sBA-bmasknM?si=SpDBf62SzVoTkzpY'}/>
                        <VideoSyntax text={'Jesús habla por parábola...Dios es amor'} url={'https://www.youtube.com/embed/Z3i6FWAPtOk?si=eJU7M7o0za3KB9lj'}/>
                        <VideoSyntax text={'JESÚS y el mandamiento al joven rico'} url={'https://www.youtube.com/embed/JPfcUqwQwv0?si=KXmF1ehj0OL4gRm3'}/>
                        <VideoSyntax text={'Jesús y el buen samaritano'} url={'https://www.youtube.com/embed/HbPo-apKoRk?si=ZpLqmV3FgI4xxjij'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Ámense los unos a los otros'} url={'https://www.youtube.com/embed/Kl9wpZVviz0?si=KNq7naqIE8VL9oNM'}/>
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}