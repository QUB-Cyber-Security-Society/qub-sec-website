import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import theme from '../assets/Theme';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
        <Typography variant="h2" sx={{ color: theme.palette.secondary.main }}>
                QUB Cyber Security Society
            </Typography>
            <Button
                variant="contained"
                color="error"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                Menu
            </Button>
            
        </>
    );
};
