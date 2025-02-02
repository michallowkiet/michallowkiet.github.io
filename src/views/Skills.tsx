import cssImg from '../assets/skills/css.png';
import expressImg from '../assets/skills/express.svg';
import gitImg from '../assets/skills/git.svg';
import githubImg from '../assets/skills/github1.png';
import htmlImg from '../assets/skills/html.png';
import jsImg from '../assets/skills/javascript.webp';
import mongoImg from '../assets/skills/mongo.webp';
import mysqlImg from '../assets/skills/mysql.webp';
import phpImg from '../assets/skills/php-1.svg';
import reactImg from '../assets/skills/react.png';
import symfonyImg from '../assets/skills/symfony.svg';
import tailwindImg from '../assets/skills/tailwind.png';
import tsImg from '../assets/skills/typescript.svg';

import { useEffect, useRef } from 'react';
import Skill from '../components/Skill';
import { useIsInView } from '../hooks/useIsInView';
import IDefaultProps from '../types/IDefaultProps';
import Pages from '../types/Pages';

const Skills = ({ setSelectedPage }: IDefaultProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(ref);

  useEffect(() => {
    if (isInView) {
      setSelectedPage(Pages.SKILLS);
    }
  }, [isInView]);

  return (
    <section
      id='umiejętności'
      className='py-[200px] lg:mt-0 w-full text-center'
    >
      <div
        ref={ref}
        className='mx-auto flex h-full max-w-[1240px] flex-col justify-center px-8 gap-16 md:px-16'
      >
        <div>
          <h2 className='mb-2 font-normal uppercase tracking-widest text-neon-blue'>
            Umiejętności
          </h2>
          <h3 className='pb-8 text-2xl font-normal'>
            Technologie z jakimi pracowałem
          </h3>
        </div>

        <div className='grid sm:grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-5 justify-items-center'>
          <Skill img={htmlImg} alt='HTML logo' text='html' />

          <Skill img={cssImg} alt='CSS logo' text='css' />

          <Skill img={tailwindImg} alt='Tailwind logo' text='tailwind' />

          <Skill img={jsImg} alt='JavaScript logo' text='javascript' />

          <Skill img={tsImg} alt='TypeScript logo' text='typescript' />

          <Skill img={reactImg} alt='React logo' text='react' />

          <Skill img={expressImg} alt='Express js logo' text='Express.js' />

          <Skill img={mongoImg} alt='MongoDB logo' text='mongo' />

          <Skill img={gitImg} alt='Git logo' text='git' />

          <Skill img={githubImg} alt='GitHub logo' text='github' />

          <Skill img={mysqlImg} alt='MySQL logo' text='mysql' />

          <Skill img={phpImg} alt='PHP logo' text='php' />

          <Skill img={symfonyImg} alt='Symfony logo' text='symfony' />
        </div>
      </div>
    </section>
  );
};

export default Skills;
