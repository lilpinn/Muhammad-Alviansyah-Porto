import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ToastProvider } from '@/components/Toast';

export default function Home() {
  return (
    <ToastProvider>
      <Navbar />
      <main id="konten" className="overflow-x-clip">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ToastProvider>
  );
}
