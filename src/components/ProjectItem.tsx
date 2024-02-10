import React from 'react'

const ProjectItem = ({ project }: { project: any }) => {
    const { name, tags, desc, badge, img_url } = project
    return (
        <div className='image-full card card-compact w-80 bg-base-100 shadow-xl group before:!opacity-40'>
            <figure className='relative'>
                <img
                    src={img_url}
                    alt='Shoes'
                    className='group-hover:scale-150 group-hover:rotate-12 duration-300'
                />
                {badge && (
                    <div className='absolute badge badge-success w-fit top-0 right-0 rounded-none rounded-bl-md z-50'>
                        {badge}
                    </div>
                )}
            </figure>
            <div className='card-body justify-between'>
                <h2 className='card-title'>{name}</h2>
                {/* <p className='text-sm'>{desc}</p> */}
                <div className='card-actions justify-end'>
                    {tags.map((tag: any) => {
                        return (
                            <div
                                key={tag.id}
                                className='badge badge-sm xl:badge-md badge-primary-content'
                            >
                                {tag.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
