import React from 'react'
import {
    TiSocialLinkedin,
    TiSocialYoutube,
    TiSocialTwitter,
    TiSocialGithub,
} from 'react-icons/ti'

function Footer() {
    return (
        <div className='py-5 text-center'>
            <div className='container max-w-screen-lg mx-auto'>
                <div>
                    <div className='flex flex-wrap justify-center gap-2 pb-4'>
                        <a
                            href='https://twitter.com/Ibrahim_391'
                            className='bg-neutral-content shadow-xl p-1 mx-2 rounded-full'
                        >
                            <TiSocialTwitter className='text-4xl text-blue-500 hover:scale-125 hover:rotate-12 duration-300' />
                        </a>
                        <a
                            href='https://linkedin.com/in/ibrahim-youssef391'
                            className='bg-neutral-content shadow-xl p-1 mx-2 rounded-full'
                        >
                            <TiSocialLinkedin className='text-4xl text-blue-700 hover:scale-125 hover:rotate-12 duration-300' />
                        </a>

                        <a
                            href='https://github.com/Ibrahim-Rezq'
                            className='bg-neutral-content shadow-xl p-1 mx-2 rounded-full'
                        >
                            <TiSocialGithub className='text-4xl text-black hover:scale-125 hover:rotate-12 duration-300' />
                        </a>
                    </div>
                </div>
            </div>
            <p className='text-sm mt-2  opacity-50'>
                &copy; {new Date().getFullYear()} Ibrahim Youssef. All rights
                reserved.
            </p>
        </div>
    )
}

export default Footer
