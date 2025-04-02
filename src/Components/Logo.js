import React from 'react';
import logo from '../Assets/Logo.svg';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <>
            <Link to={'/'} replace={true}>
                <img
                    src={logo}
                    alt='Little Lemon'
                />
            </Link>
        </>
    )
}
