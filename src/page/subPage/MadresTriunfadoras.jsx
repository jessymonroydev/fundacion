import React from "react";
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../../subcomponent/VideoSyntax.jsx";
import '../../styles/videos.css';
import Counter from "../../components/counter/Counter.jsx";

export default function MadresTriunfadoras() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">  
                <PrimalNav />              
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Madres Triunfadoras`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'1 - Las mujeres y la tensión'} url={'https://www.youtube.com/embed/6P8vDCvFoZs?si=277vRqrHW36I2VnW'}/>                       
                        <VideoSyntax text={'2 - Consejos para las madres'} url={'https://www.youtube.com/embed/bqO5MaFyHRo?si=k788CULItStfWvYF'}/>
                        <VideoSyntax text={'3 - Disfrute de ser mamá'} url={'https://www.youtube.com/embed/D6g8uKu6XHg?si=TiXgLDenVZ2MH7na'}/>
                        <VideoSyntax text={'4 - Las madres que trabajan'} url={'https://www.youtube.com/embed/THCqCLtZfHw?si=axqXLEc63iRseN0x'}/>                    
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'5 - Cuando las madres deciden I'} url={'https://www.youtube.com/embed/HW7rgfldRIE?si=m18cHxm4MJbDpeDP'}/>
                        <VideoSyntax text={'6 - El privilegio de ser mujer I'} url={'https://www.youtube.com/embed/3ClbwNwyN7I?si=TYEZqYf0PhwZ3JBh'}/>
                        <VideoSyntax text={'7 - El privilegio de ser mujer II'} url={'https://www.youtube.com/embed/N_vHGnCqskE?si=U6UQPKy2BGWcLSPm'}/>
                        <VideoSyntax text={'8 - Vistete para triunfar I'} url={'https://www.youtube.com/embed/KW0Biu1pdJE?si=GXSdX_TxD_WmBcHA'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'9 - Mujeres que enseñan a amar'} url={'https://www.youtube.com/embed/VwGMK1g1r8s?si=xdEtRv1oLcXfl7hp'}/>
                        <VideoSyntax text={'10 - La mujer que prospera I'} url={'https://www.youtube.com/embed/5rd2PLNl_RY?si=WFTognhypDeDWXYj'}/>
                        <VideoSyntax text={'11 - Mujeres que vencen II'} url={'https://www.youtube.com/embed/3jJA4_UjBVQ?si=fYC-xKjGv6CFZuKL'}/>
                        <VideoSyntax text={'12 - Madres triunfadoras I'} url={'https://www.youtube.com/embed/XbkkbbPruFQ?si=0dxKO38G4_nJNkFZ'}/>                   
                    </div>
                    <div  className="video-contenedor-articulos">
                        <VideoSyntax text={'13 - Mujeres que influencian II'} url={'https://www.youtube.com/embed/hluZIenVzds?si=mCJ1BoIU84rdLRRx'}/>
                        <VideoSyntax text={'14 - La mujer de sus sueños I'} url={'https://www.youtube.com/embed/uBJfwe27hj8?si=1OO0rvjLynEWV4s3'}/>
                        <VideoSyntax text={'15 - El valor de la mujer'} url={'https://www.youtube.com/embed/Rv5U9zUV58s?si=wjOAbSt7iVlmLupM'}/>
                        <VideoSyntax text={'16 - La mujer de sus sueños II'} url={'https://www.youtube.com/embed/EcpQ7xDt6sc?si=uNbtl3kI10K_QvUj'}/>                   
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'17 - La mujer que prospera II'} url={'https://www.youtube.com/embed/w_nktx_wLsw?si=HLBL8AWVFXRqbSeB'}/>
                        <VideoSyntax text={'18 - La mujer de sus sueños III'} url={'https://www.youtube.com/embed/7RgbOahgTBQ?si=3Jx4DREiW4Z7ymaB'}/>
                        <VideoSyntax text={'19 - La mujer de sus sueños IV'} url={'https://www.youtube.com/embed/D8bJ5XmxrJw?si=fgQsPq45O3M1OQ15'}/>
                        <VideoSyntax text={'20 - Administración en el hogar'} url={'https://www.youtube.com/embed/G2-SbTVpBlk?si=ML-B06MtIvkcULQg'}/>                   
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'21 - Descubre el valor como mujer'} url={'https://www.youtube.com/embed/oNCkbP2QipU?si=GdaJ4b9t-zTCEUrk'}/>
                        <VideoSyntax text={'22 - Una mujer de fe I'} url={'https://www.youtube.com/embed/cBwCQV6QpO4?si=dkrZZbC4ezXjtJNg'}/>
                        <VideoSyntax text={'24 - Las amistades de la mujer'} url={'https://www.youtube.com/embed/7V-uu4WKNN4?si=kAYhLOFG1Oryl8cn'}/>
                        <VideoSyntax text={'25 - De mujer a mujer I'} url={'https://www.youtube.com/embed/TZ_51e94jRE?si=Za8PTFno6sP-GT7e'}/>                    
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'26 - De mujer a mujer II'} url={'https://www.youtube.com/embed/0CDNZrJkTIQ?si=GW2lMGNJd4WAQ8Hn'}/>
                        <VideoSyntax text={'27 - Deben saber de las mujeres'} url={'https://www.youtube.com/embed/UyOnZv0CEOg?si=sWu78jZBXMH4QOk5'}/>
                        <VideoSyntax text={'28 - Amando a Dios'} url={'https://www.youtube.com/embed/8eIrMGK6UxE?si=a1F2gmEOkLZa3u-1'}/>
                        <VideoSyntax text={'29 - La etapas del matrimonio'} url={'https://www.youtube.com/embed/nP-baTLX2-M?si=ltKj3CR32Q3kUNXt'}/>                    
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'30 - Base para un matrimonio saludable'} url={'https://www.youtube.com/embed/Z8Qgq8gbewg?si=p4e34SAUWeQKgAxk'}/>
                        <VideoSyntax text={'31 - Como hacer que mi pareja cambie II'} url={'https://www.youtube.com/embed/dAzzJN5YJuk?si=rga9I-P3RvQRrRNp'}/>
                        <VideoSyntax text={'32 - Como reconocer el amor verdadero'} url={'https://www.youtube.com/embed/kKz4xiBh7Jo?si=fAcbKU94gyY4fwtk'}/>
                        <VideoSyntax text={'33 - Matrimonio de éxitos'} url={'https://www.youtube.com/embed/Cf9Jxl5vXIw?si=WWTqfWS13rKXQgGy'}/>                   
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'34 - Familias unidas'} url={'https://www.youtube.com/embed/odNDB3DJSbI?si=BtMrBMdugPqPcmAV'}/>
                        <VideoSyntax text={'35 - Haga su matrimonio emocionante'} url={'https://www.youtube.com/embed/PBU71LDgsw0?si=nkD97Jy4wqTKvNGK'}/>
                        <VideoSyntax text={'36 - Su matrimonio'} url={'https://www.youtube.com/embed/9F0L1H98wJI?si=8TjffcY7yucCQn-3'}/>
                        <VideoSyntax text={'37 - Mujer esposa y madre de familia II'} url={'https://www.youtube.com/embed/Zu0cpDnOnR0?si=dYiAcU-xlmut8IDD'}/>                   
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'38 - El padre esencial I'} url={'https://www.youtube.com/embed/DDomj_f8_SA?si=jnvvn-WMs6Cv5VZn'}/>
                        <VideoSyntax text={'39 - Asesinos del matrimonio'} url={'https://www.youtube.com/embed/IJvoO74tP6I?si=t4vAMrJyvaOv-mK9'}/>
                        <VideoSyntax text={'40 - Las mujeres y la tensión II'} url={'https://www.youtube.com/embed/B67Nva0B31A?si=9IWKuE33S2Z--L2Y'}/>
                        <VideoSyntax text={'41 - Causas de deterioro conyugal'} url={'https://www.youtube.com/embed/34gOn7CNthQ?si=EHRBabw7gy3b0r_2'}/>                    
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'42 - 30 errores que comente las mujeres'} url={'https://www.youtube.com/embed/xmc8otK4hz0?si=551swke7cTg3D-zH'}/>
                        <VideoSyntax text={'43 - Errores de las mujeres'} url={'https://www.youtube.com/embed/-2XgfqSyuH8?si=-Eq2DVq9Ac8tgyj0'}/>
                        <VideoSyntax text={'44 - Grietas en el caracter de la mujer'} url={'https://www.youtube.com/embed/CnZzwKq0ZPM?si=hNGNVp1E4XwgsCyb'}/>                   
                        <VideoSyntax text={'45 - El problema de la ira'} url={'https://www.youtube.com/embed/yGsVreULFC8?si=1h8_VuGBXlyVm7j_'}/>
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'46 - Diferencias mujeres y hombres'} url={'https://www.youtube.com/embed/TJC-GQfGr3M?si=wZfWNm-oEwm_UYJf'}/>
                        <VideoSyntax text={'47 - La infidelidad en el matrimonio I'} url={'https://www.youtube.com/embed/eFPJdXHWM60?si=6xSyceCKhQPwf1MU'}/>
                        <VideoSyntax text={'48 - La infidelidad en el matrimonio II'} url={'https://www.youtube.com/embed/gt_LpmuDyjk?si=UYLwUtI0nP5QOFKQ'}/>
                        <VideoSyntax text={'49 - Hijos del divorcio I'} url={'https://www.youtube.com/embed/78bX55a1fOc?si=Nu89fuwI9BvRMVyB'}/>
                    </div>
                    <div className="video-contenedor-articulos">                
                        <VideoSyntax text={'50 - Venciendo el alcoholismo'} url={'https://www.youtube.com/embed/_AqLb9_SeyM?si=9X5QcAZYn_6uYmKH'}/>
                        <VideoSyntax text={'51 - La pornografía'} url={'https://www.youtube.com/embed/j8q9NddF7BI?si=4-QvLFde4dG1KyNP'}/>
                        <VideoSyntax text={'52 - Previniendo la homosexualidad'} url={'https://www.youtube.com/embed/SYbfeaD4ZJA?si=fM6S_ZF-aHHJ0WND'}/>
                        <VideoSyntax text={'53 - La mujer y la biblia'} url={'https://www.youtube.com/embed/2L7MHwTKYFU?si=B4KeiqdS9AzlfXJW'}/>
                    </div>
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}