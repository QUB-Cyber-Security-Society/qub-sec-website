import { Header } from './components/Header';
import { Committee } from './components/Committee';
import { Lab } from './components/Lab';
import { Socials } from './components/Socials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Committee />
        <Lab />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
