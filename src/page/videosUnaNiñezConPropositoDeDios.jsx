import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function VideosUnaNiñezConPropositoDeDios() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">
                <PrimalNav />                
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos para una ninez con el proposito de Dios`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'La Creación'} url={'https://www.youtube.com/embed/EIbPVq-yJHw?si=Jw9y5O2It-gyR6oV'}/>
                        <VideoSyntax text={'Adán y Eva'} url={'https://www.youtube.com/embed/rZtdaDWGIv4?si=dCY4o2_3ImCTUaG7'}/>
                        <VideoSyntax text={'El Arca de Noé'} url={'https://www.youtube.com/embed/O2i2v3OyvEE?si=lRgU5dU0bRMa9o3j'}/>
                        <VideoSyntax text={'Caín y Abel'} url={'https://www.youtube.com/embed/Xz-TFUXQXVg?si=x-xr0vg_3-caFoU0'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Daniel'} url={'https://www.youtube.com/embed/hsPgHLfhfuE?si=hyG0JxOpN809AxQ2'}/>
                        <VideoSyntax text={'Daniel en el Horno de Fuego'} url={'https://www.youtube.com/embed/dIy1aKwwi48?si=g5d7Fn19XhIj0gqn'}/>
                        <VideoSyntax text={'Abrahán Sodoma y Gomorra'} url={'https://www.youtube.com/embed/ilmQRLZsLPg?si=pmBzOfh5Rz80pal6'}/>
                        <VideoSyntax text={'Arrodillarse o Morir'} url={'https://www.youtube.com/embed/eibdbe092Mc?si=fFXrerHpPEmvlSAd'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'La historia de José'} url={'https://www.youtube.com/embed/TssKk14q860?si=-NQZY-v4RTe-f0vb'}/>
                        <VideoSyntax text={'Moisés ¡El príncipe de Egipto!'} url={'https://www.youtube.com/embed/B56FTSiEk_A?si=PQHyyEchgV8bnu7z'}/>
                        <VideoSyntax text={'Los Diez Mandamientos'} url={'https://www.youtube.com/embed/TInMEuYsUgw?si=MUNLP1g1evvqAsGf'}/>
                        <VideoSyntax text={'Las murallas de Jericó'} url={'https://www.youtube.com/embed/G59LE3b2Agk?si=LqTcU2rURQXnG3Ml'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Sodoma y Gomorra'} url={'https://www.youtube.com/embed/gIM89ZtfkF8?si=JUMKRBEeElIBoKvP'}/>
                        <VideoSyntax text={'Rey David'} url={'https://www.youtube.com/embed/FNgGJC-B1Pw?si=dviAsdhkFI8wR1By'}/>
                        <VideoSyntax text={'Salomón El Templo'} url={'https://www.youtube.com/embed/Lav6KrTzMiA?si=p18kRFqBWnJOtS8h'}/>
                        <VideoSyntax text={'El nacimiento de Jesús'} url={'https://www.youtube.com/embed/L_pD_gGbYJ8?si=wOC6kVk8ok8Ym0rT'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'David y Goliat'} url={'https://www.youtube.com/embed/fXOWMFNzb1c?si=c03GzMW7XCXPCPb_'}/>
                        <VideoSyntax text={'El conflicto final'} url={'https://www.youtube.com/embed/qg7xOpldYE8?si=KIRMmgxv8UZxeelV'}/>
                        <VideoSyntax text={'Arresto, Juicio; Muerte y Resurrección de Jesús'} url={'https://www.youtube.com/embed/yxRY0GkjrEg?si=mq7fdA_mebVYlgAF'}/>
                        <VideoSyntax text={'Saulo de Tarso'} url={'https://www.youtube.com/embed/hS3e12CUtKk?si=C6backyQaqCE18H6'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'La fuga'} url={'https://www.youtube.com/embed/LaP_IrWpDfs?si=lX5R8MauhLzl3rIV'}/>
                        <VideoSyntax text={'Aguas Escarpadas'} url={'https://www.youtube.com/embed/3GV64vd_QlE?si=-Rx0ytQwE5_M7z8l'}/>
                        <VideoSyntax text={'Rescate en las catatumba'} url={'https://www.youtube.com/embed/eNpbSO3V5C8?si=H31MTnHXcOnAqYPv'}/>
                        <VideoSyntax text={'Preparados, listos, fuego'} url={'https://www.youtube.com/embed/Mre0kFLLugM?si=6PPg5rgXDEp4_igr'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Barco de Esclavos'} url={'https://www.youtube.com/embed/gKZqaJ7BJhE?si=F1o1HpfkcCph-NAL'}/>
                        <VideoSyntax text={'Fuga Nocturna'} url={'https://www.youtube.com/embed/5nUbmzKf5fw?si=EsMbJVxLsMgDswUY'}/>
                        <VideoSyntax text={'Rugido de Noche'} url={'https://www.youtube.com/embed/OMZrl3klK7M?si=WEeme7E23pxvhsFc'}/>
                        <VideoSyntax text={'El Triunfo de Ciro'} url={'https://www.youtube.com/embed/_atdi2QF_sM?si=YfFeEH7Sop6fFjZN'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Los milagros de Jesús'} url={'https://www.youtube.com/embed/M4VA8KeG51Q?si=c7LWgd6n0xjN1k23'}/>
                        <VideoSyntax text={'El jardín del Edén'} url={'https://www.youtube.com/embed/Jtzzm2flmuI?si=wL3fgt1LvVDxBfin'}/>
                        <VideoSyntax text={'La batalla de Jericó'} url={'https://www.youtube.com/embed/OccBaWSz4Sg?si=o8RfL9i_rUeD7H1-'}/>
                        <VideoSyntax text={'Daniel en el horno de fuego'} url={'https://www.youtube.com/embed/nlvvRxXttWM?si=TtfYWSK3rf-HjHaL'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Judas traiciona a Jesús'} url={'https://www.youtube.com/embed/iNK-LnZej5s?si=lNmYDkUjWJYWkXMm'}/>
                        <VideoSyntax text={'Jesús multiplica los panes y los peces'} url={'https://www.youtube.com/embed/lVbNJT0iR_s?si=lfnrekgYV4ug4FUr'}/>
                        <VideoSyntax text={'Perdón sin reservas'} url={'https://www.youtube.com/embed/4bCPVf7YUp4?si=b3PogwFrVYrXCLwj'}/>                        
                    </div>                    
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}