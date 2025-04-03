import React from 'react'
import mAImageOne from '../Assets/Mario and Adrian A.jpg'
import mAImageTwo from '../Assets/Mario and Adrian b.jpg'

export default function About() {
    return (
        <>
            <div className='h-[55vh] lg:h-[85vh]'>
                <section className='h-full p-2 lg:grid grid-cols-12'>
                    <div className=""></div>
                    <div className="col-span-5">
                        <div className="block h-full place-content-center">
                            <p className='leading-primary my-5 mb-6'>
                                <h1 className='my-4 headingText text-primary_second text-5xl font-bold'>Little Lemon</h1>
                                <h2 className='my-4 subtitle text-3xl'>Chicago</h2>
                                <span className='my-4 description text-justify text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium pariatur nam nobis quaerat officiis voluptatibus eum! Molestiae harum praesentium quis qui nesciunt est facilis eos, cupiditate distinctio quo illum.</span>
                            </p>

                        </div>
                    </div>
                    <div className="hidden lg:block col-span-5">
                        <div className="restrauntImage block relative h-full">
                            <img src={mAImageOne} alt="Restraunt" className='rounded-lg absolute right-0 w-1/2 shadow-2xl h-[70%] z-10' />
                            <img src={mAImageTwo} alt="Restraunt" className='rounded-lg absolute bottom-0 left-[20%]  w-1/2 shadow-2xl h-[70%]' />
                        </div>
                    </div>
                    <div className=""></div>
                </section>
            </div>
        </>
    )
}
