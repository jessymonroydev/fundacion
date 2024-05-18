import React from 'react';
import '../styles/letrasGlobo.css';
import A from '../assets/letrasGlobo/A.png';
import B from '../assets/letrasGlobo/B.png';
import C from '../assets/letrasGlobo/C.png';
import D from '../assets/letrasGlobo/D.png';
import E from '../assets/letrasGlobo/E.png';
import F from '../assets/letrasGlobo/F.png';
import G from '../assets/letrasGlobo/G.png';
import H from '../assets/letrasGlobo/H.png';
import I from '../assets/letrasGlobo/I.png';
import J from '../assets/letrasGlobo/J.png';
import K from '../assets/letrasGlobo/K.png';
import L from '../assets/letrasGlobo/L.png';
import M from '../assets/letrasGlobo/M.png';
import N from '../assets/letrasGlobo/N.png';
import Ñ from '../assets/letrasGlobo/Ñ.png';
import O from '../assets/letrasGlobo/O.png';
import P from '../assets/letrasGlobo/P.png';
import Q from '../assets/letrasGlobo/Q.png';
import R from '../assets/letrasGlobo/R.png';
import S from '../assets/letrasGlobo/S.png';
import T from '../assets/letrasGlobo/T.png';
import U from '../assets/letrasGlobo/U.png';
import V from '../assets/letrasGlobo/V.png';
import W from '../assets/letrasGlobo/W.png';
import X from '../assets/letrasGlobo/X.png';
import Y from '../assets/letrasGlobo/Y.png';
import Z from '../assets/letrasGlobo/Z.png';

export default function LetrasGloboPequeñas(props) {
  const texto = props.texto;
  
  const letras = {
    A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z
  };

  const reemplazarConImagenes = (texto) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',gap: '3px' }}>
        {texto.split(/\b/).map((palabra, index) => {
          if (/[\w\S]/.test(palabra)) {
            return agruparLetras(palabra, index);
          } else if (/\s/.test(palabra)) {
            return <div key={index} style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'transparent' }}></div>;
          } else {
            return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', width: '10px', height: '10px', color: 'white'}} key={index}><div style={{ fontSize: '1em' }}>{palabra}</div></div>;
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
      if (/[a-zA-Z]/.test(caracter)) {
        grupoActual.push(<img className='letras-globo-pequeñas' key={index} src={letras[caracter.toUpperCase()]} alt={caracter} style={{ marginRight: '1px' }} />);
      } else {
        if (grupoActual.length > 0) {
          grupos.push(<div key={index} style={{ display: 'flex', marginRight: '1px' }}>{grupoActual}</div>);
          grupoActual = [];
        }
        grupos.push(<div key={index} style={{ display: 'flex', alignItems: 'center', width: '10px', height: '10px',position: 'relative' }}><div style={{ fontSize: '0.8em', color: '#b57917',position: 'absolute', top: '-4px'}}>{caracter}</div></div>);
      }
    });
  
    if (grupoActual.length > 0) {
      grupos.push(<div key={letrasArray.length} style={{ display: 'flex', marginRight: '1px' }}>{grupoActual}</div>);
    }
  
    return grupos;
  };
  

  return <div>{reemplazarConImagenes(texto)}</div>;
}

