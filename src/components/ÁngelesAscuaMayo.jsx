
import React, { useState, useEffect } from "react";
import { Typography, IconButton, Card, CardContent } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

import image1 from '../images/Monoambiente/ÁngelesAscuaMayo/1.jpg'
import image2 from '../images/Monoambiente/ÁngelesAscuaMayo/2.jpg'
import image3 from '../images/Monoambiente/ÁngelesAscuaMayo/3.jpg'
import image4 from '../images/Monoambiente/ÁngelesAscuaMayo/4.jpg'
import image5 from '../images/Monoambiente/ÁngelesAscuaMayo/5.jpg'
import image6 from '../images/Monoambiente/ÁngelesAscuaMayo/6.jpg'




const ÁngelesAscuaMayo = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        Promise.all([
            loadImage(image1),
            loadImage(image2),
            loadImage(image3),
            loadImage(image4),
            loadImage(image5),
            loadImage(image6),

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
        setCurrentIndex(prevIndex => (prevIndex === 0 ? 5 : prevIndex - 1));
        // document.getElementById('currentImage').scrollIntoView();
    };

    const goToNextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 5 ? 0 : prevIndex + 1));
        // document.getElementById('currentImage').scrollIntoView();
    };

    const titleImageStyle = {
        fontFamily: 'Geologica',
        fontWeight: 300,
        fontSize: '1.1rem',
        // justifyContent: 'center',
        color: '#104d6c',
        marginTop: '10px'
    };

    return (
        imagesLoaded && (
            <div style={{ margin: '60px auto 20px', maxWidth: '100%', overflowX: 'hidden', marginLeft: "90px" }}>
                <Card variant="outlined" style={{ maxWidth: '80%', margin: '0 auto', backgroundColor: '#f0ede6', border: 'none' }}>

                    <CardContent style={{ maxWidth: '100%', overflowY: 'auto' }}>

                        <Typography variant="h5" sx={{ fontFamily: 'Geologica', fontWeight: 300, fontSize: '1.1rem', color: '#104d6c', lineHeight: 1.4, wordWrap: 'break-word' }}>
                            ÁNGELES ASCÚA
                            <br /><br />
                            5 o’clock tea con Angeles
                            <br /><br />
                            ¿Qué y cómo escribir sobre Ángeles Ascúa?
                            <br /><br />
                            Hermana favorita, niña de pocas palabras.
                            <br /><br />
                            Reconozco que cuando llegue a su departamento me costó mucho romper su silencio inmaculado, todas las preguntas
                            que le iba haciendo tenían una respuesta concisa.
                            <br />  <br />
                            - ¿Qué té querés? <br />
                            - Ehhhhh<br /><br />
                            Multiple choice de sabores, de colores, de dibujitos de frutas, entre las dos fuimos traduciendo que té nos podía
                            gustar, y como las palabras no siempre bastan, elegimos por el perfume de los saquitos. De ahí en más todas las
                            decisiones las tomamos de a dos. Ángeles hace muchas cosas en equipo, de esa forma hay más ideas, se plantean
                            puntos de vista distintos, es un acto de responsabilidad compartida.
                            <br />  <br />
                            Todo lo que hay en su espacio tiene la misma lógica, como un gran patchwork de amigos coleccionables, en una pared
                            puede coexistir un Kovensky con un Echen, una foto de L. Arévalo con unas de Warhol, incluso musicalmente une
                            Meiko Kaji con Regina Spector, ella va tejiendo sus favoritos.
                            <br />  <br />
                            De pronto, la presencia espectral de una tercera persona que abrió una puerta, saludó y desapareció... Ángeles me
                            dice mientras me daba un catálogo de lugares: yo viví en Berlín.<br />  <br />
                            Nos despedimos.
                            <br />  <br />
                            Txt: Georgina ieraci
                            <br /><br />
                        </Typography>

                        {/* Flechas de navegación lado a lado encima de las imágenes */}
                        <div style={{ display: 'flex', marginTop: '0px', }}>
                            <IconButton onClick={goToPreviousSlide}><NavigateBefore /></IconButton>
                            <IconButton onClick={goToNextSlide}><NavigateNext /></IconButton>
                        </div>
                        {/* Contenedor de la imagen actual */}
                        <div id="currentImage" style={{ marginTop: '10px', overflow: 'hidden', width: '50%', height: 'auto' }}>
                            {/* Imagen actual */}
                            {currentIndex === 0 && (
                                <>
                                    <img src={image1} alt="Image 1" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Vitrina noche</Typography>
                                </>
                            )}
                            {currentIndex === 1 && (
                                <>
                                    <img src={image2} alt="Image 2" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Presentación 1</Typography>
                                </>
                            )}
                            {currentIndex === 2 && (
                                <>
                                    <img src={image3} alt="Image 3" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Presentación 2</Typography>
                                </>
                            )}
                            {currentIndex === 3 && (
                                <>
                                    <img src={image4} alt="Image 4" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Montaje 1</Typography>
                                </>
                            )}
                            {currentIndex === 4 && (
                                <>
                                    <img src={image5} alt="Image 5" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Final</Typography>
                                </>
                            )}
                            {currentIndex === 5 && (
                                <>
                                    <img src={image6} alt="Image 6" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Detalle selección</Typography>
                                </>
                            )}
                        </div>

                    </CardContent>
                </Card>
            </div >
        )
    );
}
export default ÁngelesAscuaMayo;
