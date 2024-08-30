import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import '../styles/home.css';
import '../styles/videos.css';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import Counter from "../components/counter/Counter.jsx";

export default function ElMundo() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container"> 
                <PrimalNav />               
                <Nav />
                <div className="video-contenedor-articulos">
                    <VideoSyntax url={'https://www.youtube.com/embed/DjXXO8lxwsU?si=g4iQBafh6iGk5t0n'} />
                    <VideoSyntax url={'https://www.youtube.com/embed/-GmmGno-nw4?si=sYI_ezZX-6qRptzP'}/>
                    <VideoSyntax url={'https://www.youtube.com/embed/tWFUxRDpg88?si=WIM4SmX7QxKtAq6N'}/>
                    <VideoSyntax url={'https://www.youtube.com/embed/kTSii0dZtCs?si=nhi3qi95gWyfaRdJ'}/>
                </div>
                <div className="content-page-armadura">
                    <div className="content-home" style={{margin:'auto', justifyContent: 'center'}}>
                        <h3 style={{fontSize: '1em', color: '#b57917'}}><LetrasGlobo texto={`ATAQUE A LOS NIÑOS CON EL MUNDO Y SUS TENDENCIAS, SEGUN LA BIBLIA`}/></h3>
                    </div>
                    <div>
                        <strong style={{color: '#04acfc'}}>El reguetón con el perreo y todo movimiento seductor acompañado de las luces el alcohol y las drogas, están incubando adolescentes sin temor al pecado, llenos de vanidad y orgullo, solo desean disfrutar la vida.</strong>
                    </div>
                    <div>
                        Los padres deben de enseñarles a sus hijos que todos los jóvenes son tentados para aparentar lo falso, lo irreal. En vez de eso les hacen entender que están “bien” cuando disfrutan la vida, con el alcohol acompañado de la música, el baile, las drogas y terminan en fincas o moteles donde se cultivan los placeres sexuales con orgias. Y es así como pueden terminar cayendo en el lesbianismo y homosexualismo, porque el alcohol los debilita y no pueden controlar las tentaciones. Es así como llega el embarazo irresponsable, con enfermedades venéreas y otras peores.
                    </div>
                    <div>
                        La música con las luces en las discotecas tiene poder para hacernos pecar. Yo caí en la marihuana cuando me pusieron una canción de led Zeppelin en 1967. Luego caí en las otras drogas y en la inmundicia sexual cuando monté el grupo de rock. Fueron 26 años y cada día subía las dosis, la adición, dependencia y la depresión, ¡es una condición terrible!.
                    </div>
                    <div>
                        Si quieren proteger a sus hijos de las drogas y otras adicciones la oración a JESUCRISTO debe permanecer en los hogares. No permitan que amanezcan en fincas o vayan a las discotecas, ni permanezcan en las calles. Los hogares deben de ser preparados para que allí inviten los amigos más juiciosos y estudien el siguiente versículo.
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong> <strong style={{color: '#63ca18'}}>1 Juan 2:15:</strong> No amen al mundo, ni lo que hay en el mundo. Si alguno ama al mundo, <strong style={{color: '#04acfc'}}>no ama al Padre</strong>; 16 porque nada de lo que el mundo ofrece viene del Padre, sino del mundo mismo. Y esto es lo que el mundo ofrece: los malos deseos de la naturaleza humana, el deseo de poseer lo que agrada a los ojos y el orgullo de las riquezas. 17 Pero el mundo se va acabando, con todos sus malos deseos; en cambio, <strong style={{color: '#04acfc'}}>el que hace la voluntad de Dios vive para siempre</strong>.
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong> <strong style={{color: '#63ca18'}}>Eclesiastés 12:</strong> Acuérdate de tu Creador ahora que eres joven y que aún no han llegado los tiempos difíciles; ya vendrán años en que digas: «No me trae ningún placer vivirlos.»
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Salmo 4:2:</strong> (3) Ustedes, que se creen grandes señores, ¿hasta cuándo ofenderán mi honor?, <strong style={{color: 'red'}}>¿hasta cuándo desearán y buscarán lo que no tiene sentido, lo que sólo es falsedad?</strong>
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Hechos 26:18:</strong> <strong style={{color: '#04acfc'}}>Te mando a ellos para que les abras los ojos y no caminen más en la oscuridad, sino en la luz</strong>; <strong style={{color: 'red'}}>para que no sigan bajo el poder de Satanás</strong>, sino que sigan a Dios; y para que crean en mí y reciban así el perdón de los pecados y una herencia en el pueblo santo de Dios.”
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Gálatas 5:19:</strong> Es fácil ver lo que hacen quienes siguen los malos deseos: cometen inmoralidades sexuales, hacen cosas impuras y viciosas, 20 adoran ídolos y practican la brujería. Mantienen odios, discordias y celos. Se enojan fácilmente, causan rivalidades, divisiones y partidismos. 21 Son envidiosos, borrachos, glotones y otras cosas parecidas. Les advierto a ustedes, como ya antes lo he hecho, que los que así se portan <strong style={{color: 'red'}}>no tendrán parte</strong> <strong style={{color: '#04acfc'}}>en el reino de Dios</strong>.
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> 1 Corintios 6:9-10:</strong> ¿No saben ustedes que los que cometen injusticias no tendrán parte en el reino de Dios? No se dejen engañar, pues en el reino de Dios no tendrán parte los que se entregan a la prostitución, ni los idólatras, ni los que cometen adulterio, ni los afeminados, ni los homosexuales, ni los que roban, ni los avaros, ni los borrachos, ni los maldicientes, ni los ladrones. 11 <strong style={{color: '#04acfc'}}>Y esto eran antes algunos de ustedes; pero ahora ya recibieron el baño de la purificación, fueron santificados</strong> y hechos justos en el nombre del Señor Jesucristo y <strong style={{color: '#04acfc'}}>por el Espíritu de nuestro Dios</strong>.
                    </div>
                    <div>
                        <strong style={{color: '#04acfc'}}>LOS GOBERNANTES QUE OCULTARON LA VERDAD DE DIOS SON RESPONSABLES DE MUCHOS QUE SE CONDENAN, ESTO SE CORROBORA EN:</strong>
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Romanos 1:18:</strong> Pues Dios muestra su ira castigando desde el cielo a toda la gente mala e injusta, que con su injusticia <strong style={{color: 'red'}}>mantiene prisionera la verdad</strong>. 19 Lo que de Dios se puede conocer, ellos lo conocen muy bien, porque él mismo se lo ha mostrado; 20 pues lo invisible de Dios se puede llegar a conocer, si se reflexiona en lo que él ha hecho. En efecto, desde que el mundo fue creado, <strong style={{color: '#04acfc'}}>claramente se ha podido ver que él es Dios</strong> y que su poder nunca tendrá fin. Por eso <strong style={{color: 'red'}}>los malvados no tienen disculpa</strong>. 21 Pues aunque han conocido a Dios, <strong style={{color: '#04acfc'}}>no lo han honrado como a Dios ni le han dado gracias</strong>. Al contrario, han terminado pensando puras tonterías, y su necia mente se ha quedado a oscuras. 22 Decían que eran sabios, pero se hicieron tontos; 23 porque han cambiado la gloria del Dios inmortal por imágenes del hombre mortal, y hasta por imágenes de aves, cuadrúpedos y reptiles.
                    </div>
                    <div>                    
                        24 Por eso, <strong style={{color: 'red'}}>Dios los ha abandonado</strong> a los impuros deseos que hay en ellos, y han cometido unos con otros acciones vergonzosas. 25 En lugar de la verdad de Dios, han buscado la mentira, y han honrado y adorado las cosas creadas por Dios y no a Dios mismo, que las creó y que merece alabanza por siempre. Amén.
                    </div>
                    <div>
                        26 Por eso, <strong style={{color: 'red'}}>Dios los ha abandonado a pasiones vergonzosas. Hasta sus mujeres han cambiado las relaciones naturales por las que van contra la naturaleza</strong>; 27 de la misma manera, los hombres han dejado sus relaciones naturales con la mujer <strong style={{color: 'red'}}>y arden en malos deseos los unos por los otros. Hombres con hombres cometen acciones vergonzosas</strong>, y sufren en su propio cuerpo el castigo merecido por su perversión.
                    </div>
                    <div>
                        28 Como no quisieron reconocer a Dios, él los ha abandonado a sus <strong style={{color: 'red'}}>perversos pensamientos</strong>, para que hagan lo que no deben. 29 Están llenos de toda clase de injusticia, perversidad, avaricia y maldad. Son envidiosos, asesinos, pendencieros, engañadores, perversos y chismosos. 30 Hablan mal de los demás, son enemigos de Dios, insolentes, vanidosos y orgullosos; inventan maldades, <strong style={{color: 'red'}}>desobedecen a sus padres</strong>, 31 no quieren entender, no cumplen su palabra, no sienten cariño por nadie, no sienten compasión.
                    </div>
                    <div>
                        Gracias a Dios a su AMOR Y MISERICORDIA, que siendo pecadores mandó a su Hijo a pagar nuestros pecados. Si nos arrepentimos y recibimos el Espíritu de su hijo CRISTO recibiremos para poder <strong style={{color: 'red'}}>vencer las tentaciones del maligno</strong>.
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> 1 Timoteo 1:8:</strong> Sabemos que la ley es buena, si se usa de ella conforme al propósito que tiene. 9 Hay que recordar que ninguna ley se da para quienes hacen lo bueno. La ley tiene en cuenta a los rebeldes y desobedientes, a los malvados y pecadores, a los que no respetan a Dios ni a la religión, a los que matan a su padre o a su madre, a todos los asesinos, 10 a los que cometen inmoralidades sexuales, a los homosexuales, a los traficantes de esclavos, a los mentirosos y a los que juran en falso; es decir, a los que hacen cosas que van en contra de la sana enseñanza.
                    </div>
                    <div>
                        Tengo que confesar que me quedé muy sorprendido cuando me encontré con varios grupos que se hacen llamar “cristianos” que defienden la homosexualidad. Al convertirme a Cristo entendí que hay ciertas cosas que son tan claras en la Biblia que sería prácticamente imposible malinterpretarlas. Me refiero a asuntos tan evidentes como el robar, la lujuria, la idolatría y… claro está… la homosexualidad.
                    </div>
                    <div>
                        Así que, ¿es bueno ser gay? ¿Qué dice la Biblia?
                    </div>
                    <div>
                        Hoy sólo quiero presentar una lista de pasajes bíblicos que hablan directamente sobre el tema de la homosexualidad. Una cosa que he visto en personas que se hacen llamar “creyentes” pero defienden el matrimonio homosexual en particular y la homosexualidad en general. Su perspectiva tiene muy poco respeto por las Sagradas Escrituras. Ese hecho es preocupante porque tiende a confundir a las personas que no tienen a Dios. No podemos olvidar que la Iglesia cristiana está fundada sobre la Palabra de Jesús, el Mesías; no sobre las opiniones de paganos que viven en el siglo XXI. Si no hablan conforme a la Palabra de Dios, es que no hay luz en ellos (Isaías 8:20).
                    </div>
                    <div>
                        A ver qué dice la Biblia…
                    </div>
                    <div>
                        <strong style={{color: '#04acfc'}}>ANTIGUO TESTAMENTO</strong>
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>1. Génesis 19:1-11:</strong> Para resumir un poco, dos ángeles del Señor <strong style={{color: 'red'}}>condenaron</strong> a los moradores de Sodoma y Gomorra dejándolos instantáneamente ciegos porque querían violarlos en grupo.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>2. Levítico 18:22: </strong> “No te echarás con varón como con mujer; <strong style={{color: 'red'}}>es abominación</strong>”.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>3. Levítico 20:13:</strong> “Si alguno se ayuntare con varón como con mujer, <strong style={{color: 'red'}}>abominación</strong> hicieron; ambos han de ser muertos; sobre ellos será su sangre”.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>4. Deuteronomio 23:17:</strong> “No haya ramera entre las hijas de Israel, <strong style={{color: 'red'}}>ni haya sodomita</strong> de entre los hijos de Israel”.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>5. Jueces 19:16-24:</strong> Es otro pasaje largo que demuestra las acciones pervertidas de un grupo de benjamitas que querían violar en grupo a un hombre. <strong style={{color: 'red'}}>Sus actos fueron condenados como sumamente malos</strong>.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>6. 1 Reyes 14:24:</strong> “<strong style={{color: 'red'}}>Hubo también sodomitas en la tierra</strong>, e hicieron conforme a todas las abominaciones de las naciones que el Señor había echado delante de los hijos de Israel”.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>7. 1 Reyes 15:11-12:</strong> “Asa hizo le recto antes los ojos del Señor, como David su padre. Porque quitó del país a <strong style={{color: 'red'}}>los sodomitas</strong> y quitó todos los ídolos que sus padres habían hecho”.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>8.- 1 Reyes 22:43:</strong> 46, “Y anduvo Josafat en todo el camino de Asa su padre sin desviarse de él, haciendo lo recto ante los ojos del Señor […] barrió también de la tierra el resto de <strong style={{color: 'red'}}>los sodomitas</strong> que había quedado en el tiempo de su padre Asa”.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>9. 2 Reyes 23:3:</strong> 7, “Y poniéndose el rey en pie junto a la columna, hizo pacto delante de Jehová, de que irían en pos de Jehová, y guardarían sus mandamientos, sus testimonios y sus estatutos, con todo el corazón y con toda el alma, y que cumplirían las palabras del pacto que estaban escritas en aquel libro. Y todo el pueblo confirmó el pacto. […] Además <strong style={{color: 'red'}}>derribó los lugares de prostitución</strong> idolátrica que estaban en la casa de Jehová, en los cuales tejían las mujeres tiendas para Asera.”
                    </div>
                    <div>
                        <strong style={{color: '#04acfc'}}>NUEVO TESTAMENTO</strong>
                    </div>
                    <div>
                        A lo mejor estás pensando, “Bueno, todo eso se trata del Antiguo Testamento. Ahora estoy bajo la gracia. No me hace falta hacer caso al Antiguo Pacto”. Aquí tienes, pues, otra lista de pasajes del Nuevo Testamento que enseñan la perspectiva de los primeros cristianos <strong style={{color: 'red'}}>sobre la homosexualidad</strong>. Llamemos esta perspectiva, ‘la perspectiva de gracia’…
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>10. Romanos 1:26-27:</strong> “Por esto Dios los entregó a pasiones vergonzosas; pues <strong style={{color: 'red'}}>aun sus mujeres cambiaron el uso natural por el que es contra naturaleza</strong>, y de igual modo también los hombres, dejando el uso natural de la mujer, se <strong style={{color: 'red'}}>encendieron en su lascivia unos con otros</strong>, cometiendo hechos vergonzosos hombres con hombres, y recibiendo en sí mismos la retribución debida a su extravío.”
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>11. 1 Corintios 6:9:</strong> “¿No sabéis que los injustos no heredarán el reino de Dios? No erréis; ni los fornicarios, ni los idólatras, ni los adúlteros, <strong style={{color: 'red'}}>ni los afeminados, ni los que se echan con varones</strong>”.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>12.- 1 Timoteo 1:9-10:</strong> “Conociendo esto, que la ley no fue dada para el justo, sino para los transgresores y desobedientes, para los impíos y pecadores, para los irreverentes y profanos, para los parricidas y matricidas, para los homicidas, para <strong style={{color: 'red'}}>los fornicarios</strong>, para los sodomitas, para los secuestradores, <strong style={{color: 'red'}}>para los mentirosos</strong> y perjuros, y para cuanto se oponga a la sana doctrina”.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>13. Judas 7:</strong> “Como Sodoma y Gomorra y las ciudades vecinas, las cuales de la misma manera que aquéllos, habiendo fornicado e ido en pos de vicios contra naturaleza, fueron puestas por ejemplo, <strong style={{color: 'red'}}>sufriendo el castigo del fuego eterno</strong>”.
                    </div>
                    <div>
                        Es muy posible que <strong style={{color: '#63ca18'}}>Hebreos 13:4:</strong>, <strong style={{color: '#63ca18'}}>Apocalipsis 21:8:</strong> y <strong style={{color: '#63ca18'}}>Apocalipsis 22:15:</strong> se refieran al pecado de la homosexualidad. En los cuatro casos citados, los fornicarios sufrirán bajo la ira feroz del Todopoderoso debido a su inmoralidad sexual.
                    </div>
                    <div>
                        <strong style={{color: '#04acfc'}}>Encuentra la solución en volver a nacer.</strong>
                    </div>                    
                </div>   
                <Counter />                
                <Footer />
            </div>
        </div>
    );
}