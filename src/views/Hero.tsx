import SocialLink from '../components/Share/SocialLink';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import IDefaultProps from '../types/IDefaultProps';
import Pages from '../types/Pages';
import { useIsInView } from '../hooks/useIsInView';
import { useEffect, useRef } from 'react';

const Hero = ({ setSelectedPage }: IDefaultProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(ref);

  useEffect(() => {
    if (isInView) {
      setSelectedPage(Pages.HOME);
    }
  }, [isInView]);

  return (
    <div ref={ref} id='główna' className='h-screen w-full  text-center'>
      <div className='mx-auto flex h-screen w-full max-w-[1240px] items-center justify-center p-2'>
        <div>
          <h1 className='py-2 text-gray-700'>
            Cześć, jestem <span className='text-neon-blue'>Michał</span>
          </h1>
          <h2 className='py-2 text-gray-700'>Full Stack Developer</h2>

          <p className='m-auto py-4 px-2 text-xl tracking-wider text-gray-500 sm:text-2xl md:max-w-[70%]'>
            Jestem początkującym web developerem. Aktualnie skupiam się na
            budowie aplikacji webowych z wykorzystaniem technologi wchodzących w
            skład MERN.
          </p>

          <div className='mx-auto mt-8 flex max-w-[330px] justify-center gap-8'>
            <SocialLink
              Icon={FaLinkedinIn}
              href='https://www.linkedin.com/in/michallowkiet/'
            />

            <SocialLink
              Icon={FaGithub}
              href='https://github.com/michallowkiet'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
