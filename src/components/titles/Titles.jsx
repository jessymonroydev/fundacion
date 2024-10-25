import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    // Actualizar el título según la ruta actual
    switch (location.pathname) {
      case '/':
        document.title = 'Inicio - Mi App';
        break;
      case '/about':
        document.title = 'Acerca de - Mi App';
        break;
      case '/contact':
        document.title = 'Contacto - Mi App';
        break;
      default:
        document.title = 'Mi App';
        break;
    }
  }, [location]);

  return null;
};

export default PageTitleUpdater;
