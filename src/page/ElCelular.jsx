import React from "react";
import '../styles/videos.css';
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import Counter from '../components/counter/Counter2.jsx';

export default function ElCelular() {
    return(
<div className="Home">
            <Star />            
            <div className="page-container">     
                <divrimalNav />           
                <Nav />
                <div className="video-contenedor-articulos">
                    <VideoSyntax url={'https://www.youtube.com/embed/B9geaWgzm3s?si=Os7aok0QT5cGDkW4'} />
                    <VideoSyntax url={'https://www.youtube.com/embed/ES7Wub9M7Lo?si=8T9XFmsTlRXSGuDi'}/>
                    <VideoSyntax url={'https://www.youtube.com/embed/S4H7rlzcJgI?si=525ldgrIPKpBfWgA'}/>
                    <VideoSyntax url={'https://www.youtube.com/embed/OimQTfmrs2E?si=eLbfcz_nOoKu2oIV'}/>
                </div>
                <div className="content-page-armadura">
                    <div className="content-home" style={{margin:'auto', justifyContent: 'center'}}>
                        <h3 style={{fontSize: '1em', color: '#b57917'}}><LetrasGlobo texto={`EL CELULAR ES ADICTIVO Y ALTERA LA CONDUCTA DE LOS NIÑOS`}/></h3>
                    </div>
                    <div>
                        <strong style={{ color: '#04acfc' }}>
                        DESDE LA TEMPRANA INFANCIA: NO CALMES EL LLANTO CON EL CELULAR, ¡NO!, ES ADICTIVO, ACELERA EL CRECIMIENTO DEL CEREBRO, NO PONEN ATENCIÓN, HAY RETRASOS, PROBLEMAS DE APRENDIZAJE, AUMENTO DE LA IMPULSIVIDAD Y FALTA DE CONTROL, CONDUCTAS AGRESIVAS. JESÚS ENSEÑO: INSTRUYE AL NIÑO EN SU CAMINO Y NO APARTARA DE EL.
                        </strong>
                    </div>
                    <div  style={{ fontSize: '1.2em', color: 'gold' }}>
                        Depresión infantil y ansiedad, con riesgo de generar adicción en casos extremos.
                    </div>
                    <div>
                        Así señaló el médico psiquiatra Horacio Vargas Murga, director adjunto del Instituto Nacional de Salud Mental (INSM), quien exhortó a los padres tener mayor control y supervisión de las aplicaciones que descargan sus hijos en sus equipos electrónicos, y que lean con detenimiento los permisos que se solicitan; más aún, en esta etapa de vacaciones.
                    </div>
                    <div>
                        Sostuvo que si el niño está más de 2 horas al día con los dispositivos electrónicos, su conducta se presenta alterada, prefiere quedarse en casa en la computadora y no salir con sus amigos y baja su rendimiento académico, puede ser una sospecha de una adicción; los padres deben ir disminuyendo el uso de dichos aparatos de forma progresiva. Si a pesar de esa medida el problema persiste, es recomendable acudir a un establecimiento de salud para ayuda profesional.
                    </div>
                    <h2  style={{ fontSize: '1.2em', color: 'gold' }}>Consejos y estrategias efectivas para prevenir la adicción al celular</h2>
                    <ol>
                        <li>
                        <div style={{ fontSize: '1.2em', color: '#04acfc' }}>Establecer límites de tiempo:</div>                        
                        <div>
                            Es importante establecer un tiempo límite para el uso del celular en niños. Se recomienda que los niños no pasen más de 2 horas al día en dispositivos móviles. Además, es importante establecer horarios específicos para el uso del celular, como después de hacer la tarea o durante los fines de semana.
                        </div>
                        </li>
                        <br />
                        <li>
                        <div style={{ fontSize: '1.2em', color: '#04acfc' }}>Crear actividades alternativas:</div>                        
                        <div>
                            Es importante que los niños tengan actividades alternativas para hacer en lugar de estar en sus celulares. Puede ser deportes, juegos de mesa, lectura o cualquier otra actividad que les guste. De esta manera, tendrán una vida más activa y saludable.
                        </div>
                        </li>
                        <br />
                        <li>
                        <div style={{ fontSize: '1.2em', color: '#04acfc' }}>Crear un ambiente sin celulares:</div>                        
                        <div>
                            Es importante que haya lugares en la casa donde los celulares no estén permitidos. Puede ser la mesa durante las comidas o la habitación durante la hora de dormir. Esto ayuda a que los niños aprendan a desconectar y a tener momentos de tranquilidad sin la distracción del celular.
                        </div>
                        </li>
                        <br />
                        <li>
                        <div style={{ fontSize: '1.2em', color: '#04acfc' }}>Enseñar sobre el uso responsable del celular:</div>                        
                        <div>
                            Es importante que los niños entiendan la responsabilidad que conlleva el uso de un celular. Deben saber que no deben compartir información personal en línea y que deben respetar a los demás en las redes sociales. Además, deben aprender a identificar el contenido inapropiado y a evitarlo.
                        </div>
                        </li>
                        <br />
                        <li>
                        <div style={{ fontSize: '1.2em', color: '#04acfc' }}>Modelar un buen comportamiento:</div>                        
                        <div>
                            Los padres deben ser un ejemplo para sus hijos en cuanto al uso del celular. Si los padres pasan mucho tiempo en el celular, los niños también lo harán. Es importante que los padres establezcan límites y también sigan las reglas para que los niños aprendan de su ejemplo.
                        </div>
                        </li>
                        <br />
                    </ol>
                    <h2 style={{ fontSize: '1.2em', color: 'gold' }}>Consejos prácticos para prevenir la adicción a las pantallas en niños</h2>
                    <div>
                        <div>El celular y la adicción en niños se ha vuelto un tema de preocupación en la sociedad actual. El uso excesivo del móvil puede llevar a la dependencia y afectar la salud y el bienestar emocional de los niños. Por eso, es importante tomar medidas para combatir esta adicción y prevenirla desde temprana edad.</div>
                        <br />
                        <div style={{ fontSize: '1.2em', color: '#04acfc' }}>Establecer horarios y límites:</div>
                        <div>Uno de los consejos más importantes para prevenir la adicción a las pantallas en niños es establecer horarios y límites claros en el uso del celular. Es importante que los padres establezcan un horario de uso y lo comuniquen de manera clara y directa a sus hijos. Además, se deben establecer límites en cuanto al tiempo de uso diario y semanal. De esta forma, se evita que los niños pasen largas horas frente a la pantalla y se promueve un uso equilibrado del celular.</div>
                        <br />
                        <div style={{ fontSize: '1.2em', color: '#04acfc' }}>Fomentar actividades al aire libre en familia:</div>
                        <div>Es importante fomentar actividades al aire libre y en familia para que los niños aprendan a disfrutar de otras formas de entretenimiento y no se enfoquen únicamente en el uso del celular. Actividades como salir a caminar, ir de picnic o jugar juegos de mesa en familia son opciones saludables y divertidas que pueden ayudar a reducir el uso del móvil.</div>
                        <br />
                        <div style={{ fontSize: '1.2em', color: '#04acfc' }}>Establecer consecuencias claras:</div>
                        <div>Es importante establecer consecuencias claras en caso de que los niños no respeten los horarios y límites establecidos en cuanto al uso del celular. Estas consecuencias deben ser comunicadas de manera clara y directa para que los niños entiendan las consecuencias de su comportamiento. Por ejemplo, si un niño pasa más tiempo del permitido frente a la pantalla, se le puede quitar el celular por un día o se le puede limitar el tiempo de uso en los días siguientes.</div>
                        <br />
                        <div style={{ fontSize: '1.2em', color: '#04acfc' }}>Supervisar el contenido:</div>
                        <div>Es importante supervisar el contenido al que los niños tienen acceso en sus celulares. Los padres deben asegurarse de que los niños no tengan acceso a contenido inapropiado o violento. Además, deben revisar las aplicaciones y juegos que descargan para asegurarse de que sean adecuados para su edad.</div>
                        <br />
                        <div style={{ fontSize: '1.2em', color: '#04acfc' }}>Dar ejemplo:</div>
                        <div>Finalmente, es importante que los padres den ejemplo en cuanto al uso del celular. Si los padres pasan largas horas frente a la pantalla, es probable que los niños sigan su ejemplo. Por eso, es importante que los padres reduzcan su uso del celular y fomenten un uso equilibrado y saludable del mismo.</div>
                        <br />
                        <div>Establecer horarios y límites claros, fomentar actividades al aire libre y en familia, establecer consecuencias claras, supervisar el contenido y dar ejemplo son consejos prácticos que pueden ayudar a prevenir la adicción al celular en niños.</div>
                    </div>                                       
                </div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}