import React, { useEffect, useState } from 'react';
import "../../styles/carrousel.css";
import { Carousel } from 'react-responsive-carousel';

import Reino1 from '../../assets/carrousel/reino/Reino1.jpg';
import Reino2 from '../../assets/carrousel/reino/Reino2.jpg';
import Reino3 from '../../assets/carrousel/reino/Reino3.jpg';
import Reino4 from '../../assets/carrousel/reino/Reino4.jpg';
import Reino5 from '../../assets/carrousel/reino/Reino5.jpg';
import Reino6 from '../../assets/carrousel/reino/Reino6.jpg';

import Creacion1 from '../../assets/carrousel/creacion/Creacion1.jpg';
import Creacion2 from '../../assets/carrousel/creacion/Creacion2.jpg';
import Creacion3 from '../../assets/carrousel/creacion/Creacion3.jpg';
import Creacion4 from '../../assets/carrousel/creacion/Creacion4.jpg';
import Creacion5 from '../../assets/carrousel/creacion/Creacion5.jpg';
import Creacion6 from '../../assets/carrousel/creacion/Creacion6.jpg';

import Castigo1 from '../../assets/carrousel/castigo/Castigo1.jpg';
import Castigo2 from '../../assets/carrousel/castigo/Castigo2.jpg';
import Castigo3 from '../../assets/carrousel/castigo/Castigo3.jpg';
import Castigo4 from '../../assets/carrousel/castigo/Castigo4.jpg';
import Castigo5 from '../../assets/carrousel/castigo/Castigo5.jpg';

import LetrasGloboPequeñas from '../../subcomponent/LetrasGloboPequeñas';


export default function Carrousel({carrousel}) {
    const [cCarrousel, setCCarrousel] = useState('');

    useEffect(() => {
        setCCarrousel(carrousel);
    }, [carrousel]);

    const renderCarrouselContent = () => {
        if (cCarrousel === 'reino') {
            return (
                <Carousel 
                    autoPlay = {true}
                    infiniteLoop = {true}    
                    interval = {2000}
                    showThumbs={false}
                    swipeable={false}
                >
                    <div>
                        <img className='imgC' src={Reino1} alt="Reino 1" />
                    </div>
                    <div>
                        <img className='imgC' src={Reino2} alt="Reino 2" />
                    </div>
                    <div>
                        <img className='imgC' src={Reino3} alt="Reino 3" />
                    </div>
                    <div>
                        <img className='imgC' src={Reino4} alt="Reino 4" />
                    </div>
                    <div>
                        <img className='imgC' src={Reino5} alt="Reino 5" />
                    </div>
                    <div>
                        <img className='imgC' src={Reino6} alt="Reino 6" />
                    </div>
                </Carousel>
            );
        } else if (cCarrousel === 'creacion') {
            return (
                <Carousel 
                    autoPlay = {true}
                    infiniteLoop = {true}    
                    interval = {2000}
                    showThumbs={false}
                    swipeable={false}
                >
                    <div>
                        <img className='imgC' src={Creacion1} alt="Creacion 1" />                    
                    </div>
                    <div>
                        <img className='imgC' src={Creacion2} alt="creacion 2" />
                    </div>
                    <div>
                        <img className='imgC' src={Creacion3} alt="creacion 3" />
                    </div>
                    <div>
                        <img className='imgC' src={Creacion4} alt="creacion 4" />
                    </div>
                    <div>
                        <img className='imgC' src={Creacion5} alt="creacion 5" />
                    </div>
                    <div>
                        <img className='imgC' src={Creacion6} alt="creacion 6" />
                    </div>
                </Carousel>
            );
        } else if (cCarrousel === 'castigo') {
            return (
                <Carousel 
                    autoPlay = {true}
                    infiniteLoop = {true}    
                    interval = {2000}
                    showThumbs={false}
                    swipeable={false}
                >
                    <div>
                        <img className='imgC' src={Castigo1} alt="Castigo 1" />
                    </div>
                    <div>
                        <img className='imgC' src={Castigo2} alt="Castigo 2" />
                    </div>
                    <div>
                        <img className='imgC' src={Castigo3} alt="Castigo 3" />
                    </div>
                    <div>
                        <img className='imgC' src={Castigo4} alt="Castigo 4" />
                    </div>
                    <div>
                        <img className='imgC' src={Castigo5} alt="Castigo 5" />
                    </div>
                </Carousel>
            );
        } else {
            return <div>No carrousel available</div>;
        }
    };

    return (
        <div>
            {renderCarrouselContent()}
        </div>
    );
    }