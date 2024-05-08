import React, { useState, useEffect } from "react";
import { Typography, IconButton, Card, CardContent } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

import image1 from '../images/Kmdedistancia/1.jpg';
import image2 from '../images/Kmdedistancia/2.jpg';
import image3 from '../images/Kmdedistancia/3.jpg';
import image4 from '../images/Kmdedistancia/4.jpg';
import image5 from '../images/Kmdedistancia/5.jpg';
import image6 from '../images/Kmdedistancia/6.jpg';

const Kmdedistancia = () => {
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
            <div style={{ margin: '60px auto 20px', maxWidth: '100%', overflowX: 'hidden', display: 'flex', justifyContent: 'center' }}>
                <Card variant="outlined" style={{ maxWidth: '80%', margin: '0 auto', backgroundColor: '#f0ede6', border: 'none' }}>

                    <CardContent style={{ maxWidth: '100%', overflowY: 'auto' }}>
                        <Typography variant="h5" sx={{ fontFamily: 'Geologica', fontWeight: 300, fontSize: '1.1rem', color: '#104d6c', lineHeight: 1.4, wordWrap: 'break-word' }}>
                            KM DE DISTANCIA
                            <br /><br />
                            ¿Cuál es la distancia para mirar las cosas? ¿Cómo se mide? ¿De qué distancia hablamos?
                            Viajar de un lugar a otro implica una distancia, un punto de partida: Rosario, Argentina y un punto de llegada: Santa Cruz de la Sierra, Bolivia.
                            De aquí en más todo lo que suceda puede ser leído como un recorrido narrativo – afectivo.
                            Llegar sin ninguna referencia a un lugar que no figuraba en mi mapa mental, lo desconocido en su máxima expresión. El único referente, mi padre, quien simplemente me dijo: anda a caminar así conoces.
                            Bolsito rosa al hombro, una cámara pocket, zapatillas cómodas y la hija obediente salió a caminar.
                            Circular, caminar dentro de una telaraña gigante, viajar en líneas de colores, mirar por la ventanilla, esperar inútilmente sentir el viento en la cara. En ese loop calesita, la gente en la primer vuelta aparece, en la segunda la reconoces y en la tercera lo invitas a subir, o te invitan a bajar.
                            Mientras tanto comparas, y como las comparaciones siempre son odiosas, elegí sorprenderme… Mirar de lejos para luego acercarme, del plano al detalle, enfocar y terminar desenfocado, elegir donde poner la mirada, salir sola y volver acompañada, probar colores, mirar sonidos.
                            La distancia se acorta rápidamente y se convierte en cotidianidad, con ella llegan las charlas repetidas, los lugares comunes apropiados, la inercia es protagonista, días beige, canela por la tarde, el Windows se cierra y la noche termina. Sin embargo algo me dice que estoy lejos, lejos en la cercanía, lejos de ser parte, pero cuanto mas lejos mejor así cuando decida parar y volver pueda mirar todo a la distancia.
                        </Typography>

                        {/* Dos columnas */}
                        <div style={{ display: 'flex' }}>
                            {/* Primera columna con imágenes 1 y 2 */}
                            <div style={{ flex: 1, width: '100%', height: 'auto', marginLeft: '50px', marginTop: '50px' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <img src={image1} alt="Image 1" style={{ display: 'block', width: '95%', height: 'auto', objectFit: 'cover' }} />

                                </div>
                                <div>
                                    <img src={image2} alt="Image 2" style={{ display: 'block', width: '95%', height: 'auto', objectFit: 'cover' }} />

                                </div>
                            </div>
                            {/* Segunda columna con flechas de navegación y demás imágenes */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%', height: 'auto', marginLeft: '50px', marginTop: '50px' }}>
                                {/* Flechas de navegación */}
                                <div style={{ display: 'flex', marginBottom: '0px', }}>
                                    <IconButton onClick={goToPreviousSlide}><NavigateBefore /></IconButton>
                                    <IconButton onClick={goToNextSlide}><NavigateNext /></IconButton>
                                </div>
                                {/* Contenedor de la imagen actual */}
                                <div id="currentImage" style={{ overflow: 'hidden', width: '100%', height: 'auto' }}>
                                    {currentIndex === 0 && (
                                        <>
                                            <img src={image3} alt="Image 1" style={{ display: 'block', width: '80%', height: 'auto', objectFit: 'cover' }} />
                                            <Typography variant="h6" sx={titleImageStyle}>De - construcción</Typography>
                                        </>
                                    )}
                                    {currentIndex === 1 && (
                                        <>
                                            <img src={image4} alt="Image 2" style={{ display: 'block', width: '80%', height: 'auto', objectFit: 'cover' }} />
                                            <Typography variant="h6" sx={titleImageStyle}>Este O este</Typography>
                                        </>
                                    )}
                                    {currentIndex === 2 && (
                                        <>
                                            <img src={image5} alt="Image 3" style={{ display: 'block', width: '80%', height: 'auto', objectFit: 'cover' }} />
                                            <Typography variant="h6" sx={titleImageStyle}>Re fresco</Typography>
                                        </>
                                    )}
                                    {currentIndex === 3 && (
                                        <>
                                            <img src={image6} alt="Image 4" style={{ display: 'block', width: '80%', height: 'auto', objectFit: 'cover' }} />
                                            <Typography variant="h6" sx={titleImageStyle}>Secada</Typography>
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

export default Kmdedistancia;
