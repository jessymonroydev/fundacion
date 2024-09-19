import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Counter2 = () => {
  const [visitCount, setVisitCount] = useState(null);
  const GIT_FLOWER = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const getVisitCount = async () => {
      const url = 'https://api.github.com/repos/jessymonroydev/counters/contents/count.json?ref=main';
      const token = VITE_GIT_TOKEN; // Usa tu token aquí

      try {
        // Obtener el archivo JSON de GitHub
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `token ${token}`,
          },
        });

        // Decodificar el contenido (viene en base64)
        const content = JSON.parse(atob(data.content));
        const updatedVisits = content.visits + 1;
        setVisitCount(updatedVisits);

        // Actualizar el archivo con el nuevo conteo
        const updatedContent = {
          ...content,
          visits: updatedVisits,
        };

        // Convertir el contenido actualizado a base64
        const newContentEncoded = btoa(JSON.stringify(updatedContent));

        // Subir el archivo actualizado a GitHub
        await axios.put(
          url,
          {
            message: 'Actualizar contador de visitas',
            content: newContentEncoded, // Contenido actualizado
            sha: data.sha, // SHA del archivo existente
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
  }, []);

  return (
    <div>
      {visitCount !== null ? (
        <h1>Visitas totales: {visitCount}</h1>
      ) : (
        <h1>Cargando visitas...</h1>
      )}
    </div>
  );
};

export default Counter2;
