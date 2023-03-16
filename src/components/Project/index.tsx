import IProject from '../../types/IProject';

const Project = ({ title, stack, img, liveUrl = '', gitUrl }: IProject) => {
  return (
    <div className='group relative flex h-auto w-full items-center justify-center rounded-xl p-2 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 hover:bg-gradient-button max-h-[400px]'>
      <img
        src={img}
        alt='Project preview'
        className='rounded-xl duration-300 ease-in group-hover:opacity-10 h-full w-full object-cover object-top'
      />

      <div className='absolute hidden flex-col items-center justify-center gap-8 group-hover:flex'>
        <h3 className='text-white'>{title}</h3>

        <div className='flex gap-2'>
          {stack.map((item) => {
            return (
              <p
                key={item}
                className='text-gray-600 bg-white text-sm px-2 py-1 rounded-lg'
              >
                {item}
              </p>
            );
          })}
        </div>

        <div className='flex gap-4'>
          <a href={gitUrl} target='_blank'>
            <p className='rounded-lg bg-white px-4 py-3 font-bold text-gray-700 hover:bg-gray-400 hover:text-white ease-in duration-300'>
              GitHub
            </p>
          </a>
          {liveUrl !== '' && (
            <a href={liveUrl} target='_blank'>
              <p className='rounded-lg bg-white px-4 py-3 font-bold text-gray-700 hover:bg-gray-400 hover:text-white ease-in duration-300'>
                Demo
              </p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
