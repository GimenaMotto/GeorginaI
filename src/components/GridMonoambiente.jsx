import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import image1 from "../images/flyersMonoambiente/1.jpg";
import image2 from "../images/flyersMonoambiente/2.jpg";
import image3 from "../images/flyersMonoambiente/3.jpg";
import image4 from "../images/flyersMonoambiente/4.jpg";
import image5 from "../images/flyersMonoambiente/5.jpg";
import image6 from "../images/flyersMonoambiente/6.jpg";
import image7 from "../images/flyersMonoambiente/7.jpg";
import image8 from "../images/flyersMonoambiente/8.jpg";
import image9 from "../images/flyersMonoambiente/9.jpg";
import image10 from "../images/flyersMonoambiente/10.jpg";


const GridMonoambiente = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isTabletScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.only("md"));

    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        Promise.all([
            loadImage(image1),
            loadImage(image2),
            loadImage(image3),
            loadImage(image4),
            loadImage(image5),
            loadImage(image6),
            loadImage(image7),
            loadImage(image8),
            loadImage(image9),
            loadImage(image10)
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

    return (
        imagesLoaded && (

            <div >

                <Grid container spacing={2} style={{ marginTop: "20px", maxWidth: '90%', marginLeft: isLargeScreen || isMediumScreen ? "90px" : "none" }}>
                    {/* Primera imagen */}

                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/Curadurías/Monoambiente/InneMartino">
                            <div
                                style={{
                                    position: "relative",
                                    width: "75%",
                                    backgroundColor: "#df8f98",
                                    overflow: "hidden",
                                    transition: "background-color 0.3s, opacity 0.3s",
                                    cursor: "pointer",

                                }}
                            >
                                <img
                                    src={image1}
                                    alt="Image 1"
                                    style={{
                                        width: "100%",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </Link>
                    </Grid>
                    {/* Segunda imagen */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/Curadurías/Monoambiente/ÁngelesAscuaMayo">
                            <div
                                style={{
                                    position: "relative",
                                    width: "75%",
                                    backgroundColor: "#df8f98",
                                    overflow: "hidden",
                                    transition: "background-color 0.3s, opacity 0.3s",
                                    cursor: "pointer",

                                }}
                            >
                                <img
                                    src={image2}
                                    alt="Image 2"
                                    style={{
                                        width: "100%",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </Link>
                    </Grid>
                    {/* Tercera imagen */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/Curadurías/Monoambiente/VirNegri">
                            <div
                                style={{
                                    position: "relative",
                                    width: "75%",
                                    backgroundColor: "#df8f98",
                                    overflow: "hidden",
                                    transition: "background-color 0.3s, opacity 0.3s",
                                    cursor: "pointer",

                                }}
                            >
                                <img
                                    src={image3}
                                    alt="Image 3"
                                    style={{
                                        width: "100%",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </Link>
                    </Grid>
                    {/* Cuarta imagen */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/ruta-de-la-cuarta-imagen">
                            <div
                                style={{
                                    position: "relative",
                                    width: "75%",
                                    backgroundColor: "#df8f98",
                                    overflow: "hidden",
                                    transition: "background-color 0.3s, opacity 0.3s",
                                    cursor: "pointer",

                                }}
                            >
                                <img
                                    src={image4}
                                    alt="Image 4"
                                    style={{
                                        width: "100%",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </Link>
                    </Grid>
                    {/* Quinta imagen */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/ruta-de-la-quinta-imagen">
                            <div
                                style={{
                                    position: "relative",
                                    width: "75%",
                                    backgroundColor: "#df8f98",
                                    overflow: "hidden",
                                    transition: "background-color 0.3s, opacity 0.3s",
                                    cursor: "pointer",

                                }}
                            >
                                <img
                                    src={image5}
                                    alt="Image 5"
                                    style={{
                                        width: "100%",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </Link>
                    </Grid>
                    {/* Sexta imagen */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/ruta-de-la-sexta-imagen">
                            <div
                                style={{
                                    position: "relative",
                                    width: "75%",
                                    backgroundColor: "#df8f98",
                                    overflow: "hidden",
                                    transition: "background-color 0.3s, opacity 0.3s",
                                    cursor: "pointer",

                                }}
                            >
                                <img
                                    src={image6}
                                    alt="Image 6"
                                    style={{
                                        width: "100%",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </Link>
                    </Grid>
                    {/* Séptima imagen */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/ruta-de-la-septima-imagen">
                            <div
                                style={{
                                    position: "relative",
                                    width: "75%",
                                    backgroundColor: "#df8f98",
                                    overflow: "hidden",
                                    transition: "background-color 0.3s, opacity 0.3s",
                                    cursor: "pointer",

                                }}
                            >
                                <img
                                    src={image7}
                                    alt="Image 7"
                                    style={{
                                        width: "100%",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </Link>
                    </Grid>
                    {/* Octava imagen */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/ruta-de-la-octava-imagen">
                            <div
                                style={{
                                    position: "relative",
                                    width: "75%",
                                    backgroundColor: "#df8f98",
                                    overflow: "hidden",
                                    transition: "background-color 0.3s, opacity 0.3s",
                                    cursor: "pointer",

                                }}
                            >
                                <img
                                    src={image8}
                                    alt="Image 8"
                                    style={{
                                        width: "100%",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </Link>
                    </Grid>
                    {/* Novena imagen */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/ruta-de-la-novena-imagen">
                            <div
                                style={{
                                    position: "relative",
                                    width: "75%",
                                    backgroundColor: "#df8f98",
                                    overflow: "hidden",
                                    transition: "background-color 0.3s, opacity 0.3s",
                                    cursor: "pointer",

                                }}
                            >
                                <img
                                    src={image9}
                                    alt="Image 9"
                                    style={{
                                        width: "100%",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </Link>
                    </Grid>
                    {/* Décima imagen */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/ruta-de-la-decima-imagen">
                            <div
                                style={{
                                    position: "relative",
                                    width: "75%",
                                    backgroundColor: "#df8f98",
                                    overflow: "hidden",
                                    transition: "background-color 0.3s, opacity 0.3s",
                                    cursor: "pointer",

                                }}
                            >
                                <img
                                    src={image10}
                                    alt="Image 10"
                                    style={{
                                        width: "100%",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </Link>
                    </Grid>
                </Grid>
            </div>

        )
    );
};

export default GridMonoambiente;
