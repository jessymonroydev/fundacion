import React from "react";
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../../subcomponent/VideoSyntax.jsx";
import '../../styles/videos.css';

export default function EscuelaDePadres() {
    return(
        <div className="Home">
            <Star />
            <PrimalNav />
            <div className="page-container">                
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Escuela para Padres`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'1 - El carácter de los niños'} url={'https://www.youtube.com/embed/Um7quWjTMoE?si=FkCS2-4pi3XY8_EC'}/>                       
                        <VideoSyntax text={'2 - El pecado de herencia'} url={'https://www.youtube.com/embed/Qe4aPFtbSvc?si=pBiH2NG0F_WoOE9F'}/>
                        <VideoSyntax text={'3 - Un hogar con Dios'} url={'https://www.youtube.com/embed/PxAS1JTeCtI?si=YoDZ__FjMRYMkNs4'}/>
                        <VideoSyntax text={'4 - Amar sin condiciones'} url={'https://www.youtube.com/embed/dei_QFLrIwM?si=fUvINm9HbD3zpNlc'}/>                    
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'5 - Disciplina en el hogar'} url={'https://www.youtube.com/embed/tygS8S__5Iw?si=nfA8Y6ZZB61tyWAZ'}/>
                        <VideoSyntax text={'6 - Su entrenamiento'} url={'https://www.youtube.com/embed/d9w58jFmGCM?si=e0ky6Lkrp-9glKNN'}/>
                        <VideoSyntax text={'7 - El crecimiento de Cristo'} url={'https://www.youtube.com/embed/rNBZ7xMTLK8?si=yy3uK0-hqZVh_hLZ'}/>
                        <VideoSyntax text={'8 - La influencia de una madre'} url={'https://www.youtube.com/embed/lEtPDB36Ow4?si=0FOUdVBSbQXPXHO0'}/>                    
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'9 - Modelo de un padre'} url={'https://www.youtube.com/embed/H6q9PUptYeQ?si=EK45NVz8POfmU_Z6'}/>
                        <VideoSyntax text={'10 - La hija necia y la hija sabia'} url={'https://www.youtube.com/embed/ggJQatxGfHI?si=lpWPxJOdw_P9krT3'}/>
                        <VideoSyntax text={'11 - La hija sensual o moral'} url={'https://www.youtube.com/embed/mvLIgQlOpTE?si=yBQC7k77a-_WEXh_'}/>
                        <VideoSyntax text={'12 - El padre y su hijo'} url={'https://www.youtube.com/embed/xdZTWmwmi9o?si=ZUYNWL-b4wCm4Agy'}/>                    
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'13 - Advertencia a la familia'} url={'https://www.youtube.com/embed/7-A_8xCEpkc?si=6Xvto9WYw46L5B4t'}/>
                        <VideoSyntax text={'14 - Deberes de la familia'} url={'https://www.youtube.com/embed/usHJpZVQtmY?si=uNA_GF4WuQTreTHU'}/>
                        <VideoSyntax text={'15 - Ataques modernos'} url={'https://www.youtube.com/embed/BBwMVd3j5vk?si=nEuoFCv03N7GRecC'}/>
                        <VideoSyntax text={'16 - Niños criminales'} url={'https://www.youtube.com/embed/UEmpgLJX9cM?si=O7stRfoV43SxRti9'}/>                    
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'17 - Homosexualismo y sida'} url={'https://www.youtube.com/embed/PHlJrjXFRFE?si=r-unHgbsB_PRTAwv'}/>
                        <VideoSyntax text={'18 - Drogas, sexo y alcohol'} url={'https://www.youtube.com/embed/ezew8LNf_3g?si=r86qpOFI6_emVobF'}/>
                        <VideoSyntax text={'19 - El poder espiritual'} url={'https://www.youtube.com/embed/s6MEuZ_p-lM?si=lXfLgwvGMkfhcrD7'}/>
                        <VideoSyntax text={'20 - Adicción al internet'} url={'https://www.youtube.com/embed/Cmks0F3w1Ls?si=Q72QjI0xNvLBe4VY'}/>                    
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'21 - Efecto de videojuegos'} url={'https://www.youtube.com/embed/43zJYWmH33w?si=0p3EHKFSREdMfigb'}/>
                        <VideoSyntax text={'22 - Adicció a videojuegos'} url={'https://www.youtube.com/embed/hXdspOmR8Ug?si=DTedAktifF99lxAc'}/>
                        <VideoSyntax text={'23 - Muere por jugar 12 horas'} url={'https://www.youtube.com/embed/dg6JTPPskjg?si=vJjlKqwZWmh6AkY4'}/>
                        <VideoSyntax text={'24 - ¿Qué debo decir a mis hijos?'} url={'https://www.youtube.com/embed/u4GT15i3niI?si=Ya37VvKNjMOcOz42'}/>                    
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'25 - Como criar niños amables'} url={'https://www.youtube.com/embed/oo9f6skz7zU?si=3QlZlHl4mGGFjpel'}/>
                        <VideoSyntax text={'26 - Control sin gritos'} url={'https://www.youtube.com/embed/Iim3OSW4l44?si=9ZK-R6jJ_qNlruab'}/>
                        <VideoSyntax text={'27 - Aprenda a ganar el respeto'} url={'https://www.youtube.com/embed/ffv5ydHhDOo?si=q5Bu_s8EnI0in45K'}/>
                        <VideoSyntax text={'28 - Donde está papá 1'} url={'https://www.youtube.com/embed/dxJdM4RxlTU?si=ySDet_4FJBPImB_I'}/>                    
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'29 - Donde está papá 2'} url={'https://www.youtube.com/embed/V3IumSrdJBA?si=VV1OjRzOeAnISA-C'}/>
                        <VideoSyntax text={'31 - El nuevo nacimiento'} url={'https://www.youtube.com/embed/3Ex60rukN3c?si=jd662AHt7oElXOEE'}/>
                        <VideoSyntax text={'32 - Por qué los niños de Japón obedecen?'} url={'https://www.youtube.com/embed/wBzp_lMCZqQ?si=FXOeYkC50ymrCJVe'}/>
                        <VideoSyntax text={'34 - El poder espiritual de la música'} url={'https://www.youtube.com/embed/T8cRiURQUK8?si=E4XpFN7k2LVCWMul'}/>                    
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'35 - La Educación De Los Hijos'} url={'https://www.youtube.com/embed/_9d4IXW27oM?si=17Fc-0tl4zS-SjWN'}/>
                        <VideoSyntax text={'36 - Como disciplinar a nuestros hijos'} url={'https://www.youtube.com/embed/Rb86MBATVxo?si=gDjzZOuclYWHQ76m'}/>
                        <VideoSyntax text={'37 - Cuando Los Hijos Se Van'} url={'https://www.youtube.com/embed/U1r1yreRsaQ?si=THPfm1mcLICd4SYD'}/>
                        <VideoSyntax text={'38 - Maridos Destructivos'} url={'https://www.youtube.com/embed/hXhtDhFLzSQ?si=e9bQqCBcs_PriO3Z'}/>                    
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'39 - La Armadura de Dios I'} url={'https://www.youtube.com/embed/NyyzBrxNGFE?si=OQIu77DgPiq3GKkl'}/>
                        <VideoSyntax text={'40 - Matrimonio y la Biblia'} url={'https://www.youtube.com/embed/284mboyr_oc?si=qzGZVfH_w2KHgavq'}/>
                        <VideoSyntax text={'42 - Reconciliación matrimonial'} url={'https://www.youtube.com/embed/jUQ6Sheyq2g?si=axUFiQ4mTiWNFRSz'}/>
                        <VideoSyntax text={'43 - Oración por la sabiduría'} url={'https://www.youtube.com/embed/O2tJLyn05Qc?si=0nVqQmdtSLyb2Hep'}/>                    
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'44 - Abuso Infantil'} url={'https://www.youtube.com/embed/Ny9pf9lMwYo?si=Gh_iTTb65Qkg8eLv'}/>
                        <VideoSyntax text={'45 - El espíritu de sabiduría'} url={'https://www.youtube.com/embed/7V-9pVboSTA?si=h4ngDKflZGqzjZh1'}/>
                        <VideoSyntax text={'46 - Prácticas del Ocultismo'} url={'https://www.youtube.com/embed/q3bvfstvL_0?si=0IpOttKzGOucCIh5'}/>
                        <VideoSyntax text={'47 - El verdadero perdón'} url={'https://www.youtube.com/embed/GZZPq1Fboa8?si=OEGYdXm-fankUzxs'}/>                    
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'48 - El poder de la Palabra de Dios'} url={'https://www.youtube.com/embed/HYCwacZMTQA?si=rxleNA3Sr6wO3N3f'}/>
                        <VideoSyntax text={'49 - Jesucristo El Creador'} url={'https://www.youtube.com/embed/f15DgRFBvrI?si=yekQOaL7tVrVOIce'}/>
                        <VideoSyntax text={'50 - Halloween o Fiesta de las Brujas'} url={'https://www.youtube.com/embed/-Ch24BBY9Qo?si=htBaU3nt2eCiybnA'}/>
                        <VideoSyntax text={'51 - El precio del Ocultismo'} url={'https://www.youtube.com/embed/YkfE5Ze6p9Y?si=57U_YS3jPy8RvG-G'}/>
                    </div>
                    <div className="video-contenedor-articulos">                
                        <VideoSyntax text={'52 - Drogas, alcohol y la juventud'} url={'https://www.youtube.com/embed/G64CkbjcPkw?si=CMG6qSXgfctEL16h'}/>
                        <VideoSyntax text={'53 - La maldición de la Brujería'} url={'https://www.youtube.com/embed/h92015FgSuc?si=r4wJHD70J5UOHYSo'}/>
                        <VideoSyntax text={'54 - La amenaza de la inmoralidad'} url={'https://www.youtube.com/embed/5sos6rje1qs?si=vmGLLUDpVg0tGI-n'}/>
                        <VideoSyntax text={'57 - Enfermedades mentales'} url={'https://www.youtube.com/embed/e5MZVbx6U9k?si=XHOyM9PXotNdzLB3'}/>
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Footer />
            </div>
        </div>
    );
}