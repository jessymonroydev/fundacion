import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function AprendeSobreJesus() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`aprende sobre jesus`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Juan Bautista'} url={'https://www.youtube.com/embed/GiMD215194M?si=munXxp3NTcqEfDfD'}/>
                        <VideoSyntax text={'Entrada triunfal en Jerusalén'} url={'https://www.youtube.com/embed/Z421i3u7PGU?si=RGStGtQu7gmIfNrv'}/>
                        <VideoSyntax text={'Apacienta mis ovejas'} url={'https://www.youtube.com/embed/ry_UvzdNUcM?si=xWGzI0ZCpiVtskZQ'}/>
                        <VideoSyntax text={'Historia de Jesús'} url={'https://www.youtube.com/embed/xBGHuYgnkas?si=ENIZfvTLItg-ts4Q'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Las bodas de Cana'} url={'https://www.youtube.com/embed/N0ObEWFpEXs?si=y4APD_PcS-qS5ztz'}/>
                        <VideoSyntax text={'Nicodemo: nacer de nuevo'} url={'https://www.youtube.com/embed/KIZJixwHUPM?si=KOnqVDj84bvF5o_k'}/>
                        <VideoSyntax text={'El paralitico de Bethesda'} url={'https://www.youtube.com/embed/BTbm6kYI2T4?si=JLkJvrGFIDtQC27X'}/>
                        <VideoSyntax text={'En el mundo tendréis aflicción'} url={'https://www.youtube.com/embed/-Qp7N0j0Ld0?si=SM3zUAa0zLTkRUMt'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Permanezcan en mi'} url={'https://www.youtube.com/embed/Dnm47e6QvO0?si=eTF6hbmcNE_6156-'}/>
                        <VideoSyntax text={'La cena del Señor –Traición de Judas'} url={'https://www.youtube.com/embed/XhgIiFa3G8Q?si=S-nFpsr0VxNzqN3k'}/>
                        <VideoSyntax text={'La mujer samaritana'} url={'https://www.youtube.com/embed/DODQQejxKuI?si=VeYIrcXBavVM4gtt'}/>
                        <VideoSyntax text={'En la casa de mi Padre muchas moradas hay'} url={'https://www.youtube.com/embed/m6GdMvbzsMw?si=oN7TPHtw6eektPy6'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Jesús, el divorcio y los niños'} url={'https://www.youtube.com/embed/6AOn5TfpVFU?si=4hAgu9pPvFN7MTHu'}/>
                        <VideoSyntax text={'La venida del Hijo del Hombre, señales del fin'} url={'https://www.youtube.com/embed/htzF6XfugAA?si=IGG8JdhFnt5NitSs'}/>
                        <VideoSyntax text={'Los obreros de la viña - Dos ciegos reciben la vista'} url={'https://www.youtube.com/embed/N6flLtB83Uk?si=0eJPo-0sE45RFmZ6'}/>
                        <VideoSyntax text={'Lázaro y complot para matar a Jesús'} url={'https://www.youtube.com/embed/1HGYa4xPeBU?si=Xl1ShyxWv0CcCaG7'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Sois de vuestro padre el Diablo'} url={'https://www.youtube.com/embed/7hpuNX4ASDo?si=83KxJ4Ahv-mV6eMc'}/>
                        <VideoSyntax text={'La entrada triunfal en Jerusalén'} url={'https://www.youtube.com/embed/Z421i3u7PGU?si=pUlxxVcunbk0J8bj'}/>
                        <VideoSyntax text={'¿Ciego de nacimiento, quien pecó?'} url={'https://www.youtube.com/embed/Hp5M2oEcy5E?si=QPH_1-KDDdSCfqbX'}/>
                        <VideoSyntax text={'Multiplicación de los panes'} url={'https://www.youtube.com/embed/nZhP-nIE11M?si=hNWaHW9URQjZb42o'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'La última cena, lava los pies'} url={'https://www.youtube.com/embed/kcOik76ysCs?si=qbmEFxxKtI7xSPcc'}/>
                        <VideoSyntax text={'El Buen Pastor da la vida por las ovejas'} url={'https://www.youtube.com/embed/z_pDcPoIZME?si=-Lli1td9HBTRrVzH'}/>
                        <VideoSyntax text={'La mujer adúltera: sois del Diablo'} url={'https://www.youtube.com/embed/A2o3awfzp8A?si=4KKUgI9RvuSNX90u'}/>
                        <VideoSyntax text={'Los hermanos de Jesús ¿es este el Cristo'} url={'https://www.youtube.com/embed/A2o3awfzp8A?si=w8-L7GRohmgkA-jW'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'El arresto de Jesús'} url={'https://www.youtube.com/embed/bExUz11LD0Q?si=bJzlacwe1ihJ44LP'}/>
                        <VideoSyntax text={'Crucifixión muerte y sepultura de Jesús'} url={'https://www.youtube.com/embed/uGfklw6jp0A?si=3x18UXzIa8YMRTgb'}/>
                        <VideoSyntax text={'La resurrección: Jesús aparece a María'} url={'https://www.youtube.com/embed/9Y4NO1aD-e4?si=rF_kYygo-ZTGsei6'}/>
                        <VideoSyntax text={'La historia de Daniel'} url={'https://www.youtube.com/embed/kg39Dw0cAVI?si=ThLbBPOYY9c2OP4f'}/>
                    </div>                                      
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}