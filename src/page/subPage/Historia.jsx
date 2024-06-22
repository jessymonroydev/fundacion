import React, { useState } from "react";
import Nav from "../../components/nav/Nav.jsx";
import Star from "../../subcomponent/Star.jsx";
import PrimalNav from "../../components/primalNav/PrimalNav.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { CiCirclePlus } from "react-icons/ci";
import '../../styles/historia.css';
import Gallery from "../../components/gallery/Gallery.jsx";

import año31 from '../../assets/2003/20031.jpg';
import año32 from '../../assets/2003/20032.jpg';
import año33 from '../../assets/2003/20033.jpg';
import año34 from '../../assets/2003/20034.jpg';
import año35 from '../../assets/2003/20035.jpg';
import año36 from '../../assets/2003/20036.jpg';

import año71 from '../../assets/2007/20071.jpg';
import año72 from '../../assets/2007/20072.jpg';
import año73 from '../../assets/2007/20073.jpg';
import año74 from '../../assets/2007/20074.jpg';
import año75 from '../../assets/2007/20075.jpg';
import año76 from '../../assets/2007/20076.jpg';
import año77 from '../../assets/2007/20077.jpg';
import año78 from '../../assets/2007/20078.jpg';
import año79 from '../../assets/2007/20079.jpg';
import año710 from '../../assets/2007/200710.jpg';
import año711 from '../../assets/2007/200711.jpg';
import año712 from '../../assets/2007/200712.jpg';

export default function ElMundo() {
    const [expandedRow, setExpandedRow] = useState(0);

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    const rows = [
        { title: "Historia", content: (
            <div>
                <div>La Fundación Volver a Nacer surge gracias a la iniciativa de sus fundadores; Cesar Tulio Méndez Montoya y Tulia María Quintero Hoyos, que al ver los niños y niñas de la ciudad de Medellín habitando las calles, sin alimentación y consumiendo sacool a muy temprana edad, deciden disponer de sus propios recursos para amparar los niños y niñas que más los necesitaban. Jurídicamente la fundación se estableció el 1 de octubre de 1997 tras siete años de actividades preliminares de ayuda a los niños y niñas de la ciudad de Medellín.</div>
            </div>
        )},
        { title: "1995", content: "En 1995 Se arrienda una finca ubicada en Belén Aguas Frías en Medellín, donde se iniciaron labores apoyando a 8 niños y niñas en situaciones desfavorables entre los 3 y 6 años de edad, brindándoles alimentación, albergue, recreación y orientación a sus familias.  El ICBF constató nuestra labor en esa finca y nos dieron la personería jurídica." },
        { title: "2003", content: (<div>
            <div>El año 2003 la fundación se dedicó a visitar el barrio Santo Domingo con el fin de llevar alimentación a los niños.  Esta actividad se realizaba cada ocho días donde se le compartía a los niños un rico sancocho y se le regalaba material didáctico.</div>
            <Gallery selected={'2003'} />
        </div>)},
        { title: "2004-06", content: "En los años 2004 y 2006 se realizan actividades enfocadas hacia la prevención de consumo de sustancias psicoactivas en los niños y adolescentes, interviniendo 12 instituciones educativas entre públicas y privadas, a través de charlas y conferencias desarrolladas salón por salón con temas relacionados con el consumo de drogas, además se repartió material litográfico “EL LIBRO DE LA VIDA” con mensajes de ayuda, siempre fomentando el rescate de los valores éticos, morales y espirituales." },
        { title: "2007-10", content: (
            <div>
                <img className="img-20071" src={año712} alt="2007 portada" />
                <div>Se adquirió en una finca en la vía San Pedro en la vereda el YARUMO El Proyecto “EL JARDIN CON EL AMOR DE DIOS”, con niñas de 3 a 5 años, de hogares disfuncionales del Sector NIQUITAO (San Diego) y demostramos con este proyecto que acercando los niños a JESUS DE NAZARET, por medio de video caricaturas con valores y memorizando corintios 13:4-6 relacionado con: “El Amor”, fueron las mejores estudiantes en la Institución Educativa La Unión, en jardín y primero primaria.</div>
                <div>Descubrimos con este proyecto que los niños dependen de los valores y cultura de sus Madres que los educan.</div>
                <div>Nos vimos obligados a terminar con el proyecto porque cuando las niñas se quedaban en sus casas por un fin de semana, llegaban contaminadas de los antivalores y anticultura de sus hogares, y porque el ICBF nos exigía un celador de día y de noche y psicólogos todos los días. La distancia y los sueldos no lo permitieron.</div>
                <div>En conclusión después de analizarlo todo los comportamientos de los jóvenes de hoy son por no haberlos acercado a Jesús desde niños, lo comprobamos con los resultados certificados por la Institución Educativa la Unión</div>
                <div className="his-año-img">
                    <img className="img-2007" src={año71} alt="2007 imagen" />
                    <img className="img-2007" src={año72} alt="2007 imagen" />
                    <img className="img-2007" src={año73} alt="2007 imagen" />
                    <img className="img-2007" src={año74} alt="2007 imagen" />
                    <img className="img-2007" src={año75} alt="2007 imagen" />
                    <img className="img-2007" src={año76} alt="2007 imagen" />
                    <img className="img-2007" src={año77} alt="2007 imagen" />
                    <img className="img-2007" src={año78} alt="2007 imagen" />
                    <img className="img-2007" src={año79} alt="2007 imagen" />
                    <img className="img-2007" src={año710} alt="2007 imagen" />
                    <img className="img-2007" src={año711} alt="2007 imagen" />
                </div>
            </div>
        )},
        { title: "2011", content: "Participación del bazar de la familia para la integración de las Madres comunitarias de la ASOCIACION DULCE INFANCIA del ICBF con 208 Niños Y Niñas beneficiarias del Barrio Blanquizal con la recreación dirigida y sensibilización sobre la importancia de fomentar los valores y refrigerio para los niños y prendas de vestir para las Madres comunitarias" },
        { title: "2012", content: "Contenido detallado para 2012" },
        { title: "2013", content: "Contenido detallado para 2013" },
        { title: "2015", content: "Contenido detallado para 2015" },
        { title: "2016", content: (
            <div>
                <p>Se compran dos impresoras y una quemadora de 10 CDS para sacar los DVDS con video historias con valores y video canciones, y los CDS con las conferencias para los Padres y A pudientes.</p>
                <p>Para imprimir los folletos revistas y periódicos, carteleras y las imágenes para colorear y repartir como donación en las Instituciones educativas con el fin de montar el Proyecto “la Cultura del Reino de los cielos” , que Jesucristo la define con el AMOR.</p>
            </div>
        )},
        { title: "2017", content: "La fundación realizo la escuela de Padres en el colegio Blanquizal en varias secciones. Se llevo conferencia de prevención de acuerdo a la edad, salón por salón; Donamos a los niños de Preescolar y a los niños de primero cuatro DVD y CDS; donamos El Libro “Tesoros de la Biblia” Mas 4 DVD Y CDS para todos los niños de Segundo hasta Quinto grado de Educación Básica Primaria y para todo el Bachillerato la Biblia en audio y 2 CDS con Biblia Audio y música que edifica y visitamos otras instituciones educativas con nuestros proyectos con donación de material didáctico salón por salón" },
        { title: "2018-19", content: "En los años del 2018 y 2019 trabajamos gracias a Dios que nos abrió las puertas de las Instituciones pertenecientes al Núcleo Educativo 923 donde se sensibilizaron los 24 Rectores del núcleo y la mayoría de los Profesores de ética y valores y religión : y repartimos el material didáctico y lleve las conferencia de acuerdo a loa edad , en todos los salones Mariscal Robledo , Jorge Roblero, García Herreros ,Camilo Mora , la piedad, la Institución Olaya Herrera." },
        { title: "2020", content: "Contenido detallado para 2020" },
        { title: "2021", content: "Contenido detallado para 2021" },
        { title: "2022", content: "Se realizaron visitas a unidades cerradas y colegios llevando los valores bíblicos del evangelio en respuesta al acelerado consumo de drogas y pornografía. En las visitas pudimos constatar que hay mucho interés por parte de los rectores muchos colegios, aunque no de todos. Lo importante es que ponemos a disposición de todos los que lo soliciten, todo el material basado en valores bíblicos para contribuir a paliar la situación de descomposición social." }
    ];

    return (
        <div className="Home">
            <Star />
            <PrimalNav />
            <div className="page-container">
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
                <Footer />
            </div>
        </div>
    );
}


