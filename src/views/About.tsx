import { useEffect, useRef } from 'react';
import profilePicture from '../assets/ja.png';
import { useIsInView } from '../hooks/useIsInView';
import IDefaultProps from '../types/IDefaultProps';
import Pages from '../types/Pages';

const About = ({ setSelectedPage }: IDefaultProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(ref);

  useEffect(() => {
    if (isInView) {
      setSelectedPage(Pages.ABOUT);
    }
  }, [isInView]);

  return (
    <section
      id='about'
      className='py-[200px] lg:mt-0 w-full flex items-center text-center sm:text-left'
    >
      <div
        ref={ref}
        className='mx-auto max-w-[1240px] grid-cols-3 gap-8 px-8 md:grid md:px-16'
      >
        <div className='col-span-2'>
          <h2 className='mb-2 font-normal uppercase tracking-widest text-neon-blue'>
            O mnie
          </h2>
          <h3 className='mb-8 text-2xl font-normal'>Kim jestem?</h3>
          <p className='mb-8 text-xl tracking-wider'>
            Całkiem niedawno odkryłem swoją nową miłość. Jest nią tworzenie
            aplikacji webowych z wykorzystaniem MERN. Wcześniej pracowałem jako
            junior PHP developer. Niestety nie dawało mi takiej satysfakcji jak
            tworzenie front-endu aplikacji. Teraz wykorzystując JS jestem w
            stanie tworzyć interfejs oraz logikę swoich aplikacji.
          </p>

          <button className='self-center py-3 px-4 text-gray-100 duration-300 ease-in hover:scale-105 bg-gradient-button rounded-xl tracking-wider'>
            Sprawdź moje projekty.
          </button>
          <p className='text-lg '></p>
        </div>
        <div className='m-auto mt-12 flex h-auto w-full items-center justify-center rounded-xl p-2 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105 md:mt-auto'>
          <img
            className='rounded-xl'
            src={profilePicture}
            alt='Profile picture'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
