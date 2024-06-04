import React, { useState, useEffect } from "react";
import { Typography, IconButton, Card, CardContent } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

import image1 from '../images/MakeoverPasto/1.jpg';
import image2 from '../images/MakeoverPasto/2.jpg';
import image3 from '../images/MakeoverPasto/3.jpg';
import image4 from '../images/MakeoverPasto/4.jpg';

const MakeOverPasto = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const goToPreviousSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? 3 : prevIndex - 1));
        document.getElementById('currentImage').scrollIntoView();
    };

    const goToNextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 3 ? 0 : prevIndex + 1));
        document.getElementById('currentImage').scrollIntoView();
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
            <div style={{ margin: '30px auto 0px', maxWidth: '93%', overflowX: 'hidden', marginLeft: "90px" }}>
                <Card variant="outlined" style={{ maxWidth: '80%', margin: '0 auto', backgroundColor: '#f0ede6', border: 'none', display: 'flex' }}>
                    <CardContent style={{ maxWidth: '50%', overflowY: 'auto', marginRight: '20px', marginTop: '30px' }}>
                        <Typography variant="h5" sx={{ fontFamily: 'Geologica', fontWeight: 300, fontSize: '1.1rem', color: '#104d6c', lineHeight: 1.4, wordWrap: 'break-word' }}>
                            MAKE OVER PASTO
                            <br /><br />

                        </Typography>
                        <div style={{ display: 'flex', marginTop: '0px' }}>
                            <IconButton onClick={goToPreviousSlide}><NavigateBefore /></IconButton>
                            <IconButton onClick={goToNextSlide}><NavigateNext /></IconButton>
                        </div>
                        <div id="currentImage" style={{ marginTop: '10px', overflow: 'hidden', width: '60%', height: 'auto' }}>
                            {currentIndex === 0 && (
                                <>
                                    <img src={image1} alt="Image 1" style={{ display: 'block', width: '90%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Arrinconada</Typography>
                                </>
                            )}
                            {currentIndex === 1 && (
                                <>
                                    <img src={image2} alt="Image 2" style={{ display: 'block', width: '90%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Frágil</Typography>
                                </>
                            )}
                            {currentIndex === 2 && (
                                <>
                                    <img src={image3} alt="Image 3" style={{ display: 'block', width: '90%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Grados de intensidad</Typography>
                                </>
                            )}
                            {currentIndex === 3 && (
                                <>
                                    <img src={image4} alt="Image 4" style={{ display: 'block', width: '90%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Plantada</Typography>
                                </>
                            )}

                        </div>
                    </CardContent>

                </Card>
            </div>
        )
    );

};

export default MakeOverPasto;
