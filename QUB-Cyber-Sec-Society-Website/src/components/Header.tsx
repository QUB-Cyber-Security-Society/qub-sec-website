import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, IconButton, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SecurityIcon from '@mui/icons-material/Security';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navItems = [
        { name: 'HOME', href: '#home' },
        { name: 'COMMITTEE', href: '#committee' },
        { name: 'LAB', href: '#lab' },
        { name: 'SOCIALS', href: '#socials' },
        { name: 'EVENTS', href: '#socials' },
    ];

    const MotionBox = motion(Box);

    return (
        <MotionBox
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                bgcolor: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(8px)',
                borderBottom: `1px solid ${theme.palette.text.primary}20`,
            }}
        >
            <Container>
                <Box sx={{
                    py: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <MotionBox
                        whileHover={{ scale: 1.05 }}
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                        <SecurityIcon sx={{ color: theme.palette.text.primary, fontSize: 32 }} />
                        <Typography
                            variant="h6"
                            sx={{
                                color: theme.palette.text.primary,
                                fontFamily: 'monospace',
                                letterSpacing: 1
                            }}
                        >
                            QUB Cyber Security Society
                        </Typography>
                    </MotionBox>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 4 }}>
                            {navItems.map((item) => (
                                <Box
                                    key={item.name}
                                    component="a"
                                    href={item.href}
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: theme.palette.text.primary,
                                        },
                                    }}
                                >
                                    <MotionBox
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'monospace',
                                                letterSpacing: 1,
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </MotionBox>
                                </Box>
                            ))}
                        </Box>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <IconButton
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            sx={{ color: theme.palette.text.primary }}
                        >
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    )}
                </Box>

                {/* Mobile Navigation */}
                {isMobile && isMenuOpen && (
                    <MotionBox
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        sx={{
                            bgcolor: 'rgba(0, 0, 0, 0.95)',
                            backdropFilter: 'blur(8px)',
                            borderBottom: `1px solid ${theme.palette.text.primary}20`,
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, py: 2 }}>
                            {navItems.map((item) => (
                                <Box
                                    key={item.name}
                                    component="a"
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        textDecoration: 'none',
                                        px: 2,
                                        py: 1,
                                        '&:hover': {
                                            color: theme.palette.text.primary,
                                        },
                                    }}
                                >
                                    <MotionBox
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'monospace',
                                                letterSpacing: 1,
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </MotionBox>
                                </Box>
                            ))}
                        </Box>
                    </MotionBox>
                )}
            </Container>
        </MotionBox>
    );
};
