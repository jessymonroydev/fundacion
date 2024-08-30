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

export default function LetrasGlobo(props) {
  const texto = props.texto;

  const letras = {
    A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z
  };

  const reemplazarConImagenes = (texto) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '5px', justifyContent: 'center' }}>
        {texto.split(/\s+/).map((palabra, index) => (
          <div key={index} style={{ display: 'flex', marginRight: '5px' }}>
            {agruparLetras(palabra)}
          </div>
        ))}
      </div>
    );
  };

  const agruparLetras = (palabra) => {
    return palabra.split('').map((caracter, index) => {
      if (/[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]/.test(caracter)) { // Acepta letras en español y acentuadas
        return (
          <img
            className="letras-globo"
            key={index}
            src={letras[caracter.toUpperCase()] || letras[caracter.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")]}
            alt={caracter}
            style={{ marginRight: '2px' }}
          />
        );
      } else {
        return (
          <span
            key={index}
            className="caracter-especial" // Aplica una clase CSS para los caracteres especiales
          >
            {caracter}
          </span>
        );
      }
    });
  };

  return <div>{reemplazarConImagenes(texto)}</div>;
}
