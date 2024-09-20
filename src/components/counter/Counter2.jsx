import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Para obtener la ruta actual

const Counter2 = () => {
  const [visitCount, setVisitCount] = useState(null);
  const location = useLocation(); // Obtener la ruta actual
  const url = 'https://api.github.com/repos/jessymonroydev/counters/contents/count.json';
  const token = import.meta.env.VITE_GIT_TOKEN; // Asegúrate de tener tu token en el archivo .env

  useEffect(() => {
    const getVisitCount = async () => {
      try {
        // Obtener el archivo JSON desde GitHub
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `token ${token}`,
          },
        });

        // Decodificar el contenido (viene en base64)
        const content = JSON.parse(atob(data.content));

        // Verificar si la ruta actual existe en el archivo
        const currentRoute = location.pathname;
        const updatedVisits = content[currentRoute] ? content[currentRoute] + 1 : 1;

        // Actualizar el estado local del contador
        setVisitCount(updatedVisits);

        // Actualizar el objeto con la nueva entrada o incrementando la existente
        const updatedContent = {
          ...content,
          [currentRoute]: updatedVisits, // Crear o actualizar la entrada de la ruta
        };

        // Convertir el contenido actualizado a base64
        const newContentEncoded = btoa(JSON.stringify(updatedContent));

        // Subir el archivo actualizado a GitHub
        await axios.put(
          url,
          {
            message: `Actualizar contador de visitas para la ruta ${currentRoute}`,
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
  }, [location.pathname]); // Se actualiza cuando cambia la ruta

  return (
    <div>
      {visitCount !== null ? (
        <h1 style={{color: 'white', fontSize: '3em'}}>Visitas para esta ruta: {visitCount}</h1>
      ) : (
        <h1 style={{color: 'white', fontSize: '3em'}}>Cargando visitas...</h1>
      )}
    </div>
  );
};

export default Counter2;
