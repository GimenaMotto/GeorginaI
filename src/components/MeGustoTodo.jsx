import React, { useState, useEffect } from "react";
import { Typography, IconButton, Card, CardContent } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

import image1 from '../images/Megustótodo/1.jpg';
import image2 from '../images/Megustótodo/2.jpg';
import image3 from '../images/Megustótodo/3.jpg';
import image4 from '../images/Megustótodo/4.jpg';

const MeGustoTodo = () => {

    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        Promise.all([
            loadImage(image1),
            loadImage(image2),
            loadImage(image3),
            loadImage(image4),

        ]).then(() => {
            setImagesLoaded(true);
        }).catch(error => {
            console.error("Error loading images:", error);
        });
    }, []);

    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => reject(`Error loading image: ${src}`);
            img.src = src;
        });
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? 3 : prevIndex - 1));
        // document.getElementById('currentImage').scrollIntoView();
    };

    const goToNextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 3 ? 0 : prevIndex + 1));
        // document.getElementById('currentImage').scrollIntoView();
    };

    return (
        imagesLoaded && (
            <div style={{ margin: '60px auto 20px', maxWidth: '100%', overflowX: 'hidden', marginLeft: "90px" }}>
                <Card variant="outlined" style={{ maxWidth: '80%', margin: '0 auto', backgroundColor: '#f0ede6', border: 'none' }}>

                    <CardContent style={{ maxWidth: '100%', overflowY: 'auto' }}>

                        <Typography variant="h5" sx={{ fontFamily: 'Geologica', fontWeight: 300, fontSize: '1.1rem', color: '#104d6c', lineHeight: 1.4, wordWrap: 'break-word' }}>
                            ME GUSTÓ TODO
                            <br /><br />
                            Un heroísmo de la intimidad
                            <br /><br />
                            Una receta de cocina, un diagrama para tejer una prenda, un arreglo floral sencillo, un mapa de la Madre Patria cultural. Las obras de Georgina Ieraci en Me Gustó Todo parecen constituir, a simple vista, el mero homenaje a un ser querido y ausente.
                            Con sus trazos casi invisibles y sus gestos mínimos, los dibujos y objetos hablan de lo que esa persona hizo por ella, es decir, cimentar una sensibilidad basada en el amor por lo pequeño y muchas veces imperceptible. Sin embargo, en una instancia más esencial, señalan la importancia cósmica de recuperar y atesorar esa sensibilidad como un valor, como una forma de estar en el mundo y construir la realidad.
                            Con su humilde belleza, y más allá de los datos anecdóticos que configuran una biografía afectiva, estas obras son actos poéticos- e incluso políticos- de un modesto pero notable heroísmo. El heroísmo de quien decide eludir la espectacularidad y el impacto para tomar refugio en aquellas cosas que, aunque fundamentales, pasan desapercibidas.
                            En tiempos de épicas virtuales y empeños efectistas, donde la cosecha de adhesiones pasajeras y la idolatría de las apariencias atentan contra cualquier sustancia, esta escueta afirmación toma la dimensión de un manifiesto, de una silenciosa declaración de principios.
                            <br /><br />
                            Franco D. Vico - Marzo 2018.
                        </Typography>

                        {/* Flechas de navegación lado a lado encima de las imágenes */}
                        <div style={{ display: 'flex', marginTop: '20px', }}>
                            <IconButton onClick={goToPreviousSlide}><NavigateBefore /></IconButton>
                            <IconButton onClick={goToNextSlide}><NavigateNext /></IconButton>
                        </div>
                        {/* Contenedor de la imagen actual */}
                        <div id="currentImage" style={{ marginTop: '10px', overflow: 'hidden', width: '100%', height: 'auto' }}>
                            {/* Imagen actual */}
                            {currentIndex === 0 && <img src={image1} alt="Image 1" style={{ maxWidth: '50%', height: 'auto', objectFit: 'cover' }} />}
                            {currentIndex === 1 && <img src={image2} alt="Image 2" style={{ maxWidth: '50%', height: 'auto', objectFit: 'cover' }} />}
                            {currentIndex === 2 && <img src={image3} alt="Image 3" style={{ maxWidth: '50%', height: 'auto', objectFit: 'cover' }} />}
                            {currentIndex === 3 && <img src={image4} alt="Image 4" style={{ maxWidth: '50%', height: 'auto', objectFit: 'cover' }} />}
                        </div>

                    </CardContent>
                </Card>
            </div >
        )
    );
};

export default MeGustoTodo;
