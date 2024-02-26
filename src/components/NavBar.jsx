import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { Circle } from '@mui/icons-material';

const NavBar = () => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isTabletScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.only("md"));

    return (
        <div className='NavBar'>

            <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none', mt: 0, pt: 3 }} position="static" className='myAppBar'>
                <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>

                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='h5' sx={{
                            fontFamily: 'Geologica', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.05em',
                            mt: isLargeScreen ? 2 : (isMediumScreen || isTabletScreen) ? 2 : 0, ml: isLargeScreen ? 10 : isMediumScreen ? 5 : isTabletScreen ? 5 : 0
                        }} className='Geor'>
                            GEORGINA
                            <br />
                            <Typography variant='h5' sx={{
                                fontFamily: 'Geologica', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.05em',
                                ml: isLargeScreen ? 3 : (isMediumScreen || isTabletScreen) ? 1.5 : 0, mt: isLargeScreen ? 0.8 : (isMediumScreen || isTabletScreen) ? 0.8 : 0
                            }} className='Geor' >
                                IERACI
                            </Typography>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', ml: isLargeScreen ? 4.3 : (isMediumScreen || isTabletScreen) ? 4.3 : 0 }}>
                            <NavBoxText text='2D' />
                            <NavBoxText text='3D' ml={isLargeScreen ? 14 : (isMediumScreen || isTabletScreen) ? 8.2 : 0} />
                            <NavBoxText text='Curadurías' />
                            <NavBoxText text='Txts' />
                            <NavBoxText text='Bio' ml={isLargeScreen ? 11 : (isMediumScreen || isTabletScreen) ? 5 : 0} />
                            <NavBoxText text='Statement' />
                            <NavBoxText text='Contacto' ml={isLargeScreen ? 4 : (isMediumScreen || isTabletScreen) ? 1.5 : 0} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', mr: isLargeScreen ? 12 : (isMediumScreen || isTabletScreen) ? 12 : 0 }}>
                            <NavBoxCircle to='/2D' />
                            <NavBoxCircle to='/3D' />
                            <NavBoxCircle to='/Curadurías' />
                            <NavBoxCircle to='/Txts' />
                            <NavBoxCircle to='/Bio' />
                            <NavBoxCircle to='/Statement' />
                            <NavBoxCircle to='/Contacto' />
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>

        </div >
    );
};

const NavBoxCircle = ({ to }) => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isTabletScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.only("md"));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: isLargeScreen ? 3 : (isMediumScreen || isTabletScreen) ? 1.5 : 0, mt: isLargeScreen ? 1 : (isMediumScreen || isTabletScreen) ? 1 : 0 }}>
            <Link to={to}>
                <Circle sx={{ mt: isLargeScreen ? 1 : (isMediumScreen || isTabletScreen) ? 1 : 0, ml: isLargeScreen ? 13 : (isMediumScreen || isTabletScreen) ? 9 : 0 }} className='Circle' />
            </Link>
        </Box>
    );
};

const NavBoxText = ({ text, ml }) => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isTabletScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.only("md"));

    return (
        <Typography
            variant='h5'
            sx={{
                fontFamily: 'Geologica',
                fontWeight: 400,
                fontSize: '1.3rem',
                whiteSpace: 'pre',
                ml: ml !== undefined ? ml : (isLargeScreen ? 8.5 : (isMediumScreen || isTabletScreen) ? 4.25 : 0),
                mr: isLargeScreen ? 2 : (isMediumScreen || isTabletScreen) ? 1.7 : 0,
                mt: isLargeScreen ? 1 : (isMediumScreen || isTabletScreen) ? 0.5 : 0
            }}
            className='navLink'
        >
            {text}
        </Typography>
    );
};

export default NavBar;
