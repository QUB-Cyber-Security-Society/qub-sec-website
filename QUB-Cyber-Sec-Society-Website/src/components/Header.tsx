'use client';

import React, { useState } from 'react';
import { Button, ThemeProvider, Typography } from '@mui/material';
import theme from '../assets/Theme';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'HOME', href: '#home' },
        { name: 'EVENTS', href: '#events' },
        { name: 'COMMITTEE', href: '#committee' },
        { name: 'LAB', href: '#lab' },
        { name: 'SOCIALS', href: '#socials' },
    ];

    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h1" sx={{ color: theme.palette.secondary.main }}>
                QUB Cyber Security Society
            </Typography>
            <Button
                variant="contained"
                color="error"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                Menu
            </Button>
</ThemeProvider>
    );
};
