
import React, { useState, useEffect } from "react";
import { Typography, IconButton, Card, CardContent } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

import image1 from '../images/Monoambiente/VirNegri/1.jpg'
import image2 from '../images/Monoambiente/VirNegri/2.jpg'
import image3 from '../images/Monoambiente/VirNegri/3.jpg'
import image4 from '../images/Monoambiente/VirNegri/4.jpg'
import image5 from '../images/Monoambiente/VirNegri/5.jpg'





const VirNegri = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        Promise.all([
            loadImage(image1),
            loadImage(image2),
            loadImage(image3),
            loadImage(image4),
            loadImage(image5),


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
        setCurrentIndex(prevIndex => (prevIndex === 0 ? 4 : prevIndex - 1));
        // document.getElementById('currentImage').scrollIntoView();
    };

    const goToNextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 4 ? 0 : prevIndex + 1));
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
                            VIRGINIA NEGRI
                            <br /><br />
                            Una pared de tu casa, un muro que se traslada.   <br /><br />
                            Paredes que hablan, que nos dan mensajes, que nos rodean.   <br /><br />
                            Llego a la casa de Vir Negri y sus paredes son blancas, claro… ¿que esperaba? ¿Qué estuvieran grafitadas?   <br /><br />
                            Nos quedamos mirando una pared…y vienen a mi mente muchos juegos de palabras.   <br /><br />
                            Esta vez no sugiero nada, me quedo escuchando, y decido confiar en la literalidad de una enamorada quien mejor que ella para elegir un muro.

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
                                    <Typography variant="h6" sx={titleImageStyle}>Presentación</Typography>
                                </>
                            )}
                            {currentIndex === 1 && (
                                <>
                                    <img src={image2} alt="Image 2" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>In progress 1</Typography>
                                </>
                            )}
                            {currentIndex === 2 && (
                                <>
                                    <img src={image3} alt="Image 3" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Final</Typography>
                                </>
                            )}
                            {currentIndex === 3 && (
                                <>
                                    <img src={image4} alt="Image 4" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Final nocturna</Typography>
                                </>
                            )}
                            {currentIndex === 4 && (
                                <>
                                    <img src={image5} alt="Image 5" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Detalle</Typography>
                                </>
                            )}

                        </div>

                    </CardContent>
                </Card>
            </div >
        )
    );
}
export default VirNegri;
