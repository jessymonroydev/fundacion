import React, { useState } from "react";
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import Counter from '../components/counter/Counter2.jsx';
import JardinPdf from '../pdf/x/IE-la-union-2009.pdf';
import '../styles/historia.css';
import '../styles/videos.css';

export default function UnaNinez() {
    return(
        <div className="Home">
            <Star />
            <div className="page-container">    
                <PrimalNav />            
                <Nav />
                <div className="content-page-armadura">
                    <div>
                        <div className="video-contenedor-articulos">
                            <VideoSyntax url={'https://www.youtube.com/embed/aCn22q1DXKA?si=RZKy4qehBaQr4fAa'} />
                            <VideoSyntax url={'https://www.youtube.com/embed/bvvhpbwTr1o?si=xSNNX4F8biEZ5chi'}/>
                        </div>
                        <div>Video Explicativo del proyecto. Descubre cómo prevenir el abuso al darles fortalezas y valores bíblicos  a los niños para que no pierdan su identidad.</div>
                    </div>
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`Proyecto UNA NIÑEZ CON EL PROPOSITO DE DIOS. 1º-2º y 3º Grado`}/>
                    </div>
                    <div>
                        Para que los niños y niñas puedan tener una mirada y un pensamiento distinto al promovido por las redes sociales, los programas de televisión con cantidad de antivalores que se vuelven normales, debemos romper filas entre directivos docentes maestros y Padres de familia, porque la única forma de prevenir es brindándoles la verdad de la verdad del REINO DE LOS CIELOS que menciona la palabra de DIOS.
                    </div>
                    <div>
                        Nosotros tenemos en cuenta las recomendaciones que Dios dejo para acercarlos a JESUS DE NAZARET EN Mateo 19:13-15 Jesús bendice a los niños 13 Llevaron unos niños a Jesús, para que pusiera sobre ellos las manos y orara por ellos; pero los discípulos comenzaron a reprender a quienes los llevaban. 14 entonces Jesús dijo: —Dejen que los niños vengan a mí, y no se lo impidan, porque el reino de los cielos es de quienes son como ellos. 15 Puso las manos sobre los niños, y se fue de aquel lugar.
                    </div>
                    <div>
                        2 Timoteo 3:16 Toda Escritura está inspirada por Dios y es útil para enseñar y reprender, para corregir y educar en una vida de rectitud, 17 para que el hombre de Dios esté capacitado y completamente preparado para hacer toda clase de bien.
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 'auto', width: '100%'}}>
                        <div style={{marginRight: '12px'}}>
                            1.
                        </div>
                        <div style={{width: '90%'}}>
                            Una Revista de hermosas caricaturas de 28 páginas a todo color, explicando cómo distinguir lo bueno y lo malo, con estrategias didácticas desde la creación a través de actividades.
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 'auto', width: '100%'}}>
                        <div style={{marginRight: '12px'}}>
                            2.
                        </div>
                        <div style={{width: '90%'}}>
                            Folleto «Cómo Ayudar a los Hijos», material que puedes compartir fácilmente.
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 'auto', width: '100%'}}>
                        <div style={{marginRight: '12px'}}>
                            3.
                        </div>
                        <div style={{width: '90%'}}>
                            44 video-Caricaturas “Una niñez con el Propósito de Dios”, con las mejores Historias Bíblicas y sin interrupciones de publicidad que además, se pueden compartir.
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 'auto', width: '100%'}}>
                        <div style={{marginRight: '12px'}}>
                            4.
                        </div>
                        <div style={{width: '90%'}}>
                            12 videos de “Pablito el Misionero” el cual aconseja a los niños para que sean constructores de paz, ideales para compartir.
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 'auto', width: '100%'}}>
                        <div style={{marginRight: '12px'}}>
                            5.
                        </div>
                        <div style={{width: '90%'}}>
                            86 video-caricaturas increíbles del “Super Libro”; donde un niño y una niña del año 3000 son acompañados por un robot al pasado y hacen parte de la historia.  El robot les explica donde llegaron, la fecha del evento Bíblico y muchos datos interesantes, desde la Creación del universo, hasta encuentros con grandes personajes de la biblia. Disfruta y comparte sin interrupciones.
                        </div>
                    </div>
                    <div>
                        En la barra negra encontrarás “contenido” “Escuela de Padres” “Madres triunfadoras” enfoque a los familia”  “Como Educar”, “Folletos”, “Periódicos”, “Concursos».
                    </div>
                    <div>
                        CONTENIDO Ponemos el cursor en la barra negra encima de “contenido”,  y sale  Biblia y ponemos el cursor encima y sale una  maravillosa   Biblia Infantil con 16 videos desde la creación, con  hermosas caricaturas donde les enseñan las mejores historias Bíblicas para su edad.
                    </div>
                    <div>
                        Ponemos el cursor encima de juegos de super libro dar clic  y salen 28 juegos  bíblicos con valores
                    </div>
                    <div>
                        Ponemos el encima de material didáctico   para imprimir, tiene: 1º versículos para colorear y memorizar, 2ºcolorea el reino de los cielos, 3ºcolorear las familias humanas y del reino animal, Cartelera para el día del niño, 6º carteleras sobre los valores para  sala de profesores o patio, carteleras con caricaturas con valores para los patios 7º imágenes sobre la armadura de Dios para memorizar recortar.
                    </div>
                    <div>
                        Para Las Madres y Acudientes tenemos alojadas En la barra negra hay:
                    </div>
                    <div>
                        57 conferencias “Escuelade Padres”. Como: 002 El pecado de la herencia .009 El modelo de un Padre. 019 la Hija savia o la Hija necia. 011 la Hija sexual o Moral 018 drogas sexo alcohol.
                    </div>
                    <div>
                        52 conferencias para “Madres triunfadoras “Como: 001 Las mujeres y la tensión.003 Disfruta de ser Mama. 031 Como hacer que mi pareja cambie. 043 errores de las Mujeres. 039 asesinos del matrimonio. 052 previniendo el homosexualismo.
                    </div>                    
                    <div>
                        20 conferencias“Enfoque a la Familias” con el Doctor James Dobson Como.  02 controles sin gritos.
                    </div>
                    <div>
                        007 seis principios para la diciplina. 008 niños de carácter dócil, Los que corren más peligró.
                    </div>
                    <div>
                        44 conferencias “Como Educar” Como: 04 Proteja su Hogar 09 Como orar por lo Hijos. 12 cómo criar Hijos Sabios. 16 Como tener paciencia. 23 se necesita a Dios para un Hogar? 33 nuevo Nacimiento.
                    </div>
                    <div>
                        Ponemos el cursor encima de folletos; encontramos 6 folletos, todos muy importante.
                    </div>
                    <div>
                        Escribí El folleto “La Armadura de Dios “ porque estudiando la Biblia  Católica Dios Habla Hoy, descubrí que cada adición es una posesión demoniaca, que solo  puedes controlar al Volver a Nacer, nombre que le puse a la  Fundación y esto solo se logra al arrepentirse, perdonar y recibir el Espíritu de CRISTO para permanecer unido a EL, y pedirle ayuda cuando peques involuntariamente.
                    </div>                    
                    <div>
                        Si a propósito buscas el pecado: “NO HAS VUELTO A NACER”.
                    </div>
                    <div>
                        La mayoría de los femicidios son causados por: El demonio que yo llamo celos, y otro que se llama desconfianza “en los hombres que han sido sinvergüenzas y adictos al sexo como yo, es la depresión más horrible que he sentido, y todavía lucho con este demonio, es el único que no he podido derrotar por completo, si mi señora no me contesta el teléfono por un tiempo, me ataca en la mente con pensamientos que no tienen que ver con la realidad.
                    </div>
                    <div>
                        Por esta razón tenemos que tener puesta todos los días la “ARMADURA DE DIOS”  son 7 elementos que hay que practicar diario unidos a CRISTO como dice en JUAN 15, consejería gratuita en el, Wasap  301 411 76 99.
                    </div>
                    <div>
                        Los Padres deben de enseñarle a sus hijos desde los 9 años el Folleto  de la prevención, que es la mejor alternativa; El Niño o Joven que pruebe la nueva mariguana que sacaron,  un 80 % quedan cautivados, encantados.
                    </div>
                    <div>
                        Damos Clic en la casi sita y salen.
                    </div>
                    <div>
                        “Estudios Bíblicos sobre el abuso “damos clic   y sale cuatro videos en la parte de arriba. como :   “ Prevención del maltrato infantil – Como hablar con los niños de esta generación, sobre la sexualidad infantil, consecuencias del  abuso Físico  y Psicológico infantil, abuso sexual enla infancia y adolescencia,  Nota : Yo como a los 12 años fui abuzado por un vecino y miren las consecuencias, termine con 26 años de drogadicción y adiciones a la inmundicia sexual, un violador es dirigido por satanás y contamina los niños con Espíritus inmundos, por esta razón desde niño  se me venían ideas malas, como, siempre salir solo no tenía amigos, salía a quebrar bombillos con ganzúas, con un amigo por la noche salía en bicicleta que me gane jugando YOYO a quebrar vidrios por noche, en un lote cerca a mi casa al caminito le hacia un hueco y le ponía palitos con pasto . me escondía, para ver como la gente caía, Hera un vándalo sin razón, le robe a Mi MADRE,son mucha cosas más que no me atrevo a contar por mis Hijos. 
                    </div>
                    <div>
                        Nunca fui capaz de contar que me abusaron,  lo conté este año 2022, lo hice después de 60 años, tengo 72  es muy importante  que lean y estudien,lo que sale  en  Prevenir el Abuso con el fin de que  puedan identificar,cuando un niño es abusado.
                    </div>
                    <div>
                        Nos devolvemos a la casita 8 (dibujo ) le damos clik y sale el ESTUDIO BIBLICOS SOBRE EL ABUSO, al lado derecho ponemos el cursor sobre la  imagen de dos niños donde dice:  “ videos para prevenir el abuso “, dar clic   y salen 16 videos super  importantes que debes de compartir por  medio del celular a Profesores, rectores a tus amigas, de acuerdo a la  necesidad.
                    </div>
                    <div>
                        Ponemos el cursor en la casita ( dibujo) damos chic y sale  ESTUDIO BIBLICO SOBRE EL VERDADERO MOR,Le damos chic encima de la explicación salen arriba 4 videos donde JESUCRISTO  lo enseña, en el mundo el AMOR DE HOY ES EL SEXO, yo lo conocí hasta que encontré una Amiga, no una amante. Un beso de ella en mi mejilla es la sensación más linda, se siente cuanto me quiere, ese AMOR pocos lo conocen, y llevamos  42 años de conocidos,  le toco sufrir mucho y todavía soy celoso, yo le digo que me ayude,  que me conteste rápido el teléfono.
                    </div>
                    <div>
                        Ponemos el cursor en la  imagen azul de la definición del AMOR y le damos  clik y salen  12 video  relacionados con : El verdadero Amor “ tengo una canción con este nombre, escúchala, está en el link concurso.
                    </div>                    
                    <div>
                        Ponemos el cursor en la (casita) y sale  ESTUDIO BIBLICO SOBRE EL REINO DE LOS CIELOS
                    </div>
                    <div>
                        Lee los 36 versículos más relevantes donde JESUCRISTO LO ANUNCIÓ.
                    </div>  
                    <div>
                        Este maravilloso PREMIO para los que nos arrepentimos, me motivo a dejar más de 7 adiciones que tenía, incluyendo la del amor al dinero y deje los  negocios de confecciones y monte la fundación desde 1997, todos los versículos sobre este tema fueron  enseñados  por JESUCRISTO, yo  se que estoy construyendo una súper mansión en el cielo y fuera de eso me gozo haciendo los negocios de mi NUEVO PADRE  que está en los cielos . 1 De Corintios   6:9-10 es más claro que  la Biblia católica, en la reina Valera no menciona nos afeminados y homosexuales,  dice sodomitas, yo Hera peor que cualquiera de ellos, por nosotros Cristo murió y en el link  ESTUDIO BIBLICO DEL NUEVO NACIMIENTO. Hay varios testimonios de transformaciones i de homosexuales lesbianas y Hombre que se cambiaron de sexo por hermosa mujer que se caso y fue rescatado por Cristo, como lo hiso con migo, nunca los podemos criticar, solo orar. Dios los espera que se arrepientan, esto es una posesión demoniaca,  yo lo viví.
                    </div>  
                    <div>
                        Yo pude vencer porque aprendí en la Biblia que nos  entrega a pasiones vergonzosa, yo fui adicto hacer orgias con mis amigas las lesbianas, esto quiere decir que fui entregado al  diablito para disfrutar  la inmundicia sexual, con  demasiados orgasmos y es muy difícil salir, es lo mismo que la basuca, la que yo llame el diablo en polvo.  No sé cómo Sali.
                    </div>  
                    <div>
                        Ponemos el cursor encima de la casita damos clic ESTUDIO BIBLICO SOBRE EL REINO DE LOS CIELOS y salen arriba cuatro videos  del super libro del REINO DE LOS CIELOS
                    </div>  
                    <div>
                        Damos clic en la casita y mano derecha encima de la imagen VIDEOS SOBRE EL REINO DE LOS CIELOS  damos clic y salen 12 video, donde JESUS lo anuncia.
                    </div>  
                    <div>
                        Ponemos el cursor enzima de la casita y bajamos a: ESTUDIO BNIBLICO SOBRE LA INMORALIDAD.
                    </div>  
                    <div>
                        Le damos clic sobre: sin moral cívica la comunidad perece y salen cuatro video historias, días a tratado de limpiar y empezar de nuevo, con el arca de Noé, Sodoma y Gomorra, Jonás y el Hijo prodigo.
                    </div>  
                    <div>
                        Damos clic en la casita y a mano derecha ponemos el cursor encima de videos sobre los anti valores y salen 8 videos donde JESUS  habla de este tema.
                    </div>  
                    <div>
                        Damos clic sobre la casita y bajamos al: ESTUDIO BÍBLICO SOBRE EL  MUNDO Y SUS TENDENCIA.
                    </div>  
                    <div>
                        Las que están logrando que la mayoría de los niños pierdan su identidad con cantidad de antivalores en la música caricaturas, redes sociales y encontramos en la parte de arriba 4 videos súper importantes con: 1º las escenas  homosexuales de Disney, 2º Niños que sean Iconos homosexuales. 3º Caricaturas prohibidas de orgullo gay 4º La verdad gay detrás de la música.
                    </div>  
                    <div>
                        Damos clic en la casita  y a mano derecha enzima de  la imagen de los dos niños tatuados y salen 12 videos, que promueven toda clase de antivalores, la maldad,  las consecuencias de los video juegos,  la verdad de los dibujos animados, disfrazados subliminalmente para que los Padres no detenten lo malo, un 80% aparenta ser bueno y un 20% tiene subliminales que los  niños no  pueden olvidar,  y muchas veces, tienen pesadillas y cambian su comportamiento por uno agresivo.
                    </div>    
                    <div>
                        Damos clic en la casita y sale el estudio de la Idolatría donde encontramos 12 versículos relacionados con el tema. Hasta que yo no saque las imágenes y cruces de mi casa y empresa no pude vencer,  porque era desobediente delante de DIOS, que lo advirtió.
                    </div>  
                    <div>
                        Damos clic en la casita en la casita  y bajamos al: ESTUDIO SOBRE  SATANAS damos clic  encima y salen arriba cuatro videos sobre este tema, Y ABAJO SALEN CANTIDAD DE VERCICULOS QUE CORROBORAN QUE ES REAL Y CREADO POR DIOS y lo  utiliza para probarnos para que los que sean salvos nunca le fallen en el cielo.
                    </div>  
                    <div>
                        Damos clic en la casita y a mano derecha encima de la Imagen de  JESUS  con Satanás damos clic y salen 10 videos de este tema y dos de mi conferencia: 1 º De quien eres Hijo  Y 2º DESCUBRE LA VERDAD OCULTA DEL HALOWEEN – Cesar Méndez El Bautista.
                    </div>  
                    <div>
                        Damos Crick en la casita y bajamos al ESTUDIO BIBLICO “El INFIERNO» damos clic y salen en la parte de arriba 4 videos relacionados con el tema y en la parte de abajo sale: Jesucristo predicador del  infierno con cantidad de versículos que lo demuestran que es real
                    </div>  
                    <div>
                        Damos clic en la casita y bajamos a la derecha a la imagen con videos sobre el  infierno, damos clic y salen 12 videos que demuestran que es Real.
                    </div>  
                    <div>
                        Doy click en casita y bajo y le doy clic sobre ESTUDIO BIBLICO “VOLVER A NACER”.
                    </div>  
                    <div>
                        Doy clik  y en la parte de arriba salen 4 videos relacionados con el tema y en la paste de abajo sale la explicación sustentada en versículos como “Volver A Nacer “ y la oración para que la compartas con tus familiares amigos y enemigos.
                    </div>                  
                    <div>
                        Nos devolvemos a la casita damos clic y bajamos a la  derecha y damos clic sobre la imagen “VIDEOS SOBRE NACER DE NUEVO”   Y salen varios videos relacionados con el tema y varios videos que demuestran que es nacer de nuevo :1º de  transexual a Pastor 2º Ex lesbiana y bruja transformada por Dios, 3º Cantante Cristiana  revela que lucho con su identidad sexual, 4º testimonio de Joyce Meyer abusada por su  Padre varios años, hoy Pastora.
                    </div>  
                </div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}