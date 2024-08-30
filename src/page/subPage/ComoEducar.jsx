import React from "react";
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../../subcomponent/VideoSyntax.jsx";
import '../../styles/videos.css';
import Counter from "../../components/counter/Counter.jsx";

export default function EscuelaDePadres() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">    
                <PrimalNav />            
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center', color: '#b57917'}}>
                        <LetrasGlobo texto={`¿Como Educar?`}/>
                    </div>                    
                </div>
                <div style={{width: '100%'}}>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'01 - ¿Cómo enfrentar el estrés?'} url={'https://www.youtube.com/embed/nZPsUZ0eR9A?si=3yPsDW7XwMh7K0-2'}/>                       
                        <VideoSyntax text={'02 - ¿Estás mal con tu pareja?'} url={'https://www.youtube.com/embed/qTjVM4-sXJ4?si=_fWSqSXjRRgf-Dqm'}/>
                        <VideoSyntax text={'03 - Armonía en el hogar'} url={'https://www.youtube.com/embed/KBTGtT_KrUQ?si=t2sDWAVJXljMwtO5'}/>
                        <VideoSyntax text={'04 - Proteja su hogar'} url={'https://www.youtube.com/embed/AwBqv5kE_x8?si=Cx0zlO18b4wU9mXC'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'05 - Como controlar el enojo'} url={'https://www.youtube.com/embed/HW7rgfldRIE?si=aX2eHE0AqzR5HQoL'}/>                       
                        <VideoSyntax text={'06 - El poder de la mente'} url={'https://www.youtube.com/embed/Q0TWfXl3ksE?si=JH68ZeWahAv_JGEx'}/>
                        <VideoSyntax text={'07 - La fidelidad en el matrimonio'} url={'https://www.youtube.com/embed/9QrQn6JKhvQ?si=-Y50EHMpSBbO3lGg'}/>
                        <VideoSyntax text={'09 - Como orar por los hijos'} url={'https://www.youtube.com/embed/y0seJWsEL0M?si=TUN64Ur6pyGmaFpl'}/>                  
                    </div>   
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'10 - ¿Como Hablar de Jesús sin miedo?'} url={'https://www.youtube.com/embed/WkA2ShkqxRA?si=NLkEE6lMBHYyInAx'}/>                       
                        <VideoSyntax text={'11 - Como enfrentar los demonios'} url={'https://www.youtube.com/embed/GPBFys3TmiQ?si=knEoHpPYnVBzpmXQ'}/>
                        <VideoSyntax text={'12 - Como criar hijos sabios'} url={'https://www.youtube.com/embed/rk312aVpPaQ?si=j9PFZ14vdRwVcu8n'}/>
                        <VideoSyntax text={'13 - Criando jóvenes campeones'} url={'https://www.youtube.com/embed/HdRIyyaork8?si=Axn1Nys06DBu1FZ3'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'14 - Su hijo sabio o insensato'} url={'https://www.youtube.com/embed/wuxlKCcWJvM?si=-WUgd7axNGtbcWxc'}/>                       
                        <VideoSyntax text={'15 - Honra a tu padre y a tu madre'} url={'https://www.youtube.com/embed/2nLKydj27n4?si=ea5bYlY812N5gZJF'}/>
                        <VideoSyntax text={'16 - Como tener paciencia I'} url={'https://www.youtube.com/embed/Xs9yUwh4Kcc?si=nCCaQ27FA2hTkLJP'}/>
                        <VideoSyntax text={'17 - Como derribar las fortalezas de Satanás'} url={'https://www.youtube.com/embed/dKeM-G62oXc?si=o-3xKJXkTAtUD4Og'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'18 - Cinco formas de dar motivación'} url={'https://www.youtube.com/embed/rl3ysMbTuKE?si=oalx8o3CeZK3ttF2'}/>                       
                        <VideoSyntax text={'19 - La necesidad de orar siempre'} url={'https://www.youtube.com/embed/LfTX_bfOt3Y?si=ngQ7Qb7FwyM7DUEv'}/>
                        <VideoSyntax text={'20 - 6 claves para que Dios conteste'} url={'https://www.youtube.com/embed/99AVa_5TLYI?si=z1ywxV4ZJIHuAlRr'}/>
                        <VideoSyntax text={'21 - La clave para un magnifico matrimonio'} url={'https://www.youtube.com/embed/6ev-LrKr0F4?si=_gELDjNjMWWQxgVD'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'22 - Como revivir tu matrimonio I'} url={'https://www.youtube.com/embed/BxGn24QK1Eo?si=h1eTwdEBpQ_4vY7_'}/>                       
                        <VideoSyntax text={'23 - Se necesita a Dios para un hogar'} url={'https://www.youtube.com/embed/p0YxvBibsCw?si=qf3OzuBLIJEjISNt'}/>
                        <VideoSyntax text={'24 - ¿Qué hay después de la muerte?'} url={'https://www.youtube.com/embed/-WifgS_scJo?si=XcXHc16mG1Nec9Z6'}/>
                        <VideoSyntax text={'25 - Como ser salvo y saberlo'} url={'https://www.youtube.com/embed/ZMKXZD1l-rc?si=zXfWCPAs8x-lsEW_'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'26 - El apóstata'} url={'https://www.youtube.com/embed/9O-69v8439c?si=8Kx_3YXG574bVbFj'}/>                       
                        <VideoSyntax text={'27 - Pastores engañadores'} url={'https://www.youtube.com/embed/aHrBLFqX_zM?si=eAQQg8IyzSU0a4oz'}/>
                        <VideoSyntax text={'28 - Como vivir en los últimos tiempos'} url={'https://www.youtube.com/embed/Lb4HPHFmbhk?si=-PlL-M-JfGxgI_8c'}/>
                        <VideoSyntax text={'29 - El cristiano falsificado I'} url={'https://www.youtube.com/embed/GADdR6LsP0E?si=YriGFOwvvtlzGNkT'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'30 - Juicio Final'} url={'https://www.youtube.com/embed/CtUB9ZWZcAE?si=rV3ZcRDYNXg_iLXK'}/>                       
                        <VideoSyntax text={'31 - Guerra espiritual'} url={'https://www.youtube.com/embed/ATzPZoQc0Qw?si=Q6cq39RxWUouKUlX'}/>
                        <VideoSyntax text={'32 - El pecado imperdonable'} url={'https://www.youtube.com/embed/6hLaU220SD0?si=3eMOX2Gytht9jG8M'}/>
                        <VideoSyntax text={'33 - Nuevo nacimiento'} url={'https://www.youtube.com/embed/6ukrvWOM1zs?si=s-wJHhqEdrmK7mtv'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'34 - 6 características del nuevo nacimiento'} url={'https://www.youtube.com/embed/WRDUf6QrImI?si=xX9lGgnntNEWBPTX'}/>                       
                        <VideoSyntax text={'35 - Como oír la voz de Dios'} url={'https://www.youtube.com/embed/GhyG6Q9M1aY?si=Nq9DLjeVZIdinsjI'}/>
                        <VideoSyntax text={'36 - Cuando el Espíritu Santo habla'} url={'https://www.youtube.com/embed/60siXv1EEKw?si=TxM_dGPnG3vZx7iV'}/>
                        <VideoSyntax text={'37 - Como ganar un alma para Cristo'} url={'https://www.youtube.com/embed/-yqik6bLxi0?si=2_qm9QExGvLU65Gj'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'38 - Como trabaja el diablo'} url={'https://www.youtube.com/embed/69novvVj2ZQ?si=y59bxqbDQw6RcBqb'}/>                       
                        <VideoSyntax text={'39 - La gente que Dios usa'} url={'https://www.youtube.com/embed/IUicjjrq_p4?si=KQ1RLtQcfT_nbVl4'}/>
                        <VideoSyntax text={'40 - El reino de Satanás y el reino de Dios'} url={'https://www.youtube.com/embed/TwcWh3t0p-o?si=XCuE2PBEe7qdV6iY'}/>
                        <VideoSyntax text={'41 - Los días de Noé'} url={'https://www.youtube.com/embed/8XMhiim7kYE?si=HZI2EFD02HCWDFIA'}/>                  
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'42 - ¿Cómo tener paz en la tormenta?'} url={'https://www.youtube.com/embed/6P4wfzpz3mc?si=h5tT4EQjucpt9ZEO'}/>                       
                        <VideoSyntax text={'43 - ¿Eres cristiano o mundano?'} url={'https://www.youtube.com/embed/Y9QUI7lEm9o?si=6J5-6ETHMne_ckXg'}/>
                        <VideoSyntax text={'44 - ¿Cómo tener paciencia I?'} url={'https://www.youtube.com/embed/xqjNX4cs4fY?si=AblOgWTreP29c_cK'}/>                                        
                    </div>                 
                </div>
                <div className="video-contenedor-articulos"></div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}