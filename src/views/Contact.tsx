import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import meEmoji from '../assets/ja-emoji-bg.png';
import SocialLink from '../components/Share/SocialLink';

const Contact = () => {
  return (
    <div id='contact' className='mt-[200px] lg:mt-0 w-full lg:h-screen'>
      <div className='mx-auto flex h-full max-w-[1240px] flex-col justify-center px-8 md:px-16'>
        <h2 className='mb-2 font-normal uppercase tracking-widest text-neon-blue'>
          Kontakt
        </h2>
        <h3 className='mb-4 text-2xl font-normal'>Napisz do mnie</h3>

        <div className='grid gap-8 lg:grid-cols-5'>
          <div className='col-span-3 h-full w-full rounded-xl p-2 shadow-xl shadow-gray-400 lg:col-span-2'>
            <div className='h-full lg:p-4 flex flex-col justify-between'>
              <div>
                <img
                  className='rounded-xl duration-300 ease-in hover:scale-105'
                  src={meEmoji}
                  alt='Me as emoji'
                />
              </div>
              <div className='tracking-wider'>
                <h2 className='pb-2'>Michał Łowkiet</h2>
                <p className='text-gray-400'>
                  Początkujący Full Stack Developer
                </p>
                <p className='py-4'>
                  Aktualnie poszukuje pracy. Z kontaktuj się ze mną i
                  porozmawiajmy.
                </p>
              </div>

              <div>
                <div className='mx-auto flex w-3/5 items-center justify-center gap-8  mt-auto'>
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

          <div className='col-span-3 h-full w-full rounded-xl p-2 shadow-xl shadow-gray-400 lg:col-span-3'>
            <div className='p-2'>
              <form className='flex flex-col gap-8'>
                <div>
                  <div className='grid gap-8 py-2 md:grid-cols-2'>
                    <div className='flex flex-col'>
                      <label className='py-2 text-sm uppercase' htmlFor='name'>
                        Imię
                      </label>
                      <input
                        className='rounded-lg border-2 border-gray-300 p-2'
                        type='text'
                        id='name'
                        name='name'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label className='py-2 text-sm uppercase' htmlFor='phone'>
                        Telefon
                      </label>
                      <input
                        className='rounded-lg border-2 border-gray-300 p-2'
                        type='text'
                        id='phone'
                        name='phone'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase' htmlFor='email'>
                      Email
                    </label>
                    <input
                      className='rounded-lg border-2 border-gray-300 p-2'
                      type='email'
                      id='email'
                      name='email'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase' htmlFor='subject'>
                      Tytuł
                    </label>
                    <input
                      className='rounded-lg border-2 border-gray-300 p-2'
                      type='text'
                      id='subject'
                      name='subject'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase' htmlFor='message'>
                      Wiadomość
                    </label>
                    <textarea
                      className='rounded-lg border-2 border-gray-300 p-2'
                      id='message'
                      name='message'
                      rows={10}
                    />
                  </div>
                </div>

                <button className='self-center py-3 px-4 text-gray-100 duration-300 ease-in hover:scale-105 bg-gradient-button rounded-xl tracking-wider'>
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center pb-16'>
        <div className='rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105'>
          <a href='#home'>
            <HiOutlineChevronDoubleUp className='text-neon-blue' size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
