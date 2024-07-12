import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function VideosLaCreacion() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos La Creación`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'DIOS DE LA CREACIÓN'} url={'https://www.youtube.com/embed/XSNV2kfgEgE?si=m8P_vwj5cK4WgDDl'}/>
                        <VideoSyntax text={'CANCIÓN DE LA CREACIÓ'} url={'https://www.youtube.com/embed/TlGaYOlcIE8?si=3c7eOktu3pba8FTb'}/>
                        <VideoSyntax text={'LA FAMILIA'} url={'https://www.youtube.com/embed/grHMiOmyv-s?si=1qeTw6wDeRhiVbx1'}/>
                        <VideoSyntax text={'LA CREACIÓN'} url={'https://www.youtube.com/embed/bHVgAb7jb60?si=XnmYY5lXE6WFf2XR'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'ADÁN Y EVA'} url={'https://www.youtube.com/embed/FpDXCW_GEQI?si=3JydeWOkOX6zmCS4'}/>
                        <VideoSyntax text={'CAÍN Y ABEL'} url={'https://www.youtube.com/embed/BSUhz6L4qCw?si=NheqNzMaQu-Pgm9j'}/>
                        <VideoSyntax text={'HERMOSOS PECES DE ARRECIFE'} url={'https://www.youtube.com/embed/plIZUog5cvA?si=1lVue_RjqmuIcXyG'}/>
                        <VideoSyntax text={'LOS PECES'} url={'https://www.youtube.com/embed/rkjbstXj79A?si=wQENWMbBmR92gvmz'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'NO SABÍAS DE LOS MAMÍFEROS'} url={'https://www.youtube.com/embed/n5spdK-6wk8?si=SqQlGduh3fAmP5hD'}/>
                        <VideoSyntax text={'CURIOSIDADES DE REPTILES'} url={'https://www.youtube.com/embed/qnI2Bsu1jh8?si=oU-0W56mdCjHLl0g'}/>
                        <VideoSyntax text={'CURIOSIDADES DE LOS GATOS'} url={'https://www.youtube.com/embed/OF7tbcTyjMg?si=ukxMCK6STCypxGDq'}/>
                        <VideoSyntax text={'CURIOSIDADES DE LAS AVES'} url={'https://www.youtube.com/embed/URtZ1ozRDPs?si=PMLxQD85KGVL4oej'}/>                                             
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'LO QUE NO SABES DE LAS AVES'} url={'https://www.youtube.com/embed/JhF5HWmwP5I?si=eP-MtQBLQSoLGl69'}/>
                        <VideoSyntax text={'lOS ANIMALES MÁS RÁPIDOS'} url={'https://www.youtube.com/embed/8Gxff_hHZfI?si=CkM3bGL5mILQwM-D'}/>
                        <VideoSyntax text={'LOS INSECTOS'} url={'https://www.youtube.com/embed/Yx2lQOXkD4c?si=s3w8E_7LtdUNjflF'}/>
                        <VideoSyntax text={'ANIMALES INVERTEBRADOS'} url={'https://www.youtube.com/embed/mt1gyjSJbQA?si=GIz0-kr9gCo8zGs8'}/>                                             
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'FRUTAS EXÓTICAS'} url={'https://www.youtube.com/embed/NWewTlg-6-M?si=d0_BC-xeflGExdSn'}/>
                        <VideoSyntax text={'APRENDE DE LAS VERDURAS'} url={'https://www.youtube.com/embed/AO2Lh_wM3cc?si=TOlg4QQaPA438Dz6'}/>
                        <VideoSyntax text={'FRUTAS INCREÍBLES'} url={'https://www.youtube.com/embed/BL9e4N70V6o?si=ZCQcVQOmBuvkBRrr'}/>
                        <VideoSyntax text={'OTRAS FRUTAS EXÓTICAS'} url={'https://www.youtube.com/embed/NSzZ5M5xe1Y?si=koikBVYVKudas4Tx'}/>                                             
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'ANIMALES AL NATURAL AVES'} url={'https://www.youtube.com/embed/Y7dhsTy0PoM?si=zB8NXomnzCBpfVeF'}/>
                        <VideoSyntax text={'LAS AVES DE ÁFRICA'} url={'https://www.youtube.com/embed/4F7nOSgtFNQ?si=-la3MYAP8eJQD03_'}/>
                        <VideoSyntax text={'DIEZ CANTOS DE PÁJAROS'} url={'https://www.youtube.com/embed/WDGGbIsnLIw?si=SizWEKGtL1eVXUId'}/> 
                        <VideoSyntax text={'LAS AVES MÁS BELLAS DEL MUNDO'} url={'https://www.youtube.com/embed/z6LihCuVk9w?si=HopA6Rt9U2vjdLAs'}/>                                                                 
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'RAZAS DE POLLOS MÁS HERMOSAS'} url={'https://www.youtube.com/embed/-0y4sN67LBY?si=KlAl459HoajyNFUx'}/>                                                                                                                 
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}