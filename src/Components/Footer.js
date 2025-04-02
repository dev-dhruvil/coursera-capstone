import React from 'react'
import Logo from './Logo'

export default function Footer() {
    return (
        <>
            <footer className='h-[25vh] lg:h-[30vh] p-2'>
                <div className="grid grid-cols-12 h-full">
                    <div className="col-span-3 p-3">
                        <div className="logo flex h-full justify-center items-center">
                            <Logo />
                        </div>
                    </div>
                    <div className="col-span-3 p-3">
                        <div className="logo flex h-full justify-center items-start">
                            <div className="flex flex-col">
                                <span className='font-bold text-xs'>Doormat</span>
                                <span className='font-thin text-xs'>Home</span>
                                <span className='font-thin text-xs'>About</span>
                                <span className='font-thin text-xs'>Menu</span>
                                <span className='font-thin text-xs'>Reservations</span>
                                <span className='font-thin text-xs'>Order Online</span>
                                <span className='font-thin text-xs'>Login</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 p-3">
                        <div className="logo flex h-full justify-center items-start">
                            <div className="flex flex-col">
                                <span className='font-bold text-xs'>Contact</span>
                                <span className='font-thin text-xs'>Address</span>
                                <span className='font-thin text-xs'>Phone Number</span>
                                <span className='font-thin text-xs'>Email</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 p-3">
                        <div className="logo flex h-full justify-center items-start">
                            <div className="flex flex-col">
                                <span className='font-bold text-xs'>Social Media</span>
                                <span className='font-thin text-xs'>Address</span>
                                <span className='font-thin text-xs'>Phone Number</span>
                                <span className='font-thin text-xs'>Email</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
