import React from 'react'

export default function Button({ children, handleOnClick }) {
    return (
        <>
            <button type="button" onClick={handleOnClick} className='py-3 px-5 w-56 text-primary_first bg-primary_second font-bold rounded-lg hover:bg-highlight_second hover:text-highlight_first hover:scale-90 ease-in-out shadow-md'>{children}</button>
        </>
    )
}
