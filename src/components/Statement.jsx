import React from 'react';
import { Typography } from '@mui/material';

const Statement = () => {
    return (
        <div style={{ margin: '60px auto 20px', maxWidth: '1000px' }}>
            <Typography
                variant='h5'
                sx={{
                    fontFamily: 'Geologica',
                    fontWeight: 300,
                    fontSize: '1.2rem',
                    // textAlign: 'center',
                    justifyContent: 'center',
                    color: '#104d6c',
                    textIndent: '20px', // Añadir sangría
                }}
                className='statement'
            >
                {`   Los procesos creativos - productivos que empleo son muy cercanos a los que usamos  en la vida diaria. Guiada por un ansia natural de descubrimiento, me valgo de las  relaciones personales que establezco en cada uno de los lugares que visito y de los  espacios que me motivan. Interconectar artistas - obras y fomentar la colaboración,  parece ser la finalidad de todos mis esfuerzos. Me enriquezco con cada una de las  experiencias que voy acumulando, generando vínculos, creando nuevas conexiones,  dando pie a la formación de redes de comunicación entre mis colaboradores y amigos.  Estas son entre otras las acciones que en conjunto me sirven para dar origen a mis  producciones. Temporalmente, mis obras son un paréntesis entre la rutina diaria que  distorsiona los ritmos de trabajo: se exacerban las intenciones de producir lecturas y  de crear relaciones en medio de una cierta calma que es a conciencia finita, pero que  con el paso de los días se vuelve habitual. En el espacio, uno nuevo e inexplorado, se  supone una necesidad de reconocimiento fugaz pero efectivo y sobre todo, distinto: de  pretensiones ingenuamente abarcadoras pero de modos que lo devuelven a un espacio  rutinario: `}
                <i>otra</i>
                {` rutina.`}
            </Typography>
        </div>
    );
};

export default Statement;
