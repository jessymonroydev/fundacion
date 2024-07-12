import React from 'react';
import '../styles/letrasGlobo.css';
import A from '../assets/letrasGloboVerde/A.png';
import B from '../assets/letrasGloboVerde/B.png';
import C from '../assets/letrasGloboVerde/C.png';
import D from '../assets/letrasGloboVerde/D.png';
import E from '../assets/letrasGloboVerde/E.png';
import F from '../assets/letrasGloboVerde/F.png';
import G from '../assets/letrasGloboVerde/G.png';
import H from '../assets/letrasGloboVerde/H.png';
import I from '../assets/letrasGloboVerde/I.png';
import J from '../assets/letrasGloboVerde/J.png';
import K from '../assets/letrasGloboVerde/K.png';
import L from '../assets/letrasGloboVerde/L.png';
import M from '../assets/letrasGloboVerde/M.png';
import N from '../assets/letrasGloboVerde/N.png';
import Ñ from '../assets/letrasGloboVerde/Ñ.png';
import O from '../assets/letrasGloboVerde/O.png';
import P from '../assets/letrasGloboVerde/P.png';
import Q from '../assets/letrasGloboVerde/Q.png';
import R from '../assets/letrasGloboVerde/R.png';
import S from '../assets/letrasGloboVerde/S.png';
import T from '../assets/letrasGloboVerde/T.png';
import U from '../assets/letrasGloboVerde/U.png';
import V from '../assets/letrasGloboVerde/V.png';
import W from '../assets/letrasGloboVerde/W.png';
import X from '../assets/letrasGloboVerde/X.png';
import Y from '../assets/letrasGloboVerde/Y.png';
import Z from '../assets/letrasGloboVerde/Z.png';

export default function LetrasGloboPequeñasVerde(props) {
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
            return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', width: '10px', height: '10px', color: 'white' }} key={index}><div style={{ fontSize: '1em', color: '#699c44', marginTop: '-5px' }}>{palabra}</div></div>;
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
        grupos.push(<div key={index} style={{ display: 'flex', alignItems: 'center', width: '10px', height: '10px', position: 'relative' }}><div style={{ fontSize: '1em', position: 'absolute', top: '-4px', color: '#699c44', marginTop: '-5px' }}>{caracter}</div></div>);
      }
    });

    if (grupoActual.length > 0) {
      grupos.push(<div key={letrasArray.length} style={{ display: 'flex', marginRight: '1px' }}>{grupoActual}</div>);
    }

    return grupos;
  };

  return <div>{reemplazarConImagenes(texto)}</div>;
}
