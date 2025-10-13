import { motion } from 'framer-motion';
import {
  Instagram,
  LinkedIn,
  Mail,
  CalendarMonth,
  OpenInNew,
} from '@mui/icons-material';
import DiscordIcon from '../components/icons/DiscordIcon';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import events from '../events.json';
import type { SocialContainerProps } from '../components/socials/social-container';
import SocialContainer from '../components/socials/social-container';

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
  const socialLinks: SocialContainerProps[] = [
    {
      name: 'Discord',
      icon: DiscordIcon,
      url: 'https://discord.com/invite/tBnbC2egUX',
      description: 'Join our Discord server for real-time updates and discussions',
      color: '#5865F2',
      index: 0
    },
    {
      name: 'LinkedIn',
      icon: LinkedIn,
      url: 'https://www.linkedin.com/company/qub-cyber-security-society/',
      description: 'Connect with our professional network',
      color: '#1e88e5',
      index: 1
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/qubcybersecsoc/',
      description: 'Behind the scenes of our cyber adventures',
      color: '#e91e63',
      index: 2
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@cybersecurity-society@qub.ac.uk',
      description: 'Get in touch with our team directly',
      color: '#66bb6a',
      index: 3
    },
  ];

  const upcomingEvents: Event[] = (events as Event[])
    //.filter(event => new Date(event.date) >= new Date()) - could be used to filter out past events
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());


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
            <Grid>
              <motion.div
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
                    <SocialContainer
                      key={social.name}
                      name={social.name}
                      icon={social.icon}
                      url={social.url}
                      description={social.description}
                      color={social.color}
                      index={index}
                    />
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Upcoming Events */}
            <Grid>
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
    </ThemeProvider >
  );
}