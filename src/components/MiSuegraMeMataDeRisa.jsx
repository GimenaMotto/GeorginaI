import React, { useState, useEffect } from "react";
import { Typography, IconButton, Card, CardContent } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

import image1 from '../images/MiSuegraMeMataDeRisa/1.jpg';
import image2 from '../images/MiSuegraMeMataDeRisa/2.jpg';
import image3 from '../images/MiSuegraMeMataDeRisa/3.jpg';
import image4 from '../images/MiSuegraMeMataDeRisa/4.jpg';

const MiSuegraMeMataDeRisa = () => {

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
        setCurrentIndex(prevIndex => (prevIndex === 0 ? 2 : prevIndex - 1));
        // document.getElementById('currentImage').scrollIntoView();
    };

    const goToNextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 2 ? 0 : prevIndex + 1));
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
                            MI SUEGRA ME MATA DE RISA
                            <br /><br />

                        </Typography>

                        <div style={{ display: 'flex' }}>
                            {/* Primera columna con imágenes 1 y 2 */}
                            <div style={{ flex: 1, width: '80%', height: 'auto', marginLeft: '50px', marginTop: '20px' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <img src={image1} alt="Image 1" style={{ display: 'block', width: '60%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Mi suegra</Typography>
                                </div>

                            </div>
                            {/* Segunda columna con flechas de navegación y demás imágenes */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%', height: 'auto', marginLeft: '50px', marginTop: '5px' }}>
                                {/* Flechas de navegación */}
                                <div style={{ display: 'flex', marginBottom: '0px', }}>
                                    <IconButton onClick={goToPreviousSlide}><NavigateBefore /></IconButton>
                                    <IconButton onClick={goToNextSlide}><NavigateNext /></IconButton>
                                </div>
                                {/* Contenedor de la imagen actual */}
                                <div id="currentImage" style={{ overflow: 'hidden', width: '100%', height: 'auto' }}>
                                    {currentIndex === 0 && (
                                        <>
                                            <img src={image2} alt="Image 1" style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }} />
                                            <Typography variant="h6" sx={titleImageStyle}>Montaje</Typography>
                                        </>
                                    )}
                                    {currentIndex === 1 && (
                                        <>
                                            <img src={image3} alt="Image 2" style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }} />
                                            <Typography variant="h6" sx={titleImageStyle}>Me mata de risa</Typography>
                                        </>
                                    )}
                                    {currentIndex === 2 && (
                                        <>
                                            <img src={image4} alt="Image 2" style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }} />
                                            <Typography variant="h6" sx={titleImageStyle}>Lado Derecho</Typography>
                                        </>
                                    )}
                                </div>

                            </div>
                        </div>

                    </CardContent>
                </Card>
            </div >
        )
    );
};

export default MiSuegraMeMataDeRisa;
