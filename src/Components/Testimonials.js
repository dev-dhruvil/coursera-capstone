import React from 'react'
import { FaUser } from 'react-icons/fa';
import { MdStar } from 'react-icons/md';

export default function Testimonials() {
    const testimonialList = [
        {
            name: 'Jhon Doe',
            rating: 4.7,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, possimus.',
        },
        {
            name: 'Tom Cat',
            rating: 4.5,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, possimus.',
        },
        {
            name: 'Alice Maze',
            rating: 4.9,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, possimus.',
        },
        {
            name: 'Bob Aniktone',
            rating: 3.5,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, possimus.',
        },
    ];

    return (
        <>
            <div className='overflow-auto lg:overflow-visible h-[70vh] lg:my-8 bg-highlight_second m-2'>
                <section className='h-full p-2 lg:grid grid-cols-12'>
                    <div className=""></div>
                    <div className="col-span-10">
                        <div className="lg:grid grid-rows-12 h-full">
                            <div className="row-span-4">
                                <div className="flex justify-center py-3 h-full">
                                    <h3 className='text-2xl text-highlight_first font-semibold place-content-center'>Testimonials</h3>
                                </div>
                            </div>
                            <div className="row-span-6 place-content-center">
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                                    {
                                        testimonialList.map((items, key) => {
                                            return (
                                                <div className="rounded-lg bg-highlight_first h-36 lg:hover:scale-105" key={key}>
                                                    <div className="grid grid-cols-6 h-full">
                                                        <div className="col-span-3 place-content-center text-start">
                                                            <div className="p-2">
                                                                <span className='inline-flex items-center justify-center w-full'>{items['rating']} <MdStar fill='#FFD700' /></span>
                                                                <div className="inline-flex items-center justify-center w-full RatingImage">
                                                                    <FaUser size={35} />
                                                                </div>
                                                                <span className='text-xs font-thin line-clamp-1'>{items['description']}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-3 place-content-center text-start">{items['name']}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </section>
            </div>
        </>
    )
}
