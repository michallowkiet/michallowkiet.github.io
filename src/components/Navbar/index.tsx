import IDefaultProps from '../../types/IDefaultProps';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import MobileMenu from './MobileMenu';
import NavLink from './NavLink';

const pages = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = ({ selectedPage, setSelectedPage }: IDefaultProps) => {
  const [isToggleMenu, setIsToggleMenu] = useState<boolean>(false);
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 90 ? setIsOnTop(false) : setIsOnTop(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-[100] h-[90px] w-full bg-alice-blue ${
        !isOnTop ? 'shadow-xl' : ''
      }`}
    >
      <div className='flex h-full mx-auto w-full items-center justify-between px-8 2xl:px-16 max-w-[1240px]'>
        <div>
          <h2 className='font-shadow'>ML</h2>
        </div>

        <ul className='hidden md:flex'>
          {pages.map((item) => {
            return (
              <li
                className='ml-10 border-midnight text-sm uppercase hover:border-b'
                key={item}
              >
                <NavLink
                  page={item}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu */}
        <div className='md:hidden'>
          <AiOutlineMenu
            size={28}
            onClick={() => setIsToggleMenu(!isToggleMenu)}
            className='cursor-pointer'
          />
        </div>
      </div>

      <MobileMenu
        isToggleMenu={isToggleMenu}
        setIsToggleMenu={setIsToggleMenu}
        pages={pages}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </nav>
  );
};

export default Navbar;
