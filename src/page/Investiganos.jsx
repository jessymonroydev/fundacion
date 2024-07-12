import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import '../styles/aNoDecorated.css';

export default function Investiganos() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">   
                <PrimalNav />             
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`INVESTIGANOS`}/>
                    </div> 
                    <div style={{margin: 'auto'}} >2023</div>
                    <div style={{display:'flex', flexWrap:'wrap', width:'100%', justifyContent: 'center', gap: '60px'}}>
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} href="1o-personeria-Juridica-ICBF-2023.pdf" target="_blank" rel="noopener noreferrer">
                            1º Personería Jurídica  ICBF 2023
                        </a>
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} href="ESAL-FUNDACION-VOLVER-A-NACER-2022.pdf" target="_blank" rel="noopener noreferrer">
                            ESAL 2023
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} href="3o-ACTA-73-de-2023.pdf" target="_blank" rel="noopener noreferrer">
                            Acta 73 de 2023
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} href="4o-Balance-General.pdf" target="_blank" rel="noopener noreferrer">
                            Balance General
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} href="5o-CERTIFICACION-RENTA-2022.pdf" target="_blank" rel="noopener noreferrer">
                            Certificación de Renta 2022
                        </a>  
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} href="6o-CERTIFICADO-PENALES-ESAL-2023.pdf" target="_blank" rel="noopener noreferrer">
                            CERTIFICADOS PENALES-ESAL 2023
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} href="7o-Estado-de-resultados-a-31-de-Diciembre.pdf" target="_blank" rel="noopener noreferrer">
                            Estado de resultados a 31 de Diciembre 
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} href="8o-INFORME-2022.pdf" target="_blank" rel="noopener noreferrer">
                            INFORME 2022
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} href="9o-RENTA-FUNDACION-2021-1.pdf" target="_blank" rel="noopener noreferrer">
                            RENTA FUNDACION 2021
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} className="aNO" href="10o-CERTIFICADO-INGRESOS-CARGOS-ESAL-2023.pdf" target="_blank" rel="noopener noreferrer">
                            CERTIFICADO INGRESOS CARGOS ESAL 2023
                        </a>                                                                    
                    </div>                    
                    <div style={{margin: 'auto'}} >2024</div>
                    <div style={{display:'flex', flexWrap:'wrap', width:'100%', justifyContent: 'center', gap: '60px'}}>
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} className="aNO" href="1° PERSONERIA JURIDICA ICBF.pdf" target="_blank" rel="noopener noreferrer">
                            1° PERSONERIA JURIDICA ICBF 2024
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} className="aNO" href="PRESENTACION DE LA ESAL 2024.pdf" target="_blank" rel="noopener noreferrer">
                            2° ESAL 2024
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} className="aNO" href="3  ACTA 2024.pdf" target="_blank" rel="noopener noreferrer">
                            3° ACTA 2024
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} className="aNO" href="4 BALANCE.pdf" target="_blank" rel="noopener noreferrer">
                            4° BALANCE 2024
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} className="aNO" href="5 CERTIFICACION DE  RENTA.pdf" target="_blank" rel="noopener noreferrer">
                            5° CERTIFICACION DE RENTA 2024
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} className="aNO" href="6 CERTIFICADOS PENALES.pdf" target="_blank" rel="noopener noreferrer">
                            6° CERTIFICADOS PENALES 2024
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} className="aNO" href="7° ESTADO DE RESULTADOS.pdf" target="_blank" rel="noopener noreferrer">
                            7° ESTADO DE RESULTADOS 2024
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} className="aNO" href="8° informe de jestion.pdf" target="_blank" rel="noopener noreferrer">
                            8° informe de gestion 2024
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} className="aNO" href="9° DECLARACION RENTA FUNDACION 2023 PRESENTADA (1).pdf" target="_blank" rel="noopener noreferrer">
                            9° DECLARACION RENTA FUNDACION 2023 PRESENTADA  2024
                        </a> 
                        <a style={{textDecoration: 'none', color: '#04acfc', width:'350px', textAlign: 'center'}} className="aNO" href="10  CARGOS.pdf" target="_blank" rel="noopener noreferrer">
                            10° CARGOS 2024
                        </a> 
                    </div>                                                                    
                </div>
                <Footer />
            </div>
        </div>
    );
}