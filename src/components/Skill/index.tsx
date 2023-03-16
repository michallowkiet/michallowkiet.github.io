import ISkill from '../../types/ISkill';

const Skill = ({ img, alt, text }: ISkill) => {
  return (
    <div className='max-w-[180px] flex flex-col items-center justify-center gap-4 rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
      <img src={img} alt={alt} className='my-auto' />
      <h4 className='uppercase'>{text}</h4>
    </div>
  );
};

export default Skill;
