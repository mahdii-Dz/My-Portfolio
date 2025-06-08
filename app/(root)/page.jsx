import 'lenis/dist/lenis.css'
import Home from "../components/Home";
import Header from "../components/Header";
import About from '../components/About';
import Skills from '../components/Skills';
import Image from 'next/image';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';



export default function main() {
  return (
    <main role='main' className="main relative w-full h-auto overflow-x-clip bg-black-normal">
      <Image alt='background image' src="/grid.png"  width={2525} height={1500} className="max-w-[2525px] h-auto opacity-10 select-none -z-0 fixed pointer-events-none" />
      <Image alt='left light' src="/Ellipse.svg" width={1000} height={1000} className="fixed select-none -top-24 -left-56 sm:-top-56 sm:-left-125 pointer-events-none" />
      <Image alt='right light' src="/Ellipse.svg" width={1000} height={1000} className="fixed select-none -bottom-44 -right-44 sm:-bottom-110 sm:-right-110 pointer-events-none" />
      <div role='navigation' className='social-icons hidden fixed bottom-8 right-8 z-50 sm:flex flex-col items-center justify-between gap-6 '>
        <Image src="/line 1.svg" width={1.5} height={60} alt='line' />
        <a target='_blank' aria-label='github Link' href="https://github.com/mahdii-Dz"><i className="fi fi-brands-github text-2xl flex text-customGray-300 hover:text-customGray-200"></i></a>
        <a target='_blank' aria-label='linkedin Link' href="https://www.linkedin.com/in/mahdihadjidj/"><i className="fi fi-brands-linkedin text-[26px] flex justify-center text-customGray-300 hover:text-customGray-200"></i></a>
        <a target='_blank' aria-label='instagram Link' href="https://www.instagram.com/mahdi.hadjidj/"><i className="fi fi-brands-instagram text-2xl flex text-customGray-300 hover:text-customGray-200"></i></a>
        <Image src="/line 1.svg" width={1.5} height={60} alt='line' />
      </div>
      <Header />
      <Home className='z-50' />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
