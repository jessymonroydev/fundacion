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

// import images
import foto1 from '../assets/jardin/9-ni±as-4-adultos-pepe-en-la-red-300x225.jpg';
import foto2 from '../assets/jardin/cambiar-nombre-300x225.jpg';
import foto3 from '../assets/jardin/cesar-tulio-y-las-ni±as-300x225.jpg';
import foto4 from '../assets/jardin/deisi-300x225.jpg';
import foto5 from '../assets/jardin/Fundacion-Volver-A-Nacer-3-300x225.jpg';
import foto6 from '../assets/jardin/Fundacion-Volver-A-Nacer-4-300x225.jpg';
import foto7 from '../assets/jardin/Fundacion-Volver-A-Nacer-10-225x300.jpg';
import foto8 from '../assets/jardin/Fundacion-Volver-A-Nacer-21-225x300.jpg';
import foto9 from '../assets/jardin/Fundacion-Volver-A-Nacer-22-300x225.jpg';
import foto10 from '../assets/jardin/Fundacion-Volver-A-Nacer-225x300.jpg';
import foto11 from '../assets/jardin/Paula-Andrea-300x225.jpg';
import foto12 from '../assets/jardin/tatiana-300x225.jpg';

export default function Jardin() {
    const [expandedRow, setExpandedRow] = useState(0); 
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    
    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };


    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    const Modal = ({ src, alt, caption, onClose }) => {
        return (
        <div className="modal" onClick={onClose}>
            <span className="close">&times;</span>
            <img className="modal-content" src={src} alt={alt} />
            {caption && <div className="caption">{caption}</div>}
        </div>
        );
    }

    const fotos = [        
        { className: 'image-memory-historia', src: foto1, alt: 'Images' },
        { className: 'image-memory-historia', src: foto2, alt: 'Images' },
        { className: 'image-memory-historia', src: foto3, alt: 'Images' },
        { className: 'image-memory-historia', src: foto4, alt: 'Images' },
        { className: 'image-memory-historia', src: foto5, alt: 'Images' },
        { className: 'image-memory-historia', src: foto6, alt: 'Images' },
        { className: 'image-memory-historia', src: foto7, alt: 'Images' },
        { className: 'image-memory-historia', src: foto8, alt: 'Images' },
        { className: 'image-memory-historia', src: foto9, alt: 'Images' },
        { className: 'image-memory-historia', src: foto10, alt: 'Images' },
        { className: 'image-memory-historia', src: foto11, alt: 'Images' },
        { className: 'image-memory-historia', src: foto12, alt: 'Images' },
    ];

    return(
        <div className="Home">
            <Star />
            <div className="page-container">    
                <PrimalNav />            
                <Nav />
                <div className="content-page-armadura">
                    <div>
                        <div className="video-contenedor-articulos">
                            <VideoSyntax url={'https://www.youtube.com/embed/v09wFK269hE?si=R3MvphZGjXNv0N-m'} />
                            <VideoSyntax url={'https://www.youtube.com/embed/uSIYtNIAjKI?si=CeOG0UEcpn1PQSqH'}/>
                        </div>
                        <div>El video explica el proyecto orientado hacia los niños del preescolar y jardín.  En la carta expedida por la INSTITUCIÓN  EDUCATIVA LA UNIÓN (Vereda El Yarumo) hace constar la evolución positiva que tuvieron  niñas que destacándose  por su excelente comportamiento  y rendimiento académico, vivencia de valores, responsabilidad y puntualidad, lo cual las acredita  como las mejores estudiantes del Nivel. Estas niñas llegaron  a la casa hogar procedentes del barrio Niquitao sector San Diego, quienes venían de condiciones de vulnerabilidad familiar delicada.  Las menores asignadas al cuidado de la fundación, además recibieron formación en valores Bíblicos orientados en el mandamiento del amor y permitiendo que se cumpla Mateo 19:14, en palabras del Maestro de maestros, Jesucristo.</div>
                        <div>
                        <iframe
                            src={JardinPdf}
                            title="PDF"
                            style={{ width: '100%', height: '100vh' }}
                        />
                        </div>
                    </div>
                    <div style={{margin:'auto', justifyContent: 'center'}}>
                        <LetrasGlobo texto={`El jardin con el amor de Dios: para guarderias y preescolares.`}/>
                    </div>
                    <div>
                        Nuestra Fundación determina que los niños de los 0 a los 6 años desarrollan los principios básicos con los cuales se regirán en la adolescencia y en la edad adulta, y de ellos dependerá su comportamiento   y su futuro saludable. Los niños se pueden programar con valores o antivalores o con los dos al mismo tiempo.
                    </div>
                    <div>
                        Los niños tienen el derecho de conocer la Maravillosa Creación de DIOS, la cual hizo con todo su AMOR y enseñarle desde niños:  todo lo que Dios creo para nuestro alimento y sustento y   la creación de todos los animales peses aves insectos machos y hembra para reproducirse, de los cuales muchos son para alimentarnos.
                    </div>
                    <div>
                        Enseñarles sobre la creación de todas las plantas frutas hortalizas, el aire, el agua el sol la luna, las estrellas y por último la familia que es lo más importante, Hombre y mujer para tener hijos para cuidarlos mejor que los hijos de los animales.
                    </div>
                    <div>
                        Enseñarle que el Hijo del que  creo todo y a nosotros  se llama  Jesús, el que nació en el pesebre murió  y resucito para demostrar que si es hijo de Dios y  para pagar los  pecados de los que luchan para no  pecar más ,y  ganarse el premio de vivir toda la eternidad en el cielo, enseñarles que  debemos invitar a JESUS A  vivir en nuestro corazón, para que nos enseñe AMAR y obedecer a los Padres y profesores y pedirle que nos, libre de las cosas malas que pensamos y que mande sus Ángeles para que nos libren de todo mal. EN La Biblia hay 10 versículos sobre la protección de los niños Lucas 4:10 pues escrito está: «A SUS ANGELES TE ENCOMENDARA PARA QUE TE GUARDEN».
                    </div>
                    <div>
                        Por esta razón la labor de la Fundación VOLVER A NACER TIENE EL PROYECTO:
                    </div>
                    <div>
                        “COLOMBIA VUELVE A NACER CON LA CULTURA DEL AMOR”.
                    </div>
                    <div>
                        El AMOR, que es el valor que cubre todos los valores y es fundamentando en los valores éticos, morales y espirituales que lograran incentivar a los niños a comportarse muy bien en todas partes.
                    </div>
                    <div>
                        Nuestro propósito es que los niños tengan todos los conocimientos y fortalezas necesarias para que en su adolescencia nunca caigan en las drogas ni hagan parte del conflicto social, y a si puedan identificar desde los 3 años que es bueno y que es malo.
                    </div>
                    <div>
                        Metodología Para este proyecto:
                    </div>
                    <div>
                        Para esto debemos unir fortalezas para que todas las guarderías y preescolares particulares y las públicas controladas por Buen Comienzo y por el ICBF y todas las Instituciones privadas de la educación, padres y acudientes, de los niños, se comprometan a implantar y compartir  esta «cultura del Amor”, del cual encontraran su explicación en el  video arriba “ EL Jardín con el Amor de DIOS “  esto solo se puede lograr si desde niños se   Cargan las Neuronas de los niños con : 48 video canciones que promueven los valores.   52 video canciones Historia Bíblicas, Pequeños Héroes. 40 video canciones Bíblicas. Pequeños Héroes, y con    video canciones  con versículos  para memorizar  y alojaremos muchos mas  y los vamos a premiar al memorizar , estos versículos Bíblicos serán las primeras palabras que mencionaran con su boca si sus Padres los  utilizan. ( nota  se repiten hasta cambiar por otro video) Esto ya está comprobado con las niñas de hogares disfuncionales que la fundación tuvo en la casa hogar y estudiaron en la Institución Educativa la UNION, patrocinadas por la FUNDACION  en la   casa hogar en la vereda el YARUMO en la  UNION , vía a  San Pedro de los milagros ; La carta y   los  videos con las entrevistas a  las niñas está alojados en funvolveranacer.org 
                    </div>
                    <div className="video-contenedor-articulos">
                        <VideoSyntax text={'Entrevista Chelsy  y Paula del AMOR'} url={'https://www.youtube.com/embed/XKbdpgOxWvg?si=aPGMIiGlmi0Pa5Ln'} />
                        <VideoSyntax text={'Canción del patito Juan'} url={'https://www.youtube.com/embed/Prnip0hdYe8?si=39kuJAyGbrrrXYLc'}/>
                        <VideoSyntax text={'Oración'} url={'https://www.youtube.com/embed/iAQNZmbFigI?si=ZUregEy8wPwvfX80'}/>
                        <VideoSyntax text={'Entrevista a María José'} url={'https://www.youtube.com/embed/nn87rk0xXKI?si=7SwV8eNvvWgywxGh'}/>
                    </div>
                    <div>
                        A estas niñas se memorizaron la preminencia del amor 1 Corintios 13 Biblia Dios Habla Hoy católica 13 Si hablo las lenguas de los hombres y aun de los ángeles, pero no tengo amor, no soy más que un metal que resuena o un platillo que hace ruido. 2 Y si tengo el don de profecía, y entiendo todos los designios secretos de Dios, y sé todas las cosas, y si tengo la fe necesaria para mover montañas, pero no tengo amor, no soy nada. 3 Y si reparto entre los pobres todo lo que poseo, y aun si entrego mi propio cuerpo para tener de qué enorgullecerme, pero no tengo amor, de nada me sirve. 4 tener amor es saber soportar; es ser bondadoso; es no tener envidia, ni ser presumido, ni orgulloso, 5 ni grosero, ni egoísta; es no enojarse ni guardar rencor; 6 es no alegrarse de las injusticias, sino de la verdad. 7 Tener amor es sufrirlo todo, creerlo todo, esperarlo todo, soportarlo todo.
                    </div>
                    <div> 
                    <div className="images-container image-wrap ">                   
                        {fotos.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />                                   
                            </div>
                        ))}
                        </div>
                        {modalOpen && (
                        <Modal
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            caption={selectedImage.alt}
                            onClose={closeModal}
                        />
                        )}
                    </div>
                    <div>
                        Todos los versículos, para proteger los Niños, son de la Biblia “Dios Habla Hoy».
                    </div>
                    <div>
                        En cualquier Biblia estos versículos enseñan lo mismo, investiga.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Mateo 19: 14:</strong> Entonces Jesús dijo: —Dejen que los niños vengan a MÍ, y no se lo impidan, porque el reino de los cielos es de quienes son como ellos.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>2 Timoteo 3: 16:</strong> Toda Escritura está inspirada por Dios y es útil para enseñar y reprender, para corregir y educar en una vida de rectitud, 17 para que el hombre de Dios esté capacitado y completamente preparado para hacer toda clase de bien.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Deuteronomio 11: 18:</strong> Grábense estas palabras en la mente y en el pensamiento; átenlas como señales en sus manos y en su frente.19 Instruyan a sus hijos hablándoles de ellas tanto en la casa como en el camino, y cuando se acuesten y cuando se levanten.
                    </div>                    
                    <div>
                        Acerca tus Hijos A JESUSCRISTO con <a href="www.fundacionvolveranacerkids.org">www.fundacionvolveranacerkids.org</a> la Biblia Infantil, juegos del Superlibro ,más para colorear, las familias Humanas y de animales; Recomendamos hacer una cartelera y colorear varios versículos y pegarlos en su habitación para memorizar .
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Salmos 91: 9:</strong> Ya que has hecho del Señor tu refugio, del Altísimo tu lugar de protección, 10 no te sobrevendrá ningún mal ni la enfermedad llegará a tu casa; 11 pues él mandará que sus ángeles te cuiden por dondequiera que vayas.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Éxodo 15: 26:</strong> Les dijo: «Si ponen ustedes toda su atención en lo que yo, el Señor su Dios, les digo, y si hacen lo que a mí me agrada, obedeciendo mis mandamientos y cumpliendo mis leyes, no les enviaré  las plagas que envié a los Egipcios. egipcios, pues yo soy el Señor, el que los sana a ustedes.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>1 Pedro 1: 5:</strong> Por la fe que ustedes tienen en Dios, él los protege con su poder para que alcancen la salvación que tiene preparada, la cual dará a conocer en los tiempos últimos.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Juan 1: 1-10:</strong> Aquel que es la Palabra estaba en el mundo; y, aunque Dios hizo el mundo por medio de él, los que son del mundo no lo reconocieron. 11 Vino a su propio mundo, pero los suyos no lo recibieron. 12 Pero a quienes lo recibieron y creyeron en él, les concedió el privilegio de llegar a ser hijos de Dios. 13 Y son hijos de Dios, no por la naturaleza ni los deseos humanos, sino porque DIOS  los ha engendrado. NOTA. JESUCRISTO  conoce las intenciones de los que le reciben.  </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Romanos 10: 9:</strong> Si con tu boca reconoces a Jesús como Señor, y con tu corazón crees que Dios lo resucitó, alcanzarás la salvación. 10 Pues con el corazón se cree para alcanzar la justicia, y con la boca se reconoce a Jesucristo para alcanzar la salvación. Los Padres deben de hacer la oración  para ser dirigidos por Dios para la educación de los  niños
                    </div>
                    <div>
                        Oración para recibir a JESUCRISTO. Bendito DIOS Y PADRE SANTO, reconozco  que mandaste a tu HIJO JESUCRISTO a morir en la cruz para pagar mis pecados de los que me arrepiento y me dispongo a dejarlos. Creo que resucito al tercer día. Recibo El Espíritu de CRISTO en mi corazón, para permanecer unido a Él y poder vencer el pecado, inscribe mi nombre en el libro de la vida; desde hoy te entrego todos los talentos para amarte a ti y a mi prójimo llevando este mensaje de SALVACION.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Romanos 8: 9:</strong> Pero ustedes ya no viven según esas inclinaciones, sino según el Espíritu, puesto que el Espíritu de Dios vive en ustedes. El que no tiene el Espíritu de Cristo, no es de Cristo.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Gálatas 5: 22:</strong> En cambio, lo que el Espíritu produce es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad, 23 humildad y dominio propio. Contra tales cosas no hay ley. Si cargas las neuronas de tus hijos con nuestro proyecto, rechazaran un cambio de identidad y las drogas.
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>1 Pedro 1: 5:</strong> que sois protegidos por el poder de Dios mediante la fe, para la salvación que está preparada para ser revelada en el último tiempo.
                    </div>                    
                    <div>
                        <strong style={{color: '#63ca18'}}>Lucas 4: 10:</strong>  pues escrito está: «A SUS ANGELES TE ENCOMENDARA PARA QUE TE GUARDEN»
                    </div>
                    <div>
                        <strong style={{color: '#63ca18'}}>Proverbios 14: 26:</strong> En el temor del SEÑOR hay confianza segura, y a los hijos dará refugio.
                    </div>                    
                </div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}