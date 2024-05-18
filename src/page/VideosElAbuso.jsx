import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import LetrasGloboPequeñas from '../subcomponent/LetrasGloboPequeñas.jsx';
import VideoSyntax from '../subcomponent/VideoSyntax.jsx';

export default function VideosElAbuso() {
    return(
        <div className="Home">
            <Star />
            <div className="page-container">
                <PrimalNav />
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`VIDEOS LA ARMADURA DE DIOS`}/>
                    </div>   
                    <div style={{display:'flex', flexWrap:'wrap'}}>
                        <div className="video-container">                            
                            <VideoSyntax url={'https://www.youtube.com/embed/A__DSCnzNQM?si=KirrtEeZ1WTWtPr-'} />
                            <LetrasGloboPequeñas texto={`LA ARMADURA DE DIOS`}/>
                        </div>
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/NebUvXi5HyQ?si=VJGxAoVVlHNCcH_6"} />
                            <LetrasGloboPequeñas texto={`Una aventura gigante`}/>
                        </div>
                        <div className="video-container" >
                            <VideoSyntax url={"https://www.youtube.com/embed/HKlXw1YPuYg?si=UOQb-4YbNbiWeCzr"} />
                            <LetrasGloboPequeñas texto={`LA ARMADURA DE DIOS`}/>
                        </div>
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/z9p793ZrUOY?si=G_6NGNu_wLzibp36"} />
                            <LetrasGloboPequeñas texto={`Heroes de la fe`}/>
                        </div>
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/4f3gjGwt59Y?si=KRHNbZUYXUFfL67C"} />
                            <LetrasGloboPequeñas texto={`Luis misionero`}/>
                        </div>
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/R_0Y_996oh4?si=mfcmqO3dRnHVKXkR"} />
                            <LetrasGloboPequeñas texto={`El casco de Gracia y Salvación`}/>
                        </div>
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/vjHCjEdpuDg?si=MU12Hb2hcHud5_i8"} />
                            <LetrasGloboPequeñas texto={`Jesus sana un Ciego`}/>
                        </div>
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/g5iFtAmVsO8?si=_K6w68gpCvok_4-t"} />
                            <LetrasGloboPequeñas texto={`La Armadura de Dios`}/>
                        </div>
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/YIorkbdmz8U?si=hx_yMXuN79PStGl3"} />
                            <LetrasGloboPequeñas texto={`La Armadura de Dios para niños`}/>
                        </div>
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/BvHlnaQYsmc?si=ovEuItLKVjtSv1EJ"} />
                            <LetrasGloboPequeñas texto={`Ponganse la armadura de Dios`}/>
                        </div>
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/lMmcSK7R2m0?si=DC-J6_C7ZALsPId3"} />
                            <LetrasGloboPequeñas texto={`Hacedores de La Palabra`}/>
                        </div>
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/S8XPAoGZrqM?si=l4t7Iepob6mclJ8L"} />
                            <LetrasGloboPequeñas texto={`Somos linaje de Dios`}/>
                        </div>
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/u-1JCXqQJ0k?si=dMiaeeT_S6fZ8LSW"} />
                            <LetrasGloboPequeñas texto={`Somos linaje de Dios`}/>
                        </div>
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/K01sh1OIR9g?si=U1nZqLX-AGaZlFP3"} />
                            <LetrasGloboPequeñas texto={`Somos linaje de Dios`}/>
                        </div> 
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/Ep6rw5kPTMQ?si=PyIxJgfe_TTE3fO3"} />
                            <LetrasGloboPequeñas texto={`Somos linaje de Dios`}/>
                        </div> 
                        <div className="video-container" >                            
                            <VideoSyntax url={"https://www.youtube.com/embed/S8XPAoGZrqM?si=l4t7Iepob6mclJ8L"} />
                            <LetrasGloboPequeñas texto={`Somos linaje de Dios`}/>
                        </div>      
                    </div>                 
                </div>
                <Footer />
            </div>
        </div>
    );
}