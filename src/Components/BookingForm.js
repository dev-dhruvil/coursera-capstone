import React from 'react'

export default function BookingForm() {
    const formRef = React.useRef(HTMLFormElement);
    const [formData, setFormData] = React.useState({});


    const handleFormData = (e) => {
        setFormData({ ...formData, ...{ [e.target.name]: e.target.value } })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Table Reserved Successfully!');
        formRef.current.reset();
    }

    function AvailableTmes() {
        const timeList = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        return (
            timeList.map((value, key) => {
                return (
                    <option key={key}>{value}</option>
                )
            })
        )
    }

    return (
        <>
            <div className="bg-highlight_first p-5 rounded-lg text-primary_first block h-full w-[90%] lg:w-3/4 place-self-center">
                <h3 className='font-bold text-center text-2xl'>Reserve Your Table</h3>
                <form ref={formRef} onSubmit={handleFormSubmit}>
                    <div className="nameDiv grid my-2">
                        <label className='font-semibold' htmlFor="fullName">Full Name</label>
                        <input className='p-2 rounded-lg' type="text" id='fullName' name='fullName' onChange={handleFormData} required />
                    </div>
                    <div className="emailDiv grid my-2">
                        <label className='font-semibold' htmlFor="email">Email</label>
                        <input className='p-2 rounded-lg' type="email" id='email' name='email' onChange={handleFormData} required />
                    </div>
                    <div className="contactDiv grid my-2">
                        <label className='font-semibold' htmlFor="contactN">Contact</label>
                        <input className='p-2 rounded-lg' type="tel" id='contactN' name='contactN' onChange={handleFormData} required />
                    </div>
                    <div className="guestDiv grid my-2">
                        <label className='font-semibold' htmlFor="guestNumber">Guests</label>
                        <input className='p-2 rounded-lg' type="number" id='guestNumber' name='guestNumber' onChange={handleFormData} placeholder="1" min={1} max={10} required />
                    </div>
                    <div className="guestDiv grid my-2">
                        <label className='font-semibold' htmlFor="occassion">Occassion</label>
                        <select className='p-2 rounded-lg' id='occassion' name='occassion' onChange={handleFormData}>
                            <option value=''>Occassion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                    <div className="dateTimeDiv grid grid-cols-2 gap-2 my-2">
                        <div className='inline-grid'>
                            <label className='font-semibold' htmlFor="date">Date</label>
                            <input className='p-2 rounded-lg' type="date" id='date' name='date' onChange={handleFormData} required />
                        </div>
                        <div className='inline-grid'>
                            <label className='font-semibold' htmlFor="time">Choose Time</label>
                            <select className='p-2 rounded-lg' id='time' name='time' onChange={handleFormData} required>
                                <AvailableTmes />
                            </select>
                        </div>

                    </div>
                    <div className="reserveBtnDiv grid mt-2 rounded-lg bg-highlight_second hover:scale-95">
                        <button className='p-2 text-highlight_first hover:text-secondary_second' type="submit">Reserve</button>
                    </div>
                </form>
            </div>
        </>
    )
}
