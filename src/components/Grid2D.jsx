import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

const Grid2D = () => {
    const squareStyle1 = {
        width: '200px', // Tamaño del cuadrado
        height: '200px', // Tamaño del cuadrado
        backgroundColor: '#104d6c', // Fondo azul
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px', // Espacio entre los cuadrados
    };

    const squareStyle2 = {
        width: '200px', // Tamaño del cuadrado
        height: '200px', // Tamaño del cuadrado
        backgroundColor: '#f9c1c3', // Fondo rosa
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px', // Espacio entre los cuadrados
    };

    const textStyle1 = {
        color: '#f9c1c3',// Letra rosa
        fontFamily: 'Geologica, sans-serif',
        fontWeight: 300,
        textAlign: 'center',
        fontSize: "22px",
    };

    const textStyle2 = {
        color: '#104d6c',// Letra azul
        fontFamily: 'Geologica, sans-serif',
        fontWeight: 300,
        textAlign: 'center',
        fontSize: "22px",
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', marginTop: "120px" }}>
            <Grid container spacing={1} justifyContent="center">
                {/* Cuadrados con texto */}
                <Grid item>
                    <Link to="/2D/HomeMaybe" style={{ textDecoration: 'none' }}>
                        <div style={squareStyle1}>
                            <Typography variant="body1" style={textStyle1}>
                                HOME MAYBE
                            </Typography>
                        </div>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/2D/AmiBibliotecaLeCrecenPlantas" style={{ textDecoration: 'none' }}>
                        <div style={squareStyle2}>
                            <Typography variant="body1" style={textStyle2}>
                                A MI BIBLIOTECA LE CRECEN PLANTAS
                            </Typography>
                        </div>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/2D/Croquis" style={{ textDecoration: 'none' }}>
                        <div style={squareStyle1}>
                            <Typography variant="body1" style={textStyle1}>
                                CROQUIS
                            </Typography>
                        </div>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/2D/LaCasaFinal" style={{ textDecoration: 'none' }}>
                        <div style={squareStyle2}>
                            <Typography variant="body1" style={textStyle2}>
                                LA CASA FINAL
                            </Typography>
                        </div>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/2D/Precario" style={{ textDecoration: 'none' }}>
                        <div style={squareStyle1}>
                            <Typography variant="body1" style={textStyle1}>
                                PRECARIO
                            </Typography>
                        </div>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/2D/TemporadaEnRosario" style={{ textDecoration: 'none' }}>
                        <div style={squareStyle2}>
                            <Typography variant="body1" style={textStyle2}>
                                TEMPORADA EN ROSARIO
                            </Typography>
                        </div>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default Grid2D;
