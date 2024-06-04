
import React, { useState, useEffect } from "react";
import { Typography, IconButton, Card, CardContent } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

import image1 from '../images/Monoambiente/InneMartino/1.jpg'
import image2 from '../images/Monoambiente/InneMartino/2.jpg'
import image3 from '../images/Monoambiente/InneMartino/3.jpg'
import image4 from '../images/Monoambiente/InneMartino/4.jpg'




const InneMartino = () => {
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
            <div style={{ margin: '60px auto 20px', maxWidth: '100%', overflowX: 'hidden', marginLeft: "90px" }}>
                <Card variant="outlined" style={{ maxWidth: '80%', margin: '0 auto', backgroundColor: '#f0ede6', border: 'none' }}>

                    <CardContent style={{ maxWidth: '100%', overflowY: 'auto' }}>

                        <Typography variant="h5" sx={{ fontFamily: 'Geologica', fontWeight: 300, fontSize: '1.1rem', color: '#104d6c', lineHeight: 1.4, wordWrap: 'break-word' }}>
                            INNE MARTINO
                            <br /><br />
                            Catwoman
                            <br /><br />
                            Rosario, Barcelona, Buenos Aires, Barcelona, Rosario
                            <br /><br />
                            Un ambiente, dos ambientes, una casa familiar, cajas con libros, con fotos, con objetos.
                            <br />  <br />
                            Casa ambulante, chica caracol ¿Cuál es la casa de Inne? Ninguna y todas.
                            <br />  <br />
                            Ella es su casa.
                            <br />  <br />
                            Ahora que sus mascotas – reliquias no están con ella ¿cómo es?. Despojarse de los objetos queridos, de los objetos
                            elegidos le permite extrañarlos, darle otro valor a la sensación de vacío.   <br />  <br />
                            Inne fue la primera que me dejó su pared para que se la cuide mientras ella se iba de vacaciones a su propia casa, y
                            con ella vinieron sus nekos que según la tradición japonesa el mensaje que transmiten cada vez que mueven sus
                            manitos – patitas es :  <br />  <br />
                            Entra, por favor. Eres bienvenido...(Que oportuno el mensaje del gato, nunca tanta literalidad junta)  <br />
                            <br />  <br />
                            LLavecita
                            <br />  <br />
                            “hola inne, como estas? fui a ver tu monoambiente, hoy, supongo que minutos antes del desalojo, fue muy lindo verlo
                            de dia, cuando todavía no había oscurecido, porque daba una sensación de ventana super linda, como mirar a través
                            de algo y encontrar todo eso, que supongo tiene que ver con la intimidad que transmitía, porque no necesariamente
                            por estar a traves del vidrio se pueda lograr esa sensación... bueno me encanto eso, fue como pasar por la puerta de
                            tu casa y que tengas una ventana que de a la calle, correr la cortina, mirar, que sea de dia, y ver toda esa buena vibra
                            de golpe que transmitían los objetos, estaban en posición de veneración casi, me gusto mucho, como que se podía ver
                            en las cosas el paso del tiempo pero a la vez mostraban un cuidado absoluto, como “dioses” tuyos. bueno, no quería
                            dejar de comentarte esto, porque la verdad es que yo de arte sé poco y nada, mas nada que poco, pero las cosas de

                            todos modos me transmiten sensaciones a veces y esta vez fue una sensación muy agradable, cálida y generosa.
                            espero que andes bien, te mando un beso y seguimos por la 2.0 “  <br />  <br />
                            Entregar las llavecitas del monoambiente, tomo la foto para este post salgo y olvido las llaves. Y de dar el upload.  <br />  <br />
                            Sensación rebatible, como un piloto o una puerta secreta de esa de las pelis de superagentes y superespías, pienso en
                            mis amigos que hacen danza y se la pasan hablando del eje y esa es una buena palabra para esto.  <br />  <br />
                            Quiero escribirle a Georg lo que me gustó que me escriban. Que si fueran cartas las pondría en la pared de mi casa
                            donde todo vuelve ahora junto con el texto que es de mi casita virtual pero ahora es real entonces: eso no estaba en
                            mi pared pero ahora sí. Es como si me hubiesen dejado esas cartas por la mínima apertura de la vitrina, por donde C.
                            casi pone el micro gatito que fué el rey único de la casa por estos días.  <br />  <br />
                            y que estoy contenta.  <br />  <br />
                            eso.  <br />  <br />
                            Txt: Georgina ieraci (1y2) Inne Martino (3)
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
                                    <Typography variant="h6" sx={titleImageStyle}>In progress</Typography>
                                </>
                            )}
                            {currentIndex === 2 && (
                                <>
                                    <img src={image3} alt="Image 3" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>In progress 2</Typography>
                                </>
                            )}
                            {currentIndex === 3 && (
                                <>
                                    <img src={image4} alt="Image 4" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                    <Typography variant="h6" sx={titleImageStyle}>Detalle 1</Typography>
                                </>
                            )}
                        </div>

                    </CardContent>
                </Card>
            </div >
        )
    );
}
export default InneMartino;
