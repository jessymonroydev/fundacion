import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function TestimoniosExTransgenero() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Testimonios de Ex Transgenero transformados por Cristo`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Ideología de género. Transexuales arrepentidos: Usan a niños como ratones de laboratorio'} url={'https://www.youtube.com/embed/tBxtEb8Ceq4?si=PVMwpuE30IW7PTPq'}/>
                        <VideoSyntax text={'El TESTIMONIO de una chica TRANS ARREPENTIDA y muchas más'} url={'https://www.youtube.com/embed/i6jhzHbksog?si=ZckrZHptfUUo84oZ'}/>
                        <VideoSyntax text={'Ideología de género y posesión demoníaca explicado por un exorcista / Fray Claudio OFM Cap.'} url={'https://www.youtube.com/embed/0kisbgBDPyw?si=L-8xqMEQHJkNaexl'}/>
                        <VideoSyntax text={'joven trans arrepentido'} url={'https://www.youtube.com/embed/bX16_zGra_Y?si=ZtBTKU0-Ic4jbsqM'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Mujer TRANSGENERO se arrepiente y demanda al Gobierno'} url={'https://www.youtube.com/embed/JrzuXyg7T9g?si=jQZSygQOm71o57lt'}/>
                        <VideoSyntax text={'Jesús transforma la identidad'} url={'https://www.youtube.com/embed/BHnwK-IOl5k?si=HDGY9xxtTBkuY3Cg'}/>
                        <VideoSyntax text={'El arrepentimiento por el cambio de género'} url={'https://www.youtube.com/embed/OcFLVf7GQp4?si=j4z0cIiaIOKEFIvH'}/>
                        <VideoSyntax text={'mpactante testimonio: antes tr4nsexu4l, ahora le sirve a Cristo'} url={'https://www.youtube.com/embed/Md4LE6ESh5s?si=qSmWovWyIOCtvBpC'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Testimonio De ex-travesti Angel Morel (Evangelista)'} url={'https://www.youtube.com/embed/jlfHWSjfUEI?si=SZ-f8fvUmBQoVOeF'}/>
                        <VideoSyntax text={'Trans-sexual se hizo Cristiano'} url={'https://www.youtube.com/embed/3BgekLiyxzw?si=BQ_GKR_y1uNWVe8V'}/>
                        <VideoSyntax text={'Testimonio de ex-travestí que se convierte a Cristo'} url={'https://www.youtube.com/embed/pM1Asf_2bNI?si=mfN7oNsv1mNZ5nN9'}/>                        
                        <VideoSyntax text={`IMPACTANTE TESTIMONIO: &quot;DESDE NIÑO QUERÍA SER MUJER&quot;`} url={'https://www.youtube.com/embed/lFAFdcTEjL4?si=kwtrJH6pdv2w7Let'}/>                        
                    </div>  
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Este miss trans le entregó su vida a DIOS y cambió por completo.'} url={'https://www.youtube.com/embed/A1V86EOoIUE?si=Pwl2-nqZ-DMmH9Af'}/>
                        <VideoSyntax text={'EX TRANS CRISTIANA CUENTA TODA LA VERDAD! QUERÍA SER UNA PASTORA TRANS, TENER SU IGLESIA Y CASARSE'} url={'https://www.youtube.com/embed/MBHFHWcY_NM?si=q62GtkFz9haVJrGu'}/>
                    </div>                                                      
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}