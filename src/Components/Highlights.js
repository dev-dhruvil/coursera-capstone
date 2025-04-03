import React from 'react';
import greekSaladImage from '../Assets/greek salad.jpg';
import lemonSaladImage from '../Assets/lemon dessert.jpg';
import bruchettaImage from '../Assets/bruchetta.svg';
import { GiScooter } from 'react-icons/gi';
import Button from './Button';

export default function Highlights() {
    const highlightItems = [
        {
            itemName: "Greek Salad",
            itemDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt rerum dolore tenetur reprehenderit porro, unde quisquam dicta voluptatibus consequuntur. Illo non officia maxime alias commodi. Aperiam quos dignissimos ea mollitia in quas qui.",
            itemImage: greekSaladImage,
            itemPrice: "$12.99"
        },
        {
            itemName: "Lemon Desert",
            itemDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt rerum dolore tenetur reprehenderit porro, unde quisquam dicta voluptatibus consequuntur. Illo non officia maxime alias commodi. Aperiam quos dignissimos ea mollitia in quas qui.",
            itemImage: lemonSaladImage,
            itemPrice: "$7.99"
        },
        {
            itemName: "Bruchetta",
            itemDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt rerum dolore tenetur reprehenderit porro, unde quisquam dicta voluptatibus consequuntur. Illo non officia maxime alias commodi. Aperiam quos dignissimos ea mollitia in quas qui.",
            itemImage: bruchettaImage,
            itemPrice: "$5.99"
        },
    ]

    return (
        <>
            <div className='overflow-auto lg:overflow-visible h-[85vh] lg:my-8'>
                <section className='h-full p-2 lg:grid grid-cols-12'>
                    <div className=""></div>
                    <div className="col-span-10">
                        <div className="lg:grid grid-rows-12 h-full">
                            <div className="row-span-2">
                                <div className="flex justify-between py-3">
                                    <h3 className='text-2xl text-primary_second font-semibold place-content-center'> Specials</h3>
                                    <div className="C2">
                                        <Button>
                                            Online Menu
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="row-span-10">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
                                    {
                                        highlightItems.map((items, key) => {
                                            return (
                                                <div className="menuItems drop-shadow-xl rounded-lg bg-highlight_first text-primary_first lg:hover:scale-105" key={key}>
                                                    <div className="cardImage h-2/4 overflow-hidden">
                                                        <img src={items['itemImage']} alt='Menu Item' className='rounded-t-lg w-full' />
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between p-2 font-bold">
                                                            <span>{items['itemName']}</span>
                                                            <span className='text-secondary_first'>{items['itemPrice']}</span>
                                                        </div>
                                                        <span className='line-clamp-2 p-2'>{items['itemDescription']}</span>
                                                    </div>
                                                    <div className='p-2'>
                                                        <span className='inline-flex items-center gap-3 cursor-default'>Order A Delivery <GiScooter size={25} fill='#495E57' /></span>
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
