import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import image1 from "../images/flyers3D/1.png";
import image2 from "../images/flyers3D/2.png";
import image3 from "../images/flyers3D/3.jpg";
import image32 from "../images/flyers3D/3.4.jpg"
import image33 from '../images/flyers3D/3.5.jpg'
import image4 from "../images/flyers3D/4.jpg";
import image5 from "../images/flyers3D/5.jpg";
import image6 from "../images/flyers3D/6.jpg";


const Grid3D = () => {
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
            loadImage(image33),
            loadImage(image4),
            loadImage(image5),
            loadImage(image6)
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


    const handleImageHover = (event) => {
        event.target.style.opacity = 0;
    };

    const handleImageLeave = (event) => {
        event.target.style.opacity = 1;
    };

    return (
        imagesLoaded && (
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div style={{ width: "40%", marginTop: "50px" }}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6} lg={3}>
                            <Link to="/3D/Megustótodo">
                                <div
                                    style={{
                                        position: "relative",
                                        width: "210%",
                                        transform: isLargeScreen ? "translate(-90%, 40%)" : ((isTabletScreen || isMediumScreen) ? "translate(0%, 0%)" : "translate(0%, 0%)"),
                                        backgroundColor: "#df8f98",
                                        overflow: "hidden",
                                        transition: "background-color 0.3s, opacity 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={handleImageHover}
                                    onMouseLeave={handleImageLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img
                                            src={image1}
                                            alt="Image 1"
                                            style={{
                                                width: "100%",
                                                display: "block",
                                            }}
                                        />
                                        <p
                                            style={{
                                                position: "absolute",
                                                fontFamily: "Geologica, sans-serif",
                                                fontWeight: 300,
                                                textAlign: "center",
                                                color: "#f0ede6",
                                                fontSize: "18px",
                                                zIndex: -1,
                                            }}
                                        >
                                            Me gustó todo <br />
                                            San Jorge, Santa Fe <br />
                                            2018
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </Grid>


                        <Grid item xs={12} sm={6} lg={3}>
                            <Link to="/3D/WelcomeLaFlorida">
                                <div
                                    style={{
                                        position: "relative",
                                        width: "200%", transform: isLargeScreen ? "translate(-40%,30%)" :
                                            ((isTabletScreen || isMediumScreen) ? "translate(0%,0%)" : "translate(0%,0%)"),
                                        backgroundColor: "#df8f98",
                                        overflow: "hidden",
                                        transition: "background-color 0.3s, opacity 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={handleImageHover}
                                    onMouseLeave={handleImageLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img
                                            src={image2}
                                            alt="Image 2"
                                            style={{
                                                width: "100%",
                                                display: "block",
                                            }}
                                        />
                                        <p
                                            style={{
                                                position: "absolute",
                                                fontFamily: "Geologica, sans-serif",
                                                fontWeight: 300,
                                                textAlign: "center",
                                                color: "#f0ede6",
                                                fontSize: "18px",
                                                zIndex: -1,
                                            }}
                                        >
                                            Welcome La Florida <br />
                                            Santa Cruz de la Sierra, Bolivia <br />
                                            2016
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Link to="/3D/MakeOverPasto">
                                <div
                                    style={{
                                        position: "relative",
                                        width: "150%", transform: isLargeScreen ? "translate(15%, 5%)" :
                                            ((isTabletScreen || isMediumScreen) ? "translate(0%,0%)" : "translate(0%,0%)"),
                                        backgroundColor: "#df8f98",
                                        overflow: "hidden",
                                        transition: "background-color 0.3s, opacity 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={handleImageHover}
                                    onMouseLeave={handleImageLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img
                                            src={image3}
                                            alt="Image 3"
                                            style={{
                                                width: "100%",
                                                display: "block",
                                            }}
                                        />
                                        <p
                                            style={{
                                                position: "absolute",
                                                fontFamily: "Geologica, sans-serif",
                                                fontWeight: 300,
                                                textAlign: "center",
                                                color: "#f0ede6",
                                                fontSize: "18px",
                                                zIndex: -1,
                                            }}
                                        >
                                            Makeover - Pasto <br />
                                            Buenos Aires, Argentina <br />
                                            2013
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Link to="/3D/Kmdedistancia">
                                <div
                                    style={{
                                        position: "relative",
                                        width: "220%", transform: isLargeScreen ? "translate(35%, 25%)" :
                                            ((isTabletScreen || isMediumScreen) ? "translate(0%,0%)" : "translate(0%,0%)"),
                                        backgroundColor: "#df8f98",
                                        overflow: "hidden",
                                        transition: "background-color 0.3s, opacity 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={handleImageHover}
                                    onMouseLeave={handleImageLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img
                                            src={image32}
                                            alt="Image 32"
                                            style={{
                                                width: "100%",
                                                display: "block",
                                            }}
                                        />
                                        <p
                                            style={{
                                                position: "absolute",
                                                fontFamily: "Geologica, sans-serif",
                                                fontWeight: 300,
                                                textAlign: "center",
                                                color: "#f0ede6",
                                                fontSize: "18px",
                                                zIndex: -1,
                                            }}
                                        >
                                            Km de distancia <br />
                                            Lugar, Bolivia <br />
                                            2011
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Link to="/">
                                <div
                                    style={{
                                        position: "relative",
                                        width: "230%", transform: isLargeScreen ? "translate(-75%, 25%)" :
                                            ((isTabletScreen || isMediumScreen) ? "translate(0%,0%)" : "translate(0%,0%)"),
                                        backgroundColor: "#df8f98",
                                        overflow: "hidden",
                                        transition: "background-color 0.3s, opacity 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={handleImageHover}
                                    onMouseLeave={handleImageLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img
                                            src={image33}
                                            alt="Image 33"
                                            style={{
                                                width: "100%",
                                                display: "block",
                                            }}
                                        />
                                        <p
                                            style={{
                                                position: "absolute",
                                                fontFamily: "Geologica, sans-serif",
                                                fontWeight: 300,
                                                textAlign: "center",
                                                color: "#f0ede6",
                                                fontSize: "18px",
                                                zIndex: -1,
                                            }}
                                        >
                                            Estación Primavera <br />
                                            Cochabamba, Bolivia <br />
                                            2011
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Link to="/">
                                <div
                                    style={{
                                        position: "relative",
                                        width: "155%", transform: isLargeScreen ? "translate(-20%, 5%)" :
                                            ((isTabletScreen || isMediumScreen) ? "translate(0%,0%)" : "translate(0%,0%)"),
                                        backgroundColor: "#df8f98",
                                        overflow: "hidden",
                                        transition: "background-color 0.3s, opacity 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={handleImageHover}
                                    onMouseLeave={handleImageLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img
                                            src={image4}
                                            alt="Image 4"
                                            style={{
                                                width: "100%",
                                                display: "block",
                                            }}
                                        />
                                        <p
                                            style={{
                                                position: "absolute",
                                                fontFamily: "Geologica, sans-serif",
                                                fontWeight: 300,
                                                textAlign: "center",
                                                color: "#f0ede6",
                                                fontSize: "18px",
                                                zIndex: -1,
                                            }}
                                        >
                                            Nunca un verano juntos <br />
                                            Rosario, Santa Fe <br />
                                            2009
                                        </p>
                                    </div>
                                </div>
                            </Link>

                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Link to="/">
                                <div
                                    style={{
                                        position: "relative",
                                        width: "145%", transform: isLargeScreen ? "translate(25%, 5%)" :
                                            ((isTabletScreen || isMediumScreen) ? "translate(0%,0%)" : "translate(0%,0%)"),
                                        backgroundColor: "#df8f98",
                                        overflow: "hidden",
                                        transition: "background-color 0.3s, opacity 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={handleImageHover}
                                    onMouseLeave={handleImageLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img
                                            src={image5}
                                            alt="Image 5"
                                            style={{
                                                width: "100%",
                                                display: "block",
                                            }}
                                        />
                                        <p
                                            style={{
                                                position: "absolute",
                                                fontFamily: "Geologica, sans-serif",
                                                fontWeight: 300,
                                                textAlign: "center",
                                                color: "#f0ede6",
                                                fontSize: "18px",
                                                zIndex: -1,
                                            }}
                                        >
                                            Campin<br />
                                            Rosario, Santa Fe<br />
                                            2008
                                        </p>
                                    </div>
                                </div>
                            </Link>

                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Link to="/">
                                <div
                                    style={{
                                        position: "relative",
                                        width: "145%", transform: isLargeScreen ? "translate(65%, 5%)" :
                                            ((isTabletScreen || isMediumScreen) ? "translate(0%,0%)" : "translate(0%,0%)"),
                                        backgroundColor: "#df8f98",
                                        overflow: "hidden",
                                        transition: "background-color 0.3s, opacity 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={handleImageHover}
                                    onMouseLeave={handleImageLeave}
                                >
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img
                                            src={image6}
                                            alt="Image 6"
                                            style={{
                                                width: "100%",
                                                display: "block",
                                            }}
                                        />
                                        <p
                                            style={{
                                                position: "absolute",
                                                fontFamily: "Geologica, sans-serif",
                                                fontWeight: 300,
                                                textAlign: "center",
                                                color: "#f0ede6",
                                                fontSize: "18px",
                                                zIndex: -1,
                                            }}
                                        >
                                            Mi suegra me mata de risa <br />
                                            Rosario, Santa Fe <br />
                                            2007
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </Grid>

                    </Grid>
                </div>
            </div >
        )
    );
};

export default Grid3D;

