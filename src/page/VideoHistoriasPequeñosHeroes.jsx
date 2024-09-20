import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function VideosHistoriasPequeñosHeroes() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">     
                <PrimalNav />           
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Video Canciones que promueven los valores`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'La Gloria de Dios'} url={'https://www.youtube.com/embed/hyRYBkxDypk?si=jocqKGw0wMI6nz1w'}/>
                        <VideoSyntax text={'Caminare con mi Jesús'} url={'https://www.youtube.com/embed/_KK89IXO1L8?si=BY1ayuO2oA3k3V08'}/>
                        <VideoSyntax text={'Soldado soy de Jesús'} url={'https://www.youtube.com/embed/H29sfCx3XaU?si=1HkLBSy1FOTE9ckb'}/>
                        <VideoSyntax text={'El Conejito'} url={'https://www.youtube.com/embed/AVIe9IEmzAw?si=UnO-8ioMrp4EzUdj'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Cristo ama a los niños como yo'} url={'https://www.youtube.com/embed/3Jy7R1OcU_o?si=K7w7DAeUFXs0coWP'}/>
                        <VideoSyntax text={'Todo lo sabe el Señor'} url={'https://www.youtube.com/embed/cJoJvKUMQyY?si=k4bfDEMuC1N7lAj8'}/>
                        <VideoSyntax text={'Pajarito; yo tengo gozo en mi alma'} url={'https://www.youtube.com/embed/RgRmSSNHBI4?si=-1kngR738E1T8Trv'}/>
                        <VideoSyntax text={'Buenos días señor Jesús'} url={'https://www.youtube.com/embed/VKJgz2KDKv8?si=e6QoKIt_qOMoemnD'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Me guarda con poder'} url={'https://www.youtube.com/embed/yKEOnTImVIo?si=CDaPu7qxSBS1ZCgC'}/>
                        <VideoSyntax text={'La Cabrita'} url={'https://www.youtube.com/embed/m5TqufLIhf4?si=MUyNwpXWfNbehN_x'}/>
                        <VideoSyntax text={'Cerca de Dios'} url={'https://www.youtube.com/embed/yfnltb6i1mE?si=0HL4-DftpGhAPpzC'}/>
                        <VideoSyntax text={'En mi casa vive Jesús'} url={'https://www.youtube.com/embed/WDcs7ZHvxxw?si=hHCZ8ZaaYNXZqDwU'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'En Jesús soy la sal'} url={'https://www.youtube.com/embed/PBbwruLdLCI?si=y929If-2UBSMQeqU'}/>
                        <VideoSyntax text={'Todo es obra de Dios'} url={'https://www.youtube.com/embed/PsJ_Jv3vKzY?si=Xp-2VK8m3gvhs2B5'}/>
                        <VideoSyntax text={'Los niños son de Cristo'} url={'https://www.youtube.com/embed/uvnLjhOtOkU?si=YJJLkNVxmYUEeM0N'}/>
                        <VideoSyntax text={'Viene por mi'} url={'https://www.youtube.com/embed/gCl-37bfZcM?si=zM9F8K0QOBIW3QaF'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Le alabo en la mañana'} url={'https://www.youtube.com/embed/rz8L9OibCik?si=VuC6ruYM6evokquF'}/>
                        <VideoSyntax text={'Cuida mis ojitos al mirar'} url={'https://www.youtube.com/embed/Ze_6U_3lWuk?si=DalDzqvic04qFT00'}/>
                        <VideoSyntax text={'La Biblia'} url={'https://www.youtube.com/embed/i-GAX0TeUlI?si=Gj55mXMb56VsREFa'}/>
                        <VideoSyntax text={'Diosito cuida Mis Ojitos'} url={'https://www.youtube.com/embed/05HVA02J6ZQ?si=nZnH_SFgaVt4yURs'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'El Hombre Sabio'} url={'https://www.youtube.com/embed/O5xSNvPe7rM?si=ckuVRSJyrZJGXocg'}/>
                        <VideoSyntax text={'Cantos para niños'} url={'https://www.youtube.com/embed/md1gb1pd74k?si=-NSuyFfi3Q5fl-Hz'}/>
                        <VideoSyntax text={'Fue mi Dios'} url={'https://www.youtube.com/embed/ajaOC9UktXc?si=w0XPHalm6_aUzpYE'}/>
                        <VideoSyntax text={'El amor de Dios'} url={'https://www.youtube.com/embed/LIcPmn1IWD4?si=jksjQxXHfMKhcBWy'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Zaqueo'} url={'https://www.youtube.com/embed/KIQ-iZlNt7g?si=kSTS4Nsgs5Y_zPvb'}/>
                        <VideoSyntax text={'Jonás'} url={'https://www.youtube.com/embed/n3PdN562Qpk?si=h9DrxUax598AhLSj'}/>
                        <VideoSyntax text={'Un niño diferente'} url={'https://www.youtube.com/embed/vNa3g80jYLU?si=s8905R388JAoiI57'}/>
                        <VideoSyntax text={'Vamos a cantar'} url={'https://www.youtube.com/embed/5fSmADxXLsY?si=PLqpyxW9P-HlbeAM'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'No temeré'} url={'https://www.youtube.com/embed/jw1aE0sbw7s?si=IQnh4LYA6v2zatx4'}/>
                        <VideoSyntax text={'Ama y serás feliz'} url={'https://www.youtube.com/embed/0T4bXR5D_0w?si=M-ATsuvC2hGaYiv1'}/>
                        <VideoSyntax text={'Dios de la semana'} url={'https://www.youtube.com/embed/kGKMRVuPXok?si=anNOWDMx6FKeZQnF'}/>
                        <VideoSyntax text={'Me Coronará'} url={'https://www.youtube.com/embed/bEbZT3qVY8Q?si=_Nm0fQq3bqa5pNGT'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Ahora que soy'} url={'https://www.youtube.com/embed/2Z_BFTV94jY?si=PLuq6w_JUO7f2EKr'}/>
                        <VideoSyntax text={'Banderas de amor'} url={'https://www.youtube.com/embed/iwtdrWC1MgA?si=DLKc1-adfRGhwDbF'}/>
                        <VideoSyntax text={'Canto de Moisés'} url={'https://www.youtube.com/embed/ovfFJwszqHw?si=0OJJcbKCCXNNmHkH'}/>
                        <VideoSyntax text={'Rugido de Noche'} url={'https://www.youtube.com/embed/8xM5CFM3sQk?si=E2dm2E2ppayXhffP'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Mi pequeño corazón'} url={'https://www.youtube.com/embed/f-wsMVkXMkw?si=bpL0bMViFObhPK8O'}/>
                        <VideoSyntax text={'Elías'} url={'https://www.youtube.com/embed/fX1bTxqUEIg?si=eUSKo5nUBPyWxs-T'}/>
                        <VideoSyntax text={'Mi perrito'} url={'https://www.youtube.com/embed/M0-agFZ9WUs?si=iJUZs1AqyFkXMkYJ'}/>
                        <VideoSyntax text={'El Tren del evangelio'} url={'https://www.youtube.com/embed/NzbM_vc4pJw?si=XMGsFYIJFYvehpQa'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'El Patito Juan'} url={'https://www.youtube.com/embed/o3BFNUtGw7Y?si=DuwDZHYLylRSsqEv'}/>
                        <VideoSyntax text={'Yo creo en ti'} url={'https://www.youtube.com/embed/ia_4mhl5A0M?si=aMak9xzsWW8-kwaK'}/>
                        <VideoSyntax text={'Cristo me ama'} url={'https://www.youtube.com/embed/YHssvLRQuVE?si=uRVUstic0HGIPCg0'}/>
                        <VideoSyntax text={'Todos deben saber quién es Jesús'} url={'https://www.youtube.com/embed/pmkw42AZEe0?si=4xA79n6srkWIXuSC'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Tres veces oraba'} url={'https://www.youtube.com/embed/gDvHFOyDd0s?si=oLWrzF7f9WHOLPAE'}/>
                        <VideoSyntax text={'Vuela pajarito'} url={'https://www.youtube.com/embed/yvMlcRWxR0M?si=4VTuoLglSItfkCN-'}/>
                        <VideoSyntax text={'Vuela Vuela'} url={'https://www.youtube.com/embed/yvMlcRWxR0M?si=X8_qbGWIZTgyLhoR'}/>                        
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}