import React, { useState } from "react";
import Nav from "../components/nav/Nav.jsx";
import Star from "../subcomponent/Star.jsx";
import PrimalNav from "../components/primalNav/PrimalNav.jsx";
import Footer from "../components/footer/Footer.jsx";
import { CiCirclePlus } from "react-icons/ci";
import '../styles/historia.css';
import VideoSyntax from "../subcomponent/VideoSyntax.jsx";
import '../styles/videos.css';
import Counter from '../components/counter/Counter2.jsx';

// 2003 img
import año31 from '../assets/2003/20031.jpg';
import año32 from '../assets/2003/20032.jpg';
import año33 from '../assets/2003/20033.jpg';
import año34 from '../assets/2003/20034.jpg';
import año35 from '../assets/2003/20035.jpg';
import año36 from '../assets/2003/20036.jpg';

// 2004 img
import año41 from '../assets/2004/20041.jpg';
import año42 from '../assets/2004/20042.jpg';
import año43 from '../assets/2004/20043.jpg';
import año44 from '../assets/2004/20044.jpg';
import año45 from '../assets/2004/20045.jpg';

// 2007 img
import año71 from '../assets/2007/20071.jpg';
import año72 from '../assets/2007/20072.jpg';
import año73 from '../assets/2007/20073.jpg';
import año74 from '../assets/2007/20074.jpg';
import año75 from '../assets/2007/20075.jpg';
import año76 from '../assets/2007/20076.jpg';
import año77 from '../assets/2007/20077.jpg';
import año78 from '../assets/2007/20078.jpg';
import año79 from '../assets/2007/20079.jpg';
import año710 from '../assets/2007/200710.jpg';
import año711 from '../assets/2007/200711.jpg';
import año712 from '../assets/2007/200712.jpg';

// 2011 img
import año111 from '../assets/2011/20111.jpg';
import año112 from '../assets/2011/20112.jpg';
import año113 from '../assets/2011/20113.jpg';
import año114 from '../assets/2011/20114.jpg';
import año115 from '../assets/2011/20115.jpg';
import año116 from '../assets/2011/20116.jpg';
import año117 from '../assets/2011/20117.jpg';
import año118 from '../assets/2011/20118.jpg';
import año119 from '../assets/2011/20119.jpg';
import año1110 from '../assets/2011/201110.jpg';
import año1111 from '../assets/2011/201111.jpg';
import año1112 from '../assets/2011/201112.jpg';
import año1113 from '../assets/2011/201113.jpg';
import año1114 from '../assets/2011/201114.jpg';
import año1115 from '../assets/2011/201115.jpg';
import año1116 from '../assets/2011/201116.jpg';
import año1117 from '../assets/2011/201117.jpg';
import año1118 from '../assets/2011/201118.jpg';

// 2012 img
import año121 from '../assets/2012/20121.jpg';
import año122 from '../assets/2012/20122.jpg';
import año123 from '../assets/2012/20123.jpg';
import año124 from '../assets/2012/20124.jpg';
import año125 from '../assets/2012/20125.jpg';
import año126 from '../assets/2012/20126.jpg';
import año127 from '../assets/2012/20127.jpg';
import año128 from '../assets/2012/20128.jpg';
import año129 from '../assets/2012/20129.jpg';
import año1210 from '../assets/2012/201210.jpg';
import año1211 from '../assets/2012/201211.jpg';
import año1212 from '../assets/2012/201212.jpg';
import año1213 from '../assets/2012/201213.jpg';
import año1214 from '../assets/2012/201214.jpg';
import año1215 from '../assets/2012/201215.jpg';
import año1216 from '../assets/2012/201216.jpg';
import año1217 from '../assets/2012/201217.jpg';
import año1218 from '../assets/2012/201218.jpg';
import año1219 from '../assets/2012/201219.jpg';
import año1220 from '../assets/2012/201220.jpg';
import año1221 from '../assets/2012/201221.jpg';
import año1222 from '../assets/2012/201222.jpg';

// 2013 img
import año131 from '../assets/2013/20131.jpg';
import año132 from '../assets/2013/20132.jpg';
import año133 from '../assets/2013/20133.jpg';
import año134 from '../assets/2013/20134.jpg';
import año135 from '../assets/2013/20135.jpg';
import año136 from '../assets/2013/20136.jpg';

// 2015 img
import año151 from '../assets/2015/20151.jpg';
import año152 from '../assets/2015/20152.jpg';
import año153 from '../assets/2015/20153.jpg';
import año154 from '../assets/2015/20154.jpg';
import año155 from '../assets/2015/20155.jpg';
import año156 from '../assets/2015/20156.jpg';
import año157 from '../assets/2015/20157.jpg';
import año158 from '../assets/2015/20158.jpg';
import año159 from '../assets/2015/20159.jpg';
import año1510 from '../assets/2015/201510.jpg';
import año1511 from '../assets/2015/201511.jpg';
import año1512 from '../assets/2015/201512.jpg';

// 2016 img
import año161 from '../assets/2016/20161.jpg';
import año162 from '../assets/2016/20162.jpg';
import año163 from '../assets/2016/20163.jpg';
import año164 from '../assets/2016/20164.jpg';
import año165 from '../assets/2016/20165.jpg';
import año166 from '../assets/2016/20166.jpg';
import año167 from '../assets/2016/20167.jpg';
import año168 from '../assets/2016/20168.jpg';
import año169 from '../assets/2016/20169.jpg';
import año1610 from '../assets/2016/201610.jpg';
import año1611 from '../assets/2016/201611.jpg';
import año1612 from '../assets/2016/201612.jpg';


// 2017 img
import año171 from '../assets/2017/20171.jpg';
import año172 from '../assets/2017/20172.jpg';
import año173 from '../assets/2017/20173.jpg';
import año174 from '../assets/2017/20174.jpg';
import año175 from '../assets/2017/20175.jpg';
import año176 from '../assets/2017/20176.jpg';
import año177 from '../assets/2017/20177.jpg';
import año178 from '../assets/2017/20178.jpg';
import año179 from '../assets/2017/20179.jpg';
import año1710 from '../assets/2017/201710.jpg';
import año1711 from '../assets/2017/201711.jpg';
import año1712 from '../assets/2017/201712.jpg';
import año1713 from '../assets/2017/201713.jpg';
import año1714 from '../assets/2017/201714.jpg';
import año1715 from '../assets/2017/201715.jpg';
import año1716 from '../assets/2017/201716.jpg';
import año1717 from '../assets/2017/201717.jpg';
import año1718 from '../assets/2017/201718.jpg';
import año1719 from '../assets/2017/201719.jpg';
import año1720 from '../assets/2017/201720.jpg';
import año1721 from '../assets/2017/201721.jpg';
import año1722 from '../assets/2017/201722.jpg';
import año1723 from '../assets/2017/201723.jpg';
import año1724 from '../assets/2017/201724.jpg';
import año1725 from '../assets/2017/201725.jpg';
import año1726 from '../assets/2017/201726.jpg';
import año1727 from '../assets/2017/201727.jpg';
import año1728 from '../assets/2017/201728.jpg';
import año1729 from '../assets/2017/201729.jpg';
import año1730 from '../assets/2017/201730.jpg';
import año1731 from '../assets/2017/201731.jpg';

// 2018 img
import año181 from '../assets/2018/20181.jpg';
import año182 from '../assets/2018/20182.jpg';
import año183 from '../assets/2018/20183.jpg';
import año184 from '../assets/2018/20184.jpg';
import año185 from '../assets/2018/20185.jpg';
import año186 from '../assets/2018/20186.jpg';
import año187 from '../assets/2018/20187.jpg';
import año188 from '../assets/2018/20188.jpg';

// 2020 img
import año201 from '../assets/2020/20201.jpg';
import año202 from '../assets/2020/20202.jpg';
import año203 from '../assets/2020/20203.jpg';
import año204 from '../assets/2020/20204.jpg';

// 2021 img
import año211 from '../assets/2021/20211.jpg';
import año212 from '../assets/2021/20212.jpg';
import año213 from '../assets/2021/20213.jpg';
import año214 from '../assets/2021/20214.jpg';
import año215 from '../assets/2021/20215.jpg';
import año216 from '../assets/2021/20216.jpg';
import año217 from '../assets/2021/20217.jpg';
import año218 from '../assets/2021/20218.jpg';
import año219 from '../assets/2021/20219.jpg';


    const Modal = ({ src, alt, caption, onClose }) => {
        return (
        <div className="modal" onClick={onClose}>
            <span className="close">&times;</span>
            <img className="modal-content" src={src} alt={alt} />
            {caption && <div className="caption">{caption}</div>}
        </div>
        );
    }

export default function Historia() {
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

    const año3 = [        
        { className: 'image-memory-historia', src: año31, alt: 'Images' },
        { className: 'image-memory-historia', src: año32, alt: 'Images' },
        { className: 'image-memory-historia', src: año33, alt: 'Images' },
        { className: 'image-memory-historia', src: año34, alt: 'Images' },
        { className: 'image-memory-historia', src: año35, alt: 'Images' },
        { className: 'image-memory-historia', src: año36, alt: 'Images' },
    ];    

    const año4 = [
        { className: 'image-memory-historia', src: año41, alt: 'Images', texto: 'Colegio Instituto Ferrini' },
        { className: 'image-memory-historia', src: año42, alt: 'Images', texto: 'Colegio La Piedad' },
        { className: 'image-memory-historia', src: año43, alt: 'Images', texto: 'Colegio Marcos Fidel Suarez' },
        { className: 'image-memory-historia', src: año44, alt: 'Images', texto: 'Colegio San Francisco Antonio Sea' },
        { className: 'image-memory-historia', src: año45, alt: 'Images', texto: 'Colegio Santa Rosa de Lima' },
    ];
    

    const año7 = [
        { className: 'image-memory-historia', src: año71, alt: 'Images' },
        { className: 'image-memory-historia', src: año72, alt: 'Images' },
        { className: 'image-memory-historia', src: año75, alt: 'Images' },
        { className: 'image-memory-historia', src: año76, alt: 'Images' },
        { className: 'image-memory-historia', src: año77, alt: 'Images' },
        { className: 'image-memory-historia', src: año78, alt: 'Images' },
        { className: 'image-memory-historia', src: año79, alt: 'Images' },
        { className: 'image-memory-historia', src: año710, alt: 'Images' },
        { className: 'image-memory-historia', src: año711, alt: 'Images' },
        { className: 'image-memory-historia', src: año73, alt: 'Images' },
        { className: 'image-memory-historia', src: año74, alt: 'Images' },
    ];
    

    const año11 = [        
        { className: 'image-memory-historia', src: año112, alt: 'Images' },
        { className: 'image-memory-historia', src: año113, alt: 'Images' },
        { className: 'image-memory-historia', src: año114, alt: 'Images' },
        { className: 'image-memory-historia', src: año115, alt: 'Images' },
        { className: 'image-memory-historia', src: año116, alt: 'Images' },
        { className: 'image-memory-historia', src: año117, alt: 'Images' },
        { className: 'image-memory-historia', src: año118, alt: 'Images' },
        { className: 'image-memory-historia', src: año119, alt: 'Images' },
        { className: 'image-memory-historia', src: año1110, alt: 'Images' },
        { className: 'image-memory-historia', src: año1111, alt: 'Images' },
        { className: 'image-memory-historia', src: año1112, alt: 'Images' },
        { className: 'image-memory-historia', src: año1113, alt: 'Images' },
        { className: 'image-memory-historia', src: año1114, alt: 'Images' },
        { className: 'image-memory-historia', src: año1115, alt: 'Images' },
        { className: 'image-memory-historia', src: año1116, alt: 'Images' },
    ];
    

    const año12 = [
        { className: 'image-memory-historia', src: año121, alt: 'Images' },
        { className: 'image-memory-historia', src: año122, alt: 'Images' }, 
        { className: 'image-memory-historia', src: año125, alt: 'Images' },       
        { className: 'image-memory-historia', src: año124, alt: 'Images' },                
        { className: 'image-memory-historia', src: año126, alt: 'Images' },
        { className: 'image-memory-historia', src: año123, alt: 'Images' },
    ];

    const año12_2 = [        
        { className: 'image-memory-historia', src: año127, alt: 'Images' },
        { className: 'image-memory-historia', src: año128, alt: 'Images' },
        { className: 'image-memory-historia', src: año129, alt: 'Images' },
        { className: 'image-memory-historia', src: año1210, alt: 'Images' },
        { className: 'image-memory-historia', src: año1211, alt: 'Images' },
        { className: 'image-memory-historia', src: año1212, alt: 'Images' },
        { className: 'image-memory-historia', src: año1213, alt: 'Images' },
        { className: 'image-memory-historia', src: año1214, alt: 'Images' },
        { className: 'image-memory-historia', src: año1215, alt: 'Images' },
        { className: 'image-memory-historia', src: año1216, alt: 'Images' },
        { className: 'image-memory-historia', src: año1217, alt: 'Images' },
        { className: 'image-memory-historia', src: año1218, alt: 'Images' },
        { className: 'image-memory-historia', src: año1219, alt: 'Images' },
        { className: 'image-memory-historia', src: año1220, alt: 'Images' },
    ];
    

    const año13 = [
        { className: 'image-memory-historia', src: año131, alt: 'Images' },
        { className: 'image-memory-historia', src: año132, alt: 'Images' },
        { className: 'image-memory-historia', src: año133, alt: 'Images' },
        { className: 'image-memory-historia', src: año134, alt: 'Images' },
        { className: 'image-memory-historia', src: año135, alt: 'Images' },
        { className: 'image-memory-historia', src: año136, alt: 'Images' },
    ];
    

    const año15 = [
        { className: 'image-memory-historia', src: año151, alt: 'Images' },
        { className: 'image-memory-historia', src: año152, alt: 'Images' },
        { className: 'image-memory-historia', src: año153, alt: 'Images' },
    ];

    const año15_2 = [
        { className: 'image-memory-historia', src: año154, alt: 'Images' },
        { className: 'image-memory-historia', src: año155, alt: 'Images' },
        { className: 'image-memory-historia', src: año156, alt: 'Images' },
    ];

    const año15_3 = [
        { className: 'image-memory-historia', src: año157, alt: 'Images' },
        { className: 'image-memory-historia', src: año158, alt: 'Images' },
        { className: 'image-memory-historia', src: año159, alt: 'Images' },
        { className: 'image-memory-historia', src: año1510, alt: 'Images' },
        { className: 'image-memory-historia', src: año1511, alt: 'Images' },
        { className: 'image-memory-historia', src: año1512, alt: 'Images' },
    ];
    

    const año16 = [
        { className: 'image-memory-historia', src: año161, alt: 'Images' },
        { className: 'image-memory-historia', src: año162, alt: 'Images' },
        { className: 'image-memory-historia', src: año163, alt: 'Images' },
        { className: 'image-memory-historia', src: año164, alt: 'Images' },
        { className: 'image-memory-historia', src: año165, alt: 'Images' },
        { className: 'image-memory-historia', src: año166, alt: 'Images' },
        { className: 'image-memory-historia', src: año167, alt: 'Images' },
        { className: 'image-memory-historia', src: año168, alt: 'Images' },
        { className: 'image-memory-historia', src: año169, alt: 'Images' },
        { className: 'image-memory-historia', src: año1610, alt: 'Images' },
        { className: 'image-memory-historia', src: año1611, alt: 'Images' },
        { className: 'image-memory-historia', src: año1612, alt: 'Images' },
    ];
    

    const año17 = [
        { className: 'image-memory-historia', src: año171, alt: 'Images' },
        { className: 'image-memory-historia', src: año172, alt: 'Images' },
        { className: 'image-memory-historia', src: año173, alt: 'Images' },
        { className: 'image-memory-historia', src: año174, alt: 'Images' },
        { className: 'image-memory-historia', src: año175, alt: 'Images' },
        { className: 'image-memory-historia', src: año176, alt: 'Images' },
        { className: 'image-memory-historia', src: año177, alt: 'Images' },
        { className: 'image-memory-historia', src: año178, alt: 'Images' },
        { className: 'image-memory-historia', src: año179, alt: 'Images' },
        { className: 'image-memory-historia', src: año1710, alt: 'Images' },
        { className: 'image-memory-historia', src: año1711, alt: 'Images' },
        { className: 'image-memory-historia', src: año1712, alt: 'Images' },
        { className: 'image-memory-historia', src: año1713, alt: 'Images' },
        { className: 'image-memory-historia', src: año1714, alt: 'Images' },
        { className: 'image-memory-historia', src: año1715, alt: 'Images' },
        { className: 'image-memory-historia', src: año1716, alt: 'Images' },
        { className: 'image-memory-historia', src: año1717, alt: 'Images' },
        { className: 'image-memory-historia', src: año1718, alt: 'Images' },
        { className: 'image-memory-historia', src: año1719, alt: 'Images' },
        { className: 'image-memory-historia', src: año1720, alt: 'Images' },
        { className: 'image-memory-historia', src: año1721, alt: 'Images' },
        { className: 'image-memory-historia', src: año1722, alt: 'Images' },
        { className: 'image-memory-historia', src: año1723, alt: 'Images' },
        { className: 'image-memory-historia', src: año1724, alt: 'Images' },
        { className: 'image-memory-historia', src: año1725, alt: 'Images' },
        { className: 'image-memory-historia', src: año1726, alt: 'Images' },
        { className: 'image-memory-historia', src: año1727, alt: 'Images' },
        { className: 'image-memory-historia', src: año1728, alt: 'Images' },
        { className: 'image-memory-historia', src: año1729, alt: 'Images' },
        { className: 'image-memory-historia', src: año1730, alt: 'Images' },
        { className: 'image-memory-historia', src: año1731, alt: 'Images' },
    ];
    

    const año18 = [
        { className: 'image-memory-historia', src: año181, alt: 'Images' },
        { className: 'image-memory-historia', src: año182, alt: 'Images' },
        { className: 'image-memory-historia', src: año183, alt: 'Images' },
        { className: 'image-memory-historia', src: año184, alt: 'Images' },
    ];

    const año18_2 = [
        { className: 'image-memory-historia', src: año185, alt: 'Images' },
        { className: 'image-memory-historia', src: año186, alt: 'Images' },
    ];

    const año18_3 = [
        { className: 'image-memory-historia', src: año187, alt: 'Images' },
    ];

    const año18_4 = [
        { className: 'image-memory-historia', src: año188, alt: 'Images' },
    ];
    

    const año20 = [
        { className: 'image-memory-historia', src: año201, alt: 'Images' },                
        { className: 'image-memory-historia', src: año204, alt: 'Images' },
        { className: 'image-memory-historia', src: año203, alt: 'Images' },
        { className: 'image-memory-historia', src: año202, alt: 'Images' },
    ];
    

    const año21 = [
        { className: 'image-memory-historia', src: año211, alt: 'Images' },
        { className: 'image-memory-historia', src: año212, alt: 'Images' },
        { className: 'image-memory-historia', src: año213, alt: 'Images' },
        { className: 'image-memory-historia', src: año214, alt: 'Images' },
        { className: 'image-memory-historia', src: año215, alt: 'Images' },
        { className: 'image-memory-historia', src: año216, alt: 'Images' },
        { className: 'image-memory-historia', src: año217, alt: 'Images' },
        { className: 'image-memory-historia', src: año218, alt: 'Images' },
        { className: 'image-memory-historia', src: año219, alt: 'Images' },
    ];
    

    const rows = [
        { title: "Historia", content: (
            <div>
                <div>La Fundación Volver a Nacer surge gracias a la iniciativa de sus fundadores; Cesar Tulio Méndez Montoya y Tulia María Quintero Hoyos, que al ver los niños y niñas de la ciudad de Medellín habitando las calles, sin alimentación y consumiendo sacool a muy temprana edad, deciden disponer de sus propios recursos para amparar los niños y niñas que más los necesitaban. Jurídicamente la fundación se estableció el 1 de octubre de 1997 tras siete años de actividades preliminares de ayuda a los niños y niñas de la ciudad de Medellín.</div>
            </div>
        )},
        { title: "1995", content: "En 1995 Se arrienda una finca ubicada en Belén Aguas Frías en Medellín, donde se iniciaron labores apoyando a 8 niños y niñas en situaciones desfavorables entre los 3 y 6 años de edad, brindándoles alimentación, albergue, recreación y orientación a sus familias.  El ICBF constató nuestra labor en esa finca y nos dieron la personería jurídica." },
        { title: "2003", content: (<div>
            <div>El año 2003 la fundación se dedicó a visitar el barrio Santo Domingo con el fin de llevar alimentación a los niños.  Esta actividad se realizaba cada ocho días donde se le compartía a los niños un rico sancocho y se le regalaba material didáctico.</div>
            <div className="images-container image-wrap ">
              {año3.map((image, index) => (
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
        </div>)},
        { title: "2004-06", content: (
                <div>
                    <div>En los años 2004 y 2006 se realizan actividades enfocadas hacia la prevención de consumo de sustancias psicoactivas en los niños y adolescentes, interviniendo 12 instituciones educativas entre públicas y privadas, a través de charlas y conferencias desarrolladas salón por salón con temas relacionados con el consumo de drogas, además se repartió material litográfico “EL LIBRO DE LA VIDA” con mensajes de ayuda, siempre fomentando el rescate de los valores éticos, morales y espirituales.</div>
                    <div className="images-container image-wrap ">
                        {año4.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
            )},
        { title: "2007-10", content: (
            <div>
                <img className="img-20071" src={año712} alt="2007 portada" />
                <div style={{marginTop: '2vh'}}>Se adquirió en una finca en la vía San Pedro en la vereda el YARUMO El Proyecto “EL JARDIN CON EL AMOR DE DIOS”, con niñas de 3 a 5 años, de hogares disfuncionales del Sector NIQUITAO (San Diego) y demostramos con este proyecto que acercando los niños a JESUS DE NAZARET, por medio de video caricaturas con valores y memorizando corintios 13:4-6 relacionado con: “El Amor”, fueron las mejores estudiantes en la Institución Educativa La Unión, en jardín y primero primaria.</div>
                <div style={{marginTop: '2vh'}}>Descubrimos con este proyecto que los niños dependen de los valores y cultura de sus Madres que los educan.</div>
                <div style={{marginTop: '2vh'}}>Nos vimos obligados a terminar con el proyecto porque cuando las niñas se quedaban en sus casas por un fin de semana, llegaban contaminadas de los antivalores y anticultura de sus hogares, y porque el ICBF nos exigía un celador de día y de noche y psicólogos todos los días. La distancia y los sueldos no lo permitieron.</div>
                <div style={{marginTop: '2vh'}}>En conclusión después de analizarlo todo los comportamientos de los jóvenes de hoy son por no haberlos acercado a Jesús desde niños, lo comprobamos con los resultados certificados por la Institución Educativa la Unión</div>
                <div className="images-container image-wrap ">
                        {año7.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
        )},
        { title: "2011", content: (
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <div>Participación del bazar de la familia para la integración de las Madres comunitarias de la ASOCIACION DULCE INFANCIA del ICBF con 208 Niños Y Niñas beneficiarias del Barrio Blanquizal con la recreación dirigida y sensibilización sobre la importancia de fomentar los valores y refrigerio para los niños y prendas de vestir para las Madres comunitarias. </div>
                <img style={{width: '80%', height: 'auto', marginTop: '2vh', marginBottom: '2vh'}} src={año111} alt={'image'} />
                <div className="images-container image-wrap ">
                        {año11.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
                <div>El año de 2020 se lo arrienda casualmente a la iglesia cristiana congregación bautista Amistad en CRISTO.</div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '3vh'}}>
                    <img style={{width: '50%', height: 'auto'}} src={año1117} alt="image" />
                    <img style={{width: '50%', height: 'auto'}} src={año1118} alt="image" />
                </div>
            </div>
        )},
        { title: "2012", content:(
            <div>
                <div>Participación del bazar de la familia para la integración de las Madres comunitarias de la ASOCIACION DULCE INFANCIA del ICBF con 208 Niños Y Niñas beneficiarias del Barrio Blanquizal con la recreación dirigida y sensibilización sobre la importancia de fomentar los valores y refrigerio para los niños y prendas de vestir para las Madres comunitarias.</div>
                <div className="images-container image-wrap ">
                        {año12.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
                <div>También hicimos eventos en la acción comunal y visitamos varias guarderías llevándoles Paletas.</div>
                <div className="images-container image-wrap ">
                        {año12_2.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
                <div>Estuvimos haciendo un Evento en Robledo Palenque</div>
                <div style={{display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2vh'}}>
                    <img style={{width: '50%', height: 'auto'}} src={año1221} alt="image" />
                    <img style={{width: '90%', height: 'auto'}} src={año1222} alt="image" />
                </div>
            </div>
        )},
        { title: "2013", content: (
            <div>
                <div>Eventos: En la cuarta Brigada nos armaron una carpa en el barrio las margaritas y hicimos un evento para sensibilizar los niños con los títeres y un mensaje para las madres y los niños en el barrio las margaritas regalando refrigerio y material didáctico.</div>
                <div className="images-container image-wrap ">
                        {año13.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
                <div>También invitamos los domingos a la sede de la fundación en la carrera 80 a madres cabeza de familia de blanquizal para regalarles mercados.</div>
            </div>
        )},
        { title: "2015", content: (
            <div>
                <div>Apoyo a viudas de Blanquizal.</div>
                <div className="images-container image-wrap ">
                        {año15.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
                <div>Apoyo Iglesia Blanquizal con la construcción de la  mitad de la plancha.</div>
                <div className="images-container image-wrap ">
                        {año15_2.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
                <div>Eventos acción Comunal Blanquizal 2015.</div>
                <div className="images-container image-wrap ">
                        {año15_3.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
                <div>Eventos de acción comunal en Blanquizal y donación de Biblias.</div>
            </div>
        )},
        { title: "2016", content: (
            <div>
                <div style={{marginTop: '2vh'}}>Se compran dos impresoras y una quemadora de 10 CDS para sacar los DVDS con video historias con valores y video canciones, y los CDS con las conferencias para los Padres y A pudientes.</div>
                <div style={{marginTop: '2vh'}}>Para imprimir los folletos revistas y periódicos, carteleras y las imágenes para colorear y repartir como donación en las Instituciones educativas con el fin de montar el Proyecto “la Cultura del Reino de los cielos” , que Jesucristo la define con el AMOR.</div>
                <div className="images-container image-wrap ">
                        {año16.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
        )},
        { title: "2017", content: (
            <div>
                <div>La fundación realizo la escuela de Padres en el colegio Blanquizal en varias secciones. Se llevo conferencia de prevención de acuerdo a la edad, salón por salón; Donamos a los niños de Preescolar y a los niños de   primero cuatro DVD y CDS; donamos El Libro “Tesoros de la Biblia” Mas 4 DVD Y CDS para todos los niños de Segundo hasta Quinto grado de Educación Básica Primaria y para todo el Bachillerato la Biblia en audio y 2 CDS con Biblia Audio y música que edifica y visitamos otras instituciones educativas con nuestros proyectos con donación de material didáctico salón por salón.</div>
                <div className="images-container image-wrap ">
                        {año17.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
        )},
        { title: "2018-19", content: (
            <div>
                <div>En los años del 2018 y 2019 trabajamos gracias a Dios que nos abrió  las puertas de las Instituciones pertenecientes al Núcleo Educativo 923   donde se sensibilizaron  los 24 Rectores del núcleo y la mayoría de los Profesores de ética y valores y religión : y repartimos el material didáctico y  lleve las conferencia de acuerdo a loa edad , en todos los salones Mariscal Robledo , Jorge Roblero, García Herreros ,Camilo Mora , la piedad, la Institución Olaya Herrera.</div>
                <div style={{color: 'gold'}}>Sensibilización a los 24 rectores del núcleo 923</div>
                <div className="images-container image-wrap ">
                        {año18.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
                <div style={{color: 'gold'}}>Donación de Biblias para las Bibliotecas.</div>
                <div className="images-container image-wrap ">
                        {año18_2.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
                <div style={{color: 'gold'}}>Carteleras para los  patios.</div>
                <div className="images-container image-wrap ">
                        {año18_3.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
                <div style={{color: 'gold'}}>imágenes para colorear.</div>
                <div className="images-container image-wrap ">
                        {año18_4.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
                        <div className="images-container image-wrap ">
                        {año17.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
        )},
        { title: "2020", content: (
            <div>
                <div>En el año 2020 con la pandemia nos dedicamos a visitar todas las unidades de interés social  en la Aurora por la terminal del metro cable de pajarito , por Robledo las que están por Territorio y por san Javier el perpetuo socorro, en la Iguana , mucha  por calasancia: quintas de Calasanz la Arboleda, unidad los colores, por Calasanz, sol naciente y sol creciente. Y trabajamos por las calles utilizando el parlante que tiene la camioneta de la fundación. Descubrimos que hay en los barrios niños consumiendo la marihuana y jugando tabla uija, y que son mucho mas interesados los niños y Padres de familia de las unidades de interés social.</div>
                <div className="images-container image-wrap ">
                        {año20.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
        )},
        { title: "2021", content: (
            <div>
                <div>La Fundación Volver a Nacer centra sus actividades ejecutando tres proyectos para impartir valores bíblicos a niños, niñas y adolescentes en edad escolar. El contenido del proyecto COLOMBIA VUELVE A NACER CON LA CULTURA DEL AMOR se encuentra expuesto en la página web: www.fundacionvolveranacer.org y en los videos a continuación:</div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/hH7-zds8jfI?si=-IbWeVGZ0wn5LpKC'}/>
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/V21CpLQQsm4?si=Utd55DbfFf71rKCP'}/>
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/7gL9CrBe-VQ?si=4xmY7hPVHhURK0R_'}/>                    
                </div>
                <hr />
                <div>Al  principio del El 2021 nos mandaron de la Secretaria de Educación el listado de todos los núcleos de Medellín para conseguir los contactos con todos los Rectores de las Instituciones Educativas de Medellín, como única alternativa para prevenir, hasta que permitan la entrada a los colegios,   para que por medio de nuestra pág. WEB fundacionvolveranacer.org  podamos llegar a todos los  profesores de Ética y valores y religión y así lograr que el proyecto : COLOMBIA VUELVE A NACER CON LA CULTURA DEL AMOR y así sea una transformación integral de la educación con  el valor más importante : “EL AMOR”.</div>                
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/YK-RtypE6Ss?si=QU_P_sEAyLb0scEF'}/>                                       
                </div>
                <hr />
                <div>La fundación se dedicó a concientizar todos los días a los Padres, Madres y Adolescentes   en las filas de vacunación de la clínica de la 80, donando versículos para colorear como Juan 14:2-3 y Apocalipsis 3:19-21</div>
                <div style={{marginTop: '2vh'}}>Una vez finalizadas las jornadas en la cínica de la  80, se continuó el trabajo en las filas de vacunación en el estadio, actividad que luego fue suspendida tres meses por contraer el COVID.  Luego de terminar la incapacidad, se continuó el trabajo  de publicidad para prevenir el abuso y la entrega de versículos para colorear hasta que terminaron las jornadas de vacunación en el estadio en febrero de 2022.</div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/HpWeWYkgWWc?si=L_Xm_E_6AV69X13z'}/>
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/ly3z9daERI4?si=A5Nq5eMJu6uyrevu'}/>
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/37Hzp2MXp0M?si=MpwxMWKiuW7ZQRCE'}/>
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/dXZjBGvgwhU?si=mNd0FGfP4vjX8b8k'}/>                    
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/dSUHoa5Ju5g?si=BVXgEwExYwwyQF4O'}/>
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/TAZ-UVsgXQw?si=aK4aN1V9IUBwewZW'}/>
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/M63gs1Y99jA?si=U_T0tTvqOiKQuv1u'}/>
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/K8Q8t8QscpE?si=rI_eewCN0Wdt9aEy'}/>                    
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/k02iz7sWUK4?si=ArIaIaYwFojopPo6'}/>                                       
                </div>
                <hr />
                <div>La fundación esta apoyando la Iglesia Blanquizal con el montaje de la puerta  para a futuro poder montar el proyecto de una guardería.</div>                
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/eWOH82E_PKQ?si=0gGsKBxWT8FnhjCR'}/>                                       
                </div>
                <hr />
                <div>La fundación en noviembre montó un concurso de memorizar versículos bíblicos en la Iglesia blanquizal, donde los niños se ganaron dos bicicletas y donamos balones a todos los niños y niñas.  También, la fundación en diciembre monto el concurso de memorizar versículos como el de la preminencia del AMOR en la Iguana y recibieron premios de muñecas y carritos , comprados en los Marinillos.</div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'Blanquizal'} url={'https://www.youtube.com/embed/YvlGKxVVX20?si=CHKphWp3oaMe2Qph'}/>     
                    <VideoSyntax text={'La Iguaná'} url={'https://www.youtube.com/embed/XB7zCax5ri0?si=JKeTIlbFj8jJQUVC'}/>                                    
                </div>
                <hr />
                <div>La fundación apoya  con mercados a Señoras viudas con niños y a familias de venezolanos con necesidades alimenticias.</div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/ovz1V7ZjwXc?si=QgVPS0ew8DaCAZro'}/>                                                          
                </div>
                <hr />
                <div className="images-container image-wrap ">
                        {año21.map((image, index) => (
                            <div key={index} className="image-wrapper-container-historia" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <img
                                className={image.className}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image)}
                            />
                            <div style={{width: '100%', textAlign: 'center', color: 'gold'}}>{image.texto} </div> 
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
                <div>Como parte de la divulgación de valores bíblicos, la fundación continúa impulsando la emisora on line Volver a Nacer Radio, iniciativa que se mantiene por sexto año consecutivo, llevando música y contenidos edificantes en lo espiritual y humano.</div>
            </div>
        )},
        { title: "2022", content: (
            <div>
                <div>Se realizaron visitas a unidades cerradas y colegios llevando los valores bíblicos del evangelio en respuesta al acelerado consumo de drogas y pornografía.  En las visitas pudimos constatar que hay mucho interés por parte de los rectores muchos colegios, aunque no de todos.  Lo importante es que ponemos a disposición de todos los que lo soliciten, todo el material basado en valores bíblicos para contribuir a paliar la situación de descomposición social.</div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'Sensibilización ancianos de Blanquizal'} url={'https://www.youtube.com/embed/kMfTjxKZWqw?si=MZZpVVkFMETFBe5g'}/>
                    <VideoSyntax text={'Gracias Mariscal Robledo'} url={'https://www.youtube.com/embed/b-mEGXCRqDk?si=JwtRMAjDgSFpmn5p'}/> 
                    <VideoSyntax text={'Primaria Colegio La Piedad'} url={'https://www.youtube.com/embed/t5HFVc6llqM?si=IS5LQtFmVkSG5_ny'}/>                                                           
                    <VideoSyntax text={'Colegio Consejo de Medellín'} url={'https://www.youtube.com/embed/ixXIjiZPFpU?si=W0pMDYb_ZzP3GjSl'}/> 
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'Premios por memorizar'} url={'https://www.youtube.com/embed/95j5fTiWWnE?si=jAZgmQLpIfOqJRFL'}/>
                    <VideoSyntax text={'Premios Fuente Clara'} url={'https://www.youtube.com/embed/bjXHuyMtSYQ?si=Jm5KWHQmqBp3aJTo'}/> 
                    <VideoSyntax text={'Oración y feliz cumpleaños La Aurora'} url={'https://www.youtube.com/embed/MUbtxTPDa4A?si=1Z-2eQgHsg497hLM'}/>                                                           
                    <VideoSyntax text={'Oración Mariscal Robledo'} url={'https://www.youtube.com/embed/aCn22q1DXKA?si=9pwGWNaLJkglm21b'}/> 
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'Enero-mensaje en vacunación'} url={'https://www.youtube.com/embed/5TtoEChZAWU?si=R7MjIHfG89BwaWx8'}/>
                    <VideoSyntax text={'Lola Gonzáles'} url={'https://www.youtube.com/embed/Q2sBNdlos_k?si=WgixKbUtjYnFG0Ld"'}/> 
                    <VideoSyntax text={'Niños agradecidos con la Fundación-Barrio La La Aurora'} url={'https://www.youtube.com/embed/nKRnaXomMnE?si=8CVQQtg7vwiVT0zq'}/>                                                           
                    <VideoSyntax text={'Gracias a los directivos del Mariscal Robledo'} url={'https://www.youtube.com/embed/CG8cHr56R90?si=G3U2llr8UcBPs-xX'}/> 
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'Colegio Samuel Barrientos'} url={'https://www.youtube.com/embed/LH3ijshk4Y8?si=4bwlngUc9rvDqQwp'}/>
                    <VideoSyntax text={'Colegio Mariscal Robledo'} url={'https://www.youtube.com/embed/TUWlwVRQ-eE?si=VozsYfP2rWMDcEQq'}/> 
                    <VideoSyntax text={'Colegio Mariscal Robledo'} url={'https://www.youtube.com/embed/H3hFZled-n4?si=PP0E31JqS9AmRNce'}/>                                                           
                    <VideoSyntax text={'Colegio Marcos Fidel Suarez'} url={'https://www.youtube.com/embed/CG8cHr56R90?si=MajQFKMq6o94rmap'}/> 
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'Colegio La Piedad Bachillerato'} url={'https://www.youtube.com/embed/JTp4kLGBar4?si=RxQdfBO1GYZT-jbe'}/>
                    <VideoSyntax text={'Premios Memorizar Versículos'} url={'https://www.youtube.com/embed/bHpKiM1nFhQ?si=yeaigeo-Prr5KPAs'}/> 
                    <VideoSyntax text={'Apoyo A Viudas'} url={'https://www.youtube.com/embed/NVWvxMi5kyQ?si=YzhsI5h19mXH7BCh'}/>                                                           
                    <VideoSyntax text={'Urbanizaciones La  Aurora'} url={'https://www.youtube.com/embed/_OejmyL2tuw?si=b2NPwvZH0URq0UZ7'}/> 
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'García Herreros'} url={'https://www.youtube.com/embed/i_aQUUbxxlo?si=DqhNduFZL6utSpbH'}/>
                    <VideoSyntax text={'Conferencia «La Paz De Dios No Es La Paz Del Mundo»'} url={'https://www.youtube.com/embed/CwNjgV_Yt38?si=k_Wyj_5WBuDydeNP'}/>                     
                </div>
            </div>
        )},
        {title: "2023", content: (
            <div>
                <div>La FUNDACIÓN, en 2023, sacó una revista con las historias bíblicas más importantes para los niños de jardín y preescolar hasta 5° grado. La revista, de 28 páginas, es impresa por su fundador en su casa utilizando cuatro impresoras y encuadernada por su esposa. No pedimos donaciones.</div>
                <div style={{marginTop: '2vh'}}>Esta revista bíblica está acompañada de un volante con la explicación del proyecto "¡EL JARDÍN CON EL AMOR DE DIOS!" para jardín y preescolar. Las donamos a las madres de los niños cuando los llevan o recogen en los jardines y preescolares que nos abren las puertas. Esto se hace con el fin de fortalecer los valores de los niños, para que identifiquen lo bueno y rechacen lo malo.</div>
                <div style={{marginTop: '2vh'}}>También donamos esta revista en 1°, 2°, 3°, 4° y 5° grado, afuera o dentro de los colegios, acompañada de un volante que explica el proyecto "¡UNA NIÑEZ CON EL PROPÓSITO DE DIOS!" a las madres o profesoras. Además, incluye 4 versículos bíblicos para colorear, memorizar y hacer una cartelera en las habitaciones de los niños. Estos 4 versículos están alojados en YouTube en fundacionvolveranacer.org con un video de Jesús cantando para apoyar la memorización.</div>
                <div style={{marginTop: '2vh'}}>Estamos montando una página, fundacionvolveranacerkids.org, especialmente para que los niños encuentren videos con valores: 1° video, versículos para memorizar; 2° video, canciones; 3° video, historias bíblicas; 4° video, juegos con valores, para construir y no para destruir.</div>
                <div style={{marginTop: '2vh'}}>El proyecto "¡JÓVENES CONSTRUCTORES DE PAZ!" es para estudiantes de 6° a 11° grado. Donamos periódicos y hacemos conferencias.</div>
                <div style={{marginTop: '2vh'}}>En 2023, repartimos este material didáctico en muchas guarderías y en los colegios: Olaya Herrera, Mariscal Robledo y Blanquizal. También los repartimos en las calles cuando hay oportunidad. Mantenemos la camioneta con revistas y periódicos para donar, y tiene un buen parlante para anunciar las donaciones.</div>                
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={''} url={'https://drive.google.com/file/d/1SZv2uqNGgRukUBajOTjFXBp9bnO5-_kp/preview'}/> 
                    <VideoSyntax text={''} url={'https://drive.google.com/file/d/1CCFFAz62D7OfpeS4EdsOJXYbOI5iBaaC/preview'}/> 
                    <VideoSyntax text={''} url={'https://drive.google.com/file/d/1JPpbk6baUMPTk6ltv3MIeq2cLdFv6yGR/preview'}/> 
                    <VideoSyntax text={''} url={'https://drive.google.com/file/d/17gxBi-uE3lPDamwvnS-360irKpeCb0Ky/preview'}/> 
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={''} url={'https://www.youtube.com/embed/Phq7zV2HJao?si=kmr1J44sgbX0Tmej'}/>                     
                </div>
            </div>
        )},
        {title: "2024", content: (
            <div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'UNIDADES RESIDENCIALES'} url={'https://www.youtube.com/embed/hBr9OIQiPJE?si=rOXgRfT4GflL5DMg'}/> 
                    <VideoSyntax text={'GUARDERIAS PEQUEÑAS'} url={'https://www.youtube.com/embed/l7FqkjB7kB4?si=QJRy-Zrf1qkLZ9Ao'}/> 
                    <VideoSyntax text={'CENTRO INFANTIL BUEN COMIENZO'} url={'https://www.youtube.com/embed/nb0bAWwvUfk?si=XUktFjoNzosHoO6O'}/> 
                    <VideoSyntax text={'INSTITUCIONES EDUCATIVAS'} url={'https://www.youtube.com/embed/lBB2TWB0vG4?si=fzIjt2glpIE6obJ4'}/> 
                </div>
                <div className="video-contenedor-articulos">
                    <VideoSyntax text={'NOTI NOTICIAS EL BAUTISTA EL CORRESPOSAL DE LA VERDAD ABSOLUTA'} url={'https://www.youtube.com/embed/IfJ22U2IOWs?si=39TVrlSkbZ83Zbow'}/> 
                </div>
            </div>
        )}
    ];

    return (
        <div className="Home">
            <Star />            
            <div className="page-container">
                <PrimalNav />
                <Nav />
                <div className="content-page-armadura">
                    <table className="armadura-table">
                        <tbody>
                            {rows.map((row, index) => (
                                <React.Fragment key={index}>
                                    <tr
                                        className="armadura-row"
                                        onClick={() => toggleRow(index)}
                                        style={{
                                            backgroundColor: expandedRow === index ? 'gold' : 'transparent',
                                            color: expandedRow === index ? 'black' : 'inherit',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <td><CiCirclePlus style={{margin: 'auto'}}/>{row.title}</td>
                                    </tr>
                                    {expandedRow === index && (
                                        <tr className="armadura-row-detail">
                                            <td colSpan="1">
                                                <div className="expanded-content">
                                                    {row.content}
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Counter />   
                <Footer />
            </div>
        </div>
    );
}


