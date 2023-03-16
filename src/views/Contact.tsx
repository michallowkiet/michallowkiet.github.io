import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import meEmoji from '../assets/ja-emoji-bg.webp';
import SocialLink from '../components/Share/SocialLink';
import IDefaultProps from '../types/IDefaultProps';
import Pages from '../types/Pages';
import { FormEvent, useEffect, useRef } from 'react';
import { useIsInView } from '../hooks/useIsInView';
import { useForm } from 'react-hook-form';

const Contact = ({ setSelectedPage }: IDefaultProps) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(ref);

  const handleSubmit = async (e: FormEvent) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }

    e.target.reset();
  };

  useEffect(() => {
    if (isInView) {
      setSelectedPage(Pages.CONTACT);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      id='kontakt'
      className='pt-[200px] lg:mt-0 w-full text-center'
    >
      <div className='mx-auto flex h-full max-w-[1240px] flex-col justify-center px-8 md:px-16 pb-16'>
        <h2 className='mb-2 font-normal uppercase tracking-widest text-neon-blue'>
          Kontakt
        </h2>
        <h3 className='pb-8 text-2xl font-normal'>Napisz do mnie</h3>

        <div className='grid gap-8 lg:grid-cols-5'>
          <div className='col-span-3 h-full w-full rounded-xl px-4 py-8 shadow-xl shadow-gray-400 lg:col-span-2'>
            <div className='h-full lg:p-4 flex flex-col justify-between'>
              <div>
                <img
                  className='rounded-xl duration-300 ease-in hover:scale-105 mx-auto'
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
                <div className='mx-auto flex w-3/5 items-center justify-center gap-8  mt-4'>
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

          <div className='col-span-3 h-full w-full rounded-xl px-4 py-8 shadow-xl shadow-gray-400 lg:col-span-3'>
            <div className='p-2'>
              <form
                target='_blank'
                method='POST'
                action='https://formsubmit.co/5103956629fc00063f804157f7db5925'
                onSubmit={handleSubmit}
                className='flex flex-col gap-8'
              >
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
                        {...register('name', {
                          required: true,
                          maxLength: 50,
                        })}
                      />

                      {errors.name && (
                        <p className='mt-1 text-red-600'>
                          {errors.name.type === 'required' &&
                            'To pole jest wymagane.'}

                          {errors.name.type === 'maxLength' &&
                            'To pole moe mięć maksymalnie 50 znaków.'}
                        </p>
                      )}
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
                      {...register('email', {
                        required: true,
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      })}
                    />

                    {errors.email && (
                      <p className='mt-1 text-red-600'>
                        {errors.email.type === 'required' &&
                          'To pole jest wymagane.'}

                        {errors.email.type === 'pattern' &&
                          'Nieprawidłowy adres email'}
                      </p>
                    )}
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
                      {...register('message', {
                        required: true,
                        maxLength: 2000,
                      })}
                      rows={10}
                    />

                    {errors.message && (
                      <p className='mt-1 text-red-600'>
                        {errors.message.type === 'required' &&
                          'To pole jest wymagane.'}

                        {errors.message.type === 'maxLength' &&
                          'To pole moe mięć maksymalnie 2000 znaków.'}
                      </p>
                    )}
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

      <div className='flex justify-center'>
        <div className='rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105'>
          <a href='#główna'>
            <HiOutlineChevronDoubleUp className='text-neon-blue' size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
