import Project from '../components/Project';
import IDefaultProps from '../types/IDefaultProps';
import Pages from '../types/Pages';
import { useIsInView } from '../hooks/useIsInView';
import { useEffect, useRef } from 'react';
import projects from '../projects.json';

const Projects = ({ setSelectedPage }: IDefaultProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(ref);

  useEffect(() => {
    if (isInView) {
      setSelectedPage(Pages.PROJECTS);
    }
  }, [isInView]);

  return (
    <section id='projekty' className='py-[200px] lg:mt-0 w-full text-center'>
      <div
        ref={ref}
        className='mx-auto flex h-full max-w-[1240px] flex-col justify-center px-8 md:px-16'
      >
        <h2 className='mb-2 font-normal uppercase tracking-widest text-neon-blue'>
          Projekty
        </h2>
        <h3 className='pb-8 text-2xl font-normal'>Co zbudowałem?</h3>

        <div className='grid gap-8 lg:grid-cols-2'>
          {projects.map((project) => {
            return (
              <Project
                key={project.title}
                title={project.title}
                stack={project.stack}
                img={project.img}
                gitUrl={project.gitUrl}
                liveUrl={project?.liveUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
