import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';

export default function VideosElAbuso() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container"> 
                <PrimalNav />               
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Videos EL Abuso`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Cómo prevenir el abuso sexual infantil'} url={'https://www.youtube.com/embed/A__DSCnzNQM?si=CUGMFzT7lYS1KfaA'}/>
                        <VideoSyntax text={'10 cosas que no sabias de los pedófilos'} url={'https://www.youtube.com/embed/NebUvXi5HyQ?si=k7L0Iz2FJ8wbcfIk'}/>
                        <VideoSyntax text={'Secuelas emocionales y psicológicas en víctimas de abuso sexual'} url={'https://www.youtube.com/embed/HKlXw1YPuYg?si=FHx5I_DOqX5nTmT2'}/>
                        <VideoSyntax text={'¿Cómo afecta el abuso sexual a niñas y adolescentes?'} url={'https://www.youtube.com/embed/z9p793ZrUOY?si=WF1O6zybTiTDlE6t'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Maltrato Infantil: Educar Sin Violencia'} url={'https://www.youtube.com/embed/4f3gjGwt59Y?si=TuOS6CGFbSvbHnSR'}/>
                        <VideoSyntax text={'Cómo detectar el abuso sexual en los niños'} url={'https://www.youtube.com/embed/R_0Y_996oh4?si=LY2dj5s1kVIdFMCG'}/>
                        <VideoSyntax text={'8 programas infantiles no aptos para niños'} url={'https://www.youtube.com/embed/vjHCjEdpuDg?si=q4avXgBXA56Kqp4Z'}/>
                        <VideoSyntax text={'Perfil psicológico en un caso de abuso sexua'} url={'https://www.youtube.com/embed/g5iFtAmVsO8?si=XgdzfBXUzyL15g12'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Pornografía infantil: El monstruo digital del armario'} url={'https://www.youtube.com/embed/YIorkbdmz8U?si=L8U__ObyWXiRJPMB'}/>
                        <VideoSyntax text={'El orgullo gay para niños en el 2021 fue invasivo'} url={'https://www.youtube.com/embed/BvHlnaQYsmc?si=iP55rNvQ8sPbUuGs'}/>
                        <VideoSyntax text={'Whatsapp, el nuevo refugio de los pedófilos'} url={'https://www.youtube.com/embed/lMmcSK7R2m0?si=kjqW--mZHIxSL7RP'}/>                    
                        <VideoSyntax text={'Colombia, 4to país del mundo donde más niños mueren violentamente'} url={'https://www.youtube.com/embed/S8XPAoGZrqM?si=2EU1Yaj1xilYZ4wb'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'Las cifras sobre violencia contra niños en Colombia dan vergüenza'} url={'https://www.youtube.com/embed/u-1JCXqQJ0k?si=9m8MJYy-i0BAbtaY'}/>
                        <VideoSyntax text={'Violencia contra menores en Colombia: Desoladoras cifras de B.F.'} url={'https://www.youtube.com/embed/K01sh1OIR9g?si=DMKJGCQ8uqq2yRa5'}/>
                        <VideoSyntax text={'La confesión del cura del Instituto Provolo'} url={'https://www.youtube.com/embed/Ep6rw5kPTMQ?si=ycxOBcPb_v9ySoAx'}/>                    
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}