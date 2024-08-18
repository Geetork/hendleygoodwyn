import React from 'react';
import Contacts from './Contacts';

const Footer = () => {
    return (
        <footer className='w-full h-fit bg-hero-bg bg-cover bg-center relative'>
            <div className='absolute top-0 w-full h-full bg-black/40 backdrop-blur-md'></div>

            <div className='w-full h-fit flex md:justify-between padding-x padding-y items-center justify-center gap-10 flex-col md:flex-row'>
                <div className='flex flex-1 translate-x-0 text-white justify-start flex-col order-2 md:order-1'>
                    <a href='mailto:info@hendleygoodwyn.com' className='inline-block'>info@hendleygoodwyn.com</a>
                    <a href="tel:6156698754" className='inline-block'>(615) 669-8754</a>
                    <address>41 Peabody Street Nashville, TN 37210</address>
                </div>

                <div className='flex flex-1 justify-center order-1 md:order-2'>
                    <img src="/Logo 4.png" alt="logo" width={150} className='filter invert' />
                </div>

                <div className='flex flex-1 justify-end order-3'>
                    <Contacts iconClasses='icon_color flex items-center gap-4 h-[30px]' classes='flex gap-4 items-center' />
                </div>
            </div>
        </footer>
    )
}

export default Footer;