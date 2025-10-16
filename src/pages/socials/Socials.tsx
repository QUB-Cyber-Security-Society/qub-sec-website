import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import SocialSection from './social-section';
import EventsSection from './events-section';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#9e9e9e',
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

const Socials = () => {
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

          {/* Grid container for side-by-side sections */}
          <Grid container spacing={6}>
            <Grid>
              <SocialSection />
            </Grid>

            <Grid>
              <EventsSection />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider >
  );
};

export default Socials;