import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/count.css'

const Counter = () => {
  const URL_SERVER = import.meta.env.VITE_SERVER_URL;
  const location = useLocation();
  const [hasVisited, setHasVisited] = useState(false);
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    if (!hasVisited) {
      const incrementVisit = async () => {
        try {
          const response = await axios.get(`${URL_SERVER}/count`, {
            params: { route: location.pathname },
          });
          setHasVisited(true);
          setCounter(response.data.count); // Actualizar el contador con el valor devuelto
        } catch (error) {
          console.error('Error incrementing visit count:', error);
        }
      };

      incrementVisit();
    }
  }, [location, hasVisited]);

  return (
    <div>
      <h1 className='count'>VISITAS: {counter !== null ? counter : 'Cargando...'}</h1>
    </div>
  );
};

export default Counter;
