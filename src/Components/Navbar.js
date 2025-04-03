import React from 'react'
import Drawer from 'react-modern-drawer'
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import 'react-modern-drawer/dist/index.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const NavListItems = () => {
        const navLIst = [
            {
                name: "Home",
                url: '/'
            },
            {
                name: "Menu",
                url: '/'
            },
            {
                name: "About",
                url: '/'
            },
            {
                name: "Reservations",
                url: '/reservations'
            },
            {
                name: "Order Online",
                url: '/'
            },
            {
                name: "Login",
                url: '/'
            }
        ];
        return (
            navLIst.map((item, key) => {
                return (
                    <li key={key} className='lg:hover:scale-125'>
                        <Link onClick={toggleDrawer} className='lg:hover:underline' replace={true} to={item['url']}>{item['name']}</Link>
                    </li>
                )
            })
        )
    }
    return (
        <>
            <nav className='h-full p-2'>
                <div className="grid grid-cols-12">
                    <div className="logoWrapper col-span-5 lg:col-span-3 p-3">
                        <div className="logo flex justify-center">
                            <Logo />
                        </div>
                    </div>
                    <div className="navList lg:hidden col-span-7 p-3 place-content-center">
                        <div className="flex justify-end">
                            <span onClick={toggleDrawer} className='cursor-pointer'><IoMdMenu size={30} /></span>
                        </div>
                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='right'
                        >
                            <div className='p-2 navItemsMob'>
                                <ul>
                                    <NavListItems />
                                </ul>
                            </div>
                        </Drawer>
                    </div>
                    <div className="navList hidden lg:block lg:col-span-9 p-3 place-content-center">
                        <ul className='flex justify-evenly'><NavListItems /></ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
