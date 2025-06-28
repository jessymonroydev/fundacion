import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/count.css';

const Counter = () => {
  const URL_SERVER = import.meta.env.VITE_SERVER_URL;
  const location = useLocation();
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    const incrementVisit = async () => {
      try {
        // Incrementar el contador de visitas
        await axios.post(`${URL_SERVER}/count/increment`, null, {
          params: { route: location.pathname },
        });

        // Obtener el valor actual del contador
        const response = await axios.get(`${URL_SERVER}/count`, {
          params: { route: location.pathname },
        });
        setCounter(response.data.count); // Actualizar el contador con el valor devuelto
      } catch (error) {
        console.error('Error incrementing visit count or fetching the counter:', error);
      }
    };

    incrementVisit();
  }, [location]);

  return (
    <div>
      <h1 className='count'>VISITAS: {counter !== null ? counter : 'Cargando...'}</h1>
    </div>
  );
};

export default Counter;
