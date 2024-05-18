import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import LetrasGloboPequeñas from '../subcomponent/LetrasGloboPequeñas.jsx';

export default function VideosReinoDeLosCielos() {
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
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/Of44-k7kXes?si=pA_MMWkHHodisnTb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <LetrasGloboPequeñas texto={`LA ARMADURA DE DIOS`}/>
                        </div>
                        <div className="video-container" >
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/ujVJNiyUxsg?si=9QwVXFjGXLlsuo1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <LetrasGloboPequeñas texto={`Una aventura gigante`}/>
                        </div>
                        <div className="video-container" >
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/jGn3DxyVFww?si=Q8GerDubaAA3BY0O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <LetrasGloboPequeñas texto={`LA ARMADURA DE DIOS`}/>
                        </div>
                        <div className="video-container" >
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/4KNxKmudA0A?si=ex9iB-Qv7Edu8zpO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <LetrasGloboPequeñas texto={`Heroes de la fe`}/>
                        </div>
                        <div className="video-container" >
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/SXq-ReksQLM?si=rXj6-xeDM-q1X2Fu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <LetrasGloboPequeñas texto={`Luis misionero`}/>
                        </div>
                        <div className="video-container" >
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/03gfsFBR6YI?si=FO-9Nw_JivxYOar0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <LetrasGloboPequeñas texto={`El casco de Gracia y Salvación`}/>
                        </div>
                        <div className="video-container" >
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/Towu4kYAO-Y?si=nwp0ZHI2-hYmP77N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <LetrasGloboPequeñas texto={`Jesus sana un Ciego`}/>
                        </div>
                        <div className="video-container" >
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/Vm5vKXB3K9I?si=5ffzONiNBCIjg57R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <LetrasGloboPequeñas texto={`La Armadura de Dios`}/>
                        </div>
                        <div className="video-container" >
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/5xGHKbZ2AkY?si=d9rMMsetwT65U7xh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <LetrasGloboPequeñas texto={`La Armadura de Dios para niños`}/>
                        </div>
                        <div className="video-container" >
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/NTzBqlnCylw?si=6J129uIGNCNAEX-L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <LetrasGloboPequeñas texto={`Ponganse la armadura de Dios`}/>
                        </div>
                        <div className="video-container" >
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/E9CWWqnFqhI?si=4ljoTpaWohqkQwWS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <LetrasGloboPequeñas texto={`Hacedores de La Palabra`}/>
                        </div>
                        <div className="video-container" >
                            <iframe width="400" height="200" src="https://www.youtube.com/embed/jNFSaSBbDzY?si=cvBl5Hglh-3EJPHB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <LetrasGloboPequeñas texto={`Somos linaje de Dios`}/>
                        </div>    
                    </div>                 
                </div>
                <Footer />
            </div>
        </div>
    );
}