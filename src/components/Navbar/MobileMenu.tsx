import IMobileMenu from '../../types/IMobileMenu';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import SocialLink from '../Share/SocialLink';
import NavLink from './NavLink';

const MobileMenu = ({
  isToggleMenu,
  setIsToggleMenu,
  pages,
  selectedPage,
  setSelectedPage,
}: IMobileMenu) => {
  return (
    <div
      className={
        isToggleMenu
          ? `fixed left-0 top-0 h-screen w-full  bg-black/60 md:hidden `
          : ''
      }
    >
      <div
        className={
          isToggleMenu
            ? 'fixed top-0 left-0 flex h-screen flex-col justify-between bg-alice-blue p-10 duration-500 ease-in w-full sm:w-[60%] md:w-[45%]'
            : 'fixed left-[-100%] top-0 p-10 duration-500 ease-in'
        }
      >
        <div className='flex items-center justify-between'>
          <div>
            <h2>ML</h2>
          </div>
          <div className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400'>
            <AiOutlineClose
              size={24}
              onClick={() => setIsToggleMenu(!isToggleMenu)}
            />
          </div>
        </div>
        <ul className='flex flex-col items-center gap-10'>
          {pages.map((item) => {
            return (
              <li className='border-midnight text-2xl uppercase' key={item}>
                <NavLink
                  page={item}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </li>
            );
          })}
        </ul>
        <div className='flex justify-center gap-8'>
          <SocialLink
            Icon={FaLinkedinIn}
            href='https://www.linkedin.com/in/michallowkiet/'
            size={24}
          />

          <SocialLink
            Icon={FaGithub}
            href='https://github.com/michallowkiet'
            size={24}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
