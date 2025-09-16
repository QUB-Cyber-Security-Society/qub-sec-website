import React from 'react';
import { motion } from 'framer-motion';
import {
  Instagram,
  LinkedIn,
  Mail,
  CalendarMonth,
  OpenInNew,
} from '@mui/icons-material';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Link,
  ThemeProvider,
  createTheme,
} from '@mui/material';
// import Discord from '../assets/Discord-Symbol-Blurple.png';

// Define the dark theme for this component
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    primary: {
      main: '#4caf50', // Green for accents
    },
    secondary: {
      main: '#9e9e9e', // Gray for text
    },
  },
  typography: {
    fontFamily: '"JetBrains Mono", monospace',
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
  },
});

interface SocialLink {
  name: string;
  icon?: React.ElementType;
  url: string;
  description: string;
  followers?: string;
  color?: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  type: 'Workshop' | 'Meeting' | 'Competition' | 'Networking';
  description: string;
}

const eventTypeColors = {
  Workshop: {
    backgroundColor: 'rgba(3, 169, 244, 0.2)',
    color: '#03a9f4',
    borderColor: 'rgba(3, 169, 244, 0.4)',
  },
  Competition: {
    backgroundColor: 'rgba(244, 67, 54, 0.2)',
    color: '#f44336',
    borderColor: 'rgba(244, 67, 54, 0.4)',
  },
  Networking: {
    backgroundColor: 'rgba(156, 39, 176, 0.2)',
    color: '#9c27b0',
    borderColor: 'rgba(156, 39, 176, 0.4)',
  },
  Meeting: {
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    color: '#4caf50',
    borderColor: 'rgba(76, 175, 80, 0.4)',
  },
};

export function Socials() {
  const socialLinks: SocialLink[] = [
    {
      name: 'Discord',
      // icon: Discord as React.ElementType,
      url: 'https://discord.com/invite/tBnbC2egUX',
      description: 'Join our Discord server for real-time updates and discussions',
    },
    {
      name: 'LinkedIn',
      icon: LinkedIn,
      url: 'https://www.linkedin.com/company/qub-cyber-security-society/',
      description: 'Connect with our professional network',
      color: '#1e88e5',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/qubcybersecsoc/',
      description: 'Behind the scenes of our cyber adventures',
      color: '#e91e63',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@cybersecurity-society@qub.ac.uk',
      description: 'Get in touch with our team directly',
      color: '#66bb6a',
    },
  ];

  const upcomingEvents: Event[] = [
    {
      id: '1',
      title: 'Intro to Penetration Testing',
      date: '2025-09-22',
      type: 'Workshop',
      description:
        'Learn the basics of ethical hacking and penetration testing methodologies.',
    },
    {
      id: '2',
      title: 'Capture The Flag Competition',
      date: '2025-09-28',
      type: 'Competition',
      description: 'Test your skills in our monthly CTF challenge with prizes for winners.',
    },
    {
      id: '3',
      title: 'Industry Networking Night',
      date: '2025-10-05',
      type: 'Networking',
      description: 'Meet professionals from leading cybersecurity companies in Belfast.',
    },
    {
      id: '4',
      title: 'Weekly Society Meeting',
      date: '2025-10-10',
      type: 'Meeting',
      description: 'Regular society meeting to discuss upcoming events and initiatives.',
    },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        component="section"
        id="socials"
        sx={{
          py: 12,
          backgroundColor: 'background.default',
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 10, sm: 12, md: 14 } }}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box textAlign="center" mb={8}>
              <Typography
                variant="h2"
                sx={{
                  color: 'primary.main',
                  mb: 2,
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {'< CONNECT_WITH_US />'}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'secondary.main',
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                Stay connected with our community through social media and join our upcoming
                events.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={6}>
            {/* Social Links */}
            <Grid item xs={12} lg={6}>
              <motion.div // Apply motion props to the div wrapping the Grid item content
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: 'primary.main',
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <OpenInNew sx={{ mr: 1, fontSize: 32 }} />
                  SOCIAL_CHANNELS
                </Typography>
                <Box sx={{ display: 'grid', gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <motion.div // Individual item animation
                      key={social.name}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <Card
                        sx={{
                          backgroundColor: 'background.paper',
                          border: '1px solid rgba(76, 175, 80, 0.3)',
                          transition: 'border-color 0.3s',
                          '&:hover': {
                            borderColor: 'rgba(76, 175, 80, 0.6)',
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                              <Box
                                component={motion.div}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                sx={{
                                  color: social.color,
                                  transition: 'color 0.3s',
                                }}
                              >
                                {social.icon && <social.icon sx={{ fontSize: 40 }} />}
                              </Box>
                              <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <Typography
                                    variant="h6"
                                    sx={{ color: 'primary.main', fontFamily: 'monospace' }}
                                  >
                                    {social.name}
                                  </Typography>
                                  {social.followers && (
                                    <Typography variant="body2" color="text.secondary">
                                      {social.followers} followers
                                    </Typography>
                                  )}
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                  {social.description}
                                </Typography>
                              </Box>
                            </Box>
                            <Button
                              component={Link}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="outlined"
                              sx={{
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                fontFamily: 'monospace',
                                '&:hover': {
                                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                  borderColor: 'primary.main',
                                },
                              }}
                            >
                              VISIT
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Upcoming Events */}
            <Grid item xs={12} lg={6}>
              <motion.div // Apply motion props to the div wrapping the Grid item content
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: 'primary.main',
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <CalendarMonth sx={{ mr: 1, fontSize: 32 }} />
                  UPCOMING_EVENTS
                </Typography>
                <Box sx={{ display: 'grid', gap: 2 }}>
                  {upcomingEvents.map((event, index) => (
                    <motion.div // Individual item animation
                      key={event.id}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <Card
                        sx={{
                          backgroundColor: 'background.paper',
                          border: '1px solid rgba(76, 175, 80, 0.3)',
                          transition: 'border-color 0.3s',
                          '&:hover': {
                            borderColor: 'rgba(76, 175, 80, 0.6)',
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              mb: 2,
                            }}
                          >
                            <Typography
                              variant="h6"
                              sx={{ color: 'primary.main', fontFamily: 'monospace' }}
                            >
                              {event.title}
                            </Typography>
                            <Chip
                              label={event.type}
                              size="small"
                              sx={{
                                ...eventTypeColors[event.type],
                                fontFamily: 'monospace',
                              }}
                            />
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                            <CalendarMonth sx={{ fontSize: 16, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {new Date(event.date).toLocaleDateString('en-GB', {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {event.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </Box>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}