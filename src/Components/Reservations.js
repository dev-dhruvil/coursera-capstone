import React from 'react'

export default function Reservations() {
    const formRef = React.useRef(null);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Table Reserved Successfully!')
        formRef.current.reset()
    }


    return (
        <>
            <div className='h-[75vh] lg:h-[100vh] bg-primary_first reservationBg'>
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
                        <div className="bg-highlight_first p-5 rounded-lg text-primary_first block h-full w-[90%] lg:w-3/4 place-self-center">
                            <h3 className='font-bold text-center text-2xl'>Reserve Your Table</h3>
                            <form ref={formRef} onSubmit={handleFormSubmit}>
                                <div className="nameDiv grid my-2">
                                    <label className='font-semibold' htmlFor="fullName">Full Name</label>
                                    <input className='p-3 rounded-lg' type="text" id='fullName' name='fullName' required />
                                </div>
                                <div className="emailDiv grid my-2">
                                    <label className='font-semibold' htmlFor="email">Email</label>
                                    <input className='p-3 rounded-lg' type="email" id='email' name='email' required />
                                </div>
                                <div className="contactDiv grid my-2">
                                    <label className='font-semibold' htmlFor="contactN">Contact</label>
                                    <input className='p-3 rounded-lg' type="tel" id='contactN' name='contactN' required />
                                </div>
                                <div className="guestDiv grid my-2">
                                    <label className='font-semibold' htmlFor="guestNumber">Guests</label>
                                    <input className='p-3 rounded-lg' type="number" id='guestNumber' name='guestNumber' defaultValue={3} min={3} max={30} />
                                </div>
                                <div className="dateTimeDiv grid my-2">
                                    <label className='font-semibold' htmlFor="dtTime">Date & Time</label>
                                    <input className='p-3 rounded-lg' type="datetime-local" id='dtTime' name='dtTime' required />
                                </div>
                                <div className="reserveBtnDiv grid mt-2 rounded-lg bg-highlight_second hover:scale-95">
                                    <button className='p-3 text-highlight_first hover:text-secondary_second' type="submit">Reserve</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className=""></div>
                </section>
            </div>
        </>
    )
}
