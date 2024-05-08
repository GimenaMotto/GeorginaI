import React, { useState, useEffect } from "react";
import { Typography, IconButton, Card, CardContent } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

import image1 from '../images/EstaciónPrimavera/1.jpg';
import image2 from '../images/EstaciónPrimavera/2.jpg';
import image3 from '../images/EstaciónPrimavera/3.jpg';
import image4 from '../images/EstaciónPrimavera/4.jpg';

const EstacionPrimavera = () => {

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
            <div style={{ margin: '60px auto 20px', maxWidth: '100%', overflowX: 'hidden' }}>
                <Card variant="outlined" style={{ maxWidth: '80%', margin: '0 auto', backgroundColor: '#f0ede6', border: 'none' }}>

                    <CardContent style={{ maxWidth: '100%', overflowY: 'auto' }}>

                        <Typography variant="h5" sx={{ fontFamily: 'Geologica', fontWeight: 300, fontSize: '1.1rem', color: '#104d6c', lineHeight: 1.4, wordWrap: 'break-word' }}>
                            ESTACIÓN PRIMAVERA
                            <br /><br />
                            La Bienal de Arte Urbano de Cochabamba 2011, evento organizado por Fundación Imagen y gestionado por el proyecto mARTadero, tuvo como misión promover, mediante la acción y el arte, la revaloración, y reformulación del barrio “Villa Coronilla”, zona marginada y abandonada de la ciudad. Dicho evento es la continuación de una profunda etapa de transformación y desarrollo de la zona a nivel: cultural, artístico, social, patrimonial y económico. La BAU duró 2 semanas, desde el 23 de septiembre al 8 de octubre y contó con la participación de artistas tanto nacionales como internacionales y dentro de este marco <strong style={{ fontWeight: 'bold' }}>GreenGraffiti® Bolivia Bolivia Bolivia Bolivia</strong>, convocó a la artista argentina Georgina Ieraci para darle vida a una estación de servicio en estado de deterioro. La obra consistió en estampar en los pilares del lugar, previamente repintados, unas guardas ornamentales construidas a partir de una placa de acero, diseño de Georgina Ieraci y Lucas Silvestri.
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
                                    <Typography variant="h6" sx={titleImageStyle}>Ornamental</Typography>
                                </>
                            )}
                            {currentIndex === 1 && (
                                <>
                                    <img src={image2} alt="Image 2" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Ornamental frío</Typography>
                                </>
                            )}
                            {currentIndex === 2 && (
                                <>
                                    <img src={image3} alt="Image 3" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Ornamental calido</Typography>
                                </>
                            )}
                            {currentIndex === 3 && (
                                <>
                                    <img src={image4} alt="Image 4" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Ieraci - Silvestri</Typography>
                                </>
                            )}
                        </div>

                    </CardContent>
                </Card>
            </div >
        )
    );
};

export default EstacionPrimavera;
