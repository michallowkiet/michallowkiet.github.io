import Project from '../components/Project';
import pImage1 from '../assets/projects/property.jpg';

const Projects = () => {
  return (
    <section id='projects' className='mt-[200px] lg:mt-0 w-full lg:h-screen'>
      <div className='mx-auto flex h-full max-w-[1240px] flex-col justify-center px-8 md:px-16'>
        <h2 className='mb-2 font-normal uppercase tracking-widest text-neon-blue'>
          Projekty
        </h2>
        <h3 className='mb-4 text-2xl font-normal'>Co zbudowałem?</h3>

        <div className='grid gap-8 lg:grid-cols-2'>
          <Project
            title='Property Finder'
            stack={['React', 'Tailwind']}
            img={pImage1}
            gitUrl='ccccc'
          />
          <div className='group relative flex h-auto w-full items-center justify-center rounded-xl p-2 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 hover:bg-gradient-button'>
            <img
              src={pImage1}
              alt='/'
              className='rounded-xl duration-300 ease-in group-hover:opacity-10'
            />

            <div className='absolute hidden flex-col items-center justify-center gap-8 group-hover:flex'>
              <h3 className='text-white'>Property Finder</h3>
              <p className=' text-white'>React JS</p>
              <a href='/property' target='_blank'>
                <p className='rounded-lg bg-white px-3 py-2 font-bold text-gray-700'>
                  Więcej
                </p>
              </a>
            </div>
          </div>

          <div className='group relative flex h-auto w-full items-center justify-center rounded-xl  p-2 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 hover:bg-gradient-button'>
            <img
              src={pImage1}
              alt='/'
              className='rounded-xl duration-300 ease-in group-hover:opacity-10'
            />

            <div className='absolute hidden flex-col items-center justify-center gap-8 group-hover:flex'>
              <h3 className='text-white'>Property Finder</h3>
              <p className=' text-white'>React JS</p>
              <a href='/property' target='_blank'>
                <p className='rounded-lg bg-white px-3 py-2 font-bold text-gray-700'>
                  Więcej
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
