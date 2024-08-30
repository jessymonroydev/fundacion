import React from "react";
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import Counter from "../../components/counter/Counter.jsx";

export default function ElMundo() {
    return(
        <div className="Home">
            <Star />
            <div className="page-container">   
                <PrimalNav />             
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`ATAQUE A LOS NIÑOS CON EL MUNDO Y SUS TENDENCIAS, SEGUN LA BIBLIA`}/>
                    </div>                    
                </div>
                <div style={{display:'flex', margin: 'auto', justifyContent: 'center', flexWrap: 'wrap', gap: '20px'}}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/v09wFK269hE?si=R3MvphZGjXNv0N-m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uSIYtNIAjKI?si=CeOG0UEcpn1PQSqH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6AtfXkODi7U?si=aZ4xCj4b3RRq2Eig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/RK55zFKMH8k?si=B2rA0iEmwWWaVw9n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}