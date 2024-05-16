import React, { useState, useEffect } from "react";
import { Typography, IconButton, Card, CardContent } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

import image1 from '../images/Monoambiente/1.jpg';
import image2 from '../images/Monoambiente/2.jpg';
import image3 from '../images/Monoambiente/3.jpg';
import image4 from '../images/Monoambiente/4.jpg';

const Monoambiente = () => {

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
            <div style={{ margin: '0px auto 20px', maxWidth: '100%', overflowX: 'hidden' }}>
                <Card variant="outlined" style={{ maxWidth: '85%', margin: '0 auto', backgroundColor: '#f0ede6', border: 'none' }}>

                    <CardContent style={{ maxWidth: '100%', overflowY: 'auto' }}>

                        <Typography variant="h5" sx={{ fontFamily: 'Geologica', fontWeight: 300, fontSize: '1.1rem', color: '#104d6c', lineHeight: 1.4, wordWrap: 'break-word', marginTop: "30px" }}>
                            MONOAMBIENTE
                            <br /><br />

                            Monoambiente es un solo ambiente, es una pared, es una vitrina que contiene ese ambiente elegido, es un artista. Es un proyecto cultural, es una intervención urbana, es un work in progress…
                            <br /><br />
                            + Monoambiente, estás viendo una pared de mi casa.
                            <br /><br />
                            Monoambiente se ubica en el impreciso límite entre el producto artístico y la gestión cultural, plantea el cruce entre lo público y lo privado. El artista es llamado a exponer públicamente parte de sus objetos cotidianos e íntimos haciendo que éstos dejen de ser lo que eran, donde estaban, para reformularse como una obra de arte en sí mismos. No se trata de mostrar algo “producido” sino algo totalmente espontáneo. El artista traslada “su pared” a la vitrina.
                            <br /><br />
                            El proyecto propicia el acercamiento intimista del observador con el artista y se basa en dos rasgos fundantes: el formato y la propuesta. El espacio consiste en una vitrina de dimensiones reducidas (1,58 x 96 x 15 cm.) donde se invita al artista a exponer un recorte de la pared de un ambiente de su casa, por el término de dos meses.
                            <br /><br />
                            Para nosotros el proceso de selección y de debate con el artista es fundamental: este proceso comienza con una visita a la casa del mismo, se dialoga sobre temas varios, recorremos su casa, miramos sus objetos, sus obras y se discute sobre cuál es la pared a exponer.
                            Una vez terminada esta visita, toda la información obtenida se sube a internet, a través de fotografías y un texto que relata lo vivido:
                            www.tengounmonoambiente.com
                            <br /><br />
                            En el resto de los procesos, montaje, inauguración y duración de la muestra seguimos activos vía web, con fotografías, con textos propios y de otros artistas que escriben sobre conceptos que se desprenden de la “pared – obra”.
                            <br /><br />



                        </Typography>

                        {/* Flechas de navegación lado a lado encima de las imágenes */}
                        <div style={{ display: 'flex', marginTop: '20px', }}>
                            <IconButton onClick={goToPreviousSlide}><NavigateBefore /></IconButton>
                            <IconButton onClick={goToNextSlide}><NavigateNext /></IconButton>
                        </div>
                        {/* Contenedor de la imagen actual */}
                        <div id="currentImage" style={{ textAlign: 'center', marginTop: '10px', overflow: 'hidden', width: '50%', height: 'auto' }}>
                            {/* Imagen actual */}
                            {currentIndex === 0 && <img src={image1} alt="Image 1" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />}
                            {currentIndex === 1 && <img src={image2} alt="Image 2" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />}
                            {currentIndex === 2 && <img src={image3} alt="Image 3" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />}
                            {currentIndex === 3 && <img src={image4} alt="Image 4" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />}
                        </div>

                    </CardContent>
                </Card>
            </div >
        )
    );
};

export default Monoambiente;
