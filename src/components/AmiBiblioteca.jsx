import React, { useState, useEffect } from "react";
import { Typography, Card, CardContent } from '@mui/material';
import YouTube from "react-youtube";

const AmiBiblioteca = () => {
    // ID del video de YouTube
    const videoId = "BL2fviGBxMo";
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        // Después de 2 segundos, mostrar el video
        const timeout = setTimeout(() => {
            setShowVideo(true);
        }, 1000);

        // Limpiar el timeout al desmontar el componente
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div style={{ margin: '60px auto 20px', maxWidth: '100%', overflowX: 'hidden' }}>
            <Card variant="outlined" style={{ maxWidth: '80%', margin: '0 auto', backgroundColor: '#f0ede6', border: 'none' }}>
                <CardContent style={{ maxWidth: '100%', overflowY: 'auto', position: 'relative' }}>
                    <Typography variant="h5" sx={{ fontFamily: 'Geologica', fontWeight: 300, fontSize: '1.1rem', color: '#104d6c', lineHeight: 1.4, wordWrap: 'break-word' }}>
                        A MI BIBLIOTECA LE CRECEN PLANTAS
                        <br /><br />
                    </Typography>
                    {/* Componente de YouTube */}
                    <YouTube
                        videoId={videoId}
                        opts={{
                            height: "315",
                            width: "560",
                            playerVars: {
                                autoplay: 0
                            }
                        }}
                        style={{ display: showVideo ? "block" : "none" }} // Mostrar el video una vez que esté listo
                    />
                </CardContent>
            </Card>
        </div >
    );
};

export default AmiBiblioteca;
