'use client';

import React, { useState } from 'react';
import { Button } from '@mui/material';

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
        <header className="bg-gray-900 p-4">
            <h1 className="text-3xl font-bold text-center">QUB Cyber Security Society</h1>
            <Button
                variant="contained"
                color="error"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                Menu
            </Button>
        </header>
    );
};
