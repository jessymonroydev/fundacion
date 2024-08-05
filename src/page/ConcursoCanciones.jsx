import React from "react";
import '../styles/videos.css';
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import '../styles/concursoCanciones.css';

import Img1 from '../assets/cancionesImg/El-Amor.jpg';
import Img2 from '../assets/cancionesImg/Jesucristo-El-Creador.jpg';
import Img3 from '../assets/cancionesImg/Santo-Santo-Santo.jpg';
import Img4 from '../assets/cancionesImg/Dios-sana-a-Colombia.jpg';
import Img5 from '../assets/cancionesImg/No-encuentran-la-paz.jpg';
import Img6 from '../assets/cancionesImg/Volver-a-Nacer.jpg';
import Img7 from '../assets/cancionesImg/Jesucristo-Mi-refugio.jpg';
import Img8 from '../assets/cancionesImg/Permanecer-a-tu-lado-por-siempre.jpg';
import Img9 from '../assets/cancionesImg/Vive-para-Siempre.jpg';
import Img10 from '../assets/cancionesImg/FormatFactory-PicPDF-La-Verdad.jpg';
import Img11 from '../assets/cancionesImg/El-Verdadero-amor.jpg';
import Img12 from '../assets/cancionesImg/Vuelve-Jesucristo.jpg';
import Img13 from '../assets/cancionesImg/Maldita-pornografia.jpg';
import Img14 from '../assets/cancionesImg/Sabios-y-tontos.jpg';
import Img15 from '../assets/cancionesImg/El-Reality.jpg';
import Img16 from '../assets/cancionesImg/Dejate-Gobernar-por-El.jpg';
import Img17 from '../assets/cancionesImg/FormatFactory-PicPDF-La-Verdad.jpg';


import concursoCancionesImg from '../assets/concursoCanciones/Volantejovenes1y2-1024x357.jpg';

export default function ConcursoCanciones() {
    return(
<div className="Home">
            <Star />            
            <div className="page-container"> 
                <PrimalNav />               
                <Nav />
                <div className="content-page-armadura">
                    <div className="content-home" style={{margin:'auto', justifyContent: 'center'}}>
                        <h3 style={{fontSize: '1em', color: '#b57917'}}><LetrasGlobo texto={`Concurso "Aprende las canciones de Cesar Mendez El Bautista"`}/></h3>
                    </div>
                    <div style={{width: '100%'}}>
                        <div className="head-container">
                            <div>Aprende una de mis canciones, grábala en el celular y envíala al Whatsapp</div>
                            <div>301 411 7699 y 322 762 6962 y estarás participando.</div>
                            <div>También puedes participar con las canciones de    www.volveranacerradio.com</div>
                            <div style={{color: 'gold'}}>¡Participa! podrás ganar un gran premio.</div>
                        </div>
                        <img style={{width: '100%', height: 'auto', marginTop: '4vh'}} src={concursoCancionesImg} alt="consurso canciones img" />
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>Dejate Gobernar</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>
                            <iframe className='video-margenes-canciones' src="https://www.youtube.com/embed/ZiFPBmzqV3A?si=wcpgd8deV9hI7qaR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                            <div className="text-cancion cancion-special">Pista</div>
                            <iframe className='video-margenes-canciones' src="https://www.youtube.com/embed/CZ2rPnhsss8?si=qtCJlmPZcikPz76A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div className="img-container-canciones">
                            <img className="img-canciones" src={Img16} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>El reality verdadero</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/y0gEPki95q0?si=orpHcRMYNrLyQ3Ix" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                            <div className="text-cancion cancion-special">Pista</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/qNcQAzXZ3u4?si=ynZ8clCnpVpRyzwt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img15} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>Sabios y tontos</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/7vJcEUB3llI?si=UTFGYVnAVTWduHle" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                            <div className="text-cancion cancion-special">Pista</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/jzU8caC7wsU?si=hrCh9Fvms8huJScS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img14} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>Maldita pornografía</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/oeIn0_0AsgE?si=SJVX0kBetRQNgua6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                            <div className="text-cancion cancion-special">Pista</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/4fa604IFH28?si=gZTq_mC8_xylB-B-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img13} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>Vuelve Jesucristo</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/VK5-9auVfAM?si=DOjWErFv8jQ_o5xo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                            <div className="text-cancion cancion-special">Pista</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/1Ti83Llea8o?si=bafeK6HW3SoHDRgS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img12} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>El verdadero amor</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>                            
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/RMRNURJANto?si=CSP2kpu6vy4rZtdv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                            <div className="text-cancion cancion-special">Pista</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/OeQmOo_ypmk?si=zCPOimLYloq2tuF7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img11} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>La verdad</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/3IqDRxGlVXw?si=1vPAhBHmPMNLSTac" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                            <div className="text-cancion cancion-special">Pista</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/_OsOhc8eVx4?si=bvYWsGHXMzFI8WVF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img10} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>Vive para siempre</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/acUBzpvtACc?si=M79w4XxtVUJqUHBT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                            <div className="text-cancion cancion-special">Pista</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/mbuhRyECD7c?si=kqeKqQ548GIECRyA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img9} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>Permanecer a tu lado por siempre</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>                            
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/9qfH_orExAc?si=iPN-55q3T1wyRYH0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                            <div className="text-cancion cancion-special">Pista</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/mziAEEt48oY?si=2o4OTmeGdit4hwNc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img8} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>Jesucristo mi refugio</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/P0_jVUGxukc?si=Mxxcl5A2Fq3bNohr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                            <div className="text-cancion cancion-special">Pista</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/V0TjSMb3hN8?si=FYWsFhi8FLNQolEF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img7} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>Nacer de nuevo</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/Ypy0olonqI4?si=I6kNRz2ewOq7m5Vi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                            <div className="text-cancion cancion-special">Pista</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/yakRYSLkpIw?si=_uPLkUjRZZJsvnx-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img6} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>No encuentran la paz</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/cTW0G7wRWBM?si=TRq9Y2zUXD43S9WP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img5} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>Dios sana Colombia</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>                            
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/SsFe7Ugd9bE?si=0MljAViY6bQ5tjiy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img4} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>Santo, Santo, Santo</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/zw0qWiSeufQ?si=_a97P4WAxAcQ_5GE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img3} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>Jesucristo el creador</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/uhL22IeQ6O8?si=9CtJFrT4ROEKnEGV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img2} alt="Letra" />
                        </div>
                    </div>
                    <div style={{color: 'gold', width: '100%', textAlign: 'center', fontSize: '1.2em'}}>Tener AMOR</div>
                    <div className="canciones-container">
                        <div className="canciones-video-container">
                            <div className="text-cancion">Canción</div>
                            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/FCiict9Pq6c?si=LT5i83YXf7g7MHz0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
                        </div>
                        <div>
                            <img className="img-canciones" src={Img1} alt="Letra" />
                        </div>
                    </div>                                
                </div>
                <Footer />
            </div>
        </div>
    );
}