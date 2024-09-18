import React from "react";
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import Counter from "../../components/counter/Counter.jsx";
import VideoSyntax from "../../subcomponent/VideoSyntax.jsx";

export default function ElMundo() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`enfoque a la familia`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>                    
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'001 - Criando a los varones I (Dr James Dobson)'} url={'https://www.youtube.com/embed/29AeJ3i-icM?si=_IYr_CbkvG6fh59W'}/>
                        <VideoSyntax text={'002 - Control sin gritos (Dr James Dobson)'} url={'https://www.youtube.com/embed/BtT2GeSMRcs?si=0_cXOYsyAuMIXrmV'}/>
                        <VideoSyntax text={'003 - Criando varones I - James Dobson'} url={'https://www.youtube.com/embed/-_rvTPeoPow?si=Zgd03tNCkyv1klQD'}/>
                        <VideoSyntax text={'004 - Como disciplinar a hijos saludablemente'} url={'https://www.youtube.com/embed/Nz4vdBXo8DE?si=oKzhRNjBU6jFPy5Q'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'005 - Disciplina creativa (Dr James Dobson)'} url={'https://www.youtube.com/embed/jdQpKAnFYcY?si=i3AWyc_Q7Ua7purN'}/>
                        <VideoSyntax text={'006 - Los niños y la autoestima'} url={'https://www.youtube.com/embed/jj1X1_-QSwc?si=sacuZa8jnySzjqw-'}/>
                        <VideoSyntax text={'007 - Seis principios para la disciplina'} url={'https://www.youtube.com/embed/KWeFOPHVLwk?si=moxJOm7IQdW2rV60'}/>
                        <VideoSyntax text={'009 - Niño de voluntad firme - James Dobson'} url={'https://www.youtube.com/embed/_0jt5KZJ2QI?si=fiidcewDt0i2hqyh'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'010 - Niño de voluntad firme - James Dobson'} url={'https://www.youtube.com/embed/Xn3Y9jE6HPQ?si=4gyB6EszYryACnUf'}/>
                        <VideoSyntax text={'011 - Niño de voluntad firme - James Dobson'} url={'https://www.youtube.com/embed/Y4Gbgs8QnEg?si=K9QfWA56XjmjP_h0'}/>
                        <VideoSyntax text={'012 - Como criar niños amables'} url={'https://www.youtube.com/embed/pVPovdWu9XU?si=OUX0sg2bVKWYHbqk'}/>
                        <VideoSyntax text={'013 - Como instruir hijos I'} url={'https://www.youtube.com/embed/t7seyiTeWBw?si=VlZBnv_zFQM9kLWO'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'014 - Como instruir a nuestros hijos II'} url={'https://www.youtube.com/embed/obGGwJ2j0gc?si=APMA-YgyF_LtSaiF'}/>
                        <VideoSyntax text={'015 - Como instruir a nuestros hijos III'} url={'https://www.youtube.com/embed/G_kZKQv2EPM?si=Kp0k4eOKIeS-uOrC'}/>
                        <VideoSyntax text={'016 - Cómo Educar Hijos - Adrian Rogers'} url={'https://www.youtube.com/embed/2jv17INITSY?si=bjsc7I9jxcPNpiQr'}/>
                        <VideoSyntax text={'017 - Niño de Caracter Dócil - James Dobson'} url={'https://www.youtube.com/embed/AyEV3gEUa_s?si=5-RglqnQ0yYd_Ees'}/>
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'018 - Niño de voluntad firme - James Dobson'} url={'https://www.youtube.com/embed/Y8S8Q3JZ6KY?si=FOUZgdhpd8fGxG3O'}/>
                        <VideoSyntax text={'19 - Niño de voluntad firme - James Dobson'} url={'https://www.youtube.com/embed/Qi1AnwTM66c?si=QPbSTGGXa936NPY6'}/>
                        <VideoSyntax text={'020 - Niño de voluntad firme - James Dobson'} url={'https://www.youtube.com/embed/I2vEy26vPA0?si=y1SzAyU8nqFuNx3j'}/>                        
                    </div>
                </div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}