import React from "react";
import { Link } from "react-router-dom";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import image1 from "../images/flyers3D/1.png";
import image2 from "../images/flyers3D/2.png";
import image3 from "../images/flyers3D/3.jpg";
import image4 from "../images/flyers3D/4.jpg";
import image5 from "../images/flyers3D/5.jpg";
import image6 from "../images/flyers3D/6.jpg";

const Grid3D = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isTabletScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.only("md"));


    const handleImageHover = (event) => {
        event.target.style.opacity = 0; // Cambiar la opacidad al 0 al pasar el mouse
    };

    const handleImageLeave = (event) => {
        event.target.style.opacity = 1; // Restaurar la opacidad al 1 al retirar el mouse
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{ width: "40%", marginTop: "50px" }}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={6} lg={4}>
                        <Link to="/">
                            <div
                                style={{
                                    position: "relative",
                                    width: "150%",
                                    transform: isLargeScreen ? "translate(-35%, 15%)" : ((isTabletScreen || isMediumScreen) ? "translate(-35%, 15%)" : "translate(0%, 0%)"),
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
                                            fontSize: "20px",
                                            zIndex: -1, // Asegurar que la etiqueta p esté por encima de la imagen
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


                    <Grid item xs={12} sm={6} lg={4}>
                        <img src={image2} alt="Image 2" style={{
                            width: "135%", transform: isLargeScreen ? "translateY(15%)" :
                                ((isTabletScreen || isMediumScreen) ? "translateX(15%)" : "none")
                        }} />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <img src={image3} alt="Image 3" style={{
                            width: "110%", transform: isLargeScreen ? "translateX(35%)" :
                                ((isTabletScreen || isMediumScreen) ? "translateX(35%)" : "none")
                        }} />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <img src={image4} alt="Image 4" style={{
                            width: "110%", transform: isLargeScreen ? "translate(-20%, -10%)" :
                                ((isTabletScreen || isMediumScreen) ? "translate(-20%)" : "none")
                        }} />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <img src={image5} alt="Image 5" style={{
                            width: "115%", transform: isLargeScreen ? "translate(5%, -10%)" :
                                ((isTabletScreen || isMediumScreen) ? "translate(5%, -10%)" : "none")
                        }} />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <img src={image6} alt="Image 6" style={{
                            width: "110%", transform: isLargeScreen ? "translate(35%)" :
                                ((isTabletScreen || isMediumScreen) ? "translate(35%)" : "none")
                        }} />
                    </Grid>
                </Grid>
            </div>
        </div >
    );
};

export default Grid3D;

