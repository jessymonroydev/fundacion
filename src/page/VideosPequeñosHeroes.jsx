import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function VideosPequeñosHeroes() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Video Canciones biblicos pequenos heroes`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'JESÚS MI SUPER HÉROE'} url={'https://www.youtube.com/embed/KKesrmgKvQg?si=TfA2MoNJ0BwVxS-W'}/>
                        <VideoSyntax text={'LA ARMADURA'} url={'https://www.youtube.com/embed/tCncgF17fow?si=M5u6wut6WSYh3zMJ'}/>
                        <VideoSyntax text={'CANTANDO POR LA CORONA'} url={'https://www.youtube.com/embed/kLyGRfd_6Zs?si=De79NA927WwR9Bx3'}/>
                        <VideoSyntax text={'JONAS'} url={'https://www.youtube.com/embed/PPcgQrmj_dI?si=xPuPeDfIgSPvOI5p'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'EL SOÑADOR JOSÉ'} url={'https://www.youtube.com/embed/vLGt21rDh8U?si=PiviA5WJSOQZsLIM'}/>
                        <VideoSyntax text={'ESTO ES UNA FIESTA'} url={'https://www.youtube.com/embed/b2nhLXpt0Mg?si=PuED-xp-I7EUlgZ1'}/>
                        <VideoSyntax text={'EL CASTILLO DE LA VERDAD'} url={'https://www.youtube.com/embed/1LOMI7xCDJo?si=KiRHfyKLrzNqY_O-'}/>
                        <VideoSyntax text={'ESTA ES MI CANCIÓN - ESTER'} url={'https://www.youtube.com/embed/i2kDvskyAuM?si=HInDYo14pliuhHQ8'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'EL VALIENTE GUERRERO - PEQUEÑOS HÉROES | Canción Infantil'} url={'https://www.youtube.com/embed/kHxHhqNiMTA?si=e53VMvbKTtwwPJr6'}/>
                        <VideoSyntax text={'CANTO Y DANZO | PEQUEÑOS HÉROES - Canción Infantil'} url={'https://www.youtube.com/embed/puFkZuEZqgM?si=yCf45UT231FvzsZp'}/>
                        <VideoSyntax text={'MI BURRITO SABANERO - Canción de Navidad'} url={'https://www.youtube.com/embed/BknS8vY3NbU?si=UoXru7pqb-95IOfa'}/>
                        <VideoSyntax text={'EL PADRE ABRAHAM - Canción Infantil'} url={'https://www.youtube.com/embed/Xm92xRMDOPM?si=9ZiIrseUlSA_mxmb'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'2 HORAS DE CANCIONES DE PEQUEÑOS HÉROE'} url={'https://www.youtube.com/embed/MaGs6Hrd5H8?si=Q2bGk6W5r5RN_bNb'}/>
                        <VideoSyntax text={'DIOS DE LA CREACIÓN 🌤 - Canción Infantil'} url={'https://www.youtube.com/embed/XSNV2kfgEgE?si=Vx8POPNTRjnp1iqr'}/>
                        <VideoSyntax text={'CANCION DE CUMPLEAÑOS'} url={'https://www.youtube.com/embed/24TRowKoyTg?si=loRawertpnA7LI4V'}/>
                        <VideoSyntax text={'LAS MAÑANITAS'} url={'https://www.youtube.com/embed/cNGxMBWgNLU?si=tluI_32KESxJyujw'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'JESÚS MI SALVADOR - Nueva Canción Infantil'} url={'https://www.youtube.com/embed/pMx7fHUnQ5Y?si=Wrws_rztLH--gtKt'}/>
                        <VideoSyntax text={'CANTAMOS ALELUYA | Canción infantil'} url={'https://www.youtube.com/embed/zsonc4lYieY?si=iXsg81cR6DCjgzSd'}/>
                        <VideoSyntax text={'MANDA EL FUEGO- PEQUEÑOS HÉROES | Canción Infantil'} url={'https://www.youtube.com/embed/O1Cywsf1EJU?si=y1pJlSv4kayfxgNW'}/>
                        <VideoSyntax text={'HIJO DE LA PROMESA - Abraham Sara e Isaac - Canción infantil'} url={'https://www.youtube.com/embed/Tewdssx-9zo?si=TPS_7ARFRvqviPVL'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'JESÚS ES NAVIDAD - Canción infantil'} url={'https://www.youtube.com/embed/DiSQ3pKsH0I?si=89_-mBEPPxz1e5Yy'}/>
                        <VideoSyntax text={'JESÚS Y LA TORMENTA Cancion infantil'} url={'https://www.youtube.com/embed/Nsm5ml41ueQ?si=JtgpxFcA0r59PP1p'}/>
                        <VideoSyntax text={'HEROES DE LA FE| PEQUEÑOS HÉROES - Canciones'} url={'https://www.youtube.com/embed/UWvm_1SWl1A?si=8N7CQRmf4YMvAFHm'}/>
                        <VideoSyntax text={'EL GUERRERO DAVID Canción Infantil'} url={'https://www.youtube.com/embed/a1kF03qDFQw?si=TVx3ipf4eF5eCTjF'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'LA CANCIÓN DE JOSAFAT - Canción Infantil'} url={'https://www.youtube.com/embed/09o_ZzLkqZs?si=mxdntIBwNU1R4ln_'}/>
                        <VideoSyntax text={'LÁZARO - Canciones infantiles'} url={'https://www.youtube.com/embed/7fYz8PnfYsg?si=VcQZ7KlWezKFgq-l'}/>
                        <VideoSyntax text={'1 HORA CON PEQUEÑOS HÉROES'} url={'https://www.youtube.com/embed/DmovSHqp8p8?si=lze8jVrXGOa8P-t5'}/>
                        <VideoSyntax text={'EL ARCA DE NOÉ'} url={'https://www.youtube.com/embed/wgSGZwaU3TI?si=AQftWKyeBC_kzVhq'}/>
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}