import React from 'react';
import '../styles/letrasGlobo.css';
import A from '../assets/letrasGloboRojo/A.png';
import B from '../assets/letrasGloboRojo/B.png';
import C from '../assets/letrasGloboRojo/C.png';
import D from '../assets/letrasGloboRojo/D.png';
import E from '../assets/letrasGloboRojo/E.png';
import F from '../assets/letrasGloboRojo/F.png';
import G from '../assets/letrasGloboRojo/G.png';
import H from '../assets/letrasGloboRojo/H.png';
import I from '../assets/letrasGloboRojo/I.png';
import J from '../assets/letrasGloboRojo/J.png';
import K from '../assets/letrasGloboRojo/K.png';
import L from '../assets/letrasGloboRojo/L.png';
import M from '../assets/letrasGloboRojo/M.png';
import N from '../assets/letrasGloboRojo/N.png';
import Ñ from '../assets/letrasGloboRojo/Ñ.png';
import O from '../assets/letrasGloboRojo/O.png';
import P from '../assets/letrasGloboRojo/P.png';
import Q from '../assets/letrasGloboRojo/Q.png';
import R from '../assets/letrasGloboRojo/R.png';
import S from '../assets/letrasGloboRojo/S.png';
import T from '../assets/letrasGloboRojo/T.png';
import U from '../assets/letrasGloboRojo/U.png';
import V from '../assets/letrasGloboRojo/V.png';
import W from '../assets/letrasGloboRojo/W.png';
import X from '../assets/letrasGloboRojo/X.png';
import Y from '../assets/letrasGloboRojo/Y.png';
import Z from '../assets/letrasGloboRojo/Z.png';

export default function LetrasGloboPequeñasRojo(props) {
  const texto = props.texto;
  
  const letras = {
    A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z
  };

  const reemplazarConImagenes = (texto) => {
    return (
      <div style={{ display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '3px' }}>
        {texto.split(/\b/).map((palabra, index) => {
          if (/[\w\S]/.test(palabra)) {
            return agruparLetras(palabra, index);
          } else if (/\s/.test(palabra)) {
            return <div key={index} style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'transparent' }}></div>;
          } else {
            return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', width: '10px', height: '10px', color: 'white' }} key={index}><div style={{ fontSize: '1.1em', color: 'red', marginTop: '-5px'  }}>{palabra}</div></div>;
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
        grupos.push(<div key={index} style={{ display: 'flex', alignItems: 'center', width: '10px', height: '10px', position: 'relative' }}><div style={{ fontSize: '1.1em', position: 'absolute', top: '-4px', color: 'red', marginTop: '-5px' }}>{caracter}</div></div>);
      }
    });

    if (grupoActual.length > 0) {
      grupos.push(<div key={letrasArray.length} style={{ display: 'flex', marginRight: '1px' }}>{grupoActual}</div>);
    }

    return grupos;
  };

  return <div>{reemplazarConImagenes(texto)}</div>;
}
