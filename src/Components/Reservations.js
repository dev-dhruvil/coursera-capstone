import React from 'react'
import BookingForm from './BookingForm'

export default function Reservations() {

    return (
        <>
            <div className='h-[65vh] lg:h-[110vh] bg-primary_first reservationBg'>
                <section className='h-full p-2 lg:grid grid-cols-12 backdrop-brightness-50'>
                    <div className=""></div>
                    <div className="hidden lg:block col-span-5">
                        <div className="block h-full place-content-center">
                            <div className='leading-primary my-5 mb-6'>
                                <h1 className='my-4 reseadingText text-highlight_first text-4xl text-justify font-semibold leading-[1] '>Escape the ordinary and indulge in a luxurious Staycation Retreat with us!</h1>
                                <h2 className='my-4 text-white subtitle text-xl'>We can't wait to welcome you to Little Lemon! Your reservation for Date is just around the corner.</h2>
                                <span className='my-4 text-white description text-justify text-lg'></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <BookingForm />
                    </div>
                    <div className=""></div>
                </section>
            </div>
        </>
    )
}
