import IProject from '../../types/IProject';

const Project = ({ title, stack, img, liveUrl = '', gitUrl }: IProject) => {
  return (
    <div className='group relative flex h-auto w-full items-center justify-center rounded-xl p-2 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 hover:bg-gradient-button'>
      <img
        src={img}
        alt='Project preview'
        className='rounded-xl duration-300 ease-in group-hover:opacity-10'
      />

      <div className='absolute hidden flex-col items-center justify-center gap-8 group-hover:flex'>
        <h3 className='text-white'>{title}</h3>
        {stack.map((item) => {
          return (
            <p key={item} className='text-white'>
              {item}
            </p>
          );
        })}

        <a href={gitUrl} target='_blank'>
          <p className='rounded-lg bg-white px-3 py-2 font-bold text-gray-700'>
            GitHub
          </p>
        </a>

        {liveUrl !== '' && (
          <a href={liveUrl} target='_blank'>
            <p className='rounded-lg bg-white px-3 py-2 font-bold text-gray-700'>
              Demo
            </p>
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
