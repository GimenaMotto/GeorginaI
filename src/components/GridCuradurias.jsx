import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import image1 from "../images/flyersCuradurias/1.jpg";
import image2 from "../images/flyersCuradurias/2.png";
import image3 from "../images/flyersCuradurias/3.png";
import image4 from "../images/flyersCuradurias/4.jpg";

const GridCuradurias = () => {
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
            loadImage(image4)
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
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div style={{ width: "75%", marginTop: "120px" }}>
                    <Grid container spacing={1}>
                        {/* Primera imagen */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Link to="/Curadurías/Monoambiente">
                                <div
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        backgroundColor: "#df8f98",
                                        overflow: "hidden",
                                        transition: "background-color 0.3s, opacity 0.3s",
                                        cursor: "pointer",
                                        transform: isLargeScreen ? "translateY(30px)" : "none",
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
                            <Link to="/ruta-de-la-segunda-imagen">
                                <div
                                    style={{
                                        position: "relative",
                                        width: "80%",
                                        backgroundColor: "#df8f98",
                                        overflow: "hidden",
                                        transition: "background-color 0.3s, opacity 0.3s",
                                        cursor: "pointer",
                                        transform: isLargeScreen ? "translate(30px, 0)" : "none",
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
                            <Link to="/ruta-de-la-tercera-imagen">
                                <div
                                    style={{
                                        position: "relative",
                                        width: "83%",
                                        backgroundColor: "#df8f98",
                                        overflow: "hidden",
                                        transition: "background-color 0.3s, opacity 0.3s",
                                        cursor: "pointer",
                                        transform: isLargeScreen ? "translate(10px, 0)" : "none",
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
                                        width: "85%",
                                        backgroundColor: "#df8f98",
                                        overflow: "hidden",
                                        transition: "background-color 0.3s, opacity 0.3s",
                                        cursor: "pointer",
                                        transform: isLargeScreen ? "translate(10px, 0)" : "none",
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
                    </Grid>
                </div>
            </div>
        )
    );
};

export default GridCuradurias;
