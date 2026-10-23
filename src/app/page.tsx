import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CursorGlow from '@/components/CursorGlow';
import { ToastProvider } from '@/components/Toast';

export default function Home() {
  return (
    <ToastProvider>
      <div className="aurora-wrap" aria-hidden="true">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>
      <CursorGlow />
      <Navbar />
      <main id="konten" className="overflow-x-clip">
        <Hero />
        <Marquee />
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
