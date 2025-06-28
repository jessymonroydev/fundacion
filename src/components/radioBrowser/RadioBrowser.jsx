import React, { useEffect, useState } from 'react';

const RadioPlayer = ({ estacion }) => {
  const [seleccionado, setSeleccionado] = useState('');

  let renderRadio = null;

  if (estacion === 'adultos') {
    renderRadio = (
      <div style={{width: '100%'}}>
        <div style={{width: '100%', textAlign: 'center', marginTop: '3vh', marginBottom: '3vh'}}>Volver a Nacer Radio</div>
        <iframe 
          src={'https://mediacp15.rootservers.co/AudioPlayer/8046?'} 
          style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '4vh' }} 
          scrolling="no" 
          frameBorder="no">
        </iframe>
      </div>
    );
  } else if (estacion === 'niños') {
    renderRadio = (
      <div style={{width: '80%', display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', gap: '3vh', marginTop: '3vh', height: 'max-content'}}>
        <div>Radio Infantil Cristiana</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '5px', width: '100%', marginBottom: '4vh'}} >
          <img style={{width: '30%', height: 'auto'}}  src="//cdn.onlineradiobox.com/img/l/5/114625.v5.png" alt="emisora niños" />
          <iframe 
            src={'https://stream.zeno.fm/u2gm39by9nhvv'} 
            style={{ width: '100%', height: '100px' }} 
            scrolling="no" 
            frameBorder="no">
          </iframe>
        </div>
      </div>
    );
  }

  return (
    <div>
      {renderRadio}
    </div>
  );
};

export default RadioPlayer;
