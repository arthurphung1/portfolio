import React from 'react'
import image from '../bg-home.svg'

export default function Home() {
    return (
        <main>
            <img src={image} alt='Home Page BG' className='absolute object-cover- w-full h-full'/>
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
                <h1 className='text-6xl text-white font-bold leading-none lg:leading-snug home-name'>Hi, I'm Arthur.</h1>
            </section>
        </main>
    )
}
