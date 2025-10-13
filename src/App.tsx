import { Header } from './pages/Header';
import { Home } from './pages/Home';
import { Committee } from './pages/Committee';
import { Lab } from './pages/Lab';
import { Footer } from './pages/Footer';
import theme from '../src/assets/Theme';
import { Box } from '@mui/material';
import Socials from './pages/socials/Socials';

export default function App() {
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, minHeight: '100vh' }}>
      <Header />
      <main>
        <Home />
        <Committee />
        <Lab />
        <Socials />
      </main>
      <Footer />
    </Box>
  );
}
