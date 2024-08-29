import React, { useEffect } from 'react';

const GoatCounter = () => {
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://fundacionvolveranacer.goatcounter.com/api/v0/me', {
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 1th9qgte6s4821nnuwz78giigyaiq4ugq2b0ln9mor44sggqc4'
          }
        });

        if (!response.ok) {
          throw new Error('Error al obtener los datos del usuario');
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []); // El array vacío asegura que esto se ejecute solo una vez cuando el componente se monte

  return (
    <div>
      <h1>Mi Componente</h1>
      {/* Otros elementos del componente */}
    </div>
  );
};

export default GoatCounter;
