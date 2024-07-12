import React from 'react';
import '../styles/letrasGlobo.css';
import A from '../assets/letrasGloboAzul/A.png';
import B from '../assets/letrasGloboAzul/B.png';
import C from '../assets/letrasGloboAzul/C.png';
import D from '../assets/letrasGloboAzul/D.png';
import E from '../assets/letrasGloboAzul/E.png';
import F from '../assets/letrasGloboAzul/F.png';
import G from '../assets/letrasGloboAzul/G.png';
import H from '../assets/letrasGloboAzul/H.png';
import I from '../assets/letrasGloboAzul/I.png';
import J from '../assets/letrasGloboAzul/J.png';
import K from '../assets/letrasGloboAzul/K.png';
import L from '../assets/letrasGloboAzul/L.png';
import M from '../assets/letrasGloboAzul/M.png';
import N from '../assets/letrasGloboAzul/N.png';
import Ñ from '../assets/letrasGloboAzul/Ñ.png';
import O from '../assets/letrasGloboAzul/O.png';
import P from '../assets/letrasGloboAzul/P.png';
import Q from '../assets/letrasGloboAzul/Q.png';
import R from '../assets/letrasGloboAzul/R.png';
import S from '../assets/letrasGloboAzul/S.png';
import T from '../assets/letrasGloboAzul/T.png';
import U from '../assets/letrasGloboAzul/U.png';
import V from '../assets/letrasGloboAzul/V.png';
import W from '../assets/letrasGloboAzul/W.png';
import X from '../assets/letrasGloboAzul/X.png';
import Y from '../assets/letrasGloboAzul/Y.png';
import Z from '../assets/letrasGloboAzul/Z.png';

export default function LetrasGloboPequeñasAzul(props) {
  const texto = props.texto;
  
  const letras = {
    A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z
  };

  const reemplazarConImagenes = (textoDorado, textoAzul, textoVerde, textoRojo, textoPlata) => {
    return (
      <div style={{ display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '3px' }}>
        {texto.split(/\b/).map((palabra, index) => {
          if (/[\w\S]/.test(palabra)) {
            return agruparLetras(palabra, index);
          } else if (/\s/.test(palabra)) {
            return <div key={index} style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'transparent' }}></div>;
          } else {
            return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', width: '10px', height: '10px', color: 'white' }} key={index}><div style={{ fontSize: '1.1em', color: '#04acfc', marginTop: '-5px'  }}>{palabra}</div></div>;
          }
        })}
      </div>
    );
  };
  
  const agruparLetras = (palabra, index) => {
    const letrasArray = palabra.split("");
    let grupos = [];
    let grupoActual = [];

    letrasArray.forEach((caracter, index) => {
      if (/[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]/.test(caracter)) { // Acepta letras en español y acentuadas
        grupoActual.push(<img className='letras-globo-pequeñas' key={index} src={letras[caracter.toUpperCase()] || letras[caracter.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")]} alt={caracter} style={{ marginRight: '1px' }} />);
      } else {
        if (grupoActual.length > 0) {
          grupos.push(<div key={index} style={{ display: 'flex', marginRight: '1px' }}>{grupoActual}</div>);
          grupoActual = [];
        }
        grupos.push(<div key={index} style={{ display: 'flex', alignItems: 'center', width: '10px', height: '10px', position: 'relative' }}><div style={{ fontSize: '1.1em', color: '#04acfc', position: 'absolute', top: '-4px', marginTop: '-5px'  }}>{caracter}</div></div>);
      }
    });

    if (grupoActual.length > 0) {
      grupos.push(<div key={letrasArray.length} style={{ display: 'flex', marginRight: '1px' }}>{grupoActual}</div>);
    }

    return grupos;
  };

  return <div>{reemplazarConImagenes(texto)}</div>;
}
