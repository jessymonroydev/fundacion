import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

export default function VideosSuperLibro() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">   
                <PrimalNav />             
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Video caricaturas increibles del Super Libro`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'La batalla final'} url={'https://www.youtube.com/embed/zOHh6NOKkKE?si=mUKxHgteuL_lci3o'}/>
                    <VideoSyntax text={'En el principio'} url={'https://www.youtube.com/embed/HZlegJPijcU?si=QLbgB9EWminkrH2n'}/>
                    <VideoSyntax text={'LA CREACCION'} url={'https://www.youtube.com/embed/_vRqwEbzf7A?si=djudW9VGgqv2PGQF'}/>
                    <VideoSyntax text={'El Arca De Noé'} url={'https://www.youtube.com/embed/Nqwfd66AGxk?si=nWwsGk_G3w3CKCMO'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'La Gran Prueba'} url={'https://www.youtube.com/embed/Nqwfd66AGxk?si=tIudkWLfxEQIvhva'}/>
                    <VideoSyntax text={'José'} url={'https://www.youtube.com/embed/0HssHyuEXvI?si=NwwIeyU4eBfal87Q'}/>
                    <VideoSyntax text={'Los 10 Mandamientos'} url={'https://www.youtube.com/embed/s5skboxbipg?si=GMp1uCwqVKhOa3Bw'}/>
                    <VideoSyntax text={'Deja Ir A Mi Pueblo'} url={'https://www.youtube.com/embed/DZTWoBa148E?si=MUnjm3jgGBtSA6yf'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'La Torre De Babel'} url={'https://www.youtube.com/embed/ycg-Oaem02s?si=xHK-Iu6Nn984nKMZ'}/>
                    <VideoSyntax text={'La Odisea De Job'} url={'https://www.youtube.com/embed/A83lpbIEfFs?si=y089vD30yHmUujES'}/>
                    <VideoSyntax text={'El Dios De Elías'} url={'https://www.youtube.com/embed/fagHgx8chFU?si=JyzToTqqALZ424Qw'}/>
                    <VideoSyntax text={'Daniel'} url={'https://www.youtube.com/embed/6AtfXkODi7U?si=24bG4UqVDEG84QUq'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'A Prueba De Fuego'} url={'https://www.youtube.com/embed/RK55zFKMH8k?si=s6zFwSKb2PVL0tt5'}/>
                    <VideoSyntax text={'Jacob Y Esaú'} url={'https://www.youtube.com/embed/t3dzlbFX014?si=YnrIuwgxeFdm-NDV'}/>
                    <VideoSyntax text={'Luis y Anita siendo bautizados'} url={'https://www.youtube.com/embed/RbHOmv00DUU?si=0GtXB3YBl6Ue9qu2'}/>
                    <VideoSyntax text={'Rahab Y Los Espías'} url={'https://www.youtube.com/embed/8EpOvP3kCio?si=VPTsLVfjggTjC9hv'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'Jonás'} url={'https://www.youtube.com/embed/HKZxQLlfTlc?si=Zji2bKOv9AvZPVcm'}/>
                    <VideoSyntax text={'Zacarias'} url={'https://www.youtube.com/embed/t-52oYrlDu0?si=HcnPalqolroaxxCj'}/>
                    <VideoSyntax text={'David Y Goliat'} url={'https://www.youtube.com/embed/B4n9QQGOYfE?si=EHlzixETLJdTG72D'}/>
                    <VideoSyntax text={'La Primera Navidad'} url={'https://www.youtube.com/embed/lQ8fu-cKtc4?si=mHD2t_K4DBg3a7Bq'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'El Mensajero De Dios'} url={'https://www.youtube.com/embed/wpry8mcVpbc?si=R1xexyXsfzdcUMDr'}/>
                    <VideoSyntax text={'La Prueba En El Desierto'} url={'https://www.youtube.com/embed/t8_PZzCgUwk?si=3iKxAmCsoMxcIDOB'}/>
                    <VideoSyntax text={'Ultima Cena'} url={'https://www.youtube.com/embed/82nTLOCvn6U?si=22ZY3Uj1AoGv0E18'}/>
                    <VideoSyntax text={'Nicodemo'} url={'https://www.youtube.com/embed/B4n9QQGOYfE?si=vp1IT7Puy8xyYVp3'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'Los Milagros De Jesús'} url={'https://www.youtube.com/embed/Sv3qphmN4Zo?si=SimMGy-RXz-MIg9-'}/>
                    <VideoSyntax text={'Crucifican A Jesús'} url={'https://www.youtube.com/embed/05XzOX22DLg?si=aU4MrKDHeTYn49WL'}/>
                    <VideoSyntax text={'Jesucristo Ha Resucitado'} url={'https://www.youtube.com/embed/3_DwNuJfwpE?si=482nHVOqGtqC_WT5'}/>
                    <VideoSyntax text={'Nicodemo un encuentro inolvidable'} url={'https://www.youtube.com/embed/rAWifI5zENA?si=UgZIsHdKju-goIVD'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'Camino A Damasco'} url={'https://www.youtube.com/embed/sPL04tiE5s0?si=sv52jZu1shQnymQO'}/>
                    <VideoSyntax text={'Pablo Y El Naufragio'} url={'https://www.youtube.com/embed/5gevJJJ7oy0?si=kZD1kj179qBYWJcX'}/>
                    <VideoSyntax text={'Ama a tus enemigos - Luis futbolista'} url={'https://www.youtube.com/embed/8moAsXEliQM?si=7FX8uQJxHV2RzvPJ'}/>
                    <VideoSyntax text={'El Hijo Prodigo'} url={'https://www.youtube.com/embed/uduqW8EURzM?si=cZXkaqc0OfmOdlgx'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'David Perdona la Vida de Saúl'} url={'https://www.youtube.com/embed/04BLuu886EM?si=aet0LkysV99Xrxg8'}/>
                    <VideoSyntax text={'Enséñanos a orar - Luis conversa con su abuela'} url={'https://www.youtube.com/embed/7n8EI2q6GIE?si=2mwoO4vr_zKWv_10'}/>
                    <VideoSyntax text={'La Reina Esther'} url={'https://www.youtube.com/embed/AfQ3eXbBd80?si=iCK47-aoGxjNFWpN'}/>
                    <VideoSyntax text={'El milagro de provisión'} url={'https://www.youtube.com/embed/ATk1kN_J8Ks?si=XzapJAwSD-A315DU'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'Jesús y la prueba del desierto'} url={'https://www.youtube.com/embed/kVyABb6siDQ?si=jHMqyihZPufi9RSA'}/>
                    <VideoSyntax text={'La promesa de un Salvador'} url={'https://www.youtube.com/embed/TZ09WsEo3tE?si=Htx-eJ-orTzZMAeL'}/>
                    <VideoSyntax text={'Jesús sana a los ciegos'} url={'https://www.youtube.com/embed/Towu4kYAO-Y?si=I11DmU-nNBImcm5f'}/>
                    <VideoSyntax text={'Él ha resucitado'} url={'https://www.youtube.com/embed/hDAdKqkSp-o?si=HY0ua5Kv1N3kjdbf'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'El milagro los panes y los peces'} url={'https://www.youtube.com/embed/qMNdEI6zTAk?si=UwWWs9cnB8AuHIu8'}/>
                    <VideoSyntax text={'Nehemías, el obrero de Dios'} url={'https://www.youtube.com/embed/0vX_JeU4dSg?si=vFnhZx7z8BnCH1op'}/>
                    <VideoSyntax text={'Héroes de la fe'} url={'https://www.youtube.com/embed/guUWPNKTjC0?si=8naxFV8lxbs7h3q4'}/>
                    <VideoSyntax text={'La historia de Rut'} url={'https://www.youtube.com/embed/Sq7M1iU5A7k?si=eWTITe4OUAW0gkdm'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'La historia de Daniel en el foso de los leones'} url={'https://www.youtube.com/embed/M_7BP0OQUz8?si=5H4N1a-1Ny1zy59V'}/>
                    <VideoSyntax text={'El arca de Noé'} url={'https://www.youtube.com/embed/Dh7UmfvoFPE?si=MsYYhVZQlo7WJkRI'}/>
                    <VideoSyntax text={'La gran comisión'} url={'https://www.youtube.com/embed/GHKfzFD23dw?si=-knsq-H79ovxobEO'}/>
                    <VideoSyntax text={'La resurrección de Lázaro'} url={'https://www.youtube.com/embed/KdJGvChVFaY?si=b2K7yCxaJvQTxsO-'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'Elías y los profetas de Baal'} url={'https://www.youtube.com/embed/Tk5bhvm1gks?si=-F64HReVgoI0UQzW'}/>
                    <VideoSyntax text={'Josué y la batalla de Jericó'} url={'https://www.youtube.com/embed/XvGmR8qa-nw?si=kTAtbEPtbvHLvLTF'}/>
                    <VideoSyntax text={'Sansón y Dalila'} url={'https://www.youtube.com/embed/9fj2h7z0jM0?si=_t_GTrHekSpNwhUJ'}/>
                    <VideoSyntax text={'El buen samaritano'} url={'https://www.youtube.com/embed/KR92Vg1Y3b8?si=bg9yKXK_WF3Q_kY3'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'Los reyes magos'} url={'https://www.youtube.com/embed/C1fFbYReI9A?si=rJcBgIhvDfFfytdH'}/>
                    <VideoSyntax text={'La transfiguración de Jesús'} url={'https://www.youtube.com/embed/ywOe7QTSQlw?si=fBlKhFUn_Y0RO5Vr'}/>
                    <VideoSyntax text={'La tentación de Jesús'} url={'https://www.youtube.com/embed/GoIt-7CrPlI?si=0qA9PKMzvniDzC8W'}/>
                    <VideoSyntax text={'La resurrección de Jesús'} url={'https://www.youtube.com/embed/b5Kf1s2qNnY?si=sOUK4D1LRRSh__JS'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'El sermón del monte'} url={'https://www.youtube.com/embed/fcnVVYiPZbY?si=zU92-IFzx9CwL5N-'}/>
                    <VideoSyntax text={'El milagro en Caná'} url={'https://www.youtube.com/embed/TJXflEXCgF8?si=s--ytUGZ1Jh7j6ME'}/>
                    <VideoSyntax text={'La ascensión de Jesús'} url={'https://www.youtube.com/embed/rRBwY0ndbBg?si=dKpgZ0B4v36SMe--'}/>
                    <VideoSyntax text={'El hijo pródigo'} url={'https://www.youtube.com/embed/WzAxl9TDtuk?si=ogPzFgpvg_Nut3c8'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'El ciego Bartimeo'} url={'https://www.youtube.com/embed/XnplIHi2mAs?si=nzM1SdszCZhmR1tX'}/>
                    <VideoSyntax text={'La pesca milagrosa'} url={'https://www.youtube.com/embed/RdeZ0K8K8NE?si=zOgDhOR5e6UWeeKX'}/>
                    <VideoSyntax text={'La curación del paralítico'} url={'https://www.youtube.com/embed/8k7Op77L1M0?si=1xrbLsLV8bnAv5E5'}/>
                    <VideoSyntax text={'Jesús camina sobre el agua'} url={'https://www.youtube.com/embed/jGxI9hXk1k4?si=aSt5J_zmRgX3QYGi'}/>
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'Jesús calma la tormenta'} url={'https://www.youtube.com/embed/8moAsXEliQM?si=xGy9Q1oib6MZm9EB'}/>
                    <VideoSyntax text={'La viuda y el juez injusto'} url={'https://www.youtube.com/embed/SjWEUTtmhUo?si=4bQXLDxiYxVC7GG6'}/>
                    <VideoSyntax text={'La ofrenda de la viuda pobre'} url={'https://www.youtube.com/embed/hDAdKqkSp-o?si=hy1C1JqFnoRgD4Kn'}/>
                </div>                    
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}