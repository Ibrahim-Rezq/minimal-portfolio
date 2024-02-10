import React from 'react'
import { ProjectItem } from '.'
import { data } from '@/components/data/Projects'
const Projects = () => {
    return (
        <section className='max-w-2xl w-full py-6'>
            <h4 className='text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 ms-2'>
                Works Profile
            </h4>

            <div className='flex gap-4 flex-wrap justify-center items-center'>
                {data.map((project, i) => {
                    return (
                        <a
                            key={project.id}
                            href={project.url}
                            title={project.name}
                        >
                            <ProjectItem project={project} />
                        </a>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
