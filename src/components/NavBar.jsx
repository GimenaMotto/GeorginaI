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
                        <Typography variant='h5' sx={{ fontFamily: 'Geologica', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.05em', mt: isLargeScreen ? 2 : (isMediumScreen || isTabletScreen) ? 0 : 0, ml: isLargeScreen ? 20 : (isMediumScreen || isTabletScreen) ? 0 : 0 }} className='Geor'>
                            GEORGINA
                            <br />
                            <Typography variant='h5' sx={{ fontFamily: 'Geologica', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.05em', ml: 3.3, mt: 0.8 }} className='Geor' >
                                IERACI
                            </Typography>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', ml: isLargeScreen ? 3 : (isMediumScreen || isTabletScreen) ? 0 : 0 }}>
                            <NavBoxText text='   2D' />
                            <NavBoxText text='        3D' />
                            <NavBoxText text='Curadurías' />
                            <NavBoxText text='Txts' />
                            <NavBoxText text='      Bio' />
                            <NavBoxText text='Statement' />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', mr: isLargeScreen ? 22 : (isMediumScreen || isTabletScreen) ? 0 : 0 }}>
                            <NavBoxCircle to='/2D' />
                            <NavBoxCircle to='/3D' />
                            <NavBoxCircle to='/' />
                            <NavBoxCircle to='/' />
                            <NavBoxCircle to='/' />
                            <NavBoxCircle to='/' />
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>

        </div >
    );
};

const NavBoxCircle = ({ to, margin }) => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isTabletScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.only("md"));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: isLargeScreen ? 3 : (isMediumScreen || isTabletScreen) ? 0 : 0, mt: isLargeScreen ? 1 : (isMediumScreen || isTabletScreen) ? 0 : 0 }}>
            <Link to={to}>
                <Circle sx={{ mt: isLargeScreen ? 1 : (isMediumScreen || isTabletScreen) ? 0 : 0, ml: isLargeScreen ? 13.5 : (isMediumScreen || isTabletScreen) ? 0 : 0 }} className='Circle' />
            </Link>
        </Box>
    );
};

const NavBoxText = ({ text, margin }) => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isTabletScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.only("md"));

    return (
        <Typography variant='h5' sx={{ fontFamily: 'Geologica', fontWeight: 400, fontSize: '1.3rem', ml: isLargeScreen ? 8.7 : (isMediumScreen || isTabletScreen) ? 0 : 0, mr: isLargeScreen ? 2 : (isMediumScreen || isTabletScreen) ? 0 : 0, mt: isLargeScreen ? 1 : (isMediumScreen || isTabletScreen) ? 0 : 0, whiteSpace: 'pre' }} className='navLink'>
            {text}
        </Typography>
    );
};

export default NavBar;
