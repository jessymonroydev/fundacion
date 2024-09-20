import React, { useState } from "react";
import '../styles/videos.css';
import Nav from "../components/nav/Nav";
import Star from "../subcomponent/Star";
import PrimalNav from "../components/primalNav/PrimalNav";
import Footer from "../components/footer/Footer";
import LetrasGlobo from '../subcomponent/LetrasGlobo.jsx';
import '../styles/concursoMemoria.css';
'../styles/concursoCanciones.css';
import Counter from '../components/counter/Counter2.jsx';

import Img1 from '../assets/imgMemoria/3-Corintios-1.jpg';
import Img2 from '../assets/imgMemoria/Apocalipsis-3-1.jpg';
import Img3 from '../assets/imgMemoria/Juan-3-16.jpg';
import Img4 from '../assets/imgMemoria/Juan.jpg';
import Img5 from '../assets/imgMemoria/Proverbios.jpg';
import Img6 from '../assets/imgMemoria/Tito.jpg';

// Componente Modal reutilizado del ejemplo encontrado en internet
const Modal = ({ src, alt, caption, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <span className="close">&times;</span>
      <img className="modal-content" src={src} alt={alt} />
      {caption && <div className="caption">{caption}</div>}
    </div>
  );
}

export default function ConcursoMemoria() {
  const images = [
    { className: 'image-memory',src: Img1, alt: '3 Corintios 1' },
    { className: 'image-memory',src: Img2, alt: 'Apocalipsis 3:1' },
    { className: 'image-memory',src: Img3, alt: 'Juan 3:16' },
    { className: 'image-memory',src: Img4, alt: 'Juan' },
    { className: 'image-memory',src: Img5, alt: 'Proverbios' },
    { className: 'image-memory',src: Img6, alt: 'Tito' }
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

  return (
    <div className="Home">
      <Star />      
      <div className="page-container">
        <PrimalNav />
        <Nav />
        <div className="content-page-armadura">
          <div className="content-home" style={{ margin: 'auto', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1em', color: '#b57917' }}>
              <LetrasGlobo texto={`Concurso de memorizacion de versiculos`} />
            </h3>
          </div>
          <div style={{ width: '100%' }}>
            <div style={{textAlign: 'center', width: '100%', fontSize: '1.1em'}}>
                Para niños y niñas menores de 8 años. Los pueden imprimir, colorear, memorizar y hacer una cartelera con los 6 y mandar la foto por Whatsapp 301 411 7699.
            </div>
            <div className="images-container image-wrap">
            {images.map((image, index) => (
              <div key={index} className="image-wrapper-container" onClick={() => openModal(image)}>
                <img
                  className={image.className}
                  src={image.src}
                  alt={image.alt}                  
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
          {/* 
          <div className="canciones-video-container">
            <div className="text-cancion">Canción</div>
            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/Ypy0olonqI4?si=I6kNRz2ewOq7m5Vi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
            <div className="text-cancion cancion-special">Pista</div>
            <iframe  className='video-margenes-canciones' src="https://www.youtube.com/embed/yakRYSLkpIw?si=_uPLkUjRZZJsvnx-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="no-referrer-when-downgrade" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
          </div>
          */}         
        </div>
        <Counter />   
        <Footer />
      </div>
    </div>
  );
}
