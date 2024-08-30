import React, { useState } from "react";
import '../../styles/videos.css';
import Nav from "../../components/nav/Nav";
import Star from "../../subcomponent/Star";
import PrimalNav from "../../components/primalNav/PrimalNav";
import Footer from "../../components/footer/Footer";
import LetrasGlobo from '../../subcomponent/LetrasGlobo.jsx';
import '../../styles/concursoMemoria.css';
import '../../styles/concursoCanciones.css';
import Counter from "../../components/counter/Counter.jsx";

import Img1 from '../../assets/paraColorearYMemorizar/2-Timoteo-3-1.jpg';
import Img2 from '../../assets/paraColorearYMemorizar/3-Corintios-1.jpg';
import Img3 from '../../assets/paraColorearYMemorizar/Apocalipsis-3-1.jpg';
import Img4 from '../../assets/paraColorearYMemorizar/colorear-porque-amo0-dios-tanto-al-mundo.jpg';
import Img5 from '../../assets/paraColorearYMemorizar/Cronicas-16.jpg';
import Img6 from '../../assets/paraColorearYMemorizar/Deuteronomio.jpg';
import Img7 from '../../assets/paraColorearYMemorizar/Filipenses.jpg';
import Img8 from '../../assets/paraColorearYMemorizar/images.png';
import Img9 from '../../assets/paraColorearYMemorizar/Juan-3-16.jpg';
import Img10 from '../../assets/paraColorearYMemorizar/Juan-14.jpg';
import Img11 from '../../assets/paraColorearYMemorizar/Juan.jpg';
import Img12 from '../../assets/paraColorearYMemorizar/M1.jpg';
import Img13 from '../../assets/paraColorearYMemorizar/Marcos-.jpg';
import Img14 from '../../assets/paraColorearYMemorizar/Oracion.jpg';
import Img15 from '../../assets/paraColorearYMemorizar/para-colorear-dios-de-amor-1437x1536.jpg';
import Img16 from '../../assets/paraColorearYMemorizar/Proverbios.jpg';
import Img17 from '../../assets/paraColorearYMemorizar/Texto-de-refuerzo1.png';
import Img18 from '../../assets/paraColorearYMemorizar/Tito.jpg';

const Modal = ({ src, alt, caption, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <span className="close">&times;</span>
      <img className="modal-content" src={src} alt={alt} />
      {caption && <div className="caption">{caption}</div>}
    </div>
  );
}

export default function ParaColorearYMemorizar() {
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
        { className: 'image-memory', src: Img18, alt: 'Tito' }
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
              <LetrasGlobo texto={`Versiculos para colorear y memorizar`} />
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
        <Counter />   
        <Footer />
      </div>
    </div>
  );
}
