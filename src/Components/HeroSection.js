import React from 'react';
import restrauntFood from '../Assets/restauranfood.jpg';
import Button from './Button';

export default function HeroSection() {
    return (
        <>
            <div className='h-[55vh] lg:h-[85vh] bg-primary_first'>
                <section className='h-full p-2 lg:grid grid-cols-12'>
                    <div className=""></div>
                    <div className="col-span-5">
                        <div className="block h-full place-content-center">
                            <p className='leading-primary my-5 mb-6'>
                                <h1 className='my-4 headingText text-primary_second text-5xl font-bold'>Little Lemon</h1>
                                <h2 className='my-4 text-white subtitle text-3xl'>Chicago</h2>
                                <span className='my-4 text-white description text-justify text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium pariatur nam nobis quaerat officiis voluptatibus eum! Molestiae harum praesentium quis qui nesciunt est facilis eos, cupiditate distinctio quo illum.</span>
                            </p>
                            <Button>
                                Reservations
                            </Button>
                        </div>
                    </div>
                    <div className="hidden lg:block col-span-5">
                        <div className="restrauntImage block h-full place-content-center place-items-end">
                            <img src={restrauntFood} alt="Restraunt" className='rounded-lg w-1/2 shadow-2xl' />
                        </div>
                    </div>
                    <div className=""></div>
                </section>
            </div>
        </>
    )
}
