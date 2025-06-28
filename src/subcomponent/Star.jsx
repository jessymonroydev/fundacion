import React, { useState, useEffect } from "react";
import '../styles/star.css';
import Logo from '../assets/Logo.png';
import Vector from '../assets/Vector.png';

export default function Star() {
    const [stars, setStars] = useState([]);

    const getNumberOfStars = (width) => {
        if (width < 600) {
            return 1000;
        } else if (width < 900) {
            return 2000;
        } else if (width < 1200) {
            return 3000;
        } else {
            return 3000; // Default number for widths >= 1200
        }
    };

    const generateStars = (numStars) => {
        const newStars = [];
        for (let i = 0; i < numStars; i++) {
            const position = {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
            };
            newStars.push({ ...position, size: 1, color: 'white', originalColor: 'white' });
        }
        setStars(newStars);
    };

    useEffect(() => {
        const updateStars = () => {
            const numStars = getNumberOfStars(window.innerWidth);
            generateStars(numStars);
        };

        updateStars();

        window.addEventListener('resize', updateStars);
        return () => window.removeEventListener('resize', updateStars);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setStars(prevStars => {
                const newStars = prevStars.map(star => {
                    let newSize;
                    if (window.innerWidth < 600) {
                        // Si la pantalla es menor a 600, solo permitir tamaños de 1 o 2
                        newSize = Math.random() < 0.5 ? 1 : 2;
                    } else {
                        // Para pantallas mayores o iguales a 600
                        newSize = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 2 : 3;
                    }
                    return { ...star, size: newSize };
                });

                // Cambiar el color de varias estrellas en cada intervalo
                for (let i = 0; i < 10; i++) {  // Cambiar 10 estrellas en cada intervalo
                    const randomIndex = Math.floor(Math.random() * newStars.length);
                    const randomColor = Math.random();
                    newStars[randomIndex].color = randomColor < 0.25 ? '#994046' :
                                                 randomColor < 0.5 ? '#ca9d50' :
                                                 randomColor < 0.75 ? '#04acfc' :
                                                 'green';
                    newStars[randomIndex].originalColor = 'white';
                }

                return newStars;
            });
        }, 300); // Intervalo reducido a 50ms para una animación más suave

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='star-container'>
            {stars.map((star, index) => (
                <div
                    key={index}
                    className='star'
                    style={{
                        left: star.x,
                        top: star.y,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        backgroundColor: star.color,
                        transition: 'width 0.3s, height 0.3s, background-color 0.3s', // Transiciones más cortas para suavizar cambios
                    }}
                ></div>
            ))}
            <div><img className='Logo' src={Logo} alt="Logo" /></div>
            <div><img className='Vector' src={Vector} alt="Vector" /></div>
        </div>
    );
}
