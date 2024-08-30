import React, { useState } from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import '../styles/aNoDecorated.css';
import '../styles/informacionCorporativa.css';
import Counter from "../components/counter/Counter.jsx";

import img1 from '../assets/concursoCanciones/Volantejovenes1y2-1024x357.jpg';
import img2 from '../assets/concursoCanciones/VOLANTE-JOVENES-TEXTO-PARA-FACEBOOK.png';

export default function InformacionCorporativa() {
    const [switch1, setSwitch1] = useState('nosotros');

    let renderInformacionCorporativa = null;

    const nosotros = <div>
        <div className="text-informacion">
            En vista que la secretaria de educación, buen comienzo y el ICBF  ya no permiten que la fundación acercar a los niños  al Hijo de nuestro CREADOR  JESUS DE NASARET, nuestra estrategia es llegar a los Padres y  Entidades educativas, Que quieran  tener  en cuenta todos los contenidos que tenemos alojados en www.fundacionvolveranacer.org www.volveranacerradio.com con nuestro proyecto.
        </div>
        <div className="text-informacion">
            La cultura del AMOR con   Los 3 proyectos; con video caricaturas con valores y video historias bíblicas , mensajes para colorear ,con periódicos ,y los    folletos, tenemos  alojadas 57  conferencias de  “Escuela de Pobres “ con 53 conferencias para  “Madres Triunfadoras; con 20 conferencias de Enfoque a las Familias ; con 44 conferencias de “ Como Educar”   todo la información es gratuita para educar prevenir y corregir a los niños y adolescentes, para que no sean abusados o caigan en las drogas, inmundicia sexual que promueven millones de páginas  de pornografía que están encubando la pedofilia, las caricaturas que promueven la  violencia el lesbianismo y homosexualismo el ocultismo, videos juegos satánicos y violentos, que logran  que los niños cuando lleguen a la adolescencia nos les de temor ser llenos de maldad como se está viendo con el vandalismo; esto esta profetizado en la Biblia  en: Timoteo.
        </div>
        <div className="text-informacion">
            Carácter y conducta de los hombres en los últimos días 2 Timoteo 3 Pero debes saber[a] esto: que en los últimos días vendrán tiempos difíciles. 2 Porque los hombres serán amadores de sí mismos, avaros, jactanciosos, soberbios, blasfemos, desobedientes a los padres, ingratos, irreverentes, 3 sin amor, implacables, calumniadores, desenfrenados[b], salvajes[c], aborrecedores de lo bueno, 4 traidores, impetuosos[d], envanecidos, amadores de los placeres en vez de amadores de Dios; 5 teniendo apariencia de piedad[e], pero habiendo negado su poder; a los tales evita. 6 Porque entre ellos están los que se meten en las casas y llevan cautivas a mujercillas cargadas de pecados, llevadas por diversas pasiones, 7 siempre aprendiendo, pero que nunca pueden llegar al pleno conocimiento de la verdad. 8 Y así como Janes y Jambres se opusieron a Moisés, de la misma manera estos también se oponen a la verdad; hombres de mente depravada, reprobados en lo que respecta a la fe. 9 Pero no progresarán más, pues su insensatez será manifiesta a todos, como también sucedió con la de aquellos dos.
        </div>
        <div className="text-informacion">
            Gálatas 5:19 Es fácil ver lo que hacen quienes siguen los malos deseos: cometen inmoralidades sexuales, hacen cosas impuras y viciosas, 20 adoran ídolos y practican la brujería. Mantienen odios, discordias y celos. Se enojan fácilmente, causan rivalidades, divisiones y partidismos. 21 Son envidiosos, borrachos, glotones y otras cosas parecidas. Les advierto a ustedes, como ya antes lo he hecho, que los que así se portan no tendrán parte en el reino de Dios.
        </div>
        <div className="text-informacion">
            En vista que la secretaria de educación, buen comienzo y el ICBF  ya no permiten que la fundación acercar a los niños  al Hijo de nuestro CREADOR  JESUS DE NASARET, nuestra estrategia es llegar a los Padres y  Entidades educativas, Que quieran  tener  en cuenta todos los contenidos que tenemos alojados en www.fundacionvolveranacer.org www.volveranacerradio.com con nuestro proyecto.
        </div>
    </div>

    const mision = <div>
        <div className="text-informacion">
            <LetrasGlobo texto={'IMPLANTAR LA CULTURA DEL AMOR'} />
        </div>
        <div className="text-informacion">
            Es proteger a los niños anunciando la verdad con todos nuestro medios, para que identifiquen todas las formas que hoy en día  quieren destruir  sus vidas.
        </div>
        <div className="text-informacion">
            Después de analizarlo todo durante 23 años de labores, descubrí que lo que me paso desde niño fue para hoy demostrar, que nos    encontramos cada día peor, porque   el ataque contra los niños y niñas,  crese a pasos agigantados, los quieren programar para el mal comportamiento , quieren destruir su inocencia con cantidad de videos pornográficos  que promueven la inmundicia sexual, la violencia, y sus derivados.
        </div>
        <div className="text-informacion">
            Cuando Moisés se libro de la muerte del faraón que mando a matar todos los niños hebreos y  cuando nació Jesús Herodes mando a matar todos los niños menores de 2 años, sabiendo que Jesús estaba recién nacido . Los dos fueron dirigidos por satanás, el mismo que dirige a los gobernantes que permiten la muerte de miles de niños indefensos en el vientre de las Madres con el aborto, el matrimonio igualitarios para que tengan dos mamas o dos papas, todo lo prohibido por Dios.
        </div>
        <div className="text-informacion">
            Mel Gibson reveló que en Hollywood le  hicieron tomar sangre de niño y dice que  están  llenos de satanismo y que todo lo que tiene que ver con Disney es promovido  con los rituales satánicos , sacrificados los niños,  para promover   la ideología de género , todos los muñecos y las camisetas con los personajes de Disney están impregnados de maldad  que   cada día  se acerca más a los niños, y para rematar  con el Halloween  y la tabla guija y los videos con ocultismo logran que no le tengan miedo al pecado , todo esto los lleva a  la adición a la pornografía, las drogas, matoneo el vandalismo etc.
        </div>
        <div className="text-informacion">
            En china y Taiwán venden los niños para comer en restaurantes,   Esto acompañado de cantidad de antivalores que promueven los medios de comunicación, logran que cada día sea más difícil educar con El Valor más Importante Que JESUCRISTO nos vino a enseñar que es el AMOR, que cubre todos los Mandamientos y  demostramos que los niños permaneciendo unidos a JESUCRISTO rechaza todo lo que no le agrada a Dios.
        </div>
        <div className="text-informacion">
            Jesucristo enviado por su Padre a nacer en un pesebre con el propósito enseñarnos a NACER DE NUEVO, cuando nos arrepentimos y lo recibimos   su Espíritu  para ser dirigidos por  ÉL  y ser constructores de paz, permaneciendo unidos a Él para tener el poder de rechazar lo malo y ser constructores de paz.
        </div>
        <div className="text-informacion">
            Es proteger a los niños anunciando la verdad con todos nuestro medios, para que identifiquen todas las formas que hoy en día  quieren destruir  sus vidas
        </div>
        <div className="text-informacion">
            Romanos 8 Así pues, ahora ya no hay ninguna condenación para los que están unidos a Cristo Jesús, 2 porque la ley del Espíritu que da vida en Cristo Jesús, te liberó de la ley del pecado y de la muerte.
        </div>
        <div className="text-informacion">
            Esta es nuestra misión lograr que las secretarias de educación, el ICBF y buen comienzo, tenga en cuenta las recomendaciones de Nuestro CREADOR, las cuales están en nuestros proyectos.
        </div>
        <div className="text-informacion">
            Juan 15:1-17 «1 Yo soy la vid verdadera, y mi Padre es el que la cultiva. 2 si una de mis ramas no da uvas, la corta; pero si da uvas, la poda y la limpia, para que dé más. 3 ustedes ya están limpios por las palabras que les he dicho. 4 sigan unidos a mí, como yo sigo unido a ustedes. Una rama no puede dar uvas de sí misma, si no está unida a la vid; de igual manera, ustedes no pueden dar fruto, si no permanecen unidos a mí. 5» Yo soy la vid, y ustedes son las ramas. El que permanece unido a mí, y yo unido a él, da mucho fruto; pues sin mí no pueden ustedes hacer nada. 6 El que no permanece unido a mí, será echado fuera y se secará como las ramas que se recogen y se queman en el fuego. 7» Si ustedes permanecen unidos a mí, y si permanecen fieles a mis enseñanzas, pidan lo que quieran y se les dará. 8 en esto se muestra la gloria de mi Padre, en que den mucho fruto y lleguen así a ser verdaderos discípulos míos. 9 yo los amo a ustedes como el Padre me ama a mí; permanezcan, pues, en el amor que les tengo. 10 Si obedecen mis mandamientos, permanecerán en mi amor, así como yo obedezco los mandamientos de mi Padre y permanezco en su amor. 11 »Les hablo así para que se alegren conmigo y su alegría sea completa. 12 Mi mandamiento es este: Que se amen unos a otros como yo los he amado a ustedes. 13 El amor más grande que uno puede tener es dar su vida por sus amigos. 14 ustedes son mis amigos, si hacen lo que yo les mando. 15 Ya no los llamo siervos, porque el siervo no sabe lo que hace su amo. Los llamo mis amigos, porque les he dado a conocer todo lo que mi Padre me ha dicho. 16 ustedes no me escogieron a mí, sino que yo los he escogido a ustedes y les he encargado que vayan y den mucho fruto, y que ese fruto permanezca. Así el Padre les dará todo lo que le pidan en mi nombre. 17 esto, pues, es lo que les mando: Que se amen unos a otros»
        </div>
    </div>

    const vision = <div>
        <div className="text-informacion">
            1. Lograr que las secretarias de Educación establezcan, como nuevos logros todo lo relacionado con nuestro proyecto: LA CULTURA DEL AMOR Y permita que la fundación de una forma gratuita oriente por medio de nuestra página www.fundacionvolveranacer.org a los profesores de religión y Ética y valores que soliciten nuestra colaboración.
        </div>
        <div className="text-informacion">
            2. Montar una litografía para repartir de forma gratuita: todo lo relacionado con nuestros proyectos.
        </div>
        <div className="text-informacion" style={{paddingLeft: '3vw'}}>
            - Un libro para aprender a leer orientándolo a todo lo que tiene que relacionarse con el AMOR al prójimo.
        </div>
        <div className="text-informacion" style={{paddingLeft: '3vw'}}>
            - Revistas con Historias Bíblicas, empezamos con: “Conoce el Reino de los cielos“.
        </div>
        <div className="text-informacion" style={{paddingLeft: '3vw'}}>
            - Revistas para colorear con imágenes de caricaturas Bíblicas.
        </div>
        <div className="text-informacion">
            3. Montar un concurso de canto para fomentar las composiciones con valores cristianos, en los géneros musicales que más les agraden a los adolescentes. Con las canciones y pistas montadas en la página.
        </div>
        <div className="text-informacion" style={{paddingLeft: '3vw'}}>
            - Montar un concurso de obras de teatro y títeres con los libretos que recomiende la fundación montada en su página en el folleto de “LIBRETOS”
        </div>
        <div className="text-informacion" style={{paddingLeft: '3vw'}}>
            - Lograr repartir los DVD y CD a todas las guarderías de Medellín.
        </div>
        <div className="text-informacion" style={{paddingLeft: '3vw'}}>
            - Montar emisora propia en FM que estará en línea con la que tenemos virtual, volveranacerradio.com
        </div>
        <div className="text-informacion" style={{paddingLeft: '3vw'}}>
            - Montar un canal de televisión, para fomentar de todas las formas “LA CULTURA DEL AMOR”.
        </div>
        <div className="text-informacion" style={{paddingLeft: '3vw'}}>
            - Lograr que la emisora de la Fundación volveranacerradio.com la escuchen en todos los colegios.
        </div>
        <div className="text-informacion" style={{paddingLeft: '3vw'}}>
            - Montar el Noticiero WEB “El Bautista“ El corresponsal de la verdad absoluta.
        </div>
    </div>

    const objetivos = <div>
        <div className="text-informacion">
            1º Lograr  que todas las conferencias alojadas en www.fundacionvolveranacer.org  con los Folletos, Como ayudar a tus hijos, capacitación para educadores infantiles, La Armadura de Dios, el folleto de prevención ,  el folleto con los libretos con valores , los  CDS  que repartimos  para los que no tienen internet ;  Las Madres tengan todos los conocimientos, para educar y corregir, de acuerdo a las recomendaciones que nuestro CREADOR  nos dejó en su Palabra.
        </div>
        <div className="text-informacion">
            2º Que los  2 DVD  de “Una niñez Con Propósito” con canciones  Historia Bíblicas y el de los Guarda Historias  y Video Valeros, los niños los vean con sus Madres para reflexionar con sus hijos  de acuerdo al tema.
        </div>
        <div className="text-informacion">
            3º Que en los colegios se pague la alfabetización montando las obras que están alijadas en el folleto libretos de Payasos y títeres, para rescatar los valores en las guarderías, en primaria y hacer concursos con los temas recomendados por la fundación.
        </div>
        <div className="text-informacion">
            4º Que los folletos “La Prevención “Y “la armadura de Dios “Los estudien en los colegios de 4 grado en adelante.
        </div>
        <div className="text-informacion">
            5º Promover la composición de canciones con valores relacionados con el AMOR AL PROJIMO Y A LOS LOS ENEMIGOS.
        </div>
        <div className="text-informacion">
            6º Se montó el proyecto para rescatar los valores, un concurso que tiene como premio una moto eléctrica, componiendo y cantando canciones con valores Bíblicos.
        </div>
        <div className="text-informacion">
            <img style={{margin: 'auto', width: '100%', height: '100%', marginTop: '3vh', marginBottom: '3vh'}} src={img1} alt="voldante 1" />
        </div>
        <div className="text-informacion">
            <img style={{margin: 'auto', width: '100%', height: '100%', marginBottom: '3vh'}} src={img2} alt="voldante 1" />
        </div>
    </div>

    const handleSwitch1 = (content) => {
        setSwitch1(content);
    }

    if (switch1 === 'nosotros') {
        renderInformacionCorporativa = nosotros;
    } else if (switch1 === 'mision') {
        renderInformacionCorporativa = mision;
    } else if (switch1 === 'vision') {
        renderInformacionCorporativa = vision;
    } else if(switch1 === 'objetivos') {
        renderInformacionCorporativa = objetivos;
    }

    return(
        <div className="Home">
            <Star />            
            <div className="page-container"> 
                <PrimalNav />               
                <Nav />
                <div className="content-page-armadura">
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`informacion corporativa`}/>
                    </div> 
                    <div style={{width: '100%'}} >
                        <div className="switch-informacion">
                            <div className={switch1 === 'nosotros' ? `button-switch-informacion select` : 'button-switch-informacion'} onClick={() => handleSwitch1('nosotros')}>Nosotros</div>
                            <div className={switch1 === 'mision' ? `button-switch-informacion select` : 'button-switch-informacion'} onClick={() => handleSwitch1('mision')}>Misión</div>
                            <div className={switch1 === 'vision' ? `button-switch-informacion select` : 'button-switch-informacion'} onClick={() => handleSwitch1('vision')}>Visión</div>
                            <div className={switch1 === 'objetivos' ? `button-switch-informacion select` : 'button-switch-informacion'} onClick={() => handleSwitch1('objetivos')}>Objetivos</div>
                        </div>
                        <div className="border-informacion">
                            {renderInformacionCorporativa}
                        </div>
                    </div>                                                                                     
                </div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}