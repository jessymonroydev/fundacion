import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Counter2 = () => {
  const [visitCount, setVisitCount] = useState(null);
  const location = useLocation();
  const url = 'https://api.github.com/repos/jessymonroydev/counters/contents/count.json';
  const token = import.meta.env.VITE_GIT_TOKEN;

  useEffect(() => {
    const getVisitCount = async () => {
      try {
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `token ${token}`,
          },
        });

        const content = JSON.parse(atob(data.content));

        const currentRoute = location.pathname;
        const updatedVisits = content[currentRoute] ? content[currentRoute] + 1 : 1;

        setVisitCount(updatedVisits);

        const updatedContent = {
          ...content,
          [currentRoute]: updatedVisits,
        };

        const newContentEncoded = btoa(JSON.stringify(updatedContent));

        await axios.put(
          url,
          {
            message: `Actualizar contador de visitas para la ruta ${currentRoute}`,
            content: newContentEncoded,
            sha: data.sha,
          },
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
      } catch (error) {
        console.error('Error actualizando el contador:', error);
      }
    };

    getVisitCount();
  }, [location.pathname]);

  return (
    <div>
      {visitCount !== null ? (
        <h1 style={{ fontSize: '2.4em', border: '2px solid gold', color: 'gold', textAlign: 'center', margin: 'auto'}}>Visitas: {visitCount}</h1>
      ) : (
        <h1 style={{ fontSize: '2.4em', border: '2px solid gold', color: 'gold', textAlign: 'center', margin: 'auto'}}>Cargando...</h1>
      )}
    </div>
  );
};

export default Counter2;
