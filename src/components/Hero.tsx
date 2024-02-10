import React from 'react'
import { HiDocumentDownload } from 'react-icons/hi'
import { TiDownload, TiDownloadOutline } from 'react-icons/ti'

const Hero = () => {
    return (
        <section className='hero min-h-96'>
            <div className='hero-content text-center'>
                <div>
                    <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>
                        Ibrahim
                    </h1>
                    <h2 className='text-base md:text-xl mb-3 font-medium'>
                        Front-end Web Developer
                    </h2>
                    <p className='text-sm max-w-xl mb-6 font-bold'>
                        Through multiple projects, I have refined my abilities
                        as a solo front-end developer to craft user-friendly
                        interfaces.
                        <br />
                        My goal is to establish my own digital realm, and I am
                        continuously challenging myself at every stage, from
                        planning and designing to resolving real-world coding
                        problems. By displaying determination and commitment, I
                        am progressively transforming my aspirations into a
                        tangible reality.
                    </p>
                    <a
                        href='Ibrahim Amin.pdf'
                        download
                        className='btn btn-primary btn-wide group'
                    >
                        <TiDownload className='text-xl group-hover:scale-125 group-hover:rotate-12 duration-300' />
                        CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
