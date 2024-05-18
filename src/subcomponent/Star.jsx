import React, {useState, useEffect} from "react";
import '../styles/home.css'
import Logo from '../assets/Logo.png';
import Vector from '../assets/Vector.png';

export default function Star() {
    const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateRandomPosition = () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    });

    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 1000; i++) {
        const position = generateRandomPosition();
        newStars.push({ ...position, size: 1, color: 'white', originalColor: 'white' });
      }
      setStars(newStars);
    };

    generateStars();

    const interval = setInterval(() => {
      setStars(prevStars => {
        const newStars = prevStars.map(star => ({
          ...star,
          size: Math.random() < 0.5 ? 2 : 4,
        }));

        const randomIndex = Math.floor(Math.random() * newStars.length);
        newStars[randomIndex].color = Math.random() < 0.5 ? '#994046' : '#ca9d50';
        newStars[randomIndex].originalColor = 'white';

        return newStars;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

    return(
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
                transition: 'width 0.5s, height 0.5s, background-color 0.5s',
              }}
            ></div>
          ))}
        <div><img className='Logo' src={Logo} alt="Logo" /></div>
        <div><img className='Vector' src={Vector} alt="Vector" /></div>
      </div>
    );
}