import React from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import '../styles/videos.css';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import Counter from "../components/counter/Counter.jsx";

export default function ElAbuso() {
    return(
        <div className="Home">
            <Star />            
            <div className="page-container">    
                <PrimalNav />            
                <Nav />
                <div className="video-contenedor-articulos">
                    <VideoSyntax url={'https://www.youtube.com/embed/2Oa_nq9c7Yg?si=iBgvWzKdvgck6H37'} />
                    <VideoSyntax url={'https://www.youtube.com/embed/UKu0XIhun78?si=1vvooPfADMTc_txl'}/>
                    <VideoSyntax url={'https://www.youtube.com/embed/pUgGAYAv64Q?si=lDRcINMv1JHjZ6Yr'}/>
                </div>
                <div className="content-page-armadura">
                    <div className="content-home" style={{margin:'auto', justifyContent: 'center'}}>
                        <h3 style={{fontSize: '1em', color: '#b57917'}}><LetrasGlobo texto={`ATAQUE A LOS NIÑOS CON EL ABUSO SEGUN LA BIBLIA`}/></h3>
                    </div>
                    <div>
                        «Se reportan más de 80,000 casos al año de abuso sexual a los niños/niñas, pero el número de casos que no se reporta es aún mayor, ya que los niños tienen miedo de decirle a alguien lo que les pasó y el proceso legal para validar un episodio es difícil. El problema debe de ser identificado, debe de ponerse fin al abuso y el niño debe de recibir ayuda profesional. El daño emocional y sicológico a largo plazo debido al abuso sexual puede ser devastador para el niño.
                    </div>
                    <div>
                        El abuso sexual a los niños puede ocurrir en la familia, a manos de un padre/madre, un padrastro, hermano u otro pariente; o fuera de la casa, por ejemplo, por un amigo, un vecino, la persona que lo cuida, un maestro o un desconocido. Cuando el abuso sexual ha ocurrido, el niño puede desarrollar una variedad de sentimientos, pensamientos y comportamientos…angustiantes.
                    </div>
                    <div>
                        No hay niño preparado sicológicamente para hacerle frente al estímulo sexual repetitivo. Aun los niños de dos o tres años que no pueden saber que la actividad sexual es incorrecta, desarrollarán problemas como resultado de su inhabilidad.
                    </div>
                    <div>
                        Para hacerle frente a la sobre – estimulación. El niño de cinco años o más que conoce y aprecia al que lo abusa se siente atrapado entre el afecto y la lealtad que siente hacia esa persona y la sensación de que las actividades sexuales son terriblemente malas. Si el niño trata de romper con las relaciones sexuales, el que lo abusa puede amenazarlo mediante la violencia o negándole su afecto. Cuando los abusos sexuales ocurren en la familia, el niño puede tenerle miedo a la ira, los celos o la vergüenza de otros miembros de la familia, o quizás puede temer que la familia se desintegre si se descubre el secreto.
                    </div>
                    <div>
                        Los niños deben estar seguros que sus Padres le van a creer que un familiar o vecino los está o trato de abusarlo y que nunca los aran quedar en ridículo , esa confianza deben de ganarla los Padre orando por ellos cuando salgan a las guardería colegio, al futbol ya cualquier actividad.
                    </div>
                    <div>
                        Muchas veces en el niño no hay señales físicas de abuso sexual. Algunas señales sólo pueden ser reconocidas mediante un examen físico por un médico. Los niños abusados sexualmente pueden desarrollar lo siguiente:
                    </div>
                    <div>
                        &#8226;Interés poco usual en, o el evitar, todo lo de naturaleza sexual<br />
                        &#8226;Problemas con el dormir o pesadillas<br />
                        &#8226;Depresión o aislamiento de sus amigos y familia<br />
                        &#8226;Comportamiento seductor<br />
                        &#8226;Decir que tienen el cuerpo sucio o dañado, o tener miedo de que haya algo malo en sus genitales<br />
                        &#8226;Negarse a ir a la escuela<br />
                        &#8226;Delincuencia/problemas de conducta<br />
                        &#8226;Secretividad<br />
                        &#8226;Evidencia de abusos o molestias sexuales en sus dibujos, juegos o fantasías<br />
                        &#8226;Agresividad poco común<br />
                        &#8226;Comportamiento suicida<br />
                        Los que abusan sexualmente de los niños pueden hacer que el niño se muestre extremadamente temeroso de revelar las acciones del agresor y, sólo cuando se ha hecho un esfuerzo para ayudarlo a sentirse seguro, puede el niño hablar libremente. Si un niño/niña dice que ha sido molestado sexualmente, los padres deben tratar de mantenerse calmados y hacerle sentir que lo sucedido no fue culpa suya. Los padres deben de llevar al niño para que le hagan un examen médico y una consulta siquiátrica.
                    </div>
                    <div>
                        Los padres pueden impedir o disminuir la oportunidad del abuso sexual:  
                    </div>
                    <div>
                        &#8226; Diciéndole a los niños: si alguien trata de tocarte el cuerpo y de hacerte cosas que te hacen sentir raro, dile que NO a la persona y ven a contármelo enseguida
                    </div>
                    <div>
                        &#8226; Enseñándole a los niños que el respeto a los mayores no quiere decir que tienen que obedecer ciegamente a los adultos y a las figuras de autoridad; por ejemplo, no les diga: siempre tienes que hacer todo lo que la maestra o el que te cuida te mande a hacer»
                    </div>
                    <div>
                        (Tomado de «https://www.aacap.org/»)
                    </div>
                    <div>
                        Dios puede sanar cualquier abuso, si les enseñamos la verdad al Niño, para que le perdonen al abusador y oren por el para que Dios lo rearguya y les de sabiduría para denunciarlo
                    </div>
                    <div>                    
                        La fundación está dispuesta ayudarle sin ánimo de lucro a los que tengan problemas con el abuso
                    </div>
                    <div>
                        Con El Proyecto “Jardín De Amor “en la casa hogar campestre en el llano de ovejas, descubrimos que acercando a las niñas a Jesús De Nazaret , fueron las mejores estudiantes en la Institución educativa La Unión . Las cartas que lo corroboran están alojadas en: Investíganos; IE la Unión 2009 –IE La Unión 2010
                    </div>
                    <div>
                        El mismo JESUS lo recomendó en <strong style={{color: '#63ca18'}}>Mateo 19:14:</strong> Entonces Jesús dijo: —Dejen que los niños vengan a mí, y no se lo impidan, porque el reino de los cielos es de quienes son como ellos.
                    </div>
                    <div>
                        Gracias a Dios El ICBF nos puso condiciones imposibles para seguir con la casa hogar y la cerramos, cambiamos los estatutos, y nos dedicamos a trabajar en las guarderías preescolares y colegios, y cambiamos los estatutos.
                    </div>
                    <div>
                        Si una familia permanece unida a Jesús como dice en JUAN 15 es protegida porque el Espíritu de JESUS permanece unido a esta familia.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Lucas 4:10:</strong> pues escrito está: «A SUS ANGELES TE ENCOMENDARA PARA QUE TE GUARDEN»,
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Mateo 18:10:</strong> Mirad que no despreciéis a uno de estos pequeñitos, porque os digo que sus ángeles en los cielos contemplan siempre el rostro de mi Padre que está en los cielos.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Salmos 91:1:</strong> El que habita al abrigo del Altísimo morará a la sombra del Omnipotente.
                    </div>
                    <div>
                        Concluyo que los pederastas con el solo hecho de estar cerca a los niños, los apasionan, ellos están camuflados en los colegios y guarderías, en los parques,
                    </div>
                    <div>
                        La única forma de prevenir es nunca dejar los niños con nadie, y enseñarles que existen hombres buenos que los respetan y hombres malos que los engañan para hacerles daño, hombres y adolescentes que desobedecen a Dios.
                    </div>
                    <div>
                        Explicarles que hay muchas caricaturas con antivalores, los acudientes pueden mirar cuales son en el link: “SIN MORAL CIVICA LA SOCIEDAD PERECE”
                    </div>
                    <div>
                        Dios No está de acuerdo con la inmoralidad y tiene la solución para los que reciben a Cristo, esta En <strong style={{color: '#63ca18'}}>1 Corintios 6:9-11:</strong> ¿O no sabéis que los injustos no heredarán el reino de Dios? No os dejéis engañar: ni los inmorales, ni los idólatras, ni los adúlteros, ni los afeminados, ni los homosexuales, (pederastas) ni los ladrones, ni los avaros, ni los borrachos, ni los difamadores, ni los estafadores heredarán el reino de Dios. Y esto erais algunos de vosotros; pero fuisteis lavados, pero fuisteis santificados, pero fuisteis justificados en el nombre del Señor Jesucristo y en el Espíritu de nuestro Dios. (Es espíritu de Dios a mí me transformo) que les posa a los que no creen?
                    </div>
                    <div>
                        Ya viene lo peor para los niños los están adoctrinando para que crean que es normal el homosexualismo y lesbianismo, hay que explicarles y mostrarles que Dios creo el Hombre y la Mujer a su imagen y semejanza, para que poblaran la tierra, explicarles que dos hombre o dos mujeres no pueden tener hijos, que todos los animales aves peses insectos, son macho y hembra para poder tener hijos. Mostrarles las familias de animales que encuentras en animal planet en YOUTUBE.
                    </div>
                    <div>
                        Los Niños y Niñas tienen el derecho de ser protegidos de todo abuso sexual, visual, maltrato, con antivalores, pornografía Infantil, caricaturas y la imposición y adoctrinamiento invasivo de la bandera con el arco iris , para lograr que crean que es normal besarse con un compañero , como lo he visto personalmente en una guardería de San Javier.
                    </div>
                    <div>
                        Yo personalmente investigue cuando la Fundación rescato del ICBF una parejita de Hermanitos y averiguando encontré que hay muchas solicitudes hermanitos para ser adoptados por parejas igualitaria. Esto es abuso, un niño tiene el derecho de tener un Padre y una Madre, dos ejemplos diferentes, dos formas de Amarlos. Que le contestara un niño a sus amigos, cuando le pregunten por matoneo: ¿ cuál de los dos es tu Papa?
                    </div>
                    <div>
                        El solo hecho de tener dos papas o dos mamas es un abuso y el niño que es víctima de abuso sexual prolongado, generalmente desarrolla una pérdida de autoestima, tiene la sensación de que no vale nada y adquiere una perspectiva anormal de la sexualidad. El niño puede volverse muy retraído, perder la confianza en todos los adultos y puede llegar a considerar el suicidio.
                    </div>
                    <div>
                        Las niñas que se suicidan Despojadas de toda oportunidad de tener una infancia, educación y libertad, las niñas obligadas a casarse por decreto de sus padres o familiares se enfrentan a un futuro repleto de abusos y oscuridad, ante el cual, muchas veces, la muerte parece una mejor opción.
                    </div>
                    <div>
                        Uno de los casos más recientes y sonados alrededor del mundo fue el de la niña huérfana de Teherán a quien obligaron a casarse con un hombre 14 años otorgó en la vida: la elección de permanecer o desvanecerse, eligió la última opción. Tomó el chador de su abuela (velo islámico), se lo puso alrededor del cuello y se ahorco.
                    </div>
                    <div>
                        La Fundación Volver A Nacer ya demostró con la transformación de las Niñas de hogares disfuncionales de Ni quitao por San Diego; niñas en alto riesgo del abuso de 2 a 5 años, que tenían hermanitas de doce años en adelante siendo explotadas sexualmente por sus mismas Madres y abuelas las cuales les daban sacol para que no se vomitaran con su labor, cuando su Abuela las montaban a los carros.
                    </div>
                    <div>
                        5 pasos de la oración.” Para ser protegidos del Maligno Jesús enseño.
                    </div>
                    <div>
                        1º darle gracias al Padre Celestial a nuestro Creador, Santo que nos hizo a su imagen y semejanza. (Los malos son los que se revelan)
                    </div>
                    <div>
                        2º pedirle que venga a gobernar la tierra lo más pronto
                    </div>
                    <div>
                        3º pedirle poder entender su Palabra y darle gracias por los alimentos
                    </div>
                    <div>
                        4º Perdonar a los Malos para que EL nos perdone
                    </div>
                    <div>
                        5 º Pedirle que nos libre de las tentaciones y del Maligno nos engaña.
                    </div>
                    <div>
                        Jesús dijo en <strong style={{color: '#63ca18'}}>Mateo 6:9:</strong> Ustedes deben orar así: 1º»“Padre nuestro que estás en el cielo, santificado sea tunombre.
                    </div>
                    <div>
                        2ª Venga tu reino. Hágase tu voluntad en la tierra, así como se hace en elcielo.3º Danos hoy el pan que necesitamos. 4º Perdónanos el mal que hemos hecho, así como nosotros hemos perdonado a los que nos han hecho mal. 5º <strong style={{color: 'red'}}>No nos expongas a la tentación, sino líbranos del maligno.</strong>” ( A continuación demostramos con versículos que satanás es real y engaña confunde y dirige la mentes de los que no agradan a Dios.)
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> 2 Corintios 4:3:</strong> Y si el evangelio que anunciamos está como <strong style={{color: 'red'}}>cubierto por un velo, lo está solamente para los que se pierden.</strong> 4 Pues como ellos no creen, <strong style={{color: 'red'}}>el dios de este mundo</strong> los ha hecho ciegos de entendimiento, para que no vean la brillante luz del evangelio del Cristo glorioso, imagen viva de Dios.
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> 2 Corintios 3:14:</strong> Pero ellos se negaron a entender esto, y todavía ahora, cuando leen la antigua alianza, ese mismo velo les impide entender, pues no les ha sido quitado, <strong style={{color: '#04acfc'}}>porque solamente se quita por medio de Cristo.</strong> (Ora para que su Espíritu viva en ti)
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Lucas 4:5:</strong> <strong style={{color: 'red'}}>Luego el diablo lo levantó</strong> y, mostrándole en un momento todos los países del mundo, 6 le dijo:—Yo te daré todo este poder y la grandeza de estos países. Porque yo lo he recibido, y se lo daré al que quiera dárselo. (Esto demuestra que todos caemos en pecado y tenemos que unirnos a Cristo para vencerlo)
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> 1 Pedro 5:8:</strong> Sean prudentes y manténganse despiertos, porque <strong style={{color: 'red'}}>su enemigo el diablo</strong>, como un león rugiente, anda buscando a quien devorar. ( y no pueden entender que es real)
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Juan 13:2-4:</strong> <strong style={{color: 'red'}}>El diablo ya había metido en el corazón</strong> de Judas, hijo de Simón Iscariote, con la idea de traicionar a Jesús.
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Lucas 22:3:</strong> <strong style={{color: 'red'}}>Entonces Satanás entró en Judas,</strong> uno de los doce discípulos, al que llamaban Iscariote. 4 Éste fue a ver a los jefes de los Sacerdotes  5 Ellos se alegraron y prometieron darle dinero a Judas.
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Juan 14:30:</strong> »Ya no hablaré mucho con ustedes, porque <strong style={{color: 'red'}}>viene el que manda en este mundo.</strong> Aunque no tiene ningún poder sobre mí, 31 así tiene que ser, para que el mundo sepa que yo amo al Padre y que hago lo que él me ha mandado. »Levántense. Vámonos de aquí
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Juan 8:42:</strong> <strong style={{color: '#04acfc'}}>Jesús les contestó:</strong> —Si de veras Dios fuera su padre, ustedes me amarían, porque yo vengo de Dios y aquí estoy. No he venido por mi propia cuenta, sino que Dios me ha enviado. 43 ¿Por qué no pueden entender ustedes mi mensaje? Pues simplemente porque no pueden escuchar mi palabra. 44 <strong style={{color: 'red'}}>El padre de ustedes es el diablo;</strong> ustedes le pertenecen, y tratan de hacer lo que él quiere. El diablo ha sido un asesino desde el principio. No se mantiene en la verdad, y nunca dice la verdad. Cuando dice mentiras, habla como lo que es; porque es mentiroso y es el padre de la mentira. 45 Pero como yo digo la verdad, ustedes no me creen. (Esto no lo enseñan en los colegios).
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Lucas 8:2:</strong> como también algunas mujeres que él había curado de espíritus malignos y enfermedades. Entre ellas iba María, la llamada Magdalena, <strong style={{color: 'red'}}>de la que habían salido siete demonios.</strong>
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Mateo 12:45:</strong> Entonces va y reúne otros siete espíritus peores que él, y <strong style={{color: 'red'}}>todos juntos se meten a vivir en aquel hombre,</strong> que al final queda peor que al principio. Eso mismo le va a suceder a esta gente malvada (pedófilos y todos los que practican el pecado).
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Lucas 22:31-33:</strong> Jesús anuncia que Pedro lo negará 31 Dijo también el Señor:—Simón, Simón, <strong style={{color: 'red'}}>mira que Satanás los ha pedido a ustedes para sacudirlos como si fueran trigo;</strong> 32 pero yo he rogado por ti, para que no te falte la fe. Y tú, cuando te hayas vuelto a mí, ayuda a tus hermanos a permanecer firmes.
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Lucas 10:17:</strong> Los setenta y dos regresaron muy contentos, diciendo:—¡Señor, <strong style={{color: 'red'}}>hasta los demonios nos obedecen</strong> en tu nombre! 18 Jesús les dijo: – <strong style={{color: 'red'}}>Sí, pues yo vi que Satanás caía del cielo como un rayo.</strong> 19 Yo les he dado poder a ustedes para caminar sobre serpientes y alacranes, y para vencer toda la fuerza del enemigo, sin sufrir ningún daño.
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> 2 Corintios 11:13:</strong> pues no son más que falsos apóstoles y engañadores que se disfrazan de apóstoles de Cristo. 14 Y esto no es nada raro, <strong style={{color: 'red'}}>ya que Satanás mismo se disfraza de ángel de luz;</strong> 15 por eso resulta muy natural que sus servidores pretendan aparecer como defensores de la justicia. ¡Pero habrán de terminar como sus hechos merecen!
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Mateo 16:23:</strong> Pero Jesús se volvió y le dijo a Pedro:—<strong style={{color: 'red'}}>¡Apártate de mí, Satanás, pues eres un tropiezo para mí!</strong> Tú no ves las cosas como las ve Dios, sino como las ven los hombres.
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Mateo 4:10:</strong> Jesús le contestó: <strong style={{color: 'red'}}>—Vete, Satanás,</strong> porque la Escritura dice: “Adora al Señor tu Dios, y sírvele sólo a él.”
                    </div>
                    <div>
                        Jesucristo demostró que satanás es real y es el que manda el mundo de los pecadores y que la única solución es recibir a Jesús para que gobierne con su Espíritu nuestra mente para vencer a satanás unidos a Jesús como esta muy claro en Juan 15 , Estúdienlo.
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> 1 Timoteo 2:5:</strong> Porque no hay más que un Dios, y un solo <strong style={{color: '#04acfc'}}>hombre que sea el mediador entre Dios y los hombres:</strong> Cristo Jesús. 6 Porque él se entregó a la muerte como rescate por la salvación de todos y como testimonio dado por él a su debido tiempo.
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Efesios 2:</strong> Antes <strong style={{color: 'red'}}>ustedes estaban muertos</strong> a causa de las maldades y pecados 2 en que vivían, pues seguían los criterios de este mundo y <strong style={{color: 'red'}}>hacían la voluntad de aquel espíritu que domina en el aire</strong> y que anima a los que desobedecen a Dios. 3 De esa manera vivíamos también todos nosotros en otro tiempo, siguiendo nuestros <strong style={{color: 'red'}}>malos deseos</strong> y cumpliendo los caprichos de nuestra naturaleza pecadora y de nuestros pensamientos. A causa de eso, merecíamos con toda razón el terrible castigo de Dios, igual que los demás. 4 Pero Dios es tan misericordioso y nos amó con un amor tan grande, 5 <strong style={{color: '#04acfc'}}>que nos dio vida juntamente con Cristo cuando todavía estábamos muertos a causa de nuestros pecados.</strong> Por la bondad de Dios han recibido ustedes la salvación. 6 Y en unión con Cristo Jesús nos resucitó, y nos hizo sentar con él en el cielo. 7 Hizo esto para demostrar en los tiempos futuros su generosidad y su bondad para con nosotros en Cristo.
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Romanos 8:9:</strong> Pero ustedes ya no viven según esas inclinaciones, sino según el Espíritu, puesto que el Espíritu de Dios vive en ustedes. <strong style={{color: '#04acfc'}}>El que no tiene el Espíritu de Cristo, no es de Cristo.</strong>
                    </div>
                    <div>
                        <strong style={{color: '#fbbf62'}}>Dios Habla Hoy</strong><strong style={{color: '#63ca18'}}> Romanos 8:11:</strong> <strong style={{color: '#04acfc'}}>Y si el Espíritu de aquel que resucitó a Jesús vive en ustedes,</strong> el mismo que resucitó a Cristo dará nueva vida a sus cuerpos mortales por medio del Espíritu de Dios que vive en ustedes. ( Somos dirigidos por El Espíritu DE CRISTO o por el diablo).
                    </div>
                    <div>
                        ¿PORQUE se están encubando tanto abusador, pederasta, fornicario, asesinos, ladrones , corruptos, inmundos sexuales, guerrilleros , vándalos, etc.
                    </div>
                    <div>
                        Porque ira de Dios se revelo desde los cielos por haber ocultado con injusticia la verdad desde nuestra niñez, y nunca nos enseñaron el significado del Padre nuestro; líbranos del maligno, ni que el diablo utiliza a los malos para hacernos daño, ni que Dios se manifestó con su HIJO JEUCRISTO que vino anunciar el Reino de los cielos, premio para los que le reciben para poder vencer las tentaciones.
                    </div>
                    <div>
                        Solo celebramos a la Navidad con el papa Noé y la semana Santa
                    </div>
                    <div>
                        No lo glorificamos como Dios ni le dimos las gracias todos los días .Su HIJO JESUSUCRISTO nos enseñó a orar: Padre nuestro que estas en los cielos, no en las imágenes que fue lo que me enseñaron, y por eso dice la Palabra que nuestro necio corazón fue entenebrecido, y nos entregó a la inmundicia y deshonramos nuestros cuerpos, yo termine adicto a la inmundicia con muchas amigas lesbianas, no tenía que pagarles, lo planeaba todos los días, nunca le hice daño a una niña, no sé qué demonios son los que tientan los abusadores.
                    </div>
                    <div>
                        LOS ABUSADORES dice la Biblia: dirigidos por el espíritu que domina los aires.
                    </div>
                    <div>
                        Un vendedor de revistas pornográficas en 1980 me comento que los mejores clientes eran los Sacerdotes. Es lógico yo desde niño quería verlas pero no existían en 1958. Lo que más encuba los abusadores es la pornografía infantil.
                    </div>
                    <div>
                        Cuando Yo terminé adicto a las orgias con lesbianas, descubrí que la adición es practicar el pecado y Jesús dijo que el que practica el pecado es del diablo.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Efesios 2:</strong> Antes ustedes estaban muertos a causa de las maldades y pecados 2 en que vivían, pues seguían los criterios de este mundo y <strong style={{color: 'red'}}>hacían la voluntad de aquel espíritu que domina en el aire y que anima a los que desobedecen a Dios.</strong> Nota aquí están los abusadores de niños; Antes ustedes estaban muertos (YO).
                    </div>
                    <div>
                        Realmente Dios nos dio la mano cuando le arrendamos hace un año a NEUROSPOR que trabaja con los niños por medio de las EPS.
                    </div>                    
                </div> 
                <Counter />                  
                <Footer />
            </div>
        </div>
    );
}