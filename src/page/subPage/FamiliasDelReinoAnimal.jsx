import React, { useState } from "react";
import '../../styles/videos.css';
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import '../../styles/concursoMemoria.css';
import '../../styles/concursoCanciones.css';

import Img1 from '../../assets/familiasParaColorear/11266-dibujo-colorear-buho-familia.jpg';
import Img2 from '../../assets/familiasParaColorear/13409.jpg';
import Img3 from '../../assets/familiasParaColorear/53580172-ilustracion-de-la-familia-de-nativos-americanos-esbozo-para-colorear-libro-.jpg';
import Img4 from '../../assets/familiasParaColorear/aristogatos.jpg.webp';
import Img5 from '../../assets/familiasParaColorear/colorear-avestruz-722.jpg';
import Img6 from '../../assets/familiasParaColorear/colorear-familia-buhos-scaled.jpg';
import Img7 from '../../assets/familiasParaColorear/creacion-26000.jpg';
import Img8 from '../../assets/familiasParaColorear/delfin-1280x720-1.jpg';
import Img9 from '../../assets/familiasParaColorear/dibujo-conejos-disney-familia-colorear.jpg';
import Img10 from '../../assets/familiasParaColorear/dibujo-de-esquema-de-la-familia-de-elefantes-43203281.jpg';
import Img11 from '../../assets/familiasParaColorear/dibujo-familia-cocodrilos-selva-colorear.jpg';
import Img12 from '../../assets/familiasParaColorear/dibujo-para-colorear-paloma-imagen-animada-0010.gif';
import Img13 from '../../assets/familiasParaColorear/dibujos-lobos-para-colorear-infantiles.jpg';
import Img14 from '../../assets/familiasParaColorear/dibujos-para-colorear-vacas-tiernas.jpg';
import Img15 from '../../assets/familiasParaColorear/dibujos-pequeno-pony-027.gif';
import Img16 from '../../assets/familiasParaColorear/dibujos-perros-para-colorear-lindos.jpg';
import Img17 from '../../assets/familiasParaColorear/download.jpg';
import Img18 from '../../assets/familiasParaColorear/download.png';
import Img19 from '../../assets/familiasParaColorear/elefante-manada.webp';
import Img20 from '../../assets/familiasParaColorear/familia-adan-y-eva.png';
import Img21 from '../../assets/familiasParaColorear/Familia-China.jpg';
import Img22 from '../../assets/familiasParaColorear/familia-de-ballenas.jpg';
import Img23 from '../../assets/familiasParaColorear/familia-de-osos-bosque_4bd6c5c357d5d-p.gif';
import Img24 from '../../assets/familiasParaColorear/familia-orando.jpg';
import Img25 from '../../assets/familiasParaColorear/Gallina-y-familia.jpg';
import Img26 from '../../assets/familiasParaColorear/istockphoto-1214564987-1024x1024-1.jpg';
import Img27 from '../../assets/familiasParaColorear/libro-para-colorear-corregido.jpg';
import Img28 from '../../assets/familiasParaColorear/little-pony-para-colorear.jpg';
import Img29 from '../../assets/familiasParaColorear/Los-monos-amigos-de-Tarzan.jpg';
import Img30 from '../../assets/familiasParaColorear/osos-familia.jpg';
import Img31 from '../../assets/familiasParaColorear/ovejas-.jpg';
import Img32 from '../../assets/familiasParaColorear/perro-salchicha.jpg';
import Img33 from '../../assets/familiasParaColorear/pesebre-para-colorear.jpg';
import Img34 from '../../assets/familiasParaColorear/pinguinos.jpg';
import Img35 from '../../assets/familiasParaColorear/Renos-Para-Colorear-23.jpg';
import Img36 from '../../assets/familiasParaColorear/ropa-tradicional-de-japa-n-30314.jpg';
import Img37 from '../../assets/familiasParaColorear/stock-vector-background-with-giraffe-family-outline-hand-drawing-good-for-coloring-page-for-the-adult-1085098775.jpg';
import Img38 from '../../assets/familiasParaColorear/unnamed.jpg';
import Img39 from '../../assets/familiasParaColorear/unnamedFam-jesus.jpg';
import Img40 from '../../assets/familiasParaColorear/wonde-day-daniel-tiger-8.jpg';

const Modal = ({ src, alt, caption, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <span className="close">&times;</span>
      <img className="modal-content" src={src} alt={alt} />
      {caption && <div className="caption">{caption}</div>}
    </div>
  );
}

export default function FamiliasDelReinoAnimal() {
    const images = [
        { className: 'image-memory', src: Img1, alt: '2 Timoteo 3:1' },
        { className: 'image-memory', src: Img2, alt: '3 Corintios 1' },
        { className: 'image-memory', src: Img3, alt: 'Apocalipsis 3:1' },
        { className: 'image-memory', src: Img4, alt: 'Porque amo Dios tanto al mundo' },
        { className: 'image-memory', src: Img5, alt: '1 Crónicas 16' },
        { className: 'image-memory', src: Img6, alt: 'Deuteronomio' },
        { className: 'image-memory', src: Img7, alt: 'Filipenses' },
        { className: 'image-memory', src: Img8, alt: 'Images' },
        { className: 'image-memory', src: Img9, alt: 'Juan 3:16' },
        { className: 'image-memory', src: Img10, alt: 'Juan 14' },
        { className: 'image-memory', src: Img11, alt: 'Juan' },
        { className: 'image-memory', src: Img12, alt: 'M1' },
        { className: 'image-memory', src: Img13, alt: 'Marcos' },
        { className: 'image-memory', src: Img14, alt: 'Oración' },
        { className: 'image-memory', src: Img15, alt: 'Dios de amor' },
        { className: 'image-memory', src: Img16, alt: 'Proverbios' },
        { className: 'image-memory', src: Img17, alt: 'Texto de refuerzo' },
        { className: 'image-memory', src: Img18, alt: 'Tito' },
        { className: 'image-memory', src: Img19, alt: 'Tito' },
        { className: 'image-memory', src: Img20, alt: 'Tito' },
        { className: 'image-memory', src: Img21, alt: 'Tito' },
        { className: 'image-memory', src: Img22, alt: 'Tito' },
        { className: 'image-memory', src: Img23, alt: 'Tito' },
        { className: 'image-memory', src: Img24, alt: 'Tito' },
        { className: 'image-memory', src: Img25, alt: 'Tito' },
        { className: 'image-memory', src: Img26, alt: 'Tito' },
        { className: 'image-memory', src: Img27, alt: 'Tito' },
        { className: 'image-memory', src: Img28, alt: 'Tito' },
        { className: 'image-memory', src: Img29, alt: 'Tito' },
        { className: 'image-memory', src: Img30, alt: 'Tito' },
        { className: 'image-memory', src: Img31, alt: 'Tito' },
        { className: 'image-memory', src: Img32, alt: 'Tito' },
        { className: 'image-memory', src: Img33, alt: 'Tito' },
        { className: 'image-memory', src: Img34, alt: 'Tito' },
        { className: 'image-memory', src: Img35, alt: 'Tito' },
        { className: 'image-memory', src: Img36, alt: 'Tito' },
        { className: 'image-memory', src: Img37, alt: 'Tito' },
        { className: 'image-memory', src: Img38, alt: 'Tito' },
        { className: 'image-memory', src: Img39, alt: 'Tito' },
        { className: 'image-memory', src: Img40, alt: 'Tito' }
    ];

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

  const printImage = (src) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<img src="${src}" onload="window.print();window.close();" />`);
    printWindow.document.close();
  };

  return (
    <div className="Home">
      <Star />      
      <div className="page-container">
        <PrimalNav />
        <Nav />
        <div className="content-page-armadura">
          <div className="content-home" style={{ margin: 'auto', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1em', color: '#b57917' }}>
              <LetrasGlobo texto={`familias para colorear`} />
            </h3>
          </div>
          <div style={{ width: '100%' }}>
            <div style={{textAlign: 'center', width: '100%', fontSize: '1.1em'}}>
                Te presentamos una colección de imágenes con versículos de la Biblia que puedes descargar. Puedes imprimir directamente en el ícono a la derecha superior de la imagen.  Diviértete coloreando y aprendiendo versículos de la Biblia.  Participa en nuestros concursos y gana premios. 
            </div>
            <div style={{textAlign: 'center', width: '100%', fontSize: '1.4em', color: 'gold', marginTop: '4vh'}}>
                Instrucciones para imprimir correctamente
            </div>
            <div style={{textAlign: 'center', width: '100%', fontSize: '1.1em', marginTop: '4vh'}}>
                Al dar click al botón de imprimir se desplegará la ventana de opciones del navegador, quiere decir que  las configuraciones dependen del navegador web que estè utilizando (Chrome, Firefox, Ópera, Edge, Etc.).   En esta ventana se configuran los siguientes parámetros:   Destino: que corresponde a la impresora, Diseño: Si es horizontal o vertical (recomendamos horizontal), Color: si quiere imprimir a color o blanco y negro.  MÁS AJUSTES: Se podrá configurar  el tamaño del papel, Cantidad de impresiones, los márgenes (recomendamos «Personalizados») y en Opciones, recomendamos desmarcar «Quitar encabezado y pié de página» y «Gráficos de fondo».   Reiteramos que dichas opciones son limitadas al tipo de navegador que se esté empleando.
            </div>
            <div style={{textAlign: 'center', width: '100%', fontSize: '1.1em', marginTop: '4vh'}}>
                La otra manera es usar las preferencias de impresión del sistema (La impresora misma) para lo cual se accede haciendo click en «Más ajustes/Imprimir utilizando el cuadro de diálogo del sistema (Ctrl+Shift+P)«, lo cual abrirá la ventana de la impresora desde donde se accede a las «preferencias» y permite tener más control de la impresión en cuanto a calidad y rapidez del proceso.
            </div>
            <div className="images-container image-wrap ">
              {images.map((image, index) => (
                <div key={index} className="image-wrapper-container" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <img
                    className={image.className}
                    src={image.src}
                    alt={image.alt}
                    onClick={() => openModal(image)}
                  />
                  <button onClick={() => printImage(image.src)}>Imprimir</button>
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
        </div>
        <Footer />
      </div>
    </div>
  );
}