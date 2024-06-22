import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import FotoUno from "../assets/imgIndex/FotoUno.png";
import ElAmor from "../assets/imgIndex/ElAmor.jpg";
import ElInfierno from "../assets/imgIndex/ElInfierno.jpg";
import LaIdolatria from "../assets/imgIndex/LaIdolatria.jpg";
import LaInmoralidad from "../assets/imgIndex/LaInmoralidad.jpg";
import NacerDeNuevo from "../assets/imgIndex/NacerDeNuevo.jpg";
import PrevenirElAbuso from "../assets/imgIndex/PrevenirElAbuso.jpg";
import ReinoDeLosCielos from "../assets/imgIndex/ReinoDeLosCielos.jpg";
import Satanas from "../assets/imgIndex/Satanas.jpg";
import Tendencias from "../assets/imgIndex/Tendencias.jpg";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import LetrasGloboPequeñas from '../subcomponent/LetrasGloboPequeñas.jsx';
import Nav from '../components/nav/Nav.jsx';
import Star from '../subcomponent/Star.jsx';
import PrimalNav from '../components/primalNav/PrimalNav.jsx';
import Footer from '../components/footer/Footer.jsx';
import Carrousel from '../components/carrousel/Carrousel.jsx';

export default function Home() {
  return (
    <div className='Home'>
      <Star />
      <PrimalNav />
      <div className='page-container'>
        <div className='nav-buttons'>          
          <div className='button-nav'><Carrousel carrousel={'reino'}/></div>
          <div className='button-nav'><Carrousel carrousel={'creacion'}/></div>
          <div className='button-nav'><Carrousel carrousel={'castigo'}/></div>
        </div>
        <div className='nav-buttons'>
          <div className='button-nav'>
            <iframe width="560" height="250" src="https://www.youtube.com/embed/9VKLxto5BDU?si=V0skUYm0q6daF9Dp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className='button-nav'>
            <iframe width="560" height="250" src="https://www.youtube.com/embed/bvvhpbwTr1o?si=4geUqJ5612PuNaN1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className='button-nav'>
            <iframe width="560" height="250" src="https://www.youtube.com/embed/Dsy9pBVWPhk?si=48K7VSXecUZqCo5a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <Nav />
        <div className='content-home'>  
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`PONTE "LA ARMADURA DE DIOS" PARA VENCER LA TENTACION Y LA CONDENACION`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/la-armadura-de-dios'}>DESDE NIÑOS DEBEN ESTUDIAR “LA ARMADURA DE DIOS“. Dice en la Biblia Dios Habla Hoy, en 2da de Corintios 10: 4 Las armas que usamos no son las del mundo, sino que son poder de Dios capaz de destruir fortalezas. Y así destruimos las acusaciones 5 y toda altanería que pretenda impedir que se conozca a Dios. Todo pensamiento humano lo sometemos a Cristo, para que lo obedezca a él, 6 y estamos dispuestos a castigar toda desobediencia, una vez que ustedes obedezcan perfectamente. Dios Habla Hoy 1 Juan 2: 13 Padres, les escribo a ustedes porque han conocido al que ya existía desde el principio. Jóvenes, les escribo a ustedes porque han vencido al maligno. (Conoce más)…</Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-la-armadura-de-dios'}>
                    <img className='img-index' src={FotoUno} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`EL REINO DE LOS CIELOS ES REAL SEGUN LA BIBLIA`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/el-reino-de-los-cielos'}>1 corintios 6: 9-10 ¿No saben ustedes que los que cometen injusticias no tendrán parte en el reino de Dios? No se dejen engañar, pues en el reino de Dios no tendrán parte los que se entregan a la prostitución, ni los idólatras, ni los que cometen adulterio, ni los afeminados, ni los homosexuales, ni los que roban, ni los avaros, ni los borrachos, ni los maldicientes, ni los ladrones.</Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-el-reino-de-los-cielos'}>
                    <img className='img-index' src={ReinoDeLosCielos} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`EL AMOR, EL NUEVO MANDAMIENTO PARA IR AL REINO DE LOS CIELOS`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/el-amor'}>LA CULTURA DEL AMOR A LA PALABRA: QUE JESUCRISTO NOS ENSEÑO : Dice : El AMOR , señal de nuestra comunión con Dios en 1 Juan 4: 7 Queridos hermanos, debemos amarnos unos a otros, porque el amor viene de Dios. Todo el que ama es hijo de Dios y conoce a Dios. 8 el que no ama no ha conocido a Dios, porque Dios es amor. 9 Dios mostró su amor hacia nosotros al enviar a su Hijo único al mundo para que tengamos vida por él. 10 EL AMOR consiste en esto: no en que nosotros hayamos amado a Dios, sino en que él nos amó a nosotros y envió a su Hijo, para que, ofreciéndose en sacrificio, nuestros pecados quedaran perdonados.</Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-el-amor'}>
                    <img className='img-index' src={ElAmor} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`TENEMOS QUE NACER DE NUEVO PARA SER COMO NIÑOS`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/nacer-de-nuevo'}>Para vencer el pecado hay que apartarse de los placeres mundanos, arrepentirse, perdonar de corazón, recibir a JESUCRISTO para “VOLVER A NACER” para que EL ESPITITU DE CRISTO sea el que dirija su vida y ser una nueva persona. Dios Habla Hoy Romanos 8: 9 Pero ustedes ya no viven según esas inclinaciones, sino según el Espíritu, puesto que el Espíritu de Dios vive en ustedes. El que no tiene el Espíritu de Cristo, no es de Cristo. En Juan 3:3 Jesús le dijo:—Te aseguro que el que no nace de nuevo, no puede ver el reino de Dios.4 Nicodemo le preguntó:—¿Y cómo puede uno nacer cuando ya es viejo? ¿Acaso podrá entrar otra vez dentro de su madre, para volver a nacer?5 Jesús le contestó:—Te aseguro que el que no nace de agua y del Espíritu, no puede entrar en el reino de Dios.</Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-nacer-de-nuevo'}>
                    <img className='img-index' src={NacerDeNuevo} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`ATAQUE A LOS NIÑOS, EL MUNDO Y SUS TENDENCIAS, SEGUN LA BIBLIA`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/el-mundo-y-sus-tendencias'}>El ataque es contra los niños y niñas, los están mal influenciados, con la música, con las escenas homosexuales en caricaturas, los videojuegos, los tatuajes. el Halloween, no distinguen entre el bien y el mal . Esto es prohibido por DIOS y trae maldición: Levítico 19: 28» No te hagas cortes en el cuerpo por los muertos ni te hagas tatuajes en la piel. Yo soy el SEÑOR. 29» No deshonres a tu hija convirtiéndola en una prostituta, para que la tierra no se llene de prostitución y de perversidad.</Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-el-mundo-y-sus-tendencias'}>
                    <img className='img-index' src={Tendencias} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`ATAQUE A LOS NIÑOS CON LA INMORALIDAD, SEGUN LA BIBLIA`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/la-inmoralidad'}>Sin moral cívica la comunidad perece; sin moral personal su supervivencia carece de valor: En conclusión, después de analizarlo todo, solo las recomendaciones del CREADOR, transforman integralmente y hacen humanas las personas. “Pues, aunque han conocido a Dios, no lo han honrado como a Dios ni le han dado gracias  y los entrega a una mente reprobada”.</Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-la-inmoralidad'}>
                    <img className='img-index' src={LaInmoralidad} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`ATAQUE A LOS NIÑOS CON EL ABUSO SEGUN LA BIBLIA`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/el-abuso'}>Todos los temas para prevenir el abuso y pornografía infantil : 1º como prevenir el maltrato infantil.- 2º como detectar un abuso sexual en los niños.- 3º ¿Cómo hablar con niños de esta generación, sobre sexualidad infantil? .- 4º Consecuencias del Abuso Físico y Psicológico Infantil .- 5º Abuso sexual en la infancia y adolescencia.- 6º Conoce los tipos de abuso infantil.- 7º Las cifras sobre violencia contra niños en Colombia dan vergüenza.- 8º Un menor es abusado en Colombia cada 22 minutos, según Medicina legal.- 9º Las tristes y desoladoras cifras del Bienestar Familiar sobre violencia contra menores en Colombia.- 10º El orgullo GAY para niños en el 2021 Fue INVASIVO.- 11 º Pornografía infantil: WhatsApp, el nuevo refugio de los pedófilos.- 12.- LA VERDAD SOBRE COMO SE ENCUBA LA PEDOFILIA Y CUALQUIER ADICCION INCONTROLABLE.</Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-el-abuso'}>
                    <img className='img-index' src={PrevenirElAbuso} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`ATAQUE A LOS NIÑOS CON LA IDOLATRIA, SEGUN LA BIBLIA`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/la-idolatria'}>LAS MALDICIONES DE LA IDOLATRIA ENCUBAN TODA CLASE DE ABERRACIONES SEXUALES LA PEDOFILIA. LOS HIJOS NIETOS Y BISNIETOS, QUEDAN DESPROTEJIDOS DE DIOS. “ROMPAMOS ESTAS MALDICION”. La idolatría es fatal, hay 41 versículos en la BIBLIA CATOLICA que lo advierten , lo dice muy claro en Éxodo 20:4 »No te hagas ningún ídolo ni figura de lo que hay arriba en el cielo, ni de lo que hay abajo en la tierra, ni de lo que hay en el mar debajo de la tierra. 5 No te inclines delante de ellos ni les rindas culto, porque yo soy el Señor tu Dios, Dios celoso que castiga la maldad de los padres que me odian, en sus hijos, nietos y bisnietos. “Dios escucha las oraciones para romper estas maldiciones en mis Hijos”</Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-la-idolatria'}>
                    <img className='img-index' src={LaIdolatria} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`JESUCRISTO VINO A DEMOSTRAR QUE SATANAS ES REAL Y LO VENCIO`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/satanas-es-real'}>SATANAS ES REAL. Apocalipsis 12 9 Y fue lanzado fuera el gran dragón, la serpiente antigua, que se llama diablo y Satanás, el cual engaña al mundo entero; fue arrojado a la tierra, y sus ángeles fueron arrojados con él. DIOS le permite probar a sus hijos. Job 1:6 Dios Habla Hoy 6 Un día en que debían presentarse ante el Señor sus servidores celestiales, se presentó también el ángel acusador entre ellos. 7 El Señor le preguntó: —¿De dónde vienes? Y el acusador contestó: (conoce más…)</Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-satanas-es-real'}>
                    <img className='img-index' src={Satanas} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='justify-index-x'>
            <h3 className='h3-home'><LetrasGlobo texto={`JESUCRISTO PAGO CON SU MUERTE PARA NO SER CONDENADOS EN EL INFIERNO`}/></h3>
            <div className=''>
              <div className='content-index-justify'>
                <div className='content-text-index-solo'>                  
                  <Link className='no-decoration' to={'/el-infierno'}>JESUCRISTO vino advertirnos de la condenación eterna en el infierno, Él dijo en Mateo 18: 8 »Por eso, si tu mano o tu pie te hacen caer en pecado, córtatelos y échalos lejos de ti; es mejor que entres en la vida manco o cojo, y no que con tus dos manos y tus dos pies seas arrojado al fuego eterno. 9 Y si tu ojo te hace caer en pecado, sácatelo y échalo lejos de ti; es mejor que entres en la vida con un solo ojo, y no que con tus dos ojos seas arrojado al fuego del infierno.</Link>
                </div>
                <div className='content-text-index'>
                  <Link to={'/videos-el-infierno'}>
                    <img className='img-index' src={ElInfierno} alt="Foto Uno" />
                  </Link>
                  <div className='img-container-videos'><LetrasGloboPequeñas texto={`VIDEOS SOBRE  LA ARMADURA DE DIOS PARA LOS NIÑOS`}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
