
import React, { useState, useEffect } from "react";
import { Typography, IconButton, Card, CardContent } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

import image1 from '../images/TemporadaEnRosario/1.jpg'
import image2 from '../images/TemporadaEnRosario/2.jpg'
import image3 from '../images/TemporadaEnRosario/3.jpg'
import image4 from '../images/TemporadaEnRosario/4.jpg'
import image5 from '../images/TemporadaEnRosario/5.jpg'
import image6 from '../images/TemporadaEnRosario/6.jpg'



const TemporadaEnRosario = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);


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
            <div style={{ margin: '30px auto 0px', maxWidth: '100%', overflowX: 'hidden' }}>
                <Card variant="outlined" style={{ maxWidth: '80%', margin: '0 auto', backgroundColor: '#f0ede6', border: 'none', display: 'flex' }}>
                    <CardContent style={{ maxWidth: '50%', overflowY: 'auto', marginRight: '20px', marginTop: '30px' }}>
                        <Typography variant="h5" sx={{ fontFamily: 'Geologica', fontWeight: 300, fontSize: '1.1rem', color: '#104d6c', lineHeight: 1.4, wordWrap: 'break-word' }}>
                            TEMPORADA EN ROSARIO
                            <br /><br />

                        </Typography>
                        {/* Primer carrusel */}
                        <div style={{ display: 'flex', marginTop: '0px' }}>
                            <IconButton onClick={goToPreviousSlide}><NavigateBefore /></IconButton>
                            <IconButton onClick={goToNextSlide}><NavigateNext /></IconButton>
                        </div>
                        <div id="currentImage" style={{ marginTop: '10px', overflow: 'hidden', width: '80%', height: 'auto' }}>
                            {currentIndex === 0 && (
                                <>
                                    <img src={image1} alt="Image 1" style={{ display: 'block', width: '80%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Verano</Typography>
                                </>
                            )}
                            {currentIndex === 1 && (
                                <>
                                    <img src={image2} alt="Image 2" style={{ display: 'block', width: '80%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Temporada en Rosario</Typography>
                                </>
                            )}
                            {currentIndex === 2 && (
                                <>
                                    <img src={image3} alt="Image 3" style={{ display: 'block', width: '80%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Visitas</Typography>
                                </>
                            )}
                            {currentIndex === 3 && (
                                <>
                                    <img src={image4} alt="Image 4" style={{ display: 'block', width: '80%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Proyecto cocina</Typography>
                                </>
                            )}
                            {currentIndex === 4 && (
                                <>
                                    <img src={image5} alt="Image 5" style={{ display: 'block', width: '80%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Mudanza</Typography>
                                </>
                            )}

                            {currentIndex === 5 && (
                                <>
                                    <img src={image6} alt="Image 6" style={{ display: 'block', width: '80%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Lavar, secar</Typography>
                                </>
                            )}



                        </div>
                    </CardContent>


                </Card>
            </div>
        )
    );
};

export default TemporadaEnRosario;
