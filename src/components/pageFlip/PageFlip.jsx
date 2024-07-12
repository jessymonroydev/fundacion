import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '../../styles/pdf.css';

//periodicos
import periodico1 from '../../pdf/periodicos/Revista-El-Rapto.pdf';
import periodico2 from '../../pdf/periodicos/El-Bautista-2da-Edicion.pdf';
import periodico3 from '../../pdf/periodicos/El-Bautista-3ra-Edicion.pdf';
import periodico4 from '../../pdf/periodicos/Periodico-El-Bautista-4o-Edicion-La-Armadura.pdf';
import periodico5 from '../../pdf/periodicos/Periodico-El-Bautista-6o-Edicion-Los-dos-caminos.pdf';
import periodico6 from '../../pdf/periodicos/Periodico-El-Bautista-7o-Edicion-El-poder-de-la-Palabra.pdf';
import periodico7 from '../../pdf/periodicos/Periodico-El-Bautista-8o-Edicion-Nueva-jerusalen.pdf';
import periodico8 from '../../pdf/periodicos/Periodico-El-Bautista-9o-Edicion-La-navidad.pdf';
import periodico9 from '../../pdf/periodicos/Periodico-Ataques-conta-la-ninez-y-adolescencia-1.pdf';
import periodico10 from '../../pdf/periodicos/Halloween.pdf';
import periodico11 from '../../pdf/periodicos/Periodico Nueva Jerusalen Octubre.pdf';

//folletos
import folleto1 from '../../pdf/folletos/Curso-para-Capacitadores2redux.pdf';
import folleto2 from '../../pdf/folletos/2-Como-ayudar-a-sus-Hijos.pdf';
import folleto3 from '../../pdf/folletos/7-Revista-Jesucristo.pdf';
import folleto4 from '../../pdf/folletos/3-La-prevencion.pdf';
import folleto5 from '../../pdf/folletos/B.-La-Armadura-de-Dios (2).pdf';
import folleto6 from '../../pdf/folletos/4-LIBRETOS-DE-ALFABETIZACION.pdf';
import folleto7 from '../../pdf/folletos/5-Revista-una-ninez-con-e-proposito-de-Dios-3.pdf';

const pdf = {
    periodico1,
    periodico2,
    periodico3,
    periodico4,
    periodico5,
    periodico6,
    periodico7,
    periodico8,
    periodico9,
    periodico10,
    periodico11,
    folleto1,
    folleto2,
    folleto3,
    folleto4,
    folleto5,
    folleto6,
    folleto7
};

const PDFViewer = ({ ruta, texto }) => {
    const pdfUrl = pdf[ruta];
    const [scale, setScale] = useState(1.0);

    const handleZoomIn = () => setScale(prevScale => Math.min(prevScale + 0.1, 2.0));
    const handleZoomOut = () => setScale(prevScale => Math.max(prevScale - 0.1, 0.5));
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfUrl.split('/').pop();
        link.click();
    };

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div
                className='pdf-container'                
            >
                
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', background: 'transparent' }}>
                    <div>{texto} </div>
                    <div className='button-descargar' onClick={handleDownload}>Descargar PDF</div>
                </div>
                <div                    
                    style={{
                        flex: 1,
                        overflow: 'auto',
                    }}
                >
                    <Viewer fileUrl={pdfUrl} defaultScale={scale} theme='dark'/>
                </div>
            </div>
        </Worker>
    );
};

export default PDFViewer;

