import React from 'react';
import '../styles/letrasGlobo.css';
import A from '../assets/letrasGloboPlata/A.png';
import B from '../assets/letrasGloboPlata/B.png';
import C from '../assets/letrasGloboPlata/C.png';
import D from '../assets/letrasGloboPlata/D.png';
import E from '../assets/letrasGloboPlata/E.png';
import F from '../assets/letrasGloboPlata/F.png';
import G from '../assets/letrasGloboPlata/G.png';
import H from '../assets/letrasGloboPlata/H.png';
import I from '../assets/letrasGloboPlata/I.png';
import J from '../assets/letrasGloboPlata/J.png';
import K from '../assets/letrasGloboPlata/K.png';
import L from '../assets/letrasGloboPlata/L.png';
import M from '../assets/letrasGloboPlata/M.png';
import N from '../assets/letrasGloboPlata/N.png';
import Ñ from '../assets/letrasGloboPlata/Ñ.png';
import O from '../assets/letrasGloboPlata/O.png';
import P from '../assets/letrasGloboPlata/P.png';
import Q from '../assets/letrasGloboPlata/Q.png';
import R from '../assets/letrasGloboPlata/R.png';
import S from '../assets/letrasGloboPlata/S.png';
import T from '../assets/letrasGloboPlata/T.png';
import U from '../assets/letrasGloboPlata/U.png';
import V from '../assets/letrasGloboPlata/V.png';
import W from '../assets/letrasGloboPlata/W.png';
import X from '../assets/letrasGloboPlata/X.png';
import Y from '../assets/letrasGloboPlata/Y.png';
import Z from '../assets/letrasGloboPlata/Z.png';

export default function LetrasGloboPequeñasPlata(props) {
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
            return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', width: '10px', height: '10px', color: 'white' }} key={index}><div style={{ fontSize: '1.1em', color: 'gray', marginTop: '-5px'  }}>{palabra}</div></div>;
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
        grupos.push(<div key={index} style={{ display: 'flex', alignItems: 'center', width: '10px', height: '10px', position: 'relative' }}><div style={{ fontSize: '1.1em', color: 'gray', position: 'absolute', top: '-4px', marginTop: '-5px'  }}>{caracter}</div></div>);
      }
    });

    if (grupoActual.length > 0) {
      grupos.push(<div key={letrasArray.length} style={{ display: 'flex', marginRight: '1px' }}>{grupoActual}</div>);
    }

    return grupos;
  };

  return <div>{reemplazarConImagenes(texto)}</div>;
}
