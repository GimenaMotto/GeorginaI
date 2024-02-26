import React from 'react';
import { Typography } from '@mui/material';

const Bio = () => {
    return (
        <div style={{ margin: '80px auto 20px', maxWidth: '80%' }}>
            <Typography
                variant='h5'
                sx={{
                    fontFamily: 'Geologica',
                    fontWeight: 300,
                    fontSize: '1.1rem',
                    // textAlign: 'center',
                    justifyContent: 'center',
                    color: '#104d6c',
                    lineHeight: 1.5,
                }}
                className='statement'
            >
                <span style={{ fontWeight: 'bold' }}>Curriculum</span> <br /><br />
                Licenciada en Bellas Artes, egresada de la Facultad de Humanidades y Artes en la UNR,  (2007) y Técnica en Publicidad, ISET Nº 19 de Rosario (1999). Entre 2003 y 2005  gestioné la Galería Josefina Merienda, espacio alternativo para muestras de arte  contemporáneo en dicha ciudad, junto a Maximiliano Masuelli e Ignacio Argañaras.<br />
                Durante el 2005 formé parte del Equipo Técnico de la Escuela de Bellas Artes de la  Facultad de Humanidades y Artes, encargado de la Restauración del Teatro "El Círculo"  de Rosario.<br />
                En el año 2006 fui pasante en el Equipo de Investigación donde se realizaron tareas de  relevamiento, inventario y documentación en el Cementerio El Salvador a cargo del  Arq. Hebe Bragagnolo.<br />
                Recibí una Beca del Fondo Nacional de las Artes para participar en el Seminario “La  reconstrucción en el arte” a cargo de Jorge Figueroa, dictado en el 2008. El mismo año  realicé clínica de obra en el taller de Marina de Caro y participé en el Workshop dictado  por Martín Kovensky en Casa de Oficio, Papelera Palermo, Buenos Aires.<br />
                Participé en el taller dictado por Lux Linder, en el CCPE de Rosario, actividad realizada  por el Club del Dibujo en el año 2009.<br />
                Recibí una Beca del Fondo Nacional de las Artes por el Proyecto Monoambiente. En 2011  gané el concurso de la Alianza Francesa (Santa Cruz de la Sierra – Bolivia) para Jóvenes  Artistas. En los años sucesivos expuse en muestras individuales en Bs As en la galería  Pasto, nuevamente en Bolivia en el espacio La Florida, en Maria Filomena en la ciudad  de San Jorge, y participé en varias muestras colectivas.<br />
                Durante el año 2016 gestioné y fui curadora del ciclo de muestras mensuales en la Casa  de la Cultura de la ciudad de San Jorge.<br />
                Actualmente vivo y trabajo como docente de arte en San Jorge, Santa Fe, Argentina.<br />
            </Typography>
        </div>
    );
};

export default Bio;
