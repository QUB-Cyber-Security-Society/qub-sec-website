import { Header } from './components/Header';
import { Home } from './components/Home';
import { Committee } from './components/Committee';
import { Lab } from './components/Lab';
import { Socials } from './components/Socials';
import { Footer } from './components/Footer';
import theme from '../src/assets/Theme';
import { Box } from '@mui/material';

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
