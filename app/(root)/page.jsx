import 'lenis/dist/lenis.css'
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import About from '../components/About';
import Skills from '../components/Skills';
import Image from 'next/image';
import Projects from '../components/Projects';



export default function main() {
  return (
    <main className="main relative w-full h-auto pb-20 overflow-x-clip bg-black-normal">
      <Image alt='background' src="/grid.png" width={2525} height={1500} className="max-w-[2525px] h-auto opacity-10 select-none -z-0 fixed pointer-events-none" />
      <Image alt='left light' src="/Ellipse.svg" width={1000} height={1000} className="fixed select-none -top-56 -left-125 pointer-events-none" />
      <Image alt='right light' src="/Ellipse.svg" width={1000} height={1000} className="fixed select-none -bottom-110 -right-110 pointer-events-none" />
      <div className='social-icons fixed bottom-8 right-8 z-50 flex flex-col items-center justify-between gap-6 '>
        <img src="/line 1.svg" alt='line' />
        <a target='_blank' aria-label='github Link' href="https://github.com/mahdii-Dz"><i className="fi fi-brands-github text-2xl flex text-customGray-300 hover:text-customGray-200"></i></a>
        <a target='_blank' aria-label='linkedin Link' href="https://www.linkedin.com/in/mahdihadjidj/"><i className="fi fi-brands-linkedin text-[26px] flex justify-center text-customGray-300 hover:text-customGray-200"></i></a>
        <a target='_blank' aria-label='instagram Link' href="https://www.instagram.com/mahdi.hadjidj/"><i className="fi fi-brands-instagram text-2xl flex text-customGray-300 hover:text-customGray-200"></i></a>
        <img src="/line 1.svg" alt='line' />
      </div>
      <NavBar />
      <section className="home w-full h-dvh text-white flex items-center pl-56 font-black">
        <div className="flex flex-col items-start">
          <Home className='z-50' />
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
